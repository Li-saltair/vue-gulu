<template>
  <div>
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
  </div>
</template>
<script>
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
</script>
<style >
.icon {
  fill: #722ed1;
}
.wrapper {
  margin: 40px;
}
.slide-item {
  width: 100%;
  height: 150px;
  background: #bbb;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>


