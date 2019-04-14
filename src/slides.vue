<template>
  <div class="g-slides">
    <div class="g-slides-window" ref="window">
      <div class="g-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="g-slides-pages">
      <span v-for="n in childrenLength" :key="n" :class="{active:selectedPage === n-1}" @click="selectPage(n-1)">{{n}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Gslides",
  props: {
    selected: {
      type: [String, Number]
    },
    autoPlay: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      childrenLength:0,
      lastIndex:undefined,    //记录上一次选中的索引值
    }
  },
  computed:{
    //选中的页码数对应的内容
    selectedPage(){
      let slideItems = this.$children.map(vm => vm.name);
      return slideItems.indexOf(this.selected) || 0
    }
  },
  mounted() {
    this.updateChildren();
    //this.playAutomatically();
    this.childrenLength = this.$children.length
  },
  updated() {
    this.updateChildren();
  },
  methods: {
    updateChildren() {
      let currentSelected = this.getSelected(); //当前选中的项
      this.$children.forEach(vm => {       
        vm.reverse = this.selectedPage > this.lastIndex ? false : true;
        this.$nextTick(()=>{
            vm.selected = currentSelected;
        })
      });
    },
    selectPage(index){
      this.lastIndex = this.selectedPage
      let slideItems = this.$children.map(vm => vm.name);
      this.$emit("update:selected",slideItems[index])
    },
    getSelected() {
      let first = this.$children[0];
      return this.selected || first.name;
    },
    stopAutoPlay(timer) {
      clearTimeout(timer);
    },
    playAutomatically() {
      let slideItems = this.$children.map(vm => vm.name);
      let index = slideItems.indexOf(this.getSelected());
      let run = () => {
        // if (index === slideItems.length) {
        //   index = 0;
        // }
        // //传递事件以修改最外层的selected
        // this.$emit("update:selected", slideItems[index + 1]);
        // setTimeout(run, 3000);
        let newIndex = index - 1;
        if (newIndex === slideItems.length) {
          newIndex = 0;
        }

        if (newIndex === -1) {
          newIndex = slideItems.length;
        }
        this.selectPage(newIndex)
        setTimeout(run, 3000);
      };
      //第一次延迟
      setTimeout(() => {
        run();
      }, 3000);
    }
  }
};
</script>
<style lang="scss" scoped>
.g-slides {
  &-window {
    overflow: hidden;
  }
  &-wrapper {
    position: relative;
  }
  &-pages{
    display: flex;
    > span{
      cursor: pointer;
      &.active{
      background:#f66
    }
    }
    
  }
}
</style>
