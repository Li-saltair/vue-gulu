<template>
  <div
    class="g-slides"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
  >
    <div class="g-slides-window" ref="window">
      <div class="g-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="g-slides-pages">
      <span
        v-for="n in childrenLength"
        :key="n"
        :class="{active:selectedPage === n-1}"
        @click="selectPage(n-1)"
      ></span>
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
  data() {
    return {
      childrenLength: 0,
      lastIndex: undefined, //记录上一次选中的索引值
      timerId: undefined,
      //兼容手机端
      touchStart: undefined, //触摸起点
      touchEnd: undefined
    };
  },
  computed: {
    //选中的页码数对应的内容
    selectedPage() {
      let slideItems = this.$children.map(vm => vm.name);
      let index = slideItems.indexOf(this.selected)
      return index === -1 ? 0: index
    }
  },
  mounted() {
    this.updateChildren();
    //this.playAutomatically();
    this.childrenLength = this.$children.length;
  },
  updated() {
    this.updateChildren();
  },
  methods: {
    updateChildren() {
      let slideItems = this.$children.map(vm => vm.name);
      let currentSelected = this.getSelected(); //当前选中的项
      this.$children.forEach(vm => {
        let reverse = this.selectedPage > this.lastIndex ? false : true;
        //正向由最后一个到第一个
        if (
          this.lastIndex === slideItems.length - 1 &&
          this.selectedPage === 0
        ) {
          reverse = false;
        }
        //反向由第一个到最后一个
        if (
          this.lastIndex === 0 &&
          this.selectedPage === slideItems.length - 1
        ) {
          reverse = true;
        }
        vm.reverse = reverse;
        //this.$nextTick(() => {
          setTimeout(()=>{
            vm.selected = currentSelected;
          },0)
          
        //});
      });
    },
    onMouseEnter() {
      this.pausePlay();
    },
    onMouseLeave() {
      this.playAutomatically();
    },
    onTouchStart(e) {
      this.pausePlay();
      this.touchStart = e.touches[0]; //第一个手指的位置
    },
    onTouchMove(e) {},
    onTouchEnd(e) {
      this.touchEnd = e.changedTouches[0];
      let { clientX: x1, clientY: y1 } = this.touchStart;
      let { clientX: x2, clientY: y2 } = this.touchEnd;
      //计算滑动角度
      let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      let deltaY = Math.abs(y1 - y2);
      let rate = distance / deltaY;
      if (rate < 2) {
        return;
      } else {
        //在滑动轮播
        if (x2 > x1) {
          //向右
          this.selectPage(this.selectedPage - 1);
        } else {
          //向左
          this.selectPage(this.selectedPage + 1);
        }
      }
      this.$nextTick(() => {
        this.playAutomatically();
      });
    },
    selectPage(index) {
      this.lastIndex = this.selectedPage;
      let slideItems = this.$children.map(vm => vm.name);
      if (index === -1) {
        index = slideItems.length - 1;
      }
      if (index === slideItems.length) {
        index = 0;
      }
      this.$emit("update:selected", slideItems[index]);
    },
    getSelected() {
      let first = this.$children[0];
      return this.selected || first.name;
    },
    stopAutoPlay(timer) {
      clearTimeout(timer);
    },
    playAutomatically() {
      if (this.timerId) {
        return;
      }
      let run = () => {
        let slideItems = this.$children.map(vm => vm.name);
        let index = slideItems.indexOf(this.getSelected());
        let newIndex = index + 1;
        this.selectPage(newIndex);
        this.timerId = setTimeout(run, 3000);
      };
      //第一次延迟
      this.timerId = setTimeout(() => {
        run();
      }, 3000);
    },
    pausePlay() {
      window.clearTimeout(this.timerId);
      this.timerId = undefined;
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
  &-pages {
    display: flex;
    height: 1em;
    justify-content: center;
    align-items: center;
    > span {
      cursor: pointer;
      width: 0.8em;
      height: 0.8em;
      margin: 0 0.3em;
      border-radius: 50%;
      background: #7c7;
      &.active {
        background: #f66;
      }
    }
  }
}
</style>
