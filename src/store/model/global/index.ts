/*
 * @Date: 2022-05-20 10:25:33
 * @Description: 全局数据
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const { reducer, actions, name } = createSlice({
  name: 'global',
  initialState: {
    /** 当前所处的环境, 开发服（DEV）、测试(TEST)、预发布(PRE)、预发布正式站(REL)、正式站(PRO) */
    env: 'PRO',
  },
  reducers: {
    /** 可以更新多个值 sttState({ value:1, list: [] }) */
    setState(state, { payload }: PayloadAction<Record<string, any>>) {
      Object.assign(state, payload)
    },
  },
})

export const globalName = name
export const globalReducer = reducer
export const globalActions = { ...actions }
