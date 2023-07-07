import { Alert } from 'react-native'
import { setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler'
import CodePush from 'react-native-code-push'

/** js错误监听 */
const handler = () => {
  /**
   * js错误监听
   * @param {object} e 错误信息
   * @param {boolean} isFatal 是否是致命错误
  **/
  setJSExceptionHandler((e: any, isFatal) => {
    if (isFatal) {
      const error =  `${e},${e.componentStack}`
      reporter(error, true)
      Alert.alert(
        '未知错误',
        `${e.name} ${e.message}`,
        [{
          text: '重启APP',
          onPress: () => {
            CodePush.restartApp()
          },
        },{
          text: '关闭',
        }]
      )
    }
  }, true)
  /** 原生错误监听 */
  setNativeExceptionHandler((errorString) => {
    console.log(errorString)
    reporter(errorString, false)
  })
}

/** 上报 */
const reporter = (e: any, isJsError: boolean) => {
  const errorType = isJsError ? '[JSError]' : '[NativeError]'
  const msg = errorType + e
  /** 对msg进行上报 */
}

const errorHandler = () => {
  handler()
}

export default errorHandler
