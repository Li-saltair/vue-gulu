<template>
  <div class="wrapper" @click="popClick" ref="popover">
    <div
      class="content"
      ref="popoverWrapper"
      v-if="visible"
      :class="{[`position-${position}`]:true}"
    >
      <slot name="content" :close="close"></slot>
    </div>
    <span ref="popoverButton" style="display:inline-block">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: "GPopover",
  data() {
    return {
      visible: false
    };
  },
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "left", "right", "bottom"].indexOf(value) >= 0;
      }
    },
    trigger: {
      type: String,
      default: "click",
      validator(value) {
        return ["click", "hover"].indexOf(value) >= 0;
      }
    }
  },
  computed: {
    openEvent() {
      if (this.trigger == "click") {
        return "click";
      } else {
        return "mouseenter";
      }
    },
    closeEvent() {
      if (this.trigger == "click") {
        return "click";
      } else {
        return "mouseleave";
      }
    }
  },
  mounted() {
    if(this.trigger === 'click'){
      this.$refs.popover.addEventListener('click',this.onClick)
    } else {
      this.$refs.popover.addEventListener('mouseenter',()=>{
        this.open()
      })
      this.$refs.popover.addEventListener('mouseleave',()=>{
        this.close()
      })
    }
  },
  destroyed(){
    if(this.trigger === 'click'){
      this.$refs.popover.removeEventListener('click',this.onClick)
    } else {
      this.$refs.popover.removeEventListener('mouseenter',()=>{
        this.open()
      })
      this.$refs.popover.removeEventListener('mouseleave',()=>{
        this.close()
      })
    }
  },
  methods: {
    positionContent() {
      const { popoverWrapper, popoverButton } = this.$refs;
      document.body.appendChild(popoverWrapper);
      const {
        width,
        height,
        top,
        left
      } = this.$refs.popoverButton.getBoundingClientRect();
      const scrollHeight = window.scrollY;
      const scrollX = window.scrollX;
      const { height: height2 } = popoverWrapper.getBoundingClientRect();
      let positions = {
        top: {
          top: top + scrollHeight,
          left: left + scrollX
        },
        left: {
          top: top + scrollHeight - Math.abs(height2 - height) / 2,
          left: left + scrollX
        },
        right: {
          top: top + scrollHeight - Math.abs(height2 - height) / 2,
          left: left + width + scrollX
        },
        bottom: {
          left: left + scrollX,
          top: top + height + scrollHeight
        }
      };
      popoverWrapper.style.left = positions[this.position].left + "px";
      popoverWrapper.style.top = positions[this.position].top + "px";
    },
    onClickDocument(e) {
      //当触发事件是弹出的部分，那么什么也不做
      if (
        this.$refs.popover &&
        (this.$refs.popover === e.target ||
          this.$refs.popover.contains(e.target))
      ) {
        return;
      }
      if (
        this.$refs.popoverWrapper &&
        (this.$refs.popoverWrapper === e.target ||
          this.$refs.popoverWrapper.contains(e.target))
      ) {
        return;
      }
      this.close();
    },
    close() {
      this.visible = false;
      document.removeEventListener("click", this.onClickDocument);
    },
    open() {
      this.visible = true;
      //this.$nextTick(() => {
      setTimeout(() => {
        this.positionContent();
        document.addEventListener("click", this.onClickDocument);
      }, 0);

      //});
    },
    popClick(event) {
      if (this.$refs.popoverButton.contains(event.target)) {
        if (this.visible === true) {
          this.close();
        } else {
          this.open();
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$border-color: #ccc;
$border-radius: 4px;
.wrapper {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  padding: 0.4em 0.8em;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  font-size: 12px;
  max-width: 26em;
  background: #fff;
  &::before,
  &::after {
    position: absolute;
    content: "";
    border: 10px solid transparent;
  }
  &.position-top {
    margin-top: -10px;
    transform: translateY(-100%);
    &::before,
    &::after {
      position: absolute;
      top: 100%;
      content: "";
      border-top: 10px solid #ccc;
      border-bottom:none;
    }
    &::after {
      top: calc(100% - 1px);
      border-top: 10px solid #fff;
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before,
    &::after {
      position: absolute;
      bottom: 100%;
      content: "";
      border-bottom: 10px solid #ccc;
      border-top:none;
    }
    &::after {
      bottom: calc(100% - 1px);
      border-bottom: 10px solid #fff;
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before,
    &::after {
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      border-right:none;
    }
    &::before {
      border-left: 10px solid #ccc;
    }
    &::after {
      left: calc(100% - 1px);
      border-left: 10px solid #fff;
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
      border-left:none
    }
    &::before {
      right: 100%;
      border-right: 10px solid #ccc;
    }
    &::after {
      right: calc(100% - 1px);
      border-right: 10px solid #fff;
    }
  }
}
</style>
