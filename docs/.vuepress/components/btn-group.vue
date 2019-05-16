<template>
  <div>
    <g-button-group>
      <g-button icon="left">左按钮</g-button>
      <g-button>button</g-button>
      <g-button icon="right" icon-position="right">右侧按钮</g-button>
    </g-button-group>
    <br>
    <br>
    <g-button-group>
      <g-button icon="left">默认按钮</g-button>
      <g-button icon="right" icon-position="right">右侧按钮</g-button>
    </g-button-group>
    <br>
    <br>
    <g-button-group>
      <g-button icon="left">默认按钮</g-button>
      <g-button icon="setting">示意按钮</g-button>
      <g-button icon="info">按钮</g-button>
      <g-button icon="right" icon-position="right">右侧按钮</g-button>
    </g-button-group>
  </div>
</template>
<script>
import ButtonGroup from "../../../src/button/button-group";
import Button from "../../../src/button/button";
export default {
  components: {
    "g-button-group": ButtonGroup,
    "g-button": Button
  }
};
</script>
<style >
.icon {
  fill: #722ed1;
}
</style>


