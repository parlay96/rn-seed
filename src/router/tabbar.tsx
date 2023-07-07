/*
 * @Date: 2022-07-02 17:50:07
 * @Description: 底部tabbar导航
 */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Tabbar from '@/components/widget/Tabbar'
import { setNavigation } from '@/utils/router'

import Index from '@/pages/Index'
import Resume from '@/pages/Resume'
import Message from '@/pages/Message'
import Center from '@/pages/Center'

const IndexTab = createBottomTabNavigator()
const IndexChild = (props: any) => {
  setNavigation(props.navigation)
  return (
    <IndexTab.Navigator tabBar={props => <Tabbar {...props} />}>
      <IndexTab.Screen name="Index" component={Index} options={{ headerShown: false }} />
      <IndexTab.Screen name="Resume" component={Resume} options={{ headerShown: false }} />
      <IndexTab.Screen name="Message" component={Message} options={{ headerShown: false }} />
      <IndexTab.Screen name="Center" component={Center} options={{ headerShown: false }} />
    </IndexTab.Navigator>
  )
}

export default IndexChild
