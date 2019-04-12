<template>
  <div class="g-slides" style="width:200px;height:150px;">
    <div class="g-slides-window" ref="window">
      <div class="g-slides-wrapper">
        <slot></slot>
      </div>
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
  mounted() {
    this.updateChildren();
    this.playAutomatically();
  },
  updated() {
    this.updateChildren();
    //this.playAutomatically()
  },
  methods: {
    updateChildren() {
      let first = this.$children[0];
      let select = this.selected || first.name;
      this.$children.forEach(vm => {
        vm.selected = select;
      });
    },
    getSelected() {
      let first = this.$children[0];
      return this.selected || first.name;
    },
    stopAutoPlay(timer){
        clearTimeout(timer)
    },
    playAutomatically() {
      let slideItems = this.$children.map(vm => vm.name);
      let index = slideItems.indexOf(this.getSelected());
      let run = () => {
        console.log(index);
        if (index === slideItems.length) {
          index = 0;
        }
        this.$emit("update:selected", slideItems[index + 1]);
        setTimeout(run, 3000);
        index++;
      };
      //第一次延迟
      setTimeout(()=>{run()},3000)
      //   setInterval(() => {
      //     if (index === slideItems.length) {
      //       index = 0;
      //     }
      //     this.$emit("update:selected", slideItems[index + 1]);
      //     index++;
      //   }, 2000);
    }
  }
};
</script>
<style lang="scss" scoped>
.g-slides {
  display: inline-block;
  &-window {
  }
  &-wrapper {
    position: relative;
  }
}
</style>
