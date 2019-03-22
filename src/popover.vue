<template>
  <div class="wrapper" @click="popClick" ref="popover">
    <div class="content" ref="popoverWrapper" v-if="visible">
      <slot name="content"></slot>
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
  methods: {
    position() {
      document.body.appendChild(this.$refs.popoverWrapper);
      let {
        width,
        height,
        top,
        left
      } = this.$refs.popoverButton.getBoundingClientRect();

      let scrollHeight = window.scrollY;
      let scrollX = window.scrollX;
      this.$refs.popoverWrapper.style.top = `${top + scrollHeight}px`;
      this.$refs.popoverWrapper.style.left = `${left + scrollX}px`;
    },
    onClickDocument(e) {
      //当触发事件是弹出的部分，那么什么也不做
      if (
        this.$refs.popover &&
        (this.$refs.popover === e.target ||
          this.$refs.popoverWrapper.contains(e.target))
      ) {
        return;
      }
      this.close();
      // else {
      //   this.visible = false;
      //   //弹出消失之后需要移除监听器
      //   document.removeEventListener("click", eventHandler);
      // }
    },
    close() {
      this.visible = false;
      document.removeEventListener("click", this.onClickDocument);
    },
    open() {
      this.visible = true;
      //this.$nextTick(() => {
      setTimeout(() => {
        this.position();
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
.wrapper {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content {
  position: absolute;
  border: 1px solid #f00;
  transform: translateY(-100%);
}
</style>
