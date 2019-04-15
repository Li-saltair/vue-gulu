<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "Gcollapse",
  data() {
    return {
      eventBus: new Vue()
    };
  },
  props: {
    single: {
      type: Boolean,
      default: false
    },
    select: {
      type: Array
    }
  },
  provide() {
    //if (this.single) {
    return {
      eventBus: this.eventBus
    };
    //}
  },
  mounted() {
    this.eventBus.$emit("update:select", this.select);
    //子组件会传递选择事件
    this.eventBus.$on("update:removeSelect", name => {
      let selectCopy = JSON.parse(JSON.stringify(this.select))
      let currentName = selectCopy.indexOf(name);
      selectCopy.splice(currentName, 1);
      this.$emit("update:select", selectCopy);
      this.eventBus.$emit("update:select", selectCopy);
    });
    this.eventBus.$on("update:addSelect", name => {
      let selectCopy = JSON.parse(JSON.stringify(this.select))
      if (this.single) {
        selectCopy = [name];
      } else {
        selectCopy.push(name);
      }
      this.$emit("update:select", selectCopy);
      this.eventBus.$emit("update:select", selectCopy);
    });
    //向下传递single的值
    this.$children.forEach(vm => {
      vm.singled = this.single;
    });
  }
};
</script>
<style lang="scss" scoped>
$border-color: #ccc;
$border-radius: 4px;
.collapse {
  border: 1px solid $border-color;
  border-radius: $border-radius;
  border-bottom: none;
}
</style>
