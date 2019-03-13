<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
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
  data() {
    return {
      eventBus: new Vue()
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  created() {},
  mounted() {
    if (this.$children.length <= 0) {
      console &&
        console.warn &&
        console.warn("tabs必须以tab-nav和tab-body为直接子组件");
    } else {
      this.$children.forEach(vm => {});
      this.$children.forEach(vm => {
        if (vm.$options.name === "g-tabsNav") {
          vm.$children.forEach(item => {
            if (
              item.$options.name === "g-tabsItem" &&
              item.name === this.selected
            ) {
              this.eventBus.$emit("update:selected", this.selected, item);
            }
          });
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.tabs {
}
</style>
