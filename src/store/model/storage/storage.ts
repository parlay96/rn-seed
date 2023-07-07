/*
 * @Date: 2022-6-21 10:32:13
 * @Description: storage 工具类
 */

import initialState from './initialState'
import initialStateConfig from './initialState.config'
import { MMKV } from 'react-native-mmkv'
import { rn_version as VERSION } from '@/config'
let mmkv = null

const createMMKV = () => {
  if (mmkv) {
    return
  }
  mmkv = new MMKV()
}

createMMKV()

type Key = keyof typeof initialState
type Value<K extends Key> = typeof initialState[K]

/** @name 默认过期时间-不过期 */
const OUT_TIME_DAY = -1

/** @function 处理过期时间 */
function handlerOutTime($outTime: number, key?: string) {
  let outTime = $outTime
  const stateConfig = initialStateConfig[key]
  if ($outTime === -1 && stateConfig && stateConfig.outTime) {
    // 获取配置的过期时间
    outTime = typeof stateConfig.outTime === 'function' ? stateConfig.outTime() : stateConfig.outTime
  }
  // 如果传递的是秒数
  if (`${outTime}`.length === 10) {
    return outTime * 1000
    // 代表毫秒数
  }
  if (`${outTime}`.length === 13) {
    return outTime
  }
  // (1000 * 60 * 60 * 24) outTime 表示 1天  0.5半天  一天的毫秒数
  return outTime === -1 ? -1 : 1000 * 60 * 60 * 24 * outTime + Date.now()
}

const storage = {
  /** 同步获取本地存储值 不需要 JSON.parse
   * @param key
   * @param isDefaultValue 是否需要返回initialState中对应的默认值-默认为true
   * @param version-版本号默认VERSION-import { VERSION } from '@/config'
   * @returns {data} data
   */
  getItem<K extends Key>(key: K, isDefaultValue = true, version = VERSION): Value<K> {
    try {
      let storage: any = mmkv.getString(key)
      if (storage) {
        storage = JSON.parse(storage)
        const isVer = version ? version === storage.version : true
        if (storage.outTime > Date.now() && isVer) {
          // 根据过期时间和版本号控制
          return storage.data
        }
        if (storage.outTime === -1 && isVer) {
          // 没有过期时间和版本号控制
          return storage.data
        }
        mmkv.delete(key)
      }
    } catch (e) {
      console.log(e)
    }
    return isDefaultValue ? initialState[key] : undefined
  },

  /** 同步设置本地存储值
   * @param key
   * @param data 存储的数据
   * @param outTime 默认缓存时间${OUT_TIME_DAY}天/时间戳,如果值为 -1 代表不过期
   * @param version 版本号默认VERSION import { VERSION } from '@/config'
   * @store {outTime: 过期的时间戳, data: 存储的数据, VERSION: 版本号}
   * @returns { storage: any }
   */
  setItem<K extends Key, V extends Value<K>>(key: K, data: V, options?: { outTime?: number; version?: string }) {
    const { outTime = OUT_TIME_DAY, version = VERSION } = options || {}
    const $outTime = handlerOutTime(outTime, key)
    const objData = {
      data,
      outTime: $outTime,
      version,
    }
    mmkv.set(key, JSON.stringify(objData))
    return objData
  },

  /** 同步删除一项 */
  removeItem<K extends Key>(key: K): void {
    mmkv.delete(key)
  },

  /** 同步删除所有数据 */
  clear(): void {
    mmkv.clearAll()
  },
}

export default storage
