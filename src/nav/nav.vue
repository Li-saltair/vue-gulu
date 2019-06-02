<template>
  <div class="g-nav" :class="{vertical:direction === 'vertical'}">
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
    },
    direction:{
        type:String,
        default:'horizontal',
        validator(value){
            return ['horizontal','vertical'].includes(value)
        }
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
      root: this,
      vertical:this.direction === 'vertical'
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
  user-select: none;
  &.vertical{
      flex-direction: column;
      border:1px solid #e8e8e8;
  }
}
</style>
