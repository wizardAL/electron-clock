## 安装

要安装预编译好的的二进制文件, 请使用 [`npm`](https://docs.npmjs.com/)。 首选的方法是在项目中作为development dependency安装。

```shell
npm install electron --save-dev
```

## 启动

直接执行如下命令即可启动

```shell
npm start
```

## 打包

安装electron的打包工具`electron-packager`，执行以下打包命令

```shell
npm run-script packager
```

对应的打包指令在package.json文件中

```json
"scripts": {
    "packager":"electron-packager ./ Clock --platform=mas --arch=x64 --app-version 1.0.0 --out ./bin --overwrite"
}
```

命令说明： 

* location of project: 项目所在路径 
* name of project：打包的项目名字 
* platform：确定了你要构建哪个平台的应用（darwin, linux, mas, win32） 
* arch:决定了使用 x86 还是 x64 还是两个架构都用 
* out:打包输出路径



