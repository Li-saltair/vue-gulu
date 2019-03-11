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

    it("可以接收closeButton", () => {
      let callback = sinon.fake();
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text: "关闭",
            callback
          }
        }
      }).$mount();
      let buttonClose = vm.$el.querySelector(".close");
      expect(buttonClose.textContent.trim()).to.eq("关闭");

      setTimeout(() => {
        buttonClose.click();
        expect(callback).to.have.been.called;
      }, 200);

      //done();
    });

    it("可以接收enableHtml", () => {
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          enabledHtml: true
        }
      });

      vm.$slots.default = ['<strong id="hihi">哈哈</strong>'];
      vm.$mount();
      let strong = vm.$el.querySelector("#hihi");
      console.log(strong);
      expect(strong).to.exist;
    });

    it("接受position", () => {
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          position: "middle"
        }
      }).$mount();
      expect(vm.$el.classList.contains("position-middle")).to.eq(true);
    });
  });
});
