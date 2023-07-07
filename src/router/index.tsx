/*
 * @Date: 2022年8月17日15:34:46
 * @Description: 路由管理文件
 */
import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { store } from '@/store'
import Tabbar from './tabbar'
import other from './other'

import { Provider as ModalProvider } from '@/components/base/Modal'
import { Provider as MsgProvider } from '@/components/base/Msg'
import { Provider as LoadingProvider } from '@/components/base/Loading'
import { setNavigation } from '@/utils/router'

const LazyLoading = (props: any) => {
  const { render, ...other } = props
  const [Result, setResult] = useState<any>(null)
  // 存储路由对象可以全局使用
  setNavigation(props.navigation)

  useEffect(() => {
    // 异步加载组件
    render().then((result: any) => setResult(result))
  }, [render])
  return Result ? <Result.default {...other} /> : null
}

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
const Stack = createNativeStackNavigator()
const Router = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="IndexTab">
          <Stack.Screen name="IndexTab" component={Tabbar} options={{ headerShown: false }} />
          {other.map((item) => {
            return (
              <Stack.Screen {...item as any} key={item.name}>
                {(props) => <LazyLoading {...props} render={item.render} />}
              </Stack.Screen>
            )
          })}
        </Stack.Navigator>
      </NavigationContainer>
      <ModalProvider />
      <MsgProvider />
      <LoadingProvider />
    </Provider>
  )
}

export default Router
