<template>
  <div>
    <g-layout class="g-layout">
      <g-sider class="g-sider"></g-sider>
      <g-layout class="g-layout">
        <g-header class="g-header"></g-header>
        <g-content class="g-content"></g-content>
        <g-footer class="g-footer"></g-footer>
      </g-layout>
    </g-layout>
  </div>
</template>
<script>
import Content from "../../../src/layout/content";
import Footer from "../../../src/layout/footer";
import Header from "../../../src/layout/header";
import Layout from "../../../src/layout/layout";
import Sider from "../../../src/layout/sider";
export default {
  components: {
    "g-content": Content,
    "g-footer": Footer,
    "g-header": Header,
    "g-layout": Layout,
    "g-sider": Sider
  }
};
</script>
<style >
.g-layout {
  width: 100%;
  height: 400px;
  background: #d3adf7;
}
.g-header {
  width: 100%;
  height: 100px;
  background: #b37feb;
}
.g-content {
  width:100%;
  
}
.g-footer {
  width: 100%;
  height: 100px;
  background: #391085;
}
.g-sider {
  width: 20%;
  background: #722ed1;
}
</style>


