<template>
  <div>
    <g-input/>
    <g-input readonly/>
    <g-input disabled/>
    <br>
    <br>
    <g-input error="请重新填写"/>
    <g-input value="详情"/>
  </div>
 
</template>
<script>
import Input from "../../../src/input";
export default {
  components: {
    "g-input": Input
  },
};
</script>
<style >
  .icon{
    fill:#722ed1;
  }
</style>


