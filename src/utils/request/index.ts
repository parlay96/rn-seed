/*
 * @Date: 2022-04-14 18:08:12
 * @Description: 接口请求代理对象
 */

import { request } from './request'

/** 接口请求 */
export const fetch = new Proxy(
  {},
  {
    get(_, p: string) {
      return async (data: any, head: any) => {
        const [method, ...urlArr] = p.split('/')
        const url = `/${urlArr.join('/')}`
        const customHead = head ? head : {}
        console.log(method, url, data, customHead)
        return request({ method, url, data, head: customHead })
      }
    },
  },
)
