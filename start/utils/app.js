/*
 * @Date: 2022-06-27 18:55:03
 * @Description: 打包APP
 */

const inquirer = require('inquirer')
const { exec } = require('child_process')

/** 打包app */
async function buildApp(option) {
  const { platform } = await checkList()
  // app打包
  if (platform === 'android') {
    console.log('预计耗时2分钟，正在打包中...')
    exec('cd android && gradlew assembleRelease', function(err) {
      if (err) {
        console.log(err)
      } else {
        console.log('打包完成')
      }
    })
  } else {
    console.log('ios暂不支持命令行打包，请通过XCode进行打包')
  }
}

/**
 * Create a terminal choose options
 */
 function checkList() {
  const promptList = [
    {
      type: 'list',
      message: '请选择运行平台：',
      name: 'platform',
      choices: [
        {
          name: '安卓应用',
          value: 'android',
        },
        // {
        //   name: '苹果应用',
        //   value: 'ios',
        // },
      ],
    },
  ]
  return inquirer.prompt(promptList)
}

module.exports = {
  buildApp,
}
