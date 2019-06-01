<template>
  <div>
    <g-collapse :select.sync="selectedTab">
      <g-collapse-item title="标题1" name="1">panel one</g-collapse-item>
      <g-collapse-item title="标题2" name="2">panel two</g-collapse-item>
      <g-collapse-item title="标题3" name="3">对接客户的上班的时间</g-collapse-item>
    </g-collapse>
  </div>
</template>
<script>
import Collapse from "../../../src/collapse/collapse";
import CollapseItem from "../../../src/collapse/collapse-item.vue";
export default {
  components: {
    "g-collapse": Collapse,
    "g-collapse-item": CollapseItem
  },
  data() {
    return {
      selectedTab:["1","2"],
    };
  }
};
</script>
<style >
.icon {
  fill: #722ed1;
}
</style>


