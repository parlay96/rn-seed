/*
 * @Date: 2021-12-23 14:03:07
 * @Description:
 *  示例model，model中不能调用其他model，防止互相调用混乱
 *  用 Immer 编写 reducer: https://redux-toolkit.js.org/usage/immer-reducers
 *  immerjs: https://immerjs.github.io/immer/update-patterns
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const { reducer, actions, name } = createSlice({
  name: 'example',
  initialState: {
    value: 2,
    list: [],
  },
  reducers: {
    /** 可以更新多个值 sttState({ value:1, list: [] }) */
    setState(state, { payload }: PayloadAction<Record<string, any>>) {
      Object.assign(state, payload)
    },
    incremented(state) {
      state.value += 1
    },
    decremented(state) {
      state.value -= 1
    },
    /** 添加一项 */
    addList(state) {
      state.list.push('hello')
    },
    /** 删除一项 */
    removeList(state) {
      state.list.pop()
    },
    /** 整个替换 */
    reset() {
      return {
        value: 2,
        list: [],
      }
    },
  },
})

// 异步方法
const asyncFetchByIdStatus = (payload: any) => async (dispatch, getState) => {
  const { data } = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: 100 })
    }, 1000)
  })
  dispatch(actions.incremented())
}

export const exampleName = name
export const exampleReducer = reducer
export const exampleActions = { ...actions, asyncFetchByIdStatus }
