<template>
  <div class="g-sticky" ref="wrapper">
    <slot></slot>
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
    this.getTop();
    //window.addEventListener("scroll", () => {});
  },
  beforeDestroy() {
    //window.removeEventListener("scroll", () => {});
  },
  methods: {
    getTop() {
      let { top } = this.$refs.wrapper.getBoundingClientRect();
      let domTop = top + window.scrollY;
      return domTop;
    }
  }
};
</script>
<style lang="scss" scoped>
.g-sticky {
  border: 1px solid #f66;
}
</style>
