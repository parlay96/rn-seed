/*
 * @Date:  2022-8-17 17:19:53
 * @Description: 加载更多组件
 */
import React, { useEffect, useRef } from 'react'
import { View, Text, ViewStyle, Animated, Easing } from 'react-native'
import styles from './styles'
import { Svg, Circle } from 'react-native-svg'
import { pxToDp } from '@/utils/styleSheet'

type Props = {
  /**
   * loading - 加载中
   * more - 上拉加载更多
   * finish - 没有更多数据了
   * none - 缺省值，可自定义
   */
  state: 'loading' | 'more' | 'finish' | 'none'
  /** loading时的文字自定义 */
  loadingText?: string
  /** 查看更多时的文字自定义 */
  moreText?: string
  /** 完成时文字自定义 */
  finishText?: string
  /** 自定义样式 */
  style?: ViewStyle
  /** 额外定义的元素 */
  children?: any
}
export default (props: Props) => {
  const { state = '', loadingText = '加载中...', moreText = '上拉加载更多', finishText = '- 没有更多内容了 -', style, children } = props
  /** 动画初始值 */
  const rotateAm = useRef(new Animated.Value(0)).current
  /** 制作圆环 */
  let rate = 0.28
  if (rate > 1) {
    rate = 1
  } else if (rate < 0) {
    rate = 0
  }
  const strokeWidth = 25
  const radius = 80
  const strokeDashoffsetCreate = () => {
    let val = 0
    val = 2 * Math.PI * radius * (1 - rate) + strokeWidth
    return val
  }
  const strokeDashoffset = strokeDashoffsetCreate()
  const strokeDasharray = rate === 1 ? 1 : 2 * Math.PI * radius

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAm, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start()
  }, [rotateAm])

  /** 旋转值映射 */
  const spin = rotateAm.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })
  return (
    <View style={[styles.container, style]}>
      {/* 加载中 */}
      {
        state === 'loading' && (
          <View style={styles.loadWrap}>
            <Animated.View style={[styles.loadAnimation, { transform: [{ rotate: spin }] }]}>
              <Svg viewBox="0 0 400 400" width={pxToDp(70)} height={pxToDp(70)} style={styles.svg}>
                {/* 背景圆环 */}
                <Circle cx="200" cy="200" r={radius} stroke="#B2D6FB" strokeWidth={strokeWidth} fill="none" />
                {/* 进度条圆环 */}
                <Circle
                  cx="200"
                  cy="200"
                  r={radius}
                  stroke="#0092FF"
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                  fill="none"
                  transform="rotate(0, 200, 200) scale(1, -1) translate(0, -400)"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                />
              </Svg>
            </Animated.View>
            <Text>{loadingText}</Text>
          </View>
        )
      }
      {/* 加载更多 */}
      { state === 'more' && <Text style={styles.finish}>{moreText}</Text> }
      {/* 加载完成 */}
      { state === 'finish' && <Text style={styles.finish}>{finishText}</Text> }
      {/* 其他自定义状态 */}
      { state === 'none' && <Text style={styles.finish}>{children}</Text> }
    </View>
  )
}
