/*
 * @Date: 2022-05-20 09:56:29
 * @Description: App启动
 */

import React, { useEffect } from 'react'
import codePush from 'react-native-code-push'
import Router from './router/index'
import errorHandler from '@/utils/tools/error'

/** codepush配置为手动检测 */
const codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL }
/** 崩溃处理 */
errorHandler()
const App = () => {
  useEffect(() => {
    initCodePush()
    return () => {
      codePush.allowRestart()
    }
  }, [])
  return <Router />
}

/** 初始化codepush */
function initCodePush() {
  codePush.sync({
    installMode: codePush.InstallMode.ON_NEXT_RESTART,
    mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
    // deploymentKey:
  })
}

export default codePush(codePushOptions)(App)
