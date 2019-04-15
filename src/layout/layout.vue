<template>
  <div class="layout" :class="layoutClasses">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "G-Layout",
  data() {
    return {
      layoutClasses: {
        hasSider: false
      }
    };
  },
  mounted() {
    this.$children.forEach(vm => {
      if (vm.$options.name === "G-Sider") {
        this.layoutClasses.hasSider = true;
      }
    });
  }
};
</script>
<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  flex-grow:1;
  &.hasSider{
     flex-direction: row; 
  }
}

</style>

