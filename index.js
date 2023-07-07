/**
 * @format
 */
import './src/utils/global' // 导入全局变量
import './src/utils/styleSheet/config' // 导入字体初始化方法

import {AppRegistry} from 'react-native'
import App from './src/App'
import {name as appName} from './app.json'

AppRegistry.registerComponent(appName, () => App)
