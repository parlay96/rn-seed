/*
 * @Date: 2022-06-27 18:50:00
 * @Description: 调试命令包
 */
const os = require('os')
const spawn = require('cross-spawn')

/**
 * Get ip(v4) address
 * @return {String} the ipv4 address or 'localhost'
 */
function getIPAddress() {
  const ifaces = os.networkInterfaces()
  let ip = ''
  for (const dev in ifaces) {
    ifaces[dev].forEach(function (details) {
      if (ip === '' && details.family === 'IPv4' && !details.internal && details.address.indexOf('192.168') !== -1) {
        ip = details.address
        return
      }
    })
  }
  return ip || '127.0.0.1'
}

/**
 * Create a terminal qrcode by ip and port
 */
function createQrcode(ip, port = 8081, platform) {
  const codeUrl = `${ip}:${port}`
  console.log(`地址：${codeUrl}`)
}

/** 调试服务 */
function startDev(option) {
  const myIp = getIPAddress()
  createQrcode(myIp, 8081, option.platform)
  spawn('node', ['./node_modules/react-native/cli.js', 'start'], {
    stdio: 'inherit',
  })
}

module.exports = {
  startDev,
}
