<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:"GbuttonGroup",
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase();
      if (name !== "button") {
        console.warn(
          `g-button-group 的子元素应当全为g-button，但你写的是${name}`
        );
      }
    }
  }
};
</script>
<style lang="scss">
$button-height: 32px;
$font-size: 13px;
$background: #7c7;
$button-bg: #fff;
$button-active-bg: #f6f6f6;
$border-radius: 4px;
$color: #333;
$border-color: #aaa;
$border-color-hover: #777;
.g-button-group {
  display: inline-flex;
  vertical-align: middle;
  .g-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>


