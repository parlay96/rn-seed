/* md5: ea2e0dd782fd3d37eb4850ec594bf136 */
/* Rap仓库id: 304810 */
/* Rapper版本: 1.3.1 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: http://rap2.taobao.org/repository/editor?id=304810
 */



declare interface IModels {
  /**
   * 接口名：发送短信
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=304810&mod=517527&itf=2302833
   */
  'POST/semdSmsMessage': {
    Req: {
      /**
       * 请求属性示例
       */
      foo?: string
      phone: string
    }
    Res: {
      /**
       * 字符串属性示例
       */
      string: string
      /**
       * 数字属性示例
       */
      number: number
      /**
       * 布尔属性示例
       */
      boolean: boolean
      /**
       * 正则属性示例
       */
      regexp: string
      /**
       * 函数属性示例
       */
      function: string
      /**
       * 数组属性示例
       */
      array: {
        /**
         * 数组元素示例
         */
        foo: number
        /**
         * 数组元素示例
         */
        bar: string
      }[]
      /**
       * 自定义数组元素示例
       */
      items: any[]
      /**
       * 对象属性示例
       */
      object: {
        /**
         * 对象属性示例
         */
        foo: number
        /**
         * 对象属性示例
         */
        bar: string
      }
      /**
       * 占位符示例
       */
      placeholder: string
    }
  }

  /**
   * 接口名：登录接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=304810&mod=517527&itf=2310806
   */
  'POST/login': {
    Req: {
      /**
       * 11位手机号
       */
      phone: string
      /**
       * 6位验证码
       */
      verifyCode: string
    }
    Res: {
      data: {
        user: boolean
        token: string
      }
      code: string
      msg: string
    }
  }

  /**
   * 接口名：通过手机号获取用户信息
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=304810&mod=517527&itf=2310808
   */
  'POST/api/parkour/v1/user': {
    Req: {}
    Res: {}
  }
}

type ResSelector<T> = T

declare interface IResponseTypes {
  'POST/semdSmsMessage': ResSelector<IModels['POST/semdSmsMessage']['Res']>
  'POST/login': ResSelector<IModels['POST/login']['Res']>
  'POST/api/parkour/v1/user': ResSelector<IModels['POST/api/parkour/v1/user']['Res']>
}

declare function createFetch(fetchConfig: commonLib.RequesterOption, extraConfig?: {fetchType?: commonLib.FetchType}) {
  // if (!extraConfig || !extraConfig.fetchType) {
  //   console.warn('Rapper Warning: createFetch API will be deprecated, if you want to customize fetch, please use overrideFetch instead, since new API guarantees better type consistency during frontend lifespan. See detail https://www.yuque.com/rap/rapper/overridefetch')
  // }
  const rapperFetch = commonLib.getRapperRequest(fetchConfig)

  return {
    /**
     * 接口名：发送短信
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=304810&mod=517527&itf=2302833
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/semdSmsMessage': (req?: IModels['POST/semdSmsMessage']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/semdSmsMessage',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/semdSmsMessage']>
    },

    /**
     * 接口名：登录接口
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=304810&mod=517527&itf=2310806
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/login': (req?: IModels['POST/login']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/login',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/login']>
    },

    /**
     * 接口名：通过手机号获取用户信息
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=304810&mod=517527&itf=2310808
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/api/parkour/v1/user': (req?: IModels['POST/api/parkour/v1/user']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/api/parkour/v1/user',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/api/parkour/v1/user']>
    },
  }
}
