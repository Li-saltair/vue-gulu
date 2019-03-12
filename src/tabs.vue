<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "gTabs",
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return value === "horizontal" || value === "vertical";
        //or return ['horizontal','vertical'].indexOf(value) >= 0
      }
    }
  },
  created() {
    //this.$emit('update:selected',xxx)
  }
};
</script>
<style lang="scss" scoped>
.tabs {
}
</style>
