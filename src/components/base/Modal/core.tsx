/*
 * @Date: 2022-06-16 10:52:55
 * @Description: 弹框控制器
 */

import { useRef, useState, useEffect } from 'react'
import { Animated, Keyboard } from 'react-native'

function createStore() {
  const listener = []

  function subscribe(fn) {
    listener.push(fn)
    return () => {
      listener.splice(listener.indexOf(fn), 1)
    }
  }

  function publish(options) {
    return new Promise((resolve, reject) => {
      listener.map((item) => {
        item({
          options,
          resolve,
          reject,
        })
      })
    })
  }

  return {
    subscribe,
    publish,
  }
}

const store = createStore()

export default store

/** 弹窗公共逻辑 */
export function useCore(type) {
  /** 弹窗动画时间 */
  const time = 200
  const fadeAnim = useRef(new Animated.Value(0)).current
  const [visible, setVisible] = useState(false)
  const [options, setOptions] = useState<any>({})
  const resolveRef = useRef(null)
  const rejectRef = useRef(null)

  const fadeIn = () => {
    Keyboard.dismiss()
    setVisible(true)
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: time,
      useNativeDriver: true,
    }).start()
  }

  const fadeOut = (success: boolean, cancelIcon = false) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: time,
      useNativeDriver: true,
    }).start()
    setTimeout(() => {
      setVisible(false)
      if (success) {
        resolveRef.current?.({ })
      } else {
        rejectRef.current?.({ cancelIcon })
      }
    }, time)
  }

  useEffect(() => {
    return store.subscribe(({ options, resolve, reject }) => {
      if (options.type === type) {
        resolveRef.current = resolve
        rejectRef.current = reject
        fadeIn()
        setOptions(options)
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type])

  return {
    visible, options, fadeOut, fadeAnim
  }
}
