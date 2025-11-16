// 环境变量验证和工具函数

import { config } from '@/config';

// 检查必需的环境变量
export function validateEnvironmentVariables() {
  const requiredVars = [
    'NEXT_PUBLIC_NETWORK',
    'NEXT_PUBLIC_BITENG_TOKEN_ADDRESS',
    'NEXT_PUBLIC_PARAM_CONFIG_ADDRESS',
    'NEXT_PUBLIC_PRICE_ORACLE_ADDRESS',
    'NEXT_PUBLIC_REWARD_VAULT_ADDRESS',
    'NEXT_PUBLIC_MINING_VAULT_ADDRESS',
    'NEXT_PUBLIC_ANTMINER_NFT_ADDRESS',
    'NEXT_PUBLIC_NODE_REGISTRY_ADDRESS',
  ];

  const missing = requiredVars.filter(varName => !process.env[varName]);

  if (missing.length > 0) {
    console.warn('Missing required environment variables:', missing);
    return false;
  }

  return true;
}

// 获取环境变量值并提供默认值
export function getEnvVar(key: string, defaultValue?: string): string {
  const value = process.env[key];
  if (!value && defaultValue === undefined) {
    throw new Error(`Environment variable ${key} is required but not set`);
  }
  return value || defaultValue || '';
}

// 获取布尔类型环境变量
export function getBooleanEnvVar(key: string, defaultValue: boolean = false): boolean {
  const value = process.env[key];
  if (!value) return defaultValue;
  return value.toLowerCase() === 'true';
}

// 获取数字类型环境变量
export function getNumberEnvVar(key: string, defaultValue?: number): number {
  const value = process.env[key];
  if (!value && defaultValue === undefined) {
    throw new Error(`Environment variable ${key} is required but not set`);
  }
  const parsed = parseInt(value || '0', 10);
  return isNaN(parsed) ? (defaultValue || 0) : parsed;
}

// // 获取当前网络信息
// export function getCurrentNetworkInfo() {
//   return {
//     network: config.network.current,
//     name: config.network.name,
//     explorerUrl: config.network.explorerUrl,
//     isMainnet: config.network.current === 'mainnet',
//     isTestnet: ['shasta', 'nile'].includes(config.network.current),
//   };
// }

// 检查是否为开发环境
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development';
}

// 检查是否为生产环境
export function isProduction(): boolean {
  return process.env.NODE_ENV === 'production';
}

// 检查是否启用调试模式
export function isDebugMode(): boolean {
  return config.debug;
}

// 检查是否启用详细日志
export function isVerboseLogging(): boolean {
  return config.verboseLogging;
}

// 检查是否使用Mock数据
export function isMockMode(): boolean {
  return config.useMockData;
}

// 格式化合约地址显示
export function formatAddress(address: string, length: number = 8): string {
  if (!address) return '';
  if (address.length <= length * 2) return address;
  return `${address.slice(0, length)}...${address.slice(-length)}`;
}

// 验证TRON地址格式
export function isValidTronAddress(address: string): boolean {
  // TRON地址通常以T开头，长度为34个字符
  const tronAddressRegex = /^T[A-Za-z1-9]{33}$/;
  return tronAddressRegex.test(address);
}

// 环境配置摘要（用于调试）
export function getEnvironmentSummary() {
  if (!isDebugMode()) {
    return 'Debug mode is disabled';
  }

  return {
    environment: process.env.NODE_ENV,
    // network: config.network.current,
    // networkName: config.network.name,
    debugMode: config.debug,
    mockMode: config.useMockData,
    contracts: {
      bitengToken: config.contracts.bitengToken, // BITENG代币合约地址
      antminerNFT: config.contracts.antminerNFT,
      nftStaking: config.contracts.nftStaking,
      tokenStaking: config.contracts.tokenStaking,
      // 只显示部分合约地址以避免日志过长
    },
    app: {
      name: config.app.name,
      version: config.app.version,
    },
  };
}

// 初始化应用配置
export function initializeAppConfig() {
  const isValid = validateEnvironmentVariables();

  if (isDebugMode()) {
    console.log('🔧 Environment Configuration:', getEnvironmentSummary());
  }

  if (!isValid && isProduction()) {
    throw new Error('Application cannot start due to missing environment variables');
  }

  return {
    isValid,
    // network: getCurrentNetworkInfo(),
    debug: isDebugMode(),
    mock: isMockMode(),
  };
}

export default {
  validateEnvironmentVariables,
  getEnvVar,
  getBooleanEnvVar,
  getNumberEnvVar,
  // getCurrentNetworkInfo,
  isDevelopment,
  isProduction,
  isDebugMode,
  isMockMode,
  formatAddress,
  isValidTronAddress,
  initializeAppConfig,
}; 