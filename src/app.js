import Vue from "vue";
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from "./button-group";

Vue.component("g-button", Button);
Vue.component("g-icon", Icon);
Vue.component("g-button-group", ButtonGroup);

new Vue({
  el: "#root",
  data: {
    loading1: false
  }
});

//chai 单元测试
import chai from "chai";
import spies from "chai-spies";
const expect = chai.expect;
chai.use(spies);
try {
  {
    let div = document.createElement("div");
    document.body.appendChild(div);
    const constructor = Vue.extend(Button);
    const button = new constructor({
      propsData: {
        icon: "setting"
      }
    });
    button.$mount(div);
    //icon
    const useElement = button.$el.querySelector("use");
    let href = useElement.getAttribute("xlink:href");
    expect(href).to.eq("#i-setting");
    button.$el.remove();
    button.$destroy();
  }
  {
    //iconPosition
    let div = document.createElement("div");
    document.body.appendChild(div);
    const constructor = Vue.extend(Button);
    const button = new constructor({
      propsData: {
        icon: "setting",
        iconPosition: "right"
      }
    });
    button.$mount(div);
    const svg = button.$el.querySelector("svg");
    let { order } = window.getComputedStyle(svg);
    expect(order).to.eq("2");
    //测试成功后会自动删除该元素，如果测试不成功则会留着这个元素
    button.$el.remove();
    button.$destroy();
  }
  //点击的测试
  {
    const constructor = Vue.extend(Button);
    const gButton = new constructor({
      propsData: {
        icon: "setting"
      }
    });
    gButton.$mount();
    let spy = chai.spy(function() {});
    gButton.$on("click", spy);
    let button = gButton.$el;
    button.click();

    expect(spy).to.have.been.called();
  }
} catch (error) {
  window.errors = [error];
} finally {
  window.errors && window.errors.forEach((error)=>{
    console.error(error.message)
  })
}
