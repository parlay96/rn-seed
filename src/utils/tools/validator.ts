import { Platform } from 'react-native'

/** 判断当前设备是否是Ios */
export const isIos = () => {
  return Platform.OS === 'ios'
}

/** 判断当前设备是否是Android */
export const isAndroid = () => {
  return Platform.OS === 'android'
}

/** 验证是否是身份证号 */
export const isIdCard = (idCard: string) => {
  return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([012]\d)|3[0-1])\d{3}[\dX]$/.test(idCard)
}

/** 验证是否是手机号 */
export const isPhone = (phone: string) => {
  return /^1[3456789]\d{9}$/.test(phone)
}

/** 验证是否是邮箱 */
export const isEmail = (email: string) => {
  return /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(email)
}
