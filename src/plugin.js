import Toast from "./toast";

let currentToast

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message, toastOptions) {
        if(currentToast){
            currentToast.close()
        }
        currentToast = createdToast({ Vue, message, propsData: toastOptions });
    };
  }
};





/*helper*/ 
function createdToast({ Vue, message, propsData }) {
    let constructor = Vue.extend(Toast);
    let toast = new constructor({ propsData });
    toast.$slots.default = [message];
    toast.$mount();
    document.body.appendChild(toast.$el);
    return toast
  }
