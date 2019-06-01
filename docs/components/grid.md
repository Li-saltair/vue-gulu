# 栅格

<ClientOnly>
<grid-demo></grid-demo>
</ClientOnly>

```html
<div>
    <g-row gutter="8">
      <g-col span="12">12</g-col>
      <g-col span="12">12</g-col>
    </g-row>
    <br>
    <br>
    <g-row align="center" gutter="6">
      <g-col span="4">4</g-col>
      <g-col span="4">4</g-col>
      <g-col span="4">4</g-col>
      <g-col span="4">4</g-col>
      <g-col span="4">4</g-col>
      <g-col span="4">4</g-col>
    </g-row>
    <br>
    <br>
    <g-row align="center" gutter="6">
      <g-col span="1">1</g-col>
      <g-col span="5">5</g-col>
      <g-col span="6">6</g-col>
      <g-col span="4">4</g-col>
      <g-col span="8">8</g-col>
    </g-row>
  </div>
```
```js
import Row from "../../../src/grid/row";
import Col from "../../../src/grid/col";
export default {
  components: {
    "g-row": Row,
    "g-col": Col
  },
};
```
```css
  .g-row{
    background: #7c7;
  }
  .g-col:nth-child(even){
    background:#d3adf7;
    height:60px;
    text-align:center;
    line-height:60px;
  }
  .g-col:nth-child(odd){
    background:#efdbff;
    height:60px;
    text-align: center;
    line-height: 60px;
  }
```
Props | 含义 | 默认值 | 是否必须 | 可选值
---|---|--- |---|---
value | 输入框默认值 | null | false | String
disabled | 不可用 | false | false | [true,false]
readonly | 只读 | false | false | [true,false]
error | 错误信息 | null | false | String
