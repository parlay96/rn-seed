/*
 * @Date: 2022-06-29 19:55:00
 * @Description: 弹框控制器
 */
import { useEffect, useState, useRef } from 'react'
import { Animated } from 'react-native'

function createStore() {
  const listener: any[] = []

  function subscribe(fn: any) {
    listener.push(fn)
    return () => {
      listener.splice(listener.indexOf(fn), 1)
    }
  }

  function publish(options: any) {
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
  const [options, setOptions] = useState<any>({})
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
      options?.afterClose?.()
    }, time)
  }

  useEffect(() => {
    store.subscribe(({ visible, options }: { visible: boolean, options: any }) => {
      setShow(visible)
      if (visible) {
        fadeIn()
        setOptions(options)
      } else {
        fadeOut()
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return {
    show, fadeAnim, fadeOut, options,
  }
}
