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

      vm.$on("closeToast", (done) => {
        expect(document.body.contains(vm.$el)).to.eq(false);
        done();
      });
    });

    it("可以接收closeButton", (done) => {
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
      
      
      vm.$nextTick(() => {
        let buttonClose = vm.$el.querySelector(".close");      
        buttonClose.click();
        expect(buttonClose.textContent.trim()).to.eq("关闭");
        expect(callback).to.have.been.called;
        done();
      });
    });

    it("可以接收enableHtml", done => {
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          enabledHtml: true
        }
      });

      vm.$slots.default = ['<strong id="hihi">哈哈</strong>'];
      vm.$mount();
      console.log(vm.$el)
      vm.$nextTick(() => {
        let strong = vm.$el.querySelector("#hihi");
        expect(strong).to.exist;
        done();
      });
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
