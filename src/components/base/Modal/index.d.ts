/*
 * @Date: 2022-06-23 16:58:34
 * @Description: 提示类型
 */

declare interface Confirm {
  (
    options?: Partial<{
      /** 标题 */
      title: string
      /** 内容 */
      content: React.ReactNode
      /** 取消文字 */
      cancelText: string
      /** 确定文字 */
      confirmText: string
      /** 叉叉icon */
      cancelIcon: boolean
    }>,
  ): Promise<void>
}

declare type Alert = (
  options?: Partial<{
    /** 标题 */
    title: string
    /** 内容 */
    content: React.ReactNode
    /** 确定文字 */
    confirmText: string
    /** 叉叉icon */
    cancelIcon: boolean
  }>,
) => Promise<void>

declare type Model = {
  realName: (
    options: Partial<{
      /**
       * 图示文档：https://w3nu1yaadv.feishu.cn/wiki/wikcnNkSpbdOMKKA7967iLuEiVd#AYk5J6
       * @description 实名认证类型，默认：realNameWhiteHead
       * @type realNameSimple: 简洁实名认证弹窗
       * @type firmAuthSimple: 简洁企业认证弹窗
       * @type merchantSimple: 简洁个体商户弹窗
       * @type realNameWhiteHead: 实名认证弹窗 -- 白色头部图片
       * @type realNameGrayHead: 实名认证额外弹窗 -- 灰蓝色头部图片
       * @type realNameBlueHead: 实名认证额外弹窗 -- 蓝色头部图片
       * @type firmAuth: 企业认证弹窗
       */
      cardType: 'firmAuth' | 'realNameWhiteHead' | 'realNameGrayHead' | 'realNameBlueHead' | 'realNameSimple' | 'firmAuthSimple' | 'merchantSimple'
      /** 确认文字,默认：我知道了 */
      confirmText: string
      /** 点击遮罩是否能关闭弹窗，默认： false */
      canMackClose: boolean
      /** 是否展示悬浮关闭按钮，默认: false */
      cancelIcon: boolean
    }>,
  ) => Promise<void>
  skillCertification: () => Promise<void>
}
