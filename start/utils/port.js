/*
 * @Date: 2022-07-04 15:28:15
 * @Description: adb端口映射
 */
const { exec } = require('child_process')

function connectAdb() {
  exec('adb reverse tcp:8081 tcp:8081', (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('端口映射已生效，请在调试服务台刷新页面')
    }
  })
}

module.exports = {
  connectAdb,
}
