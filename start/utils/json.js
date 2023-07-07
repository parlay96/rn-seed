/*
 * @Date: 2022-06-14 15:24:06
 * @Description: iconfont对应json生成工具, 暂时搁置
 */
const path = require('path')
const fs = require('fs')
const iconfontJson = require('../src/assets/fonts/iconfont.json')
const writePath = path.join(process.cwd(), 'src', 'assets', 'fonts', 'map.json')
const obj = {}
const arr = iconfontJson.glyphs || []
arr.forEach((row) => {
  const real = `\\u${row.unicode}`
  obj[row.font_class] = real
})
writeFile(obj)

function writeFile(tips) {
  try {
    fs.writeFileSync(writePath, JSON.stringify(tips, null, 2))
    console.log('iconfont对应map文件已生成，请手动替换\\\\为\\')
  } catch (err) {
    console.error(err)
  }
}
