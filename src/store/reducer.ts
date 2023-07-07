/*
 * @Date: 2021-12-16 10:54:04
 * @Description: 导出reducer 和 actions
 */

import { globalActions, globalReducer, globalName } from './model/global/index'
import { storageActions, storageReducer, storageName } from './model/storage/index'

export const reducer = {
  [globalName]: globalReducer,
  [storageName]: storageReducer,
}

export const actions = {
  globalActions,
  storageActions,
}
