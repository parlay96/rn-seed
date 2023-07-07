/*
 * @Date: 2022-8-17 17:20:49
 * @Description: 顶部标题返回组件
 */
import React from 'react'
import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import styles from './styles'
import Iconfont from '@/components/iconfont'
import appJSON from '@/../app.json'

type Props = {
  /** 标题 */
  title?: string
  /** 文字颜色 */
  color?: string
  /** 背景颜色 */
  bgColor?: string
  onBack?: Function
  /** 显示分享按钮 */
  showShare?: boolean
}

export default (props: Props) => {
  const { title = appJSON.displayName, bgColor = '#fff', color = '#000', showShare = false, onBack } = props
  /** 返回事件处理 */
  const back = () => {
    onBack ? onBack() : $.router.back()
  }
  /** 跳转到分享页面 */
  const onJumpShare = () => {

  }
  return (
    <View>
      {/* 顶部刘海距离 */}
      <View style={{ backgroundColor: bgColor, width: '100%' }} />
      {/* header */}
      <View style={{ ...styles.headerContainer, backgroundColor: bgColor }}>
        <TouchableOpacity style={styles.iconBack} activeOpacity={0.7} onPress={back}>
          <Iconfont name="icon_back" color={color} size={24} />
        </TouchableOpacity>
        <Text style={[styles.title, { color: color }]} allowFontScaling>{title}</Text>
        {
          showShare && (
            <Pressable onPress={onJumpShare}>
              <View style={styles.rightBtn}>
                <Text style={[{ color: color }]} allowFontScaling>预览/分享</Text>
              </View>
            </Pressable>
          )
        }
      </View>
    </View>
  )
}
