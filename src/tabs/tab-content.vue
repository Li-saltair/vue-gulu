<template>
  <div class="tabs-content" v-if="active">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "g-tabsContent",
  data(){
      return {
          active:false
      }
  },
  props: {
    name: {
      type: String | Number,
      required: true
    }
  },
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:selected", name => {
      this.active = name === this.name
    });
  }
};
</script>
<style lang="scss" scoped>
.tabs-content {
    &.active{
      background:#7b7;
  }
}
</style>