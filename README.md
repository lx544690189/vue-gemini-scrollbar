# vue-gemini-scrollbar
![license-image](https://img.shields.io/npm/l/gemini-scrollbar.svg)

**介绍**
- 基于[gemini-scrollbar](https://github.com/noeldelgado/gemini-scrollbar)封装的vue组件
- 基于原生滚动的自定义滚动条
- 支持IE9+

**安装**

```sh
npm i gemini-scrollbar --save
```

如需script方式引入，请自行编译，build后在disk文件夹

```sh
npm run build
```

**使用**

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

**如何为body设置自定义滚动条**

因为vue组件的根元素不能为body，此时可以从Vue.$GeminiScrollbar访问到GeminiScrollbar对象，然后你就可以自由使用它了（文档请参考：[gemini-scrollbar](https://github.com/noeldelgado/gemini-scrollbar)）。

```css
html {
    height: 100%;
    /* or */
    height: 100vh;
}
```

```javascript
var scrollbar = new Vue.$GeminiScrollbar({
    element: document.body
}).create();
```

**Attributes**
参数 | 类型 | 默认值 | 说明
---|---|---|---|---
autoCreate | Boolean | true | 自动创建自定义滚动条 
autoshow | Boolean | false | hover时才显示滚动条
forceGemini | Boolean | false | 原生滚动条可见的情况下，强制显示自定义滚动条（开发时会比较有用）
minThumbSize | Number | 20 | 滚动条最小长度

**注意：**
createElements参数在这里被强制置为false，不可配置，因为启用它可能会影响Vue的virtual DOM。

**Events**

事件名称 | 回调参数 | 说明
---|---|---
ready | geminiScrollbar | GeminiScrollbar实例创建
resize | - | 滚动区域大小调整时触发

**Methods**


方法名称 | 说明
---|---
create | 创建滚动区域
update | 重新计算滚动区域大小（一般不需要你这么做，如果发现滚动区域大小变化导致显示不正常，可以尝试调用它）
destroy | 移除绑定事件及滚动条元素


**其他实现**
- [gemini-scrollbar](https://github.com/noeldelgado/gemini-scrollbar)（原生js）
- [react-gemini-scrollbar](https://github.com/noeldelgado/react-gemini-scrollbar)（react）