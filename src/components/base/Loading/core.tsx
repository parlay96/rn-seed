/*
 * @Date: 2022-06-29 19:55:00
 * @Description: 弹框控制器
 */
import { useEffect, useState, useRef } from 'react'
import { Animated, useWindowDimensions } from 'react-native'

function createStore() {
  const listener = []

  function subscribe(fn) {
    listener.push(fn)
    return () => {
      listener.splice(listener.indexOf(fn), 1)
    }
  }

  function publish(options) {
    listener.map((item) => {
      item(options)
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
export function useCore() {
  /** 弹窗动画时间 */
  const time = 200
  const [show, setShow] = useState(false)
  const fadeAnim = useRef(new Animated.Value(0)).current
  const fadeIn = () => {
    setShow(true)
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: time,
      useNativeDriver: true,
    }).start()
  }

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: time,
      useNativeDriver: true,
    }).start()
    setTimeout(() => {
      setShow(false)
    }, time)
  }

  useEffect(() => {
    store.subscribe(({ visible }) => {
      setShow(visible)
      if (visible) {
        fadeIn()
      } else {
        fadeOut()
      }
    })
  }, [])
  return {
    show, fadeAnim, fadeOut,
  }
}
