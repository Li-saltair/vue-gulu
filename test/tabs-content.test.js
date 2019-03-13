const expect = chai.expect;
import Vue from "vue";
import Toast from "../src/toast";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Toast", () => {
  it("存在.", () => {
    expect(Toast).to.be.ok;
  });
  describe("props", () => {
    it("接受 autoClose", () => {
      //this.timeout(15000)     //设置mocha超时时间，默认超时时间为2秒
      const Constructor = Vue.extend(Toast);
      const div = document.createElement("div");
      document.body.appendChild(div);
      const vm = new Constructor({
        propsData: {
          autoClose: 1
        }
      }).$mount(div);

      vm.$on("closeToast", done => {
        expect(document.body.contains(vm.$el)).to.eq(false);
        done();
      });
    });
  });
});
