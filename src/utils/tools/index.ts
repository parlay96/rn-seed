import { showMsg } from '@/components/base/Msg'
import * as loading from '@/components/base/Loading'

/** 弹起msg方法 */
export const msg = (title: string, duration: number) => {
  return new Promise<void>((resolve) => {
    showMsg({ title, duration, afterClose: () => {
      resolve()
    }})
  })
}

/** 展示loading组件 */
export const showLoading = () => {
  loading.showLoading()
}

/** 隐藏loading组件 */
export const hideLoading = () => {
  loading.hideLoading()
}
