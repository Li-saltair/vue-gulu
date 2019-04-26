<template>
  <div class="g-sticky" ref="wrapper" >
    <div :class="classes">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Sticky",
  data() {
    return {
      sticky: false
    };
  },
  mounted() {
    let {top,height} = this.getTopAndHeight();
    this.$refs.wrapper.style.height = height + 'px'
    
    window.addEventListener("scroll", () => {
      if (window.scrollY > top) {
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    });
  },
  beforeDestroy() {
    //window.removeEventListener("scroll", () => {});
  },
  computed: {
    classes() {
      return { sticky: this.sticky };
    }
  },
  methods: {
    getTopAndHeight() {
      let { top,height } = this.$refs.wrapper.getBoundingClientRect();
      top = top + window.scrollY;
      return {
          top,height
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.g-sticky {
  border: 1px solid #f66;
   .sticky {
    background: #f66;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9;
  }
}
</style>
