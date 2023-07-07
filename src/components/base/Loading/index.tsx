import store from './core'

export { default as Provider } from './Loading'

/** 显示loading */
export const showLoading = () => {
  store.publish({ visible: true })
}

/** 隐藏loading */
export const hideLoading = () => {
  store.publish({ visible: false })
}
