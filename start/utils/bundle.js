/*
 * @Date: 2022-06-27 18:55:03
 * @Description: 打包bundle
 */

const fs = require('fs')
const path = require('path')
const spawn = require('cross-spawn')
const inquirer = require('inquirer')

/** 打包jsBundle */
async function buildBundle(option) {
  const { platform } = await checkList()
  try {
    // 删除平台包
    deleteall(`./dist/${platform}`)
    fs.mkdirSync('./dist')
  } catch (e) {}
  fs.mkdirSync(`./dist/${platform}`)

  // build the new bundle package
  const tip_android = [
    // 'bundle --platform android --dev false --entry-file base.js --bundle-output ./dist/android/common.bundle --assets-dest ./dist/android/'.split(' '),
    'bundle --platform android --dev false --entry-file index.js --bundle-output ./dist/android/index.android.bundle --assets-dest ./dist/android/'.split(' '),
  ]
  const tip_ios = [
    // 'bundle --platform ios --dev false --entry-file base.js --bundle-output ./dist/android/common.bundle --assets-dest ./dist/ios/'.split(' '),
    'bundle --platform ios --dev false --entry-file index.js --bundle-output ./dist/ios/main.jsbundle --assets-dest ./dist/ios/'.split(' '),
  ]
  let tips = []
  if (platform === 'android') {
    tips = tip_android
  } else {
    tips = tip_ios
  }
  for (const i in tips) {
    const tip = tips[i]
    spawn.sync('node', ['./node_modules/react-native/cli.js', ...tip], {
      stdio: 'inherit',
    })
  }
  if (platform === 'ios') {
    /** ios打包后的文件复制至IOS目录 */
    const iosRNPath = './ios/RNBundle'
    deleteall(iosRNPath)
    fs.mkdirSync(iosRNPath)
    const OriginFilePath = path.resolve(__dirname, '../', '../', 'dist', 'ios')
    const CopyFilePath = path.resolve(__dirname, '../', '../', 'ios', 'RNBundle')
    getFiles(OriginFilePath, CopyFilePath, () => {
      console.log('文件复制完成')
    })
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
        {
          name: '苹果应用',
          value: 'ios',
        },
      ],
    },
  ]
  return inquirer.prompt(promptList)
}

/**
 * Delete directory
 */
function deleteall(myPath) {
  var files = []
  if (fs.existsSync(myPath)) {
    files = fs.readdirSync(myPath)
    files.forEach(function (file, index) {
      var curPath = myPath + '/' + file
      if (fs.statSync(curPath).isDirectory()) {
        // recurse
        deleteall(curPath)
      } else {
        // delete file
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(myPath)
  }
}

function getFiles(OriginFilePath,CopyFilePath, success){
  //读取newFile文件夹下的文件
  fs.readdir(OriginFilePath,{withFileTypes:true},(_err,files)=>{
    if (_err) {
      console.log(_err)
      return
    }
    for (let file of files){
      //判断是否是文件夹，不是则直接复制文件到newFile中
      if (!file.isDirectory()){
        //获取旧文件夹中要复制的文件
        const OriginFile = path.resolve(OriginFilePath,file.name)
        //获取新文件夹中复制的地方
        const CopyFile = path.resolve(CopyFilePath,file.name)
        //将文件从旧文件夹复制到新文件夹中
        fs.copyFileSync(OriginFile,CopyFile)
      } else {//如果是文件夹就递归变量把最新的文件夹路径传过去
        const CopyDirPath = path.resolve(CopyFilePath,file.name)
        const OriginDirPath = path.resolve(OriginFilePath,file.name)
        fs.mkdir(CopyDirPath,()=>{})
        // OriginFilePath = OriginPath
        // CopyFilePath = DirPath
        getFiles(OriginDirPath, CopyDirPath)
      }
    }
    success && success()
  })
}

module.exports = {
  buildBundle,
}
