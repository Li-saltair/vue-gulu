<template>
  <div class="g-nav-item" :class="{selected}" @click="onClick">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GnavItem",
  props: {
    name: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      selected: false
    };
  },
  inject:['root'],
  mounted(){
      this.root.addItem(this)
  },
  methods: {
    onClick() {
      this.$emit("add:selected", this.name);
    }
  }
};
</script>
<style lang="scss" scoped>
.g-nav-item {
  padding: 10px 20px;
  &.selected {
      position:relative;
    &::after{
        content:'';
        position: absolute;
        bottom:1px;
        left:0;
        border-bottom:2px solid #000;
        width:100%;
    }
  }
}
.g-sub-nav .g-nav-item.selected{
    background:#7e7;
    color:#666;
    &::after{
        display:none
    }
}
</style>