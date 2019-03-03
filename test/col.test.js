const expect = chai.expect;
import Vue from "vue";
import Row from "../src/row";
import Col from "../src/col";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Col", () => {
  it("col存在.", () => {
    expect(Col).to.be.ok;
  });

  it("接受span属性", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Col);
    let vm = new Constructor({
      propsData: {
        span: 3
      }
    }).$mount(div);
    expect(vm.$el.classList.contains("col-3")).to.eq(true);
    div.remove()
    vm.$destroy();
  });

  it("接受offset属性", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Col);
    let vm = new Constructor({
      propsData: {
        offset: 3
      }
    }).$mount(div);
    expect(vm.$el.classList.contains("offset-3")).to.eq(true);
    div.remove()
    vm.$destroy();
  });

  it("接受pc属性", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Col);
    let vm = new Constructor({
      propsData: {
        pc: {span:2,offset:2}
      }
    }).$mount(div);
    expect(vm.$el.classList.contains("col-pc-2")).to.eq(true);
    expect(vm.$el.classList.contains("offset-pc-2")).to.eq(true);
    div.remove()
    vm.$destroy();
  });

  it("接受ipad属性", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Col);
    let vm = new Constructor({
      propsData: {
        ipad: {span:2,offset:2}
      }
    }).$mount(div);
    expect(vm.$el.classList.contains("col-ipad-2")).to.eq(true);
    expect(vm.$el.classList.contains("offset-ipad-2")).to.eq(true);
    div.remove()
    vm.$destroy();
  });

  it("接受narrowPc属性", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Col);
    let vm = new Constructor({
      propsData: {
        narrowPc: {span:3,offset:4}
      }
    }).$mount(div);
    expect(vm.$el.classList.contains("col-narrow-pc-3")).to.eq(true);
    expect(vm.$el.classList.contains("offset-narrow-pc-4")).to.eq(true);
    div.remove()
    vm.$destroy();
  });

  it("接受phone属性", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Col);
    let vm = new Constructor({
      propsData: {
        phone: {span:1,offset:1}
      }
    }).$mount(div);
    expect(vm.$el.classList.contains("col-phone-1")).to.eq(true);
    expect(vm.$el.classList.contains("offset-phone-1")).to.eq(true);
    div.remove()
    vm.$destroy();
  });
});
