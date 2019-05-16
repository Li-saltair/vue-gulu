<template>
  <div>
    <g-toast :autoClose="20" >点我jjjjjjjj有惊喜</g-toast>
  </div>
 
</template>
<script>
//import "vue"
import Plugin from '../../../src/plugin' //toast
//vue.use(Plugin)
import Button from "../../../src/button/button"
import Toast from "../../../src/toast"
export default {
  components: {
    "g-button": Button,
    "g-toast": Toast
  },
  data(){
    return {
      
    }
  }
};
</script>
<style >
  .icon{
    fill:#7c7;
  }
</style>


