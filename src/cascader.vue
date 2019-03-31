<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <!-- <div v-for="item in source" :key="item.value">
        <recursive-item :sourceItem="item"></recursive-item>
      </div> -->
      <div>{{source[0].label}}</div>
      <div>{{source[1].label}}</div>
    </div>
  </div>
</template>
<script>
import recursiveItem from "./recursive-item";
export default {
  name: "gCascader",
  components: { recursiveItem },
  props: {
    source: {
      type: Array,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
@import "var";
.cascader {
    .trigger{
        width:100px;
        height:32px;
        border:1px solid #7c7;
    }
    .popover{
        height:200px;
        width:100px;
        border:1px solid #77c;
    }
}
</style>
