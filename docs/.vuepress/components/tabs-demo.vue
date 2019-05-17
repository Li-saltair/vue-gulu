<template>
  <div>
    <g-tabs :selected.sync="selectedTab" direction="vertical">
      <g-tabs-nav>
        <template v-slot:actions>
          <button>是这样的吗</button>
        </template>
        <g-tabs-item name="one">
          体育
        </g-tabs-item>
        <g-tabs-item name="two">新闻</g-tabs-item>
        <g-tabs-item name="three">其他</g-tabs-item>
      </g-tabs-nav>
      <g-tabs-body>
        <g-tabs-content name="one">呆不到</g-tabs-content>
        <g-tabs-content name="two">的氛围</g-tabs-content>
        <g-tabs-content name="three">建议以v-slot：actions 来代替slot="actions"</g-tabs-content>
      </g-tabs-body>
    </g-tabs>
  </div>
</template>
<script>
import Tabs from "../../../src/tabs/tabs";
import TabsBody from "../../../src/tabs/tab-body";
import TabsContent from "../../../src/tabs/tab-content";
import TabsItem from "../../../src/tabs/tab-item";
import TabsNav from "../../../src/tabs/tab-nav";
export default {
  components: {
    "g-tabs": Tabs,
    "g-tabs-item": TabsItem,
    "g-tabs-nav": TabsNav,
    "g-tabs-body": TabsBody,
    "g-tabs-content": TabsContent
  },
  data(){
    return {
      selectedTab:"one"
    }
  }
};
</script>
<style >
.icon {
  fill: #722ed1;
}
</style>


