<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popover" v-if="popoverVisible">
      <recursive-item :sourceItem="source"></recursive-item>
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
  },
  data() {
    return {
      popoverVisible: false
    };
  },
  computed: {}
};
</script>
<style lang="scss" scoped>
@import "var";
.cascader {
  .trigger {
    width: 100px;
    height: 32px;
    border: 1px solid #7c7;
  }
  .popover {
    height: 200px;
  }
}
</style>
