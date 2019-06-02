<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button icon="setting">icon按钮</g-button>
    <g-button loading>loading按钮</g-button>
    <g-button disabled>不可用按钮</g-button>
    <g-button icon="right" icon-position="right">icon在右边的按钮</g-button>
    <g-button icon="info" @click="load = true" :loading="load">点击后会loading</g-button>
  </div>
 
</template>
<script>
import Button from "../../../src/button/button";
export default {
  components: {
    "g-button": Button
  },
  data(){
    return {
      load:false
    }
  }
};
</script>
<style >
  .icon{
    fill:#722ed1;
  }
</style>


