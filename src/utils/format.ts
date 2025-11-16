// 格式化工具函数

// 格式化地址，显示前6位和后4位
export const formatAddress = (address: string, startLength = 6, endLength = 4): string => {
  if (!address) return ''
  if (address.length <= startLength + endLength) return address

  return `${address.slice(0, startLength)}...${address.slice(-endLength)}`
}

// 格式化数字，添加千分位分隔符
export const formatNumber = (num: number | string, decimals = 2): string => {
  const numValue = typeof num === 'string' ? parseFloat(num) : num
  if (isNaN(numValue)) return '0'

  return numValue.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  })
}

// 格式化代币数量
export const formatTokenAmount = (amount: number, symbol: string, decimals = 2): string => {
  return `${formatNumber(amount, decimals)} ${symbol}`
}

// 格式化百分比
export const formatPercentage = (value: number, decimals = 2): string => {
  return `${formatNumber(value, decimals)}%`
}

// 格式化美元金额
export const formatUSD = (amount: number, decimals = 2): string => {
  return `$${formatNumber(amount, decimals)}`
}

// 格式化时间
export const formatDate = (date: Date | string, format = 'YYYY-MM-DD HH:mm'): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date

  const year = dateObj.getFullYear()
  const month = String(dateObj.getMonth() + 1).padStart(2, '0')
  const day = String(dateObj.getDate()).padStart(2, '0')
  const hours = String(dateObj.getHours()).padStart(2, '0')
  const minutes = String(dateObj.getMinutes()).padStart(2, '0')
  const seconds = String(dateObj.getSeconds()).padStart(2, '0')

  return format
    .replace('YYYY', String(year))
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds)
}

// 格式化相对时间（如：2小时前）
export const formatRelativeTime = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  const now = new Date()
  const diffMs = now.getTime() - dateObj.getTime()
  const diffSeconds = Math.floor(diffMs / 1000)
  const diffMinutes = Math.floor(diffSeconds / 60)
  const diffHours = Math.floor(diffMinutes / 60)
  const diffDays = Math.floor(diffHours / 24)

  if (diffSeconds < 60) return '刚刚'
  if (diffMinutes < 60) return `${diffMinutes}分钟前`
  if (diffHours < 24) return `${diffHours}小时前`
  if (diffDays < 7) return `${diffDays}天前`

  return formatDate(dateObj, 'MM-DD')
}

// 格式化倒计时
export const formatCountdown = (endTime: Date | string): string => {
  const endDate = typeof endTime === 'string' ? new Date(endTime) : endTime
  const now = new Date()
  const diffMs = endDate.getTime() - now.getTime()

  if (diffMs <= 0) return '已结束'

  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))

  if (diffDays > 0) return `${diffDays}天${diffHours}小时`
  if (diffHours > 0) return `${diffHours}小时${diffMinutes}分钟`
  return `${diffMinutes}分钟`
}

// 格式化文件大小
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 B'

  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(1024))

  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`
}

// 验证BSC/以太坊地址格式
export const isValidEthAddress = (address: string): boolean => {
  return /^0x[a-fA-F0-9]{40}$/.test(address)
}

// 保留原函数名以兼容旧代码
export const isValidTronAddress = isValidEthAddress

// 验证金额格式
export const isValidAmount = (amount: string | number): boolean => {
  const numValue = typeof amount === 'string' ? parseFloat(amount) : amount
  return !isNaN(numValue) && numValue > 0
}

// 计算APY收益
export const calculateAPYReward = (
  principal: number,
  apy: number,
  days: number
): number => {
  const dailyRate = apy / 365 / 100
  return principal * dailyRate * days
}

// 复制文本到剪贴板
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text)
      return true
    } else {
      // 降级方案
      const textArea = document.createElement('textarea')
      textArea.value = text
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      return true
    }
  } catch (error) {
    console.error('复制失败:', error)
    return false
  }
}

// 生成随机ID
export const generateId = (prefix = ''): string => {
  const timestamp = Date.now().toString(36)
  const randomStr = Math.random().toString(36).substr(2, 5)
  return `${prefix}${timestamp}${randomStr}`
}

// 防抖函数
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout

  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// 节流函数
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// 精确格式化大数字字符串，避免精度丢失
export const formatLargeNumberString = (value: string, decimals = 2): string => {
  // 处理科学计数法
  if (value.includes('e') || value.includes('E')) {
    const num = parseFloat(value);
    return num.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  }

  // 对于普通数字字符串，我们手动处理以避免精度丢失
  if (!value.includes('.')) {
    // 整数
    const num = parseInt(value, 10);
    return num.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  }

  // 小数处理
  const [integerPart, decimalPart] = value.split('.');
  const integerNum = parseInt(integerPart, 10);
  
  // 截断或四舍五入小数部分到指定的小数位数
  let formattedDecimal = decimalPart;
  if (decimalPart.length > decimals) {
    formattedDecimal = decimalPart.substring(0, decimals);
  }
  
  // 使用 toLocaleString 格式化整数部分并添加小数部分
  return integerNum.toLocaleString('en-US') + '.' + formattedDecimal;
};

// 精确解析大数字字符串，避免 parseFloat 精度问题
export const parseLargeNumberString = (value: string): number => {
  // 对于可能超出安全整数范围的数字，直接使用 parseFloat
  // 但对于特定场景，我们可以实现更精确的解析
  if (value.length > 15) {
    // 大数字字符串处理
    try {
      // 尝试使用 BigInt 处理整数部分
      if (!value.includes('.')) {
        return Number(BigInt(value));
      }
      
      // 小数处理
      return parseFloat(value);
    } catch (e) {
      // 如果 BigInt 也失败，回退到 parseFloat
      return parseFloat(value);
    }
  }
  
  return parseFloat(value);
};
