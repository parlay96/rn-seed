/*
 * @Date: 2022-07-06 15:45:37
 * @Description: 更新iconfont
 */
const { exec } = require('child_process')
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')

const iconfontPath = path.resolve(__dirname, '../../iconfont.json')

/**
 * Create a terminal choose options
 */
 function checkList() {
  const promptList = [
    {
      type: 'input',
      message: '请输入iconfont项目symbol下生成的js地址，输入：',
      name: 'address',
    },
    {
      type: 'list',
      message: '是否生成iconfont',
      name: 'done',
      choices: [
        {
          name: '是',
          value: 'yes',
        },
        {
          name: '否',
          value: 'no',
        },
      ],
    },
  ]
  return inquirer.prompt(promptList)
}

/** 入口方法 */
async function updateNewIconfont() {
  const { address, done } = await checkList()
  if (done === 'yes') {
    /** 读取iconfont.json文件 */
    const iconfont = require('../../iconfont.json')
    /** 替换symbol字段为address */
    iconfont.symbol_url = address
    /** 重新写入iconfont.json文件 */
    fs.writeFile(
      iconfontPath,
      JSON.stringify(iconfont, null, 2),
      function (err) {
        if (err) {
          console.log(err)
        }
          console.log('iconfont.json文件写入成功')
          /** 命令行 */
          const cmd = 'npx iconfont-rn'
          /** 执行命令 */
          exec(cmd, (_err, stdout, stderr) => {
            if (_err) {
              console.log(_err)
            } else {
              console.log(stdout)
            }
          })
      }
    )
  } else {
    console.log('已取消更新iconfont')
  }
}

module.exports = {
  updateNewIconfont,
}
