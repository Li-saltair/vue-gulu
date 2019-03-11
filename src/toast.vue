<template>
  <div class="toast" ref="toast" :class="toastClasses">
    <div class="message">
      <slot v-if="!enabledHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <span v-if="closeButton" class="close" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>
<script>
export default {
  name: "G-toast",
  props: {
    autoClose: {
      type: [Boolean, Number],
      default: 5,
      validator(value) {
        return value === false || typeof value === "number";
      }
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: "关闭",
          callback: undefined
        };
      }
    },
    enabledHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        var positionValue = ["top", "bottom", "middle"];
        return positionValue.includes(value);
      }
    }
  },
  mounted() {
    this.updateStyles();
    this.execAutoClose();
  },
  computed: {
    toastClasses() {
      return {
        [`position-${this.position}`]: true
      };
    }
  },
  methods: {
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoClose * 1000);
      }
    },
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height =
          this.$refs.toast.getBoundingClientRect().height + "px";
      });
    },
    close() {
      this.$el.remove();
      this.$emit("close");
      this.$destroy();
    },
    /*log() {
      console.log("loglog");
    },*/
    onClickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this); //this === toast实例
      }
    }
  }
};
</script>
<style lang="scss">
$font-size: 14px;
$height: 40px;
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translate(-50%, 100%);
  }
  100% {
    opacity: 100%;
    transform: translate(-50%, 0%);
  }
}
.toast {
  animation: fadeIn 1s;
  position: fixed;
  display: flex;
  min-height: $height;
  padding: 0 20px;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  left: 50%;
  color: #fff;
  transform: translate(-50%, 0%);
  border-radius: 4px;
  font-size: $font-size;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.05);
  max-width: 400px;
  line-height: 1.8;

  .message {
    padding: 6px 0;
  }
  .close {
    padding-left: 16px;
    flex-shrink: 0;
    cursor: pointer;
  }
  .line {
    border-left: 1px solid #aaa;
    margin-left: 16px;
  }
  &.position-top {
    top: 2px;
    transform: translate(-50%, 0%);
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &.position-bottom {
    bottom: 2px;
    transform: translate(-50%, 0%);
  }
}
</style>

