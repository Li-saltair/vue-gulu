<template>
  <div class="recursive-item">
    {{sourceItem.label}}
    <div v-if="sourceItem.children">
      <recursive-item v-for="item in sourceItem.children" :key="item.value" :sourceItem="item"></recursive-item>
    </div>
  </div>
</template>
<script>
export default {
  name: "recursiveItem",
  props: {
    sourceItem: {
      type: Object
    }
  }
};
</script>
<style lang="scss" scoped>
.recursive-item {
  margin: 4px;
  border: 1px solid #f66;
}
</style>

