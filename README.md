# 轮子 -我的第一个Vue UI组件
https://img.shields.io/appveyor/ci/:user/:repo.svg
作者：朱智聪
##介绍

这是我自己在学习vue过程中做的一个UI框架，希望有用

##开始使用
1. 添加CSS样式

使用本框架前，请在CSS中开启border-box

```
*,*::before,*::after{box-sizing:border-box;}
```
需要设置默认颜色等变量（后续会改为SCSS变量）
IE8及以上浏览器都支持此样式
```
html {
            --button-height: 32px;
            --font-size: 14px;
            --button-bg: white;
            --button-active-bg: #eee;
            --border-radius: 4px;
            --color: #333;
            --border-color: #999;
            --border-color-hover: #666;
        }
```
IE15及以上浏览器都支持此样式。

2.安装lunzi
```
npm i --save lunzi
```
3.引入lunzi

##文档

##变更记录

##贡献代码

##联系方式

