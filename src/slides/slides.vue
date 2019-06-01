<template>
  <div
    class="g-slides"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <div class="g-slides-window" ref="window">
      <div class="g-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="g-slides-pages">
      <span @click="prevStep">
        <gIcon name="left" class="icon"></gIcon>
      </span>      
      <span
        v-for="n in childrenLength"
        :key="n"
        :class="{active:selectedPage === n-1}"
        @click="selectPage(n-1)"
        :data-index="n-1"
      >{{n}}</span>
      <span @click="nextStep">
        <gIcon  name="right" class="icon"></gIcon>
      </span>
      
    </div>
  </div>
</template>
<script>
import gIcon from "./../icon";
export default {
  name: "Gslides",
  props: {
    selected: {
      type: [String, Number]
    },
    autoPlay: {
      type: Boolean,
      default: false
    },
    autoPlayDaley:{
      type:Number,
      default:3000
    }
  },
  components: {
    gIcon
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
      let index = this.names.indexOf(this.selected);
      return index === -1 ? 0 : index;
    },
    names(){
      return this.effectiveItem.map(vm => vm.name);
    },
    effectiveItem() {
      return this.$children.filter(vm => vm.$options.name === "GslidesItem");
    }
  },
  mounted() {
    this.updateChildren();
    if(this.autoPlay){
      this.playAutomatically();
    }
    this.childrenLength = this.effectiveItem.length;
  },
  updated() {
    this.updateChildren();
  },
  methods: {
    prevStep() {
      this.selectPage(this.selectedPage - 1);
    },
    nextStep() {
      this.selectPage(this.selectedPage + 1);
    },
    updateChildren() {
      let currentSelected = this.getSelected(); //当前选中的项
      this.effectiveItem.forEach(vm => {
        let reverse = this.selectedPage > this.lastIndex ? false : true;
        //正向由最后一个到第一个
        if (
          this.lastIndex === this.effectiveItem.length - 1 &&
          this.selectedPage === 0
        ) {
          reverse = false;
        }
        //反向由第一个到最后一个
        if (
          this.lastIndex === 0 &&
          this.selectedPage === this.effectiveItem.length - 1
        ) {
          reverse = true;
        }
        vm.reverse = reverse;
        //this.$nextTick(() => {
        setTimeout(() => {
          vm.selected = currentSelected;
        }, 0);

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
      if (index === -1) {
        index = this.names.length - 1;
      }
      if (index === this.names.length) {
        index = 0;
      }
      this.$emit("update:selected", this.names[index]);
    },
    getSelected() {
      let first = this.effectiveItem[0];
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
        let index = this.effectiveItem.indexOf(this.getSelected());
        let newIndex = index + 1;
        this.selectPage(newIndex);
        this.timerId = setTimeout(run, this.autoPlayDaley);
      };
      //第一次延迟
      this.timerId = setTimeout(run, this.autoPlayDaley);
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
    margin-top:.6em;
    height: 1em;
    justify-content: center;
    align-items: center;
    > span {
      cursor: pointer;
      display: inline-block;
      width: 1.2em;
      height: 1.2em;
      font-size:12px;
      margin: 0 0.3em;
      padding:.4em;
      text-align:center;
      line-height:1.2em;
      border-radius: 50%;
      background: #efdbff;
      &.active {
        background: #000;
        color:#fff;
      }
    }
  }
}
</style>
