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
const expect = chai.expect;
{
  let div = document.createElement("div")
  document.body.appendChild(div)
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
  button.$el.remove()
  button.$destroy()
}
{
  //iconPosition
  let div = document.createElement("div")
  document.body.appendChild(div)
  const constructor = Vue.extend(Button);
  const button = new constructor({
    propsData: {
      icon: "setting",
      iconPosition:"right"
    }
  });
  button.$mount(div);
  const svg = button.$el.querySelector("svg");
  let { order } = window.getComputedStyle(svg);
  expect(order).to.eq("2");
  //测试成功后会自动删除该元素，如果测试不成功则会留着这个元素
  button.$el.remove()
  button.$destroy()
}
{
  const constructor = Vue.extend(Button);
  const gButton = new constructor({
    propsData:{
      icon:"setting"
    }
  })
  gButton.$mount()
  gButton.$on('click', function(){
    expect(1).to.eq(1)
  })
  let button = gButton.$el
  button.click()
}
