# gulu UI
[![Build Status](https://travis-ci.org/Li-saltair/vue-gulu.svg?branch=master)](https://travis-ci.org/Li-saltair/vue-gulu)

## 这是在学习VUE的过程中，做的一个UI框架

1. 样式
使用本框架前，请在css中开启,IE8及以上都支持此样式
```css
*{box-sizing:border-box}
::before{
    box-sizing:border-box
}
::after{
    box-sizing:border-box
}
```
你还需要添加颜色等变量

IE不支持此写法

edge 15及以上都支持此样式
```css
:root {
        --button-height: 32px;
        --font-size: 13px;
        --background: #7c7;
        --button-bg: #fff;
        --button-active-bg: #f6f6f6;
        --border-radius: 4px;
        --color: #333;
        --border-color: #aaa;
        --border-color-hover: #777;
      }
```
2. 安装 happyme-ui
```
npm install happyme-ui -S
```

