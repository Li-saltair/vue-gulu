# 走马灯

<ClientOnly>
<carousel-demo></carousel-demo>
</ClientOnly>

```html
    <g-slides :selected.sync="selected" class="wrapper">
      <g-slides-item name="1">
        <div class="slide-item">1</div>
      </g-slides-item>
      <g-slides-item name="2">
        <div class="slide-item">2</div>
      </g-slides-item>
      <g-slides-item name="3">
        <div class="slide-item">3</div>
      </g-slides-item>
    </g-slides>
```
```js
import Slides from "../../../src/slides/slides";
import SlidesItem from "../../../src/slides/slides-item.vue";
export default {
  components: {
    "g-slides": Slides,
    "g-slides-item": SlidesItem
  },
  data() {
    return {
      selected: "1"
    };
  }
};
```
#### Slides
Props | 含义 | 默认值 | 是否必须 | 可选值
---|---|--- |---|---
selected | 当前显示的项 | 第一项 | false | [String,Number]
autoPlay | 自动播放 | true | false | [true,false]
autoPlayDaley | 自动播放延迟 | 3000 | false | Number[ms]

#### Slides-item
Props | 含义 | 默认值 | 是否必须 | 可选值
---|---|--- |---|---
name | 当前显示的项的name，需要和Slides中的selected对应 | - | true | [String,Number]
