const expect = chai.expect;
import Vue from "vue";
import Tabs from "../src/tabs";
import TabsItem from "../src/tab-item";
import TabsNav from "../src/tab-nav";
import TabsBody from "../src/tab-body";
import TabsContent from "../src/tab-content";

Vue.component("g-tabs", Tabs);
Vue.component("g-tabs-item", TabsItem);
Vue.component("g-tabs-nav", TabsNav);
Vue.component("g-tabs-body", TabsBody);
Vue.component("g-tabs-content", TabsContent);

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Tab", () => {
  it("存在.", () => {
    expect(Tabs).to.be.ok;
  });
  it("接受 selected", done => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = `
    <g-tabs selected="one" direction="vertical">
      <g-tabs-nav>
        <g-tabs-item name="one">体育</g-tabs-item>
        <g-tabs-item name="two">新闻</g-tabs-item>
        <g-tabs-item name="three">其他</g-tabs-item>
      </g-tabs-nav>
      <g-tabs-body>
        <g-tabs-content name="one">呆不到</g-tabs-content>
        <g-tabs-content name="two">的氛围</g-tabs-content>
        <g-tabs-content name="three">哈哈哈的火车我</g-tabs-content>
      </g-tabs-body>
    </g-tabs>
    `;
    const vm = new Vue({
      el: div
    });
    vm.$nextTick(() => {
      let result = vm.$el.querySelector('.tabs-item')
      expect(result.classList.contains('active')).to.be.true
      done();
      vm.$el.remove();
      vm.$destroy();
    });
  });
});
