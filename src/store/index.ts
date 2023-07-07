/*
 * @Date: 2021-12-15 14:41:28
 * @Description: store action reducer 配置
 * https://redux-toolkit.js.org/usage/usage-guide 使用文档
 */

import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, connect as oldConnect, useSelector as oldUseSelector } from 'react-redux'
import { reducer, actions as oldActions } from './reducer'
export { default as storage } from './model/storage/storage'
export { actions } from './reducer'

export const store = configureStore({
  devTools: false,
  reducer,
})

export const { dispatch } = store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

type Connect = (mapStateToProps: (state: RootState) => Record<string, any>, mapDispatchToProps?: (dispatch: AppDispatch, actions: typeof oldActions) => Record<string, any>) => void

/** connect 内置了类型提示 */
export const connect: Connect = oldConnect

type EqualityFn<T> = (a: T, b: T) => boolean
type UseSelector = <T>(select: (s: RootState) => T, equalityFn?: EqualityFn<T>) => T

/** useSelector 内置了类型提示 */
export const useSelector: UseSelector = oldUseSelector
