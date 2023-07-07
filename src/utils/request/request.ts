/*
 * @Date: 2022-07-02 19:56:43
 * @Description: 请求封装
 */
import { Platform } from 'react-native'
import { stringify } from 'qs'
import { domain } from '@/config'
import { store } from '@/store'

type RequestProps = {
  method?: string
  url: string
  data?: { [key: string]: any }
  head?: { [key: string]: any }
}

/** 请求封装，函数处理 */
export const request = <T>({ method = 'GET', url, head: customHead = {}, data  }: RequestProps): Promise<T> => {
  /** 获取基础路由 */
  const baseURL = domain
  /** 生成最终路由 */
  let URL = `${baseURL}${url}${method === 'GET' ? `?${stringify(data)}` : ''}`
  /** headers处理 */
  const headers = {
    'Content-Type': 'application/json',
    'system': Platform.OS,
    'Authorization': store.getState().storage.token,
    ...customHead,
  }

  const params: any = {
    method,
    headers,
  }

  if (method !== 'GET') {
    params.body = JSON.stringify(data)
  }
  return new Promise((resolve, reject) => {
    fetch(URL, params)
    .then((response) => response.json())
    .then((response) => {
      success({ url, response, resolve, reject })
    })
    .catch(() => {
      $.msg('网络异常，请稍后重试', 3000)
    })
  })
}

/** 成功时调用的处理逻辑 */
function success({response, resolve, reject}: any) {
  if (response?.code == 0) {
    resolve(response)
  } else {
    reject(response)
  }
}
