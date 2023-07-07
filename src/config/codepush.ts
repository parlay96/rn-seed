import { Platform } from 'react-native'

/** codepush热更新key值表 */
const codePushKey = {
  /** 安卓 */
  android: {
    /** 开发服 */
    DEV: {
      /** 热更新key值 */
      hotKey: 'dKwC0ecCaFwmZea2yM1tZDzqh8wA4ksvOXqog',
    },
    /** 测试站 */
    TEST: {
      /** 热更新key值 */
      hotKey: 'BWuSv94PvYs6998EsNnLJltbJAu94ksvOXqog',
    },
    /** 预发布 */
    PRE: {
      /** 热更新key值 */
      hotKey: 'NcSsU0sXbk3VCn9fWS8U5fWxe29s4ksvOXqog',
    },
    /** 预发布正式站 */
    REL: {
      /** 热更新key值 */
      hotKey: 'yHBNdT3ftsUmRhUQ0TU1jGU8fMGr4ksvOXqog',
    },
    /** 正式站 */
    PRO: {
      /** 热更新key值 */
      hotKey: 'AyAhAQ7vaEYjBaM8GxjoMeJhtXSs4ksvOXqog',
    },
  },
  /** ios环境 */
  ios: {
    /** 开发服 */
    DEV: {
      /** 热更新key值 */
      hotKey: 'cG8fVvU3gLTcmmAMtWFfmc8Ltjgj4ksvOXqog',
    },
    /** 测试站 */
    TEST: {
      /** 热更新key值 */
      hotKey: 'cUnhRJktXqL4HzpfwOcg0gnsRFa54ksvOXqog',
    },
    /** 预发布 */
    PRE: {
      /** 热更新key值 */
      hotKey: 'eebYfo3qiTAyY6eXdqoHsX6G9IM84ksvOXqog',
    },
    /** 预发布正式站 */
    REL: {
      /** 热更新key值 */
      hotKey: 'hcPyhkQwUoQR5rGuigWfvdRjrigw4ksvOXqog',
    },
    /** 正式站 */
    PRO: {
      /** 热更新key值 */
      hotKey: 'Pzi0CqODxnhkKoXjZSqGgIycW7Rh4ksvOXqog',
    },
  },
}

export default codePushKey?.[Platform.OS] || {}
