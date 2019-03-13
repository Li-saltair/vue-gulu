<template>
  <div class="tabs-nav">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "g-tabsNav",
  inject: ["eventBus"],
  data() {
    return {
      x: false
    };
  },
  mounted() {
    this.eventBus.$on("update:selected", (item, vm) => {
      let { width, height, top, left } = vm.$el.getBoundingClientRect();
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.left = `${left}px`;
    });
  }
};
</script>
<style lang="scss" scoped>
$tab-height: 40px;
.tabs-nav {
  position: relative;
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  align-items: center;
  line-height: $tab-height;
  border-bottom:1px solid #ccc;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid #7c7;
    transition: all 0.3s;
  }
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>