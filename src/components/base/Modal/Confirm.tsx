/*
 * @Date: 2022-06-23 16:39:00
 * @Description: Confirm 弹窗
 */

import React, { Fragment } from 'react'
import { View, Text, Animated, Pressable } from 'react-native'
import { Button } from '@rneui/base'
import { create, pxToDp } from '@/utils/styleSheet'
import { useCore } from './core'
import FastImage from 'react-native-fast-image'

const styles = create({
  content: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: 606,
    padding: 32,
  },
  title: {
    marginTop: 32,
    alignItems: 'center',
  },
  titleText: {
    color: 'rgba(0, 0, 0, 0.85)',
    fontSize: 32,
    fontWeight: '500',
  },
  desc: {
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 70,
  },
  btn: {
    width: 260,
  },
  cancelIcon: {
    width: 50,
    height: 50,
    marginTop: 50,
  },
})

const Index = () => {
  const { visible, options, fadeOut, fadeAnim } = useCore('confirm')
  return (
    <Fragment>
      {visible ? (
        <Animated.View
          style={[
            {
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              zIndex: 10,
              opacity: fadeAnim,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}
        >
          <View style={styles.content}>
            {options.title ? (
              <View style={styles.title}>
                <Text style={styles.titleText}>{options.title}</Text>
              </View>
            ) : null}
            <View style={styles.desc}>
              <Text style={{ color: 'rgba(0, 0, 0, 0.85)', fontSize: pxToDp(28) }}>{options.content}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Button title={options.cancelText} onPress={() => fadeOut(false)} buttonStyle={styles.btn} type="outline" />
              <Button title={options.confirmText} onPress={() => fadeOut(true)} buttonStyle={styles.btn} />
            </View>
          </View>
          {options.cancelIcon ? (
            <Pressable onPress={() => fadeOut(false, true)}>
              <FastImage style={styles.cancelIcon} source={{ uri: 'https://staticscdn.zgzpsjz.com/miniprogram/images/mini-close-icon.png' }} />
            </Pressable>
          ) : null}
        </Animated.View>
      ) : null}
    </Fragment>
  )
}

export default Index
