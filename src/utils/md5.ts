import md5 from 'crypto-js/md5';

/**
 * MD5 工具类
 * 提供字符串 MD5 加密功能
 */
export class MD5 {
  /**
   * 对字符串进行 MD5 加密
   * @param str 需要加密的字符串
   * @returns 加密后的 MD5 哈希值（十六进制字符串）
   */
  static hashStr(str: string): string {
    return md5(str).toString();
  }

  /**
   * 对字符串进行 MD5 加密并返回十六进制大写格式
   * @param str 需要加密的字符串
   * @returns 加密后的 MD5 哈希值（大写十六进制字符串）
   */
  static hashStrUpper(str: string): string {
    return md5(str).toString().toUpperCase();
  }
}

export default MD5;