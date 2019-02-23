const expect = chai.expect;
import Vue from "vue";
import Input from "../src/input";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Input", () => {
  it("存在.", () => {
    expect(Input).to.be.ok;
  });

  //测试props
  describe("props", () => {
    const Constructor = Vue.extend(Input);
    let vm;
    afterEach(function() {
      vm.$destroy();
    });
    it("可以接收value", () => {
      vm = new Constructor({
        propsData: {
          value: "value"
        }
      }).$mount();
      const inputElement = vm.$el.querySelector("input");
      expect(inputElement.value).to.equal("value");
      vm.$destroy();
    });

    it("可以接收disabled", () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector("input");
      expect(inputElement.disabled).to.equal(true);
      vm.$destroy();
    });

    it("可以接收readonly", () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector("input");
      expect(inputElement.readOnly).to.equal(true);
      vm.$destroy();
    });

    it("可以接收error", () => {
      vm = new Constructor({
        propsData: {
          error: "error occur"
        }
      }).$mount();
      const useElements = vm.$el.querySelectorAll("use");
      expect(useElements.length).to.equal(1);
      expect(useElements[0].getAttribute("xlink:href")).to.equal("#i-error");
      const errorMsg = vm.$el.querySelector(".error-msg");
      expect(errorMsg.innerText).to.equal("error occur");
      vm.$destroy();
    });
  });

  //事件(tdd)
  describe("事件", () => {

    const Constructor = Vue.extend(Input);
    let vm;
    afterEach(function() {
      vm.$destroy();
    });

    it("支持 change/blur/focus/input 事件", () => {
        ['change','input','blur','focus'].forEach(item=>{
            vm = new Constructor({}).$mount()
        const callback = sinon.fake()
        vm.$on(item,callback)
        //trigger change event
        let event = new Event(item)
        const inputElement = vm.$el.querySelector("input");
        inputElement.dispatchEvent(event)

        expect(callback).to.have.been.calledWith(event)
        })
        
    });

  });
});
