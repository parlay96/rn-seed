/*
 * @Date: 2022-07-02 18:12:30
 * @Description: 
 */
import type { Other } from './index.d'
/** 切换动画 */
const animation = 'slide_from_right'
/**
  default：使用平台默认动画
  fade：淡入或淡出屏幕
  fade_from_bottom：从底部淡出新屏幕
  flip: 翻转屏幕，需要 stackPresentation: "modal" (iOS only)
  simple_push：默认动画，但没有阴影和原生标题过渡（仅限 iOS，在 Android 上使用默认动画）
  slide_from_bottom：从底部滑入新屏幕
  slide_from_right：从右侧滑入新屏幕（仅限 Android，在 iOS 上使用默认动画）
  slide_from_left：从左侧滑入新屏幕（仅限 Android，在 iOS 上使用默认动画）
  none: 不要为屏幕设置动画
 */

const other: Other = [
  {
    name: 'Login',
    render: () => import('@/pages/Login'),
    options: { title: '登录', animation, headerShown: false },
  },
  {
    name: 'Methods',
    render: () => import('@/pages/Methods'),
    options: { title: '默认方法区', animation, headerShown: false },
  },
]

export default other
