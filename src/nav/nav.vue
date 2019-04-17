<template>
  <div class="g-nav">
      {{namePath}}
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Gnav",
  props: {
    selected: {
      type: Array,
      default: () => []
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data(){
      return {
          items:[],
          namePath:[]
      }
  },
  provide() {
    return {
      root: this
    };
  },
  mounted() {
    this.listenToChildren();
  },
  updated() {
    this.updateChildren();
  },
  methods: {
    addItem(vm) {
      this.items.push(vm)
    },
    updateChildren() {
      this.items.forEach(vm => {
        if (this.selected.includes(vm.name)) {
          //修改vm的data
          vm.selected = true;
        } else {
          vm.selected = false;
        }
      });
    },
    listenToChildren() {
      this.items.forEach(vm => {
        vm.$on("add:selected", name => {
          if (this.multiple) {
            if (!this.selected.includes(name)) {
              let copy = JSON.parse(JSON.stringify(this.selected));
              copy.push(name);
              this.$emit("update:selected", copy);
            }
          } else {
            this.$emit("update:selected", [name]);
          }
        });
        if (this.selected.includes(vm.name)) {
          //修改vm的data
          vm.selected = true;
        } else {
          vm.selected = false;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.g-nav {
  display: flex;
  white-space: nowrap;
  border-bottom:1px solid #aaa;
}
</style>
