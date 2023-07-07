/*
 * @Date: 2022-06-15 19:38:42
 * @Description: 弹窗组件
 */

import React, { Fragment } from 'react'
import store from './core'
import Confirm from './Confirm'
import Alert from './Alert'
import Demo from './Model/Demo'

export const Provider = () => {
  return (
    <Fragment>
      <Confirm />
      <Alert />
      <Demo />
    </Fragment>
  )
}

export const confirm = (options: any = {}) => {
  return store.publish({
    type: 'confirm',
    title: options.title || '标题',
    content: options.content || '内容',
    cancelText: options.cancelText || '取消',
    confirmText: options.confirmText || '确定',
    ...options,
  })
}

export const alert = (options: any = {}) => {
  return store.publish({
    type: 'alert',
    title: options.title || '标题',
    content: options.content || '内容',
    confirmText: options.confirmText || '确定',
    ...options,
  })
}

export const model = {
  demo: () => {
    return store.publish({
      type: 'demo',
    })
  },
}
