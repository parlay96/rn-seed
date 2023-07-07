/*
 * @Date: 2022-05-28 16:30:37
 * @Description: 控制组件显示
 */

type Props = {
  visible: any
  children: any
}

const Index = ({ visible, children }: Props) => {
  return visible ? children : null
}

export default Index
