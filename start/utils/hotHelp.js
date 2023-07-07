/*
 * @Date: 2022-06-20 14:03:50
 * @Description: 热更新脚本
 */
const inquirer = require('inquirer')
const { exec } = require('child_process')
const appJson = require('../../app.json')

/** 选择平台 */
const appList = {
  type: 'rawlist',
  message: '请选择平台',
  name: 'device',
  choices: [
    {
      name: '安卓',
      value: `${appJson.name}_android`,
    },
    {
      name: '苹果',
      value: `${appJson.name}_ios`,
    },
  ],
}

/** 选择环境 */
const envList = {
  type: 'rawlist',
  message: '请选择环境',
  name: 'env',
  choices: [
    {
      name: '开发',
      value: 'DEV',
    },
    {
      name: '测试',
      value: 'TEST',
    },
    {
      name: '预发布',
      value: 'PRE',
    },
    {
      name: '预正',
      value: 'REL',
    },
    {
      name: '正式站',
      value: 'PRO',
    },
  ],
}

/**
 * Create a terminal choose options
 */
 function checkList() {
  const promptList = [
    {
      type: 'rawlist',
      message: '热更命令',
      name: 'type',
      choices: [
        {
          name: '查看所有app',
          value: 'app',
        },
        {
          name: '查看热更key值表',
          value: 'key',
        },
        {
          name: '查看版本更新记录',
          value: 'record',
        },
        {
          name: '版本回退',
          value: 'callback',
        },
      ],
    },
  ]
  return inquirer.prompt(promptList)
}

/**
 * Create a env for code-push
 */
function hotHelp() {
  checkList().then(({ type }) => {
    if (type === 'app') {
      lookApp()
    } else if (type === 'key') {
      lookDeploymentKeys()
    } else if (type === 'record') {
      lookVersionRecord()
    } else {
      console.log('功能未开放，敬请期待')
    }
  })
}


/** 查看所有app */
function lookApp() {
  exec('code-push app list', (err, stdout, stderr) => {
    if (err) {
      console.log(err)
    }
    console.log(stdout)
  })
}

/** 查看热更key值表 */
function lookDeploymentKeys() {
  inquirer.prompt([appList]).then(({ device }) => {
    exec(`code-push deployment ls ${device} -k`, (err, stdout, stderr) => {
      if (err) {
        console.log(err)
      }
      console.log(stdout)
    })
  })
}

/** 查看版本更新记录 */
function lookVersionRecord() {
  inquirer.prompt([appList, envList]).then(({ device, env }) => {
    exec(`code-push deployment history ${device} ${env}`, (err, stdout, stderr) => {
      if (err) {
        console.log(err)
      }
      console.log(stdout)
    })
  })
}

module.exports = {
  hotHelp,
}
