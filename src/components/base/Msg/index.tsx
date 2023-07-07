/*
 * @Date: 2022-07-19 18:45:57
 * @Description: 新的msg方法
 */
import store from './core'

export { default as Provider } from './Msg'

/** 显示Msg */
export const showMsg = (options = { title: '', duration: 200, afterClose: () => {} }) => {
  store.publish({
    visible: true,
    options,
  })
}

/** 隐藏loading */
export const hideMsg = () => {
  store.publish({ visible: false })
}
