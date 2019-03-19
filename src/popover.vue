<template>
  <div class="wrapper" @click.stop="xxx">
    <div class="content" ref="popoverWrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <span ref="popoverButton">
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
  mounted() {},
  computed: {},
  methods: {
    xxx() {
      this.visible = !this.visible;
      if (this.visible) {
        this.$nextTick(() => {
          document.body.appendChild(this.$refs.popoverWrapper);
          let {
            width,
            height,
            top,
            left
          } = this.$refs.popoverButton.getBoundingClientRect();
          console.log(this.$refs.popoverWrapper);
          let scrollHeight = window.scrollY;
          let scrollX = window.scrollX;
          this.$refs.popoverWrapper.style.top = `${top + scrollHeight}px`;
          this.$refs.popoverWrapper.style.left = `${left + scrollX}px`;
          let eventHandler = () => {
            this.visible = false;
            //弹出消失之后需要移除监听器
            document.removeEventListener("click", eventHandler);
          };
          document.addEventListener("click", eventHandler);
        });
      } else {
        console.log("vm 隐藏");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  display: inline-block;
  position: relative;
}
.content {
  position: absolute;
  border: 1px solid #f00;
  transform: translateY(-100%);
}
</style>
