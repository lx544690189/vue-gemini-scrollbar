# vue-gemini-scrollbar
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/lx544690189/vue-gemini-scrollbar)
[![Travis](https://img.shields.io/travis/rust-lang/rust.svg)](https://lx544690189.github.io/vue-gemini-scrollbar/)
![Vue 2.x](https://img.shields.io/badge/vue-2.x-green.svg "Vue 2 Compatible")

[![NPM](https://nodei.co/npm/vue-gemini-scrollbar.png?downloads=true&downloadRank=true)](https://www.npmjs.com/package/vue-gemini-scrollbar)

[查看demo](https://lx544690189.github.io/vue-gemini-scrollbar/)

<img src="https://raw.githubusercontent.com/lx544690189/vue-gemini-scrollbar/master/screenshot/screenshot.png" width="400"/>

## 介绍
无需配置横向或纵向滚动，自定义滚动条完全按照原生的方式去显示（也就是如果区域存在纵向滚动条，使用它后将替换纵向滚动条）。正因为如此，请不要使用::-webkit-scrollbar来修饰原生滚动条，这样会影响对滚动条宽度的检测。
- 基于[gemini-scrollbar](https://github.com/noeldelgado/gemini-scrollbar)封装的vue组件
- 基于原生滚动的自定义滚动条
- 支持IE9+


## 安装

```sh
npm i vue-gemini-scrollbar --save
```

如需script方式引入，请自行编译，build后在disk文件夹（vue-gemini-scrollbar.js）

```sh
npm run build
```

## Attributes

参数 | 类型 | 默认值 | 说明
---|---|---|---
autoCreate | Boolean | true | 自动创建自定义滚动条 
autoshow | Boolean | false | hover时才显示滚动条
forceGemini | Boolean | false | 原生滚动条可见的情况下，强制显示自定义滚动条（开发时会比较有用）
minThumbSize | Number | 20 | 滚动条最小长度

**注意：**
createElements参数在这里被强制置为false，不可配置，因为启用它可能会影响Vue的virtual DOM。

## Events

事件名称 | 回调参数 | 说明
---|---|---
ready | geminiScrollbar实例 | GeminiScrollbar实例创建
resize | - | 滚动区域大小调整时触发

## Methods


方法名称 | 说明
---|---
create | 创建滚动区域
update | 重新计算滚动区域大小（vue可以监听并触发组件updated的时候，都不需要你手动去调用它；但是像图片资源的load导致高度变化，你需要在合适的时候去手动调用；）
destroy | 移除绑定事件及滚动条元素

**如何调用：**
监听ready事件，通过回调函数的参数geminiScrollbar实例来调用这些方法

## 使用

安装组件

```javascript
import Vue from 'vue'
import GeminiScrollbar from 'vue-gemini-scrollbar'

Vue.use(GeminiScrollbar)
```

在模板中使用

```vue
<GeminiScrollbar
    class="my-scroll-bar">
    content...
</GeminiScrollbar>
```

注意：只有内容溢出才会有滚动效果

```css
.my-scroll-bar{
    height:200px;
}
```

添加自己的滚动条样式
```css
/* override gemini-scrollbar default styles */

/* vertical scrollbar track */
.gm-scrollbar.-vertical {
  background-color: #f0f0f0
}

/* horizontal scrollbar track */
.gm-scrollbar.-horizontal {
  background-color: transparent;
}

/* scrollbar thumb */
.gm-scrollbar .thumb {
  background-color: rebeccapurple;
}
.gm-scrollbar .thumb:hover {
  background-color: fuchsia;
}
```

## 如何为body设置自定义滚动条

因为vue组件的根元素不能为body，此时可以从Vue.$geminiScrollbar访问到GeminiScrollbar对象，然后你就可以自由使用它了（文档请参考：[gemini-scrollbar](https://github.com/noeldelgado/gemini-scrollbar)）。

```css
html {
    height: 100%;
    /* or */
    height: 100vh;
}
```

```javascript
var scrollbar = new Vue.$geminiScrollbar({
    element: document.body
}).create();
```

## 其他实现
- [gemini-scrollbar](https://github.com/noeldelgado/gemini-scrollbar)（原生js）
- [react-gemini-scrollbar](https://github.com/noeldelgado/react-gemini-scrollbar)（react）