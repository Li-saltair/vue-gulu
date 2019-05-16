# Popover

<ClientOnly>
<popover-demo></popover-demo>
</ClientOnly>

```html
<g-popover position="left">
      <template>
        <div>
          <g-button>我是触发按钮</g-button>
        </div>
      </template>
      <template v-slot:content>
        <div>
          提示内容是我
        </div>
      </template>
    </g-popover>

    <g-popover trigger="hover">
      <template>
        <div>
          <g-button>默认方向</g-button>
        </div>
      </template>
      <template v-slot:content>
        <div>
          提示内容是我
        </div>
      </template>
    </g-popover>

    <g-popover position="bottom">
      <template>
        <div>
          <g-button>click me!</g-button>
        </div>
      </template>
      <template v-slot:content>
        <div>
          提示内容是我
        </div>
      </template>
    </g-popover>

    <g-popover position="right">
      <template>
        <div>
          <g-button>right trigger</g-button>
        </div>
      </template>
      <template v-slot:content>
        <div>
          提示内容是我
        </div>
      </template>
    </g-popover>
```
```js
import Popover from "../../../src/input";
export default {
  components: {
    "g-popover": Popover
  },
};
```
Props | 含义 | 默认值 | 是否必须 | 可选值
---|---|--- |---|---
position | popover出现的位置 | top | false | ["top", "left", "right", "bottom"]
trigger | 触发popover出现的事件 | click | false | ["click","hover"]
