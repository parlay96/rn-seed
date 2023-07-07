/*
 * @Date: 2022-06-23 17:00:17
 * @Description: 计算交集,demo
 */
const fs = require('fs')
const path = require('path')
const common = fs.readFileSync(path.join(__dirname, '../', 'dist', 'android', 'common.bundle'), 'utf8').split('\n')
const business = fs.readFileSync(path.join(__dirname, '../', 'dist', 'android', 'index.android.bundle'), 'utf8').split('\n')
const patch = []
for (const i in business) {
  let has = false
  for (const y in common) {
    if (business[i] === common[y]) {
      has = true
      break
    }
  }
  if (!has) {
    patch.push(business[i])
  }
}

fs.writeFileSync(path.join(__dirname, '../', 'dist', 'android', 'patch.bundle'), patch.join('\n'))
