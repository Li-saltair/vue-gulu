<template>
  <div class="wrapper" @click="xxx">
    <div class="content" v-if='visible'>
      <slot></slot>
    </div>
    <slot name="trigger"></slot>
  </div>
</template>
<script>
export default {
  name: "GPopover",
  data() {
    return {
      visible: false
    };
  },
  methods:{
      xxx(){
          this.visible = !this.visible
      }
  }
};
</script>
<style lang="scss" scoped>
.wrapper{
    display: inline-block;
    position:relative;
    .content{
        position:absolute;
        border:1px solid #f00;
        top:0;
        left:0;
    }
}
</style>
