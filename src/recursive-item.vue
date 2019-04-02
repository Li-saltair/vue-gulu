<template>
  <div class="recursive-item">
    <div class="left">
      <div
        class="level-content"
        v-for="leftItem in sourceItem"
        :key="leftItem.label"
        @click="leftSelected=leftItem"
      >{{leftItem.label}}</div>
    </div>
    <div class="right" v-if="rightItems">
      <recursiveItem :sourceItem="rightItems"></recursiveItem>
    </div>
  </div>
</template>
<script>
export default {
  name: "recursiveItem",
  props: {
    sourceItem: {
      type: Array
    }
  },
  data() {
    return {
      leftSelected: null
    };
  },
  computed: {
    rightItems() {
      if (this.leftSelected && this.leftSelected.children) {
        return this.leftSelected.children;
      } else {
        return null;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.recursive-item {
  display: flex;
  .left {
    border: 1px solid #f66;
  }
  .right {
    margin-top: -1px;
  }
  .level-content{
    padding:2px;
  }
}
</style>

