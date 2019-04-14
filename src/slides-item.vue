<template>
  <transition name="slide">
    <div class="slides-item" v-if="visible" :class="{reverse}">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
export default {
  name: "GslidesItem",
  props: {
    name: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      //由父组件控制
      selected: undefined,
      //是否倒着轮播
      reverse:false
    };
  },
  computed: {
    visible() {
      return this.selected === this.name ? true : false;
    }
  },
  mounted() {
    console.log("方向："+ this.reverse ? "正着": "倒着")
  }
};
</script>
<style lang="scss" scoped>
.slide-leave-active {
  position: absolute;
  width:100%;
  height:100%;
  top: 0;
  left: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 2s;
}
.slide-enter.reverse {
  transform: translateX(-100%);
}
.slide-leave-to.reverse {
  transform: translateX(100%);
}

.slide-enter {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}


</style>