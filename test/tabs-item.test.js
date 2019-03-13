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

describe("TabsItem", () => {
  it("存在.", () => {
    expect(TabsItem).to.exist;
  });
  describe("props", () => {
    it("tabsItem 接受 name", () => {
      const Constructor = Vue.extend(TabsItem);
      const div = document.createElement("div");
      document.body.appendChild(div);
      const vm = new Constructor({
        propsData: {
          name: "hello"
        }
      }).$mount(div);
      expect(vm.$el.getAttribute("data-name")).to.eq("hello");
    });

    it("tabsItem 接受 disabled", () => {
      const Constructor = Vue.extend(TabsItem);
      const vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount();
      expect(vm.$el.classList.contains('disabled')).to.be.true
      let callback = sinon.fake()
      vm.$on('click',callback)
      vm.$el.click()
      expect(callback).to.have.not.been.called
    });
  });
});
