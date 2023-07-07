/*
 * @Date: 2022-07-02 19:30:28
 * @Description: 
 */
// 其他页面使用的类型提示
export type Other = {
  // 路由名称
  name: string
  // 组件
  render: any
  // 配置项
  options: {
    title: string
    animation: 'none' | 'default' | 'fade' | 'fade_from_bottom' | 'flip' | 'simple_push' | 'slide_from_bottom' | 'slide_from_right' | 'slide_from_left'
    headerShown?: boolean
    [key: string]: any
  }
}[]
