/*
 * @Date: 2022-05-24 19:34:47
 * @Description: 样式文件
 */
import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  headerContainer: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#ffffff',
  },
  iconBack: {
    position:'absolute',
    left:10,
    padding: 5,
    zIndex: 10,
  },
  iconBackText: {
    fontFamily: Platform.OS === 'ios' ? 'yp' : 'iconfont',
    fontSize: 20,
    color: '#333',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  rightBtn: {
    position: 'absolute',
    right: 10,
    top: -8,
  },
})
