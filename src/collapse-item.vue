<template>
  <div class="collapse-item">
    <h5 class="title">{{title}}</h5>
    <div class="content" v-if='open'>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "GCollapseItem",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data(){
    return {
        open:false
    }
  }
};
</script>
<style lang="scss" scoped>
$border-radius: 4px;
$border-color: #ccc;
.collapse-item {
  > .title {
    display: flex;
    align-items: center;
    padding:1em;
    font-size: 14px;
    font-weight: normal;
    margin:0;
    margin-top: -1px;
    border: 1px solid $border-color;
    margin-left: -1px;
    margin-right: -1px;
  }
  > .content{
      padding:.5em;
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    > .title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
}
</style>
