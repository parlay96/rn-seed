/*
 * @Date: 2022-06-29 17:36:26
 * @Description: loading特效
 */
import React, { Fragment, useEffect, useRef } from 'react'
import Lottie from 'lottie-react-native'
import { create } from '@/utils/styleSheet'
import { useCore } from './core'
import { Animated, View } from 'react-native'

const styles = create({
  content: {
    backgroundColor: '#fff',
    borderRadius: 16,
    width: 180,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: 140,
  },
})

export default () => {
  const { show, fadeAnim, fadeOut } = useCore()
  const timer = useRef<any>(null)
  useEffect(() => {
    if (show) {
      timer.current && clearTimeout(timer.current)
      timer.current = setTimeout(() => {
        fadeOut()
        clearTimeout(timer.current)
      }, 60000)
    } else {
      timer.current && clearTimeout(timer.current)
    }
    return () => {
      timer.current && clearTimeout(timer.current)
    }
  }, [show, fadeOut])

  return (
    <Fragment>
      {
        show ? (
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
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}
          >
            <View style={styles.content} >
              <Lottie source={require('./mvvm_loading.json')} autoPlay loop style={styles.lottie} />
            </View>
          </Animated.View>
        ) : null
      }
    </Fragment>
  )
}
