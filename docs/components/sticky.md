# 固钉（粘滞按钮）

<ClientOnly>
<sticky-demo></sticky-demo>
</ClientOnly>

```html
<article>
  <p>……</p>
  <p>
    在行进时，也时时有人退伍，有人落荒，有人颓唐，有人叛变，然而只要无碍于进行，则越到后来，这队伍也就越成为纯粹、精锐的队伍了。
  </p>
  <p>
    巨大的建筑，总是由一木一石叠起来的，我们何妨做做这一木一石呢？我时常做些零碎事，就是为此。
  </p>
  <p>改造自己，总比禁止别人来得难。</p>
</article>
<g-sticky :distance="58">
  <g-button>
    <g-icon name="fixed"></g-icon>我是粘滞按钮，请滑动鼠标滚轮
  </g-button>
</g-sticky>
<article>
  <p>友谊是两颗心的真诚相待，而不是一颗心对另一颗心的敲打。</p>
  <p>父母对于子女，应该健全的产生，尽力的教育，完全的解放。</p>
  <p>倘只看书，便变成书橱。</p>
  <p>愈艰难，就愈要做。改革，是向来没有一帆风顺的。</p>
  <p>必须敢于正视，这才可望敢想、敢说、敢做、敢当。</p>
  <p>其实先驱者本是容易变成绊脚石的。</p>
  <p>假使做事要面面顾到，那就什么事都不能做了。</p>
  <p>只要能培一朵花，就不妨做做会朽的腐草。</p>
  <p>怀疑并不是缺点。总是疑，而并不下断语，这才是缺点。</p>
  <p>以人为鉴，明白非常，是使人能够反省的妙法。</p>
  …… ……
</article>
```

```js
import Sticky from "../../../src/sticky";
import Icon from "../../../src/icon";
import Button from "../../../src/button/button";
export default {
  components: {
    "g-sticky": Sticky,
    "g-button": Button,
    "g-icon": Icon
  }
};
```
Props | 含义 | 默认值 | 是否必须 | 可选值
---|---|--- |---|---
distance | 粘滞按钮固定的位置 | 0 | false | >=0的数字，不需要单位
