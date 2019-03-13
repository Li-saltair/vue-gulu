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
    expect(TabsItem).to.be.ok;
  });
  describe("props", () => {
    // it("接受 autoClose", () => {
    //   //this.timeout(15000)     //设置mocha超时时间，默认超时时间为2秒
    //   const Constructor = Vue.extend(Toast);
    //   const div = document.createElement("div");
    //   document.body.appendChild(div);
    //   const vm = new Constructor({
    //     propsData: {
    //       autoClose: 1
    //     }
    //   }).$mount(div);

    //   vm.$on("closeToast", done => {
    //     expect(document.body.contains(vm.$el)).to.eq(false);
    //     done();
    //   });
    // });
  });
});
