# 折叠面板

<ClientOnly>
<collapse-demo></collapse-demo>
</ClientOnly>

```html
<g-collapse :select.sync="selectedTab">
  <g-collapse-item title="标题1" name="1">panel one</g-collapse-item>
  <g-collapse-item title="标题2" name="2">panel two</g-collapse-item>
  <g-collapse-item title="标题3" name="3">对接客户的上班的时间</g-collapse-item>
</g-collapse>
```

```js
import Collapse from "../../../src/collapse/collapse";
import CollapseItem from "../../../src/collapse/collapse-item.vue";
export default {
  components: {
    "g-collapse": Collapse,
    "g-collapse-item": CollapseItem
  },
  data() {
    return {
      selectedTab:["1","2"],
    };
  }
};
```
#### g-collapse
| Props    | 含义         | 默认值 | 是否必须 | 可选值       |
| -------- | ------------ | ------ | -------- | ------------ |
| single    | 是否只单个元素 | false   | false    | [true,false] |
| select | 选择项       | false  | false    | Array |

#### g-collapse-item
| Props    | 含义         | 默认值 | 是否必须 | 可选值       |
| -------- | ----- | ------ | -------- | ------------ |
| title    | 标题 | -   | true    | String |
| name | 选择项   | -  | true    | String |
