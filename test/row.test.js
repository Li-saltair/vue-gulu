const expect = chai.expect;
import Vue from "vue";
import Row from "../src/grid/row";
import Col from "../src/grid/col";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Row", () => {
  it("存在.", () => {
    expect(Row).to.be.ok;
  });

  it("接受gutter属性", done => {
    Vue.component("g-row", Row);
    Vue.component("g-col", Col);
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = `
        <g-row gutter="20">
            <g-col span="12"></g-col>
            <g-col span="12"></g-col>
        </g-row>
    `;
    const vm = new Vue({
      el: div
    });
    setTimeout(() => {
      const rows = vm.$el.querySelector(".g-row");
      expect(getComputedStyle(rows).marginLeft).to.eq("-10px");
      const cols = vm.$el.querySelector(".g-col");
      expect(getComputedStyle(cols).paddingLeft).to.eq("10px");
      done();
      vm.$el.remove();
      vm.$destroy();
    }, 1500);
  });

  it("接受align属性", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Row);
    let vm = new Constructor({
      propsData: {
        align: "left"
      }
    }).$mount(div);
    expect(getComputedStyle(vm.$el).justifyContent).to.equal("flex-start");
    vm.$destroy();
  });

});
