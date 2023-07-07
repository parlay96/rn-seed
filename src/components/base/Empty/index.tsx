/*
 * @Date: 2022-8-17 17:20:01
 * @Description: 空页面组件
 */
import React, { useEffect, useState } from 'react'
import { View, Text, ViewStyle } from 'react-native'
import { useNetInfo } from '@react-native-community/netinfo'
import { Button } from '@rneui/base'
import styles from './styles'
import { getImgUrl } from './utils'
import NoNetWork from '../NoNetWork'
import FastImage from 'react-native-fast-image'

type Props = {
  /**
   * 图片类型，支持：collect（收藏缺省图）、integral(积分缺省图)、list(列表缺省图)、msg(信息缺省图)、network(无网络缺省图)、search(搜索缺省图)
   * imgType与imgUrl互斥，优先取imgUrl
   */
  imgType?: 'collect' | 'integral' | 'list' | 'msg' | 'network' | 'search'
  /** 图片地址 */
  imgUrl?: string
  /** 父级view样式 */
  style?: ViewStyle
  /** 图片样式 */
  imgStyle?: any
  /** 中间子元素 */
  children?: React.ReactNode
  /** 文字数组 */
  textArray?: string[]
  /** 按钮文字, 不需要展示的不传buttonText即可 */
  buttonText?: string
  /** 按钮点击事件, 强制传，避免点击无反应情况出现 */
  onPress?: () => void
  /** 无网络点击事件, 强制传，避免点击无反应情况出现 */
  onNoNetWork: () => void
}

export default (props: Props) => {
  const { children, buttonText, imgType = 'default', imgUrl, style, textArray = [] } = props
  const [url, setUrl] = useState(getImgUrl(imgUrl || '', imgType))
  const [use, setUse] = useState(true)
  const [networkStatus, setNetworkStatus] = useState(true)
  const netInfo = useNetInfo()
  /** 点击事件 */
  const onPress = () => {
    props.onPress && props.onPress()
  }

  /** 图片类型和图片url变化时，重新生成图片url */
  useEffect(() => {
    if (!use) {
      return
    }
    const newUrl = getImgUrl(imgUrl || '', imgType)
    if (newUrl != url) {
      setUrl(newUrl)
    }
  }, [imgType, imgUrl, url, use])

  useEffect(() => {
    return () => {
      setUse(false)
    }
  }, [])

  /** 无网络时展示 */
  if (netInfo.isConnected === false && use) {
    networkStatus && setNetworkStatus(false)
  }

  if (networkStatus === false) {
    return <NoNetWork onPress={props.onNoNetWork} />
  }

  return (
    <View style={[styles.container, style]}>
      { !!url && <FastImage style={{...styles.img, ...props.imgStyle}} source={{ uri: url }} /> }
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
      {children}
      {!!buttonText && (
        <View>
          <Button onPress={onPress} title={buttonText} buttonStyle={styles.buttonBox} />
        </View>
      )}
    </View>
  )
}
