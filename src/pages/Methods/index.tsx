/*
 * @Date:
 * @Description:
 */
import React, { useEffect } from 'react'
import Header from '@/components/base/Header'
import LoadMore from '@/components/base/LoadMore'
import { Button } from '@rneui/base'
import { View } from 'react-native'
import styles from './styles'
import Empty from '@/components/base/Empty'

type Props = {}
export default (props: Props) => {
  /** msg提示 */
  const showMsg = () => {
    $.msg('我是一个消息')
  }
  /** loading动画展示 */
  const showLoading = () => {
    $.showLoading()
    setTimeout(() => {
      $.hideLoading()
    }, 2000)
  }
  /** confirm使用 */
  const showConfirm = () => {
    $.confirm({
      title: '我是标题',
      content: '我是内容',
    }).then(() => {
      $.msg('点击了确定')
    }).catch(() => {
      $.msg('点击了取消')
    })
  }
  /** alert使用 */
  const showAlert = () => {
    $.alert({
      title: '我是标题',
      content: '我是内容',
    }).then(() => {
      $.msg('点击了确定')
    })
  }

  /** 无网络时按钮点击事件 */
  const onNoNetWork = () => {
    $.msg('点击了无网络按钮')
  }

  /** 空页面点击事件 */
  const emptyBtnPress = () => {
    $.msg('点击了按钮')
  }

  return (
    <View style={styles.container}>
      <Header title="方法测试区" />
      <View style={styles.content}>
        <Button title="msg提示" onPress={showMsg} containerStyle={styles.btn} />
        <Button title="loading展示" onPress={showLoading} containerStyle={styles.btn} />
        <Button title="confirm使用" onPress={showConfirm} containerStyle={styles.btn} />
        <Button title="alert使用" onPress={showAlert} containerStyle={styles.btn} />
        <Empty buttonText="试试" onPress={emptyBtnPress} onNoNetWork={onNoNetWork} textArray={['我是一个描述信息', '我是第二行描述信息']} />
        <LoadMore state="finish" />
      </View>
    </View>
  )
}
