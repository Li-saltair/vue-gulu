# 输入框

<ClientOnly>
<input-demo></input-demo>
</ClientOnly>

```html
<g-input/>
<g-input readonly/>
<g-input disabled/>
<g-input error="请重新填写"/>
<g-input value="详情"/>
```
```js
import Input from "../../../src/input";
export default {
  components: {
    "g-input": Input
  },
};
```
Props | 含义 | 默认值 | 是否必须 | 可选值
---|---|--- |---|---
value | 输入框默认值 | null | false | String
disabled | 不可用 | false | false | [true,false]
readonly | 只读 | false | false | [true,false]
error | 错误信息 | null | false | String
