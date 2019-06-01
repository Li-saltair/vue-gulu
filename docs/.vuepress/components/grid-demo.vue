<template>
  <div>
    <g-row gutter="8">
      <g-col span="12">12</g-col>
      <g-col span="12">12</g-col>
    </g-row>
    <br>
    <br>
    <g-row align="center" gutter="6">
      <g-col span="4">4</g-col>
      <g-col span="4">4</g-col>
      <g-col span="4">4</g-col>
      <g-col span="4">4</g-col>
      <g-col span="4">4</g-col>
      <g-col span="4">4</g-col>
    </g-row>
    <br>
    <br>
    <g-row align="center" gutter="6">
      <g-col span="1">1</g-col>
      <g-col span="5">5</g-col>
      <g-col span="6">6</g-col>
      <g-col span="4">4</g-col>
      <g-col span="8">8</g-col>
    </g-row>
  </div>
 
</template>
<script>
import Row from "../../../src/grid/row";
import Col from "../../../src/grid/col";
export default {
  components: {
    "g-row": Row,
    "g-col": Col
  },
};
</script>
<style >
  .icon{
    fill:#722ed1;
  }
  .g-row{
    background: #7c7;
  }
  .g-col:nth-child(even){
    background:#d3adf7;
    height:60px;
    text-align:center;
    line-height:60px;
  }
  .g-col:nth-child(odd){
    background:#efdbff;
    height:60px;
    text-align: center;
    line-height: 60px;
  }

</style>


