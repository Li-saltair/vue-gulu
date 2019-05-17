<template>
  <div class="g-sticky" ref="wrapper" :style="{height}">
    <div :class="classes" :style="{width,left,top}">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Sticky",
  props:{
      distance:{
          type:Number,
          default:0
      }
  },
  data() {
    return {
      sticky: false,
      width: undefined,
      left: undefined,
      height: undefined,
      top:undefined
    };
  },
  mounted() {
    this.windowScrollHandler = this._windowScrollHandler.bind(this);
    window.addEventListener("scroll", this.windowScrollHandler);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.windowScrollHandler);
  },
  computed: {
    classes() {
      return { sticky: this.sticky };
    }
  },
  methods: {
    getTop() {
      let { top } = this.$refs.wrapper.getBoundingClientRect();
      top = top + window.scrollY;
      return { top };
    },
    getHeight() {
      let { height } = this.$refs.wrapper.getBoundingClientRect();
      return { height };
    },
    _windowScrollHandler() {
      let { top } = this.getTop();
      if (window.scrollY > top -this.distance) {
        let {
          width,
          height,
          left
        } = this.$refs.wrapper.getBoundingClientRect();
        this.height = height + "px";
        this.width = width + "px";
        this.left = left + "px";
        this.top = this.distance + 'px'
        this.sticky = true;
      } else {
        this.height = undefined
        this.width = undefined
        this.left = undefined
        this.top = undefined
        this.sticky = false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.g-sticky {
  .sticky {
    position: fixed;
    z-index: 9;
  }
}
</style>
