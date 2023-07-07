import { create } from '@/utils/styleSheet'

export default create({
  tabbar: {
    bottom: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 90,
    paddingLeft: 16,
    paddingRight: 16,
  },
  item: {
    flex: 1,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusItem: {
    backgroundColor: 'red',
    width: 90,
    height: 60,
    borderRadius: 8,
  },
  itemText: {
    color: 'rgba(0, 0, 0, 0.65)',
    fontSize: 26,
  },
  active: {
    color: '#0b141f',
    fontSize: 30,
    fontWeight: '500',
  },
  tabImg: {
    width: 50,
    height: 50,
    marginBottom: 16,
  },
})
