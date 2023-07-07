/*
 * @Date: 2022-6-21 10:32:13
 * @Description: 本地存储 model，storage 统一管理，驱动视图更新
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import initialState from './initialState'
import initialStateConfig from './initialState.config'
import storage from './storage'

type State = typeof initialState
type Key = keyof typeof initialState
type Value<K extends Key> = typeof initialState[K]

type SetItem<K extends Key> = {
  /** 设置值的key */
  key: Key
  /** 设置值的value */
  value: Value<K>
  /** 缓存配置 */
  options?: {
    // 过期时间默认为-1代表不过期
    outTime?: number | (() => number)
    // 版本号：默认为当前小程序版本号VERSION
    version?: string
  }
} | {
  options?: {
    // 过期时间默认为-1代表不过期
    outTime?: number | (() => number)
    // 版本号：默认为当前小程序版本号VERSION
    version?: string
  }
  /** immer处理，可以用 state.xxx.push() 等方法 */
  immer: (state: State) => void
}

/** 初始化缓存数据 */
function getInitialState() {
  const state = {}
  for (const key in initialState) {
    if (Object.prototype.hasOwnProperty.call(initialState, key)) {
      state[key] = storage.getItem(key as Key)
    }
  }
  return <State>state
}

const { reducer, actions, name } = createSlice({
  name: 'storage',
  initialState: getInitialState() as State,
  reducers: {
    /** 设置本地存储 */
    setItem<K extends Key>(state, { payload }: PayloadAction<SetItem<K>>) {
      const { key, value, immer, options = {} } = payload as any
      const configOptions: any = initialStateConfig[key] || {}
      /** 处理 immer 手动给调用处的情况 */
      if (typeof immer === 'function') {
        immer(state)
      } else {
        state[key] = value
      }

      if (typeof configOptions.outTime === 'function') {
        options.outTime = configOptions.outTime()
      }
      storage.setItem(key, state[key], { ...configOptions, ...options })
    },
    removeItem(state, { payload }: PayloadAction<Key>) {
      state[payload as any] = initialState[payload]
      storage.removeItem(payload)
    },
    clear() {
      storage.clear()
      return { ...initialState } as State
    },
  },
})

/** 获取本地存储 不需要 JSON.parse */
const getItem = (payload: Key) => () => {
  return storage.getItem(payload)
}

export const storageName = name
export const storageReducer = reducer
export const storageActions = { ...actions, getItem }
