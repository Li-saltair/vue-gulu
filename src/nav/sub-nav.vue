<template>
  <div class="g-sub-nav" :class="{active}" v-click-outside="close">
    <span @click="toggleSubNav">
      <slot name="title"></slot>
    </span>
    <div class="g-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import clickOutside from "./../cascader/click-outside";
export default {
  name: "GsubNav",
  directives: { clickOutside },
  props: {
    name: {
      type: [String, Number],
      required: true
    }
  },
  inject: ["root"],
  data() {
    return {
      open: false
    };
  },
  computed: {
    active() {
      return this.root.namePath.includes(this.name) ? true : false;
    }
  },
  methods: {
    toggleSubNav() {
      this.open = !this.open;
    },
    updateNamePath() {
      this.root.namePath.unshift(this.name);
      if (this.$parent.updateNamePath) {
        this.$parent.updateNamePath();
      }
    },
    close() {
      this.open = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./../var";
.g-sub-nav {
  position: relative;
  &.active {
    &::after {
      content: "";
      position: absolute;
      bottom: 1px;
      left: 0;
      border-bottom: 2px solid #722ed1;
      width: 100%;
    }
  }
  > span {
    display: inline-block;
    vertical-align: middle;
    padding: 10px 20px;
  }
  &-popover {
    position: absolute;
    white-space: nowrap;
    background: #fff;
    top: 100%;
    margin-top: 1px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
    border-radius: $border-radius;
  }
}
.g-sub-nav .g-sub-nav .g-sub-nav-popover {
  position: absolute;
  left: 100%;
  top: 0;
}
</style>