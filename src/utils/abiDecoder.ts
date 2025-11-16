/**
 * ABI解码工具
 * 用于解析智能合约返回的十六进制编码数据
 */
import { encodeFunctionData } from "viem"
import { estimateGas } from '@wagmi/core'

export interface DecodedParameter {
  index: number
  hex: string
  decimal: number
  asBigInt: bigint
  scaled6: number  // 除以1e6
  scaled18: number // 除以1e18
  asBoolean: boolean
  possiblePrice?: number
  possiblePricePrecision?: string
}

export interface DecodingResult {
  originalHex: string
  cleanHex: string
  parameters: DecodedParameter[]
  bestPriceGuess?: {
    value: number
    precision: string
    confidence: 'high' | 'medium' | 'low'
  }
  analysis: string[]
}

/**
 * 解析单个uint256参数
 * @param hexString 64字符的十六进制字符串
 * @param index 参数索引
 * @returns 解码后的参数信息
 */
export function decodeUint256(hexString: string, index: number): DecodedParameter {
  const decimal = parseInt(hexString, 16)
  const asBigInt = BigInt('0x' + hexString)
  const scaled6 = decimal / 1e6
  const scaled18 = decimal / 1e18
  const asBoolean = decimal > 0

  let possiblePrice: number | undefined
  let possiblePricePrecision: string | undefined

  // 智能判断可能的价格值（假设BITENG价格在0.0001 - 100 USDT范围内）
  if (scaled6 >= 0.0001 && scaled6 <= 100) {
    possiblePrice = scaled6
    possiblePricePrecision = '1e6 (6位小数)'
  } else if (scaled18 >= 0.0001 && scaled18 <= 100) {
    possiblePrice = scaled18
    possiblePricePrecision = '1e18 (18位小数)'
  } else if (decimal > 0 && decimal < 1000000) {
    // 可能是直接的价格值（以分为单位等）
    possiblePrice = decimal / 100 // 尝试除以100
    possiblePricePrecision = '直接值除以100'
  }

  return {
    index,
    hex: hexString,
    decimal,
    asBigInt,
    scaled6,
    scaled18,
    asBoolean,
    possiblePrice,
    possiblePricePrecision
  }
}

/**
 * 解析完整的ABI编码数据
 * @param hexData 完整的十六进制字符串
 * @returns 解码结果
 */
export function decodeABIData(hexData: string): DecodingResult {
  const originalHex = hexData
  const cleanHex = hexData.replace(/^0x/, '')
  const parameters: DecodedParameter[] = []
  const analysis: string[] = []

  // 按64字符（32字节）分割
  for (let i = 0; i < cleanHex.length; i += 64) {
    if (i + 64 <= cleanHex.length) {
      const paramHex = cleanHex.substring(i, i + 64)
      const param = decodeUint256(paramHex, i / 64)
      parameters.push(param)
    }
  }

  // 分析数据
  analysis.push(`总共解析出 ${parameters.length} 个参数`)

  const nonZeroParams = parameters.filter(p => p.decimal > 0)
  const zeroParams = parameters.filter(p => p.decimal === 0)

  if (zeroParams.length === parameters.length) {
    analysis.push('⚠️ 所有参数都为0，合约可能未初始化或方法返回空值')
  } else {
    analysis.push(`📊 有 ${nonZeroParams.length} 个非零参数，${zeroParams.length} 个零参数`)
  }

  // 寻找最可能的价格值
  let bestPriceGuess: DecodingResult['bestPriceGuess']
  const priceParams = parameters.filter(p => p.possiblePrice !== undefined)

  if (priceParams.length > 0) {
    // 选择最合理的价格（通常是第一个或最大的）
    const bestParam = priceParams[0]
    bestPriceGuess = {
      value: bestParam.possiblePrice!,
      precision: bestParam.possiblePricePrecision!,
      confidence: priceParams.length === 1 ? 'high' : 'medium'
    }
    analysis.push(`💰 检测到可能的价格: ${bestPriceGuess.value.toFixed(8)} USDT (${bestPriceGuess.precision})`)
  } else if (nonZeroParams.length > 0) {
    analysis.push('🤔 检测到非零值，但无法确定价格精度，可能需要手动确认合约规范')
  }

  // 特殊模式检测
  if (parameters.length >= 7) {
    // 可能是getPriceStats返回的多参数结构
    analysis.push('🔍 检测到多参数返回，可能是getPriceStats方法')
    analysis.push('参数可能含义: [currentPrice, lastUpdate, totalCount, isExpired, isEmergency, isTWAP, twapPrice]')
  }

  return {
    originalHex,
    cleanHex,
    parameters,
    bestPriceGuess,
    analysis
  }
}

/**
 * 分析您提供的具体数据
 * @param hexData 十六进制数据
 * @returns 分析结果
 */
export function analyzeSpecificData(hexData: string): string[] {
  const analysis: string[] = []
  const cleanHex = hexData.replace(/^0x/, '')

  // 您提供的具体数据
  const sampleData = "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"

  if (cleanHex === sampleData) {
    analysis.push('🎯 这是您提供的具体数据!')
    analysis.push('数据特征:')
    analysis.push('- 前3个参数(192字符)全为0')
    analysis.push('- 第4个参数值为1')
    analysis.push('- 后续参数全为0')
    analysis.push('')
    analysis.push('可能的含义:')
    analysis.push('- 如果是getPriceStats: currentPrice=0, lastUpdate=0, totalCount=0, isExpired=false, isEmergency=false, isTWAP=false, twapPrice=1')
    analysis.push('- 如果是单一价格方法: 价格为0或合约未设置价格')
    analysis.push('')
    analysis.push('建议操作:')
    analysis.push('1. 检查价格预言机合约是否已初始化')
    analysis.push('2. 确认是否需要先调用价格更新方法')
    analysis.push('3. 验证合约地址是否正确')
  }

  return analysis
}

/**
 * 格式化显示解码结果
 * @param result 解码结果
 * @returns 格式化的字符串
 */
export function formatDecodingResult(result: DecodingResult): string {
  let output = `ABI解码结果:\n`
  output += `原始数据长度: ${result.originalHex.length} 字符\n`
  output += `参数数量: ${result.parameters.length}\n\n`

  result.parameters.forEach(param => {
    output += `参数 ${param.index}:\n`
    output += `  Hex: ${param.hex}\n`
    output += `  十进制: ${param.decimal.toLocaleString()}\n`
    if (param.decimal !== 0) {
      output += `  除以1e6: ${param.scaled6.toFixed(8)}\n`
      output += `  除以1e18: ${param.scaled18.toFixed(18)}\n`
      if (param.possiblePrice) {
        output += `  🎯 可能价格: ${param.possiblePrice.toFixed(8)} USDT (${param.possiblePricePrecision})\n`
      }
    }
    output += '\n'
  })

  if (result.bestPriceGuess) {
    output += `💰 最佳价格推测: ${result.bestPriceGuess.value.toFixed(8)} USDT\n`
    output += `精度: ${result.bestPriceGuess.precision}\n`
    output += `置信度: ${result.bestPriceGuess.confidence}\n\n`
  }

  output += '分析:\n'
  result.analysis.forEach(line => {
    output += `${line}\n`
  })

  return output
}

/**
 * 快速解析您提供的数据示例
 */
export function quickAnalyzeYourData(): DecodingResult {
  const yourData = "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
  
  const result = decodeABIData(yourData)
  const specificAnalysis = analyzeSpecificData(yourData)
  
  // 添加特定分析
  result.analysis.push(...specificAnalysis)
  
  return result
}


export const doEstimateGas = async (_wfun:any, config:any, params:any) => {
  const {address, abi, functionName, args} = params
  const data = encodeFunctionData({abi,functionName,args})
  const gas = await estimateGas(config, {
    data: data, 
    to: address
  })

  const txh = await _wfun({...params,gas}); 

  return txh
}