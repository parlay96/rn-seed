/*
 * @Date: 2022年8月17日17:00:27
 * @Description: 功能描述
 */

/// <reference path="../utils/request/request.d.ts" />
/// <reference path="../utils/request/request.base.d.ts" />

type DevMap = {
  /**开发服 */
  DEV: KeysMap
  /** 测试环境 */
  TEST: KeysMap
  /** 预发布环境 */
  PRE: KeysMap
  /** 预发布正式环境 */
  REL: KeysMap
  /** 正式环境 */
  PRO: KeysMap
}

type KeysMap = {
  /** 热更新key值 */
  hotKey: string
}

type Msg = (title: string | any, duration?: number) => Promise<unknown>

declare const $: {
  fetch: Fetch
  msg: Msg
  confirm: Confirm
  alert: Alert
  model: Model
  router: Router
  showLoading: (p?: any) => {}
  hideLoading: (p?: any) => {}
}

/** 是否是Ios设备 */
declare const isIos: () => boolean
declare const isAndroid: () => boolean

declare const global: {
  $
  isIos
  isAndroid
  appName: string
}
