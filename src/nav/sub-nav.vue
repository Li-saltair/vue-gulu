<template>
  <div class="g-sub-nav">
    <span @click="toggleSubNav">
      <slot name="title"></slot>
    </span>
    <div class="g-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "GsubNav",
  data() {
    return {
      open: false
    };
  },
  methods:{
      toggleSubNav(){
          this.open = !this.open
      }
  }
};
</script>

<style lang="scss" scoped>
@import "./../var";
.g-sub-nav {
  position: relative;
  > span{
      display:inline-block;
      vertical-align: middle;
      padding:10px 20px;
  }
  &-popover {
    position: absolute;
    white-space: nowrap;
    background: #fff;
    top: 100%;
    margin-top:1px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
    border-radius:$border-radius;
  }
}
.g-sub-nav .g-sub-nav .g-sub-nav-popover{
    position: absolute;
    left:100%;
    top:0;
}
</style>