/*
 * @Date: 2022-02-21 20:06:59
 * @Description: 本地存储配置，配置过期时间等
 */

type ConfigDataItem = {
  /** 缓存过期时间-传入1代表一天过期，当传入值是10位数或者13位数代表过期的时间戳 */
  outTime?: number | (() => number)
  /** 是否取消关联model值为true代表不关联model,不设置或者为false代表关联model */
  outModel?: boolean
}

export default <Record<string, ConfigDataItem>>{
  codePUshNeedUpdate: {
    outTime: 0.04,
  },
}
