/*
 * @Date: 2022-07-02 18:05:19
 * @Description: 
 */
import IconFont from '@/components/iconfont'
import React, { useState } from 'react'
import { Text, View, StatusBar, Pressable } from 'react-native'
import { Button } from '@rneui/base'
import styles from './style'

const tabbar = [
  {
    title: '首页',
    name: 'Index',
    statusBar: { backgroundColor: '#fff', barStyle: 'dark-content' },
  },
  {
    title: '找活列表',
    name: 'Resume',
    statusBar: { backgroundColor: '#fff', barStyle: 'dark-content' },
  },
  {
    title: '中间页',
    name: 'Plus',
    statusBar: { backgroundColor: '#fff', barStyle: 'dark-content' },
    isPlusBtn: true,
  },
  {
    title: '消息',
    name: 'Message',
    statusBar: { backgroundColor: '#fff', barStyle: 'dark-content' },
  },
  {
    title: '会员中心',
    name: 'Center',
    statusBar: { backgroundColor: '#fff', barStyle: 'dark-content' },
  },
]

const Tabbar = (props: any) => {
  const { state } = props
  const [activeTab, setActiveTab] = useState<any>(tabbar[state.index])

  /** 点击事件处理 */
  const jump = (item: typeof tabbar[0]) => {
    if (item.isPlusBtn) {
      $.msg('我是中间按钮')
      return
    }
    if (!item.isPlusBtn) {
      setActiveTab(item)
    }
    $.router.push(item.name)
  }

  /** 渲染底部tabbar */
  const tabContent = tabbar.map((item) => {
    if (item.isPlusBtn) {
      return (
        <View
          style={styles.item}
          key={item.title}
          >
            <Button buttonStyle={styles.plusItem} icon={<IconFont name="yp_mini_cyy_add" size={20} color="#fff" />} onPress={() => jump(item)} />
        </View>
      )
    }
    return (
      <Pressable
        style={styles.item}
        key={item.title}
        onPress={() => jump(item)}>
        <Text
          style={[styles.itemText, activeTab.name === item.name ? styles.active : {}]}>
          {item.title}
        </Text>
      </Pressable>
    )
  })
  return (
    <View>
      <StatusBar {...activeTab.statusBar} />
      <View style={styles.tabbar}>{tabContent}</View>
    </View>
  )
}

export default Tabbar
