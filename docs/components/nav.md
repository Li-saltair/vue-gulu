# 导航菜单

<ClientOnly>
<nav-demo></nav-demo>
</ClientOnly>

```html
<div style="margin-top:100px;width:400px;">
  <g-nav :selected.sync="menu" direction="vertical">
    <g-sub-nav name="one">
      <template v-slot:title>一</template>
      <g-nav-item name="two">二</g-nav-item>
      <g-sub-nav name="three">
        <template v-slot:title>三</template>
        <g-nav-item name="four">四</g-nav-item>
        <g-nav-item name="five">五</g-nav-item>
        <g-sub-nav name="six">
          <template v-slot:title>六</template>
          <g-nav-item name="seven">七</g-nav-item>
          <g-nav-item name="eight">八</g-nav-item>
          <g-nav-item name="nine">九</g-nav-item>
        </g-sub-nav>
      </g-sub-nav>
    </g-sub-nav>
    <g-nav-item name="ten">十</g-nav-item>
    <g-nav-item name="eleven">十一</g-nav-item>
  </g-nav>
</div>
```
```js
import Nav from "../../../src/nav/nav";
import NavItem from "../../../src/nav/nav-item.vue";
import SubNav from "../../../src/nav/sub-nav";
export default {
  components: {
    "g-nav": Nav,
    "g-nav-item": NavItem,
    "g-sub-nav": SubNav,
  },
  data(){
    return {
      menu: ['two'],
    }
  }
};
```
#### Nav
Props | 含义 | 默认值 | 是否必须 | 可选值
---|---|--- |---|---
selected | 已选择值 | [] | false | Array
multiple | 支持多选 | false | false | [true,false]
direction | 方向 | "horizontal" | false | ["horizontal","vertical"]

#### SubNav
Props | 含义 | 默认值 | 是否必须 | 可选值
---|---|--- |---|---
name | 菜单名称 | - | true | [String, Number]

#### NavItem
Props | 含义 | 默认值 | 是否必须 | 可选值
---|---|--- |---|---
name | 菜单名称 | - | true | [String, Number]