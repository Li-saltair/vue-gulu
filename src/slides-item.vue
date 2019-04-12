<template>
  <transition name="slide">
    <div class="slides-item" v-if="visible">
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
      selected: undefined
    };
  },
  computed: {
    visible() {
      return this.selected === this.name ? true : false;
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.slide-leave-active {
  position: absolute;
  top: 0;
  left: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 1s;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>