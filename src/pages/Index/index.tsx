/*
 * @Date:
 * @Description:
 */
import { Button } from '@rneui/base'
import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

type Props = {}
export default (props: Props) => {
  console.log(props)
  /** 跳转到方法测试区 */
  const jump = () => {
    $.router.push('Methods')
  }
  return (
    <View style={styles.container}>
      <Text>我是首页</Text>
      <Button title="方法测试页" onPress={jump}/>
    </View>
  )
}
