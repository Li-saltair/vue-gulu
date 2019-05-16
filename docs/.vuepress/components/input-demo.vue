<template>
  <div>
    <g-input/>
    <g-input readonly/>
    <g-input disabled/>
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


