/*
 * @Date:
 * @Description:
 */
import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

type Props = {}
export default (props: Props) => {
  console.log(props)
  return (
    <View style={styles.container}>
      <Text>我是消息中心</Text>
    </View>
  )
}
