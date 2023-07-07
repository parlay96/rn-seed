/*
 * @Date:  2022-7-16 13:33:03
 * @Description: 全局公共方法，可直接使用
 */
import { isIos, isAndroid } from '@/utils/tools/validator'
import { msg, showLoading, hideLoading } from '@/utils/tools'
import { useShow, useHide } from '@/hooks/usePage'
import { confirm, alert, model } from '@/components/base/Modal'
import { fetch } from './request'
import router from '@/utils/router'
import appJSON from '../../app.json'
/** 方法配置项 */
const options = {
  /** 请求服务 */
  fetch,
  /** 轻提示 */
  msg,
  /** 弹窗，有确认、取消按钮 */
  confirm,
  /** 弹窗，只有确认按钮 */
  alert,
  /** 其他公共弹窗集合 */
  model,
  /** 路由跳转 */
  router,
  /** 页面显示-生命周期 */
  useShow,
  /** 页面隐藏-生命周期 */
  useHide,
  /** 展示loading动画 */
  showLoading,
  /** 隐藏loading动画 */
  hideLoading,
}

/** 导出 */
global.$ = options
global.isIos = isIos
global.isAndroid = isAndroid
global.appName = appJSON.displayName
