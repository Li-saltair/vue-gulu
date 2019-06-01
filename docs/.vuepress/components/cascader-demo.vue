<template>
  <div>
    <g-cascader :source.sync="source" popover-height="300px" :selected.sync="selected" @update:selected="changeData" :load-data="loadData"></g-cascader>
  </div>
</template>
<script>
import Cascader from "../../../src/cascader/cascader";
import CascaderItem from "../../../src/cascader/recursive-item";
export default {
  components: {
    "g-cascader": Cascader
  },
  data(){
    return {
      source: [],
      selected: '2',
    }
  }
};
</script>
<style >
  .icon{
    fill:#722ed1;
  }
</style>


