/*
 * @Date:
 * @Description:
 */
import React from 'react'
import { View, Text, Image, ImageStyle, ViewStyle } from 'react-native'
import { Button } from '@rneui/base'
import styles from './styles'

type Props = {
  /** 父级view样式 */
  style?: ViewStyle
  /** 图片样式 */
  imgStyle?: ImageStyle
  /** 文字数组 */
  textArray?: string[]
  /** 按钮文字, 不需要展示的不传buttonText即可 */
  buttonText?: string
  /** 按钮点击事件 */
  onPress?: () => void
}
const image = require('@/assets/images/network.png')
export default (props: Props) => {
  const { buttonText = '重试', style, textArray = ['网络异常，请检查网络后重试'] } = props
  /** 点击事件 */
  const onPress = () => {
    props.onPress && props.onPress()
  }

  return (
    <View style={[styles.container, style]}>
      <Image style={[styles.img, props.imgStyle]} source={image} />
      {
        !!textArray && textArray.length > 0 && (
          <View style={styles.textContainer}>
            {
              textArray.map((item, index) => {
                return <Text key={index} style={styles.text} allowFontScaling>{item}</Text>
              })
            }
          </View>
        )
      }
      {!!buttonText && (
        <View>
          <Button onPress={onPress} title={buttonText} buttonStyle={styles.buttonBox} />
        </View>
      )}
    </View>
  )
}
