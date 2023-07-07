/*
 * @Date: 2022-06-02 17:30:17
 * @Description: 常用指令
 */
const inquirer = require('inquirer')

// 初始化选项执行
checkList().then((option) => {
  if (option.type === 'dev') {
    const { startDev } = require('./utils/dev')
    // 调试
    startDev(option)
  } else if (option.type === 'bundle') {
    const { buildBundle } = require('./utils/bundle')
    // 打包bundle
    buildBundle(option)
  } else if (option.type === 'app') {
    const { buildApp } = require('./utils/app')
    // 打包应用
    buildApp(option)
  } else if (option.type === 'hotFix') {
    const { initHotEnv } = require('./utils/hotFix')
    // 热更发布
    initHotEnv(option.platform)
  } else if (option.type === 'port') {
    const { connectAdb } = require('./utils/port')
    // 端口映射
    connectAdb()
  } else if (option.type === 'iconfont') {
    const { updateNewIconfont } = require('./utils/iconfont')
    // 最新的iconfont生成
    updateNewIconfont()
  } else if (option.type === 'rap') {
    const { updateRap } = require('./utils/rap')
    /** 生成最新的rapper */
    updateRap()
  } else if (option.type === 'hotHelp') {
    const { hotHelp } = require('./utils/hotHelp')
    /** 热更相关指令 */
    hotHelp()
  }
})

/**
 * Create a terminal choose options
 */
function checkList() {
  const promptList = [
    {
      type: 'rawlist',
      message: '请选择功能',
      pageSize: 100,
      name: 'type',
      choices: [
        {
          name: '调试',
          value: 'dev',
        },
        {
          name: '端口映射',
          value: 'port',
        },
        {
          name: '图标生成',
          value: 'iconfont',
        },
        {
          name: 'rap提示生成',
          value: 'rap',
        },
        {
          name: '打包bundle',
          value: 'bundle',
        },
        {
          name: '打包应用',
          value: 'app',
        },
        {
          name: '热更发布',
          value: 'hotFix',
        },
        {
          name: '热更相关命令大全',
          value: 'hotHelp',
        },
      ],
    },
  ]
  return inquirer.prompt(promptList)
}
