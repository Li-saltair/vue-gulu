const expect = chai.expect;
import Vue from "vue";
import Popover from "../src/popover";
import Button from "../src/button";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Popover", () => {
  it("存在.", () => {
    expect(Popover).to.be.ok;
  });

  it("可以设置position", (done) => {
    Vue.component("g-popover", Popover);
    Vue.component("g-button", Button);
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = `
    <g-popover position="bottom" ref="a">
      <template v-slot:content>
        <div>弹出的内容？？？？？？？</div>
      </template>
      <g-button>点我</g-button>
    </g-popover>
    `;
    const vm = new Vue({
      el: div
    });
    setTimeout(()=>{
      vm.$el.querySelector('button').click()
      vm.$nextTick(()=>{
        //console.log(vm.$refs.a.$refs.popoverWrapper) vm是组件实例
        expect(vm.$refs.a.$refs.popoverWrapper.classList.contains('position-bottom')).to.be.true
        done()
      })
    },50)
      
    
      //console.log(vm.$el.outerHTML)
    // setTimeout(() => {
    //   const popover = vm.$el.querySelector(".row");
    //   expect(getComputedStyle(rows).marginLeft).to.eq("-10px");
    //   done();
    //   vm.$el.remove();
    //   vm.$destroy();
    // }, 0);
  });

});
