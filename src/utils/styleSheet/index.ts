/*
 * @Date: 2022-06-16 19:07:47
 * @Description: style 类型自适应
 */

import { StyleSheet, Dimensions } from 'react-native'

export { styles as s } from './commonStyles'
export { themeColor as c } from './themeColor'

type NamedStyles<T> = StyleSheet.NamedStyles<T>

/** 传入样式自动转rpx */
export function create<T extends NamedStyles<T> | NamedStyles<any>>(styles: T | NamedStyles<T>): T {
  return StyleSheet.create(forStyles(styles)) as T
}

/** 循环样式最外面的 class */
function forStyles(styles) {
  for (const key in styles) {
    if (Object.prototype.hasOwnProperty.call(styles, key)) {
      const classStyles = styles[key]
      styles[key] = rpxStyles(classStyles)
    }
  }
  return styles
}

// app 只有竖屏模式，所以可以只获取一次屏幕尺寸
export const windowSize = Dimensions.get('window')

/** 支持vw和vh */
export const setVW = (percent: number): number => {
  return (windowSize.width * percent) / 100
}
export const setVH = (percent: number): number => {
  return (windowSize.height * percent) / 100
}

// UI 默认给图是 750
const uiWidthPx = 750

export function pxToDp(uiElementPx: number) {
  return (uiElementPx * windowSize.width) / uiWidthPx
}

export function px() {
  return windowSize.width / uiWidthPx
}
// 不自动转rpx的
const filterKeys = ['opacity', 'flex', 'zIndex']

/** 循环样式 */
function rpxStyles(styles: { [key: string]: any }) {
  for (const key in styles) {
    if (Object.prototype.hasOwnProperty.call(styles, key)) {
      const value = styles[key]
      if (typeof value === 'number') {
        if (filterKeys.indexOf(key) === -1) {
          styles[key] = pxToDp(value)
        }
      }
    }
  }
  return styles
}
