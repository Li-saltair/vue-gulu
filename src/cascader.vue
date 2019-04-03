<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popover" v-if="popoverVisible">
      <recursive-item :sourceItem="source" :height="popoverHeight" @update:selected="onUpdate" :selected="selected" ></recursive-item>
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
    },
    popoverHeight: {
      type: String
    },
    selected: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      popoverVisible: false
    };
  },
  methods:{
    onUpdate(value){
      this.$emit('update:selected',value)
    }
  }
};
</script>
<style lang="scss" scoped>
@import "var";
.cascader {
  position: relative;
  .trigger {
    width: 100px;
    height: 32px;
    border: 1px solid #7c7;
  }
  .popover {
    position: absolute;
    min-height: 150px;
    background: #fff;
    z-index: 99;
    top: 100%;
    left: 0;
    box-shadow: $box-shadow;
  }
}
</style>
