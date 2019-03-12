<template>
  <div class="tabs-item" @click="xxx" :class="active === true ? 'active' :''">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "g-tabsItem",
  data() {
    return {
      active: false
    };
  },
  props: {
    name: {
      type: String | Number,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:selected", name => {
      this.active = name === this.name
    });

  },
  methods: {
    xxx() {
      this.eventBus.$emit("update:selected", this.name);
    }
  }
};
</script>
<style lang="scss" scoped>
.tabs-item {
  flex-shrink: 0;
  padding: 0 2em;
  border: 1px solid #7c7;
  &.active{
      background:#7b7;
  }
}
</style>