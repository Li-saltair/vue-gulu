# Toast

<ClientOnly>
<toast-demo></toast-demo>
</ClientOnly>

```html
<g-button>点我有惊喜</g-button>
```
```js
export default {
  components: {
    "g-button": Button
  },
  data(){
    return {
      load:false
    }
  }
};
```
Props | 含义 | 默认值 | 是否必须 | 可选值
---|---|--- |---|---
autoClose | 自动关闭toast，接受布尔值和数字，数字代指自动关闭时间 | 5 | false | [true,false,1,2,3,…]
closeButton | 触发toast关闭的容器 | 默认为span | false | Object
enabledHtml | toast中内容是否可以是html | false | false | [true,false]
position | toast出现的位置 | top | false | [top,middle,bottom]



