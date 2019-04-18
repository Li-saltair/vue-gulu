<template>
  <div class="g-sub-nav" :class="{active}" v-click-outside="close">
    <span @click="toggleSubNav" class="g-sub-nav-label">
      <slot name="title"></slot>
      <span class="g-sub-nav-icon" :class="{open}">
        <Icon name="down"></Icon>
      </span>
    </span>
    <transition name="fade">
      <div class="g-sub-nav-popover" v-show="open" :class="{vertical}">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
import clickOutside from "./../cascader/click-outside";
import Icon from "./../icon";
export default {
  name: "GsubNav",
  directives: { clickOutside },
  components: {
    Icon
  },
  props: {
    name: {
      type: [String, Number],
      required: true
    }
  },
  inject: ["root", "vertical"],
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
  &-icon {
    display: inline-block;
    vertical-align: middle;
    margin-left: 1em;
    transition: all 300ms;
    &.open {
      transform: rotate(180deg);
    }
  }
  &-label {
    cursor: pointer;
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
    &.vertical {
      position: static;
      border-radius: 0;
      box-shadow: none;
    }
  }
}
.g-sub-nav .g-sub-nav .g-sub-nav-popover {
  position: absolute;
  background: #fff;
  z-index: 2;
  left: 100%;
  top: 0;
}
.g-sub-nav .g-sub-nav .g-sub-nav-popover.vertical {
  position: static;
}
.g-sub-nav .g-sub-nav .g-sub-nav-icon {
  display: none;
}
.icon {
  width: 0.8em;
  height: 0.8em;
  fill: #722ed1;
}
.g-nav > .g-sub-nav.active::after {
  content: "";
  position: absolute;
  bottom: 1px;
  left: 0;
  border-bottom: 2px solid #722ed1;
  width: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>