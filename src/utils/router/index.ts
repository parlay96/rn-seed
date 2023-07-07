/*
 * @Date: 2022-07-21 23:45:23
 * @Description: router事件处理
 */
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

let navigation: NativeStackNavigationProp<any> | null = null

// navigate- 转到另一个屏幕，找出它需要采取的行动
// reset- 擦除导航器状态并将其替换为新路线
// goBack- 关闭活动屏幕并移回堆栈
// setParams- 更改路线的参数
// dispatch- 发送一个动作对象来更新导航状态
// setOptions- 更新屏幕的选项
// isFocused- 检查屏幕是否聚焦
// addListener- 订阅来自导航器的事件更新

export function setNavigation(value: any) {
  !navigation && (navigation = value)
}

/** 监听事件 */
export const addListener = (event: 'focus' | 'blur', callback: () => void) => {
  return navigation?.addListener(event, callback)
}

/** 跳转至下一个页面 */
const push = (name: string, params?: Record<string, any>) => {
  return navigation?.navigate(name, params || {})
}

/** 返回上一级 */
const back = () => {
  return navigation?.goBack()
}

/** 当前路由替换 */
const replace = (name: string, params: Record<string, any>) => {
  return navigation?.replace(name, params)
}

/** 重定向 */
const reLaunch = () => {
  return navigation?.popToTop()
}

/** 跳转到登录页面 */
const goLogin = () => {
  push('Login')
}


const router = {
  push,
  back,
  replace,
  reLaunch,
  goLogin,
}

export default router
