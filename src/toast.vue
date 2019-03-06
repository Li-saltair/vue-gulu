<template>
  <div class="toast">
      <slot></slot>
  </div>
</template>
<script>

export default {
    name:'G-toast',
};
</script>
<style lang="scss">
    .toast{
        $font-size:14px;
        position:fixed;
        top:0;
        padding:10px 20px;
        background:rgba(0,0,0,.3);
        left:50%;
        color:#fff;
        transform: translateX(-50%);
        border-radius:4px;
        font-size:$font-size;
        box-shadow: 0 0 3px 0 rgba(0,0,0,.05);
    }
</style>

