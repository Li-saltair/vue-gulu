# 布局

<ClientOnly>
<layout-demo></layout-demo>
</ClientOnly>

```html
<div>
    <g-layout class="g-layout">
      <g-sider class="g-sider"></g-sider>
      <g-layout class="g-layout">
        <g-header class="g-header"></g-header>
        <g-content class="g-content"></g-content>
        <g-footer class="g-footer"></g-footer>
      </g-layout>
    </g-layout>
  </div>
```
```js
import Content from "../../../src/layout/content";
import Footer from "../../../src/layout/footer";
import Header from "../../../src/layout/header";
import Layout from "../../../src/layout/layout";
import Sider from "../../../src/layout/sider";
export default {
  components: {
    "g-content": Content,
    "g-footer": Footer,
    "g-header": Header,
    "g-layout": Layout,
    "g-sider": Sider
  }
};
```
```css
.g-layout {
  width: 100%;
  height: 400px;
  background: #d3adf7;
}
.g-header {
  width: 100%;
  height: 100px;
  background: #b37feb;
}
.g-content {
  width:100%;
  
}
.g-footer {
  width: 100%;
  height: 100px;
  background: #391085;
}
.g-sider {
  width: 20%;
  background: #722ed1;
}
```

<ClientOnly>
<layout-demo1></layout-demo1>
</ClientOnly>

```html
<div>
    <g-layout class="g-layout layout1">
      <g-header class="g-header"></g-header>
      <g-layout class="g-layout">
        <g-sider class="g-sider"></g-sider>
        <g-content class="g-content"></g-content>
      </g-layout>
      <g-layout class="layout2">
        <g-footer class="g-footer"></g-footer>
      </g-layout>
    </g-layout>
  </div>
```
```js
import Content from "../../../src/layout/content";
import Footer from "../../../src/layout/footer";
import Header from "../../../src/layout/header";
import Layout from "../../../src/layout/layout";
import Sider from "../../../src/layout/sider";
export default {
  components: {
    "g-content": Content,
    "g-footer": Footer,
    "g-header": Header,
    "g-layout": Layout,
    "g-sider": Sider
  }
};
```
```css
.g-layout {
  width: 100%;
  height: 400px;
  background: #d3adf7;
}
.g-header {
  width: 100%;
  height: 100px;
  background: #b37feb;
}
.g-content {
  width: 100%;
}
.g-footer {
  width: 100%;
  height: 100px;
  background: #391085;
}
.g-sider {
  width: 30%;
  background: #722ed1;
}
.g-layout.layout1{
  height:450px;
}
.g-layout.layout2{
  height:150px;
}
```

