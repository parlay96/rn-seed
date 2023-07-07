// @ts-nocheck
/*
 * @Date: 2022-08-11 14:38:43
 * @Description: 用户切换字体后的初始化处理
 */
import { Text, TextInput } from 'react-native'
if (!Text.defaultProps) {Text.defaultProps = {}}
if (!TextInput.defaultProps) {TextInput.defaultProps = {}}
Text.defaultProps.allowFontScaling = false
TextInput.defaultProps.allowFontScaling = false
