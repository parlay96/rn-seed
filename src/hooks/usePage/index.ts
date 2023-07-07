/*
 * @Date: 2022-07-21 23:25:47
 * @Description: 实现基础路由监听hooks
 */
import { useEffect } from 'react'
import { addListener } from '@/utils/router'

/** 实现类似微信小程序的onShow功能 */
export const useShow = (fn: Function, updateArray: []) => {
  useEffect(() => {
    const subscribe = addListener('focus', () => {
      fn?.()
    })
    return () => {
      subscribe?.()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...updateArray])
}

/** 实现类似微信小程序的onHide功能 */
export const useHide = (fn: Function, updateArray: []) => {
  useEffect(() => {
    const subscribe = addListener('blur', () => {
      fn?.()
    })
    return () => {
      subscribe?.()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...updateArray])
}
