/*
 * @Date: 2022-06-23 16:39:00
 * @Description: 实名认证弹窗
 */

import React, { Fragment } from 'react'
import { View, Text, Animated, Image } from 'react-native'
import { Button } from '@rneui/base'
import { useCore } from '@/components/base/Modal/core'
import { c, create, s } from '@/utils/styleSheet'

const Index = () => {
  const { visible, fadeOut, fadeAnim } = useCore('demo')

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
            <View style={styles.cell}>
              <Image style={styles.icon} source={{ uri: 'https://staticscdn.zgzpsjz.com/miniprogram/images/czj/yp-mini-realname-modal-skill.png' }} />
              <Text style={styles.text}>该用户已通过技能认证</Text>
            </View>
            <Text style={styles.desc}>平台已验证该用户技能证书</Text>
            <View style={[styles.cell, { marginTop: 30 }]}>
              <Button title="我知道了" onPress={() => fadeOut(true)} style={{...styles.shortBtn,marginRight:12}} />
              <Button title="查看证书" onPress={() => fadeOut(false)} style={styles.shortBtn} type="primary" />
            </View>
          </View>
        </Animated.View>
      ) : null}
    </Fragment>
  )
}

const styles = create({
  content: {
    width: 606,
    backgroundColor: '#fff',
    borderRadius: 8,
    ...s.padding(64, 32, 32, 32),
  },
  cell: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 48,
    height: 48,
    marginRight: 8,
  },
  text: {
    fontSize: 32,
    color: '#ff9800',
  },
  desc: {
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 28,
    color: c.black85,
    lineHeight: 44,
  },
  shortBtn: {
    width: 262,
  },
})

export default Index
