<template>
  <transition name="slide">
    <div class="g-sider" v-if="visible">
      <slot></slot>
      <button @click="visible = !visible">Close</button>
    </div>
  </transition>
</template>
<script>
export default {
  name: "G-Sider",
  data() {
    return {
      visible: true
    };
  },
  methods: {
  }
};
</script>
<style lang="scss" scoped>
.g-sider {
  position: relative;
  > button {
    position: absolute;
    right: 10px;
    top: 10px;
  }
}
.g-slide-enter-active,
.g-slide-leave-active {
  transition: all 0.5s;
}
.g-slide-enter, .g-slide-leave-to {
  margin-left: -200px;
}
</style>

