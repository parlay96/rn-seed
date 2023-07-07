declare type Router = {
  /** 跳转到指定页面 */
  push: (name,params?) => void
  /** 返回一级 */
  back: () => void
  /** 替换当前页面 */
  replace: (name) => void
  /** 关闭所有 */
  reLaunch: (...args) => void
  /** 跳转到登录页面 */
  goLogin: () => void
}
