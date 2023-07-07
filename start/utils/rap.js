/*
 * @Date: 2022-07-14 12:44:20
 * @Description: 更新src/utils/request/request.d.ts文件
 */
const { rapper } = require('rap')
const fs = require('fs')
const path = require('path')

/** 更新rapper */
async function updateRap() {
  await rapper({
    type: 'normal',
    rapperPath: './start/.cache/rap',
    apiUrl: 'http://rap2api.taobao.org/repository/get?id=273365&token=HDQE12YNhVHZ9xxWI-0ySfTaYsKn0AHO',
    rapUrl: 'http://rap2.taobao.org',
  })
  /** 读取文件 */
  const targetFilePath = path.resolve(__dirname, '../../src/utils/request/request.d.ts')
  const sourceFilePath = path.resolve(__dirname, '../.cache/rap/request.ts')
  const fileContent = fs.readFileSync(sourceFilePath, 'utf8')
  /** 替换文件 */
  const newFileContent =
    fileContent
      .replace("import * as commonLib from 'rap/runtime/commonLib'", '')
      .replace(/export/g, 'declare')
  fs.writeFileSync(targetFilePath, newFileContent)
  console.log('文件替换完成')
}

module.exports = {
  updateRap,
}
