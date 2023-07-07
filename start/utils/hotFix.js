/*
 * @Date: 2022-06-20 14:03:50
 * @Description: 热更新脚本
 */
const inquirer = require('inquirer')
const { exec } = require('child_process')
const appJson = require('../../app.json')

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
        {
          name: '苹果应用',
          value: 'ios',
        },
      ],
    },
    {
      type: 'list',
      message: '请选择环境：',
      name: 'env',
      choices: [
        {
          name: '开发服',
          value: 'DEV',
        },
        {
          name: '测试站',
          value: 'TEST',
        },
        {
          name: '预发布',
          value: 'PRE',
        },
        {
          name: '预发布正式站',
          value: 'REL',
        },
        {
          name: '正式站',
          value: 'PRO',
        },
      ],
    },
    {
      type: 'input',
      message: '请输入版本号：',
      name: 'version',
    },
    {
      type: 'list',
      message: '是否强制更新',
      name: 'mandatory',
      choices: [
        {
          name: '否',
          value: false,
        },
        {
          name: '是',
          value: true,
        },
      ],
    },
    {
      type: 'input',
      message: '请输入描述信息：',
      name: 'des',
    },
    {
      type: 'input',
      message: '请检查上述配置是否正确，没问题请手动输入“确认无误”：',
      name: 'check',
    },
  ]
  return inquirer.prompt(promptList)
}

/**
 * Create a env for code-push
 */
function initHotEnv() {
  checkList().then(({ env, version, platform, des, check, mandatory }) => {
    if (!version) {
      console.log('请输入版本号')
      return
    }
    if (!des) {
      console.log('请输入描述信息')
      return
    }
    if (check !== '确认无误') {
      console.log('未确认无误，请重新执行')
      return
    }
    /** 去掉描述信息中的所有空格 */
    const desc = des.split(' ').join('')
    const tip = `code-push release-react ${appJson.name}_${platform} ${platform} -d ${env} -t ${version} --des ${desc} ${mandatory ? '-m true' : ''}`
    console.log('正在执行热更指令：', tip)
    const pro = exec(tip, function(_err, stdout, stderr) {
      if (_err) {
        console.log(_err)
        return
      }
      console.log('热更命令执行成功')
    })
    pro.stdout.on('data', (data) => console.log(data))
  })
}

module.exports = {
  initHotEnv,
}
