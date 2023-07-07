/*
 * @Date: 2022-8-17 17:20:29
 * @Description: 样式文件
 */
import { c, create } from '@/utils/styleSheet'

export default create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
  },
  buttonBox: {
    backgroundColor: c.primary,
    borderColor: c.primary,
    borderWidth: 1,
    borderRadius: 8,
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 32,
    minWidth: 180,
  },
  img: {
    width: 296,
    height: 290,
  },
  textContainer: {
    marginTop: 16,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  text: {
    lineHeight: 44,
    color: c.black45,
  },
})
