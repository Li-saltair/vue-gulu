<template>
  <div>
    <g-popover position="left">
      <template>
        <div>
          <g-button>我是触发按钮</g-button>
        </div>
      </template>
      <template v-slot:content>
        <div>
          提示内容是我
        </div>
      </template>
    </g-popover>

    <g-popover trigger="hover">  
      <template>
        <div>
          <g-button>默认方向</g-button>
        </div>
      </template>
      <template v-slot:content>
        <div>
          提示内容是我
        </div>
      </template>
    </g-popover>

    <g-popover position="bottom">
      <template>
        <div>
          <g-button>click me!</g-button>
        </div>
      </template>
      <template v-slot:content>
        <div>
          提示内容是我
        </div>
      </template>
    </g-popover>

    <g-popover position="right">
      <template>
        <div>
          <g-button>right trigger</g-button>
        </div>
      </template>
      <template v-slot:content>
        <div>
          提示内容是我
        </div>
      </template>
    </g-popover>
  </div>
 
</template>
<script>
import Popover from "../../../src/popover";
import Button from "../../../src/button/button"
export default {
  components: {
    "g-popover": Popover,
    "g-button": Button,
  },
};
</script>
<style >
  .icon{
    fill:#722ed1;
  }
</style>


