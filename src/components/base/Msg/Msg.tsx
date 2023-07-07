/*
 * @Date: 2022-06-29 17:36:26
 * @Description: loading特效
 */
import React, { Fragment, useEffect, useRef } from 'react'
import { create } from '@/utils/styleSheet'
import { useCore } from './core'
import { Animated, Text, View } from 'react-native'

const styles = create({
  contentBox: {
    position: 'absolute',
    top: '46%',
    left: 0,
    right: 0,
    zIndex: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'rgba(0,0,0,0.65)',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    maxWidth: '80%',
  },
  title: {
    fontSize: 32,
    fontWeight: '400',
    lineHeight: 48,
    color: 'rgba(255, 255, 255, 0.95)',
    textAlign: 'center',
  },
})

export default () => {
  const { show, fadeAnim, fadeOut, options } = useCore()
  const timer = useRef(null)
  useEffect(() => {
    if (show) {
      timer.current = setTimeout(() => {
        fadeOut()
        clearTimeout(timer.current)
      }, options?.duration || 2000)
    }
    return () => {
      timer.current && clearTimeout(timer.current)
    }
  }, [show, fadeOut, options?.duration])

  return (
    <Fragment>
      {
        show ? (
          <Animated.View
            style={[styles.contentBox, { opacity: fadeAnim }]}
          >
            <View style={styles.content}>
              <Text style={styles.title} numberOfLines={2}>{options.title}</Text>
            </View>
          </Animated.View>
        ) : null
      }
    </Fragment>
  )
}
