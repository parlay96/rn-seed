/*
 * @Date: 2022-07-07 11:15:31
 * @Description: 纯函数
 */

/**
 * @description 判断是否有传入地址
 * @param {string} imgUrl 绝对地址，可为空
 * @param {string} imgType 类型传入，可为空
 */
export function getImgUrl(imgUrl: string, imgType?: string) {
  /** 优先展示传入的图片信息 */
  if (imgUrl) {
    return imgUrl
  }
  switch (imgType) {
    /** 收藏缺省图 */
    case 'collect':
      return 'https://staticscdn.zgzpsjz.com/miniprogram/images/cg/yp-mini_yp-mini_collectnone.png'
    /**  积分缺省图 */
    case 'integral':
      return 'https://staticscdn.zgzpsjz.com/miniprogram/images/cg/yp-mini_yp-mini_integralnone.png'
    /** 列表缺省图 */
    case 'list':
      return 'https://staticscdn.zgzpsjz.com/miniprogram/images/cg/yp-mini_yp-mini_listnone.png'
    /** 信息缺省图 */
    case 'msg':
      return 'https://staticscdn.zgzpsjz.com/miniprogram/images/cg/yp-mini_yp-mini_msgnone.png'
    /** 无网络缺省图 */
    case 'network':
      return 'https://staticscdn.zgzpsjz.com/miniprogram/images/cg/yp-mini_yp-mini_network.png'
    /** 搜索缺省图 */
    case 'search':
      return 'https://staticscdn.zgzpsjz.com/miniprogram/images/cg/yp-mini_yp-mini_searchnone.png'
    default:
      return 'https://staticscdn.zgzpsjz.com/miniprogram/images/cg/yp-mini_yp-mini_none.png'
  }
}
