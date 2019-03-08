import Toast from "./toast";

let currentToast;

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message, toastOptions) {
      if (currentToast) {
        currentToast.close();
      }
      currentToast = createdToast({
        Vue,
        message,
        propsData: toastOptions,
        onclose: () => {
          currentToast = null;
        }
      });
    };
  }
};

/*helper*/

function createdToast({ Vue, message, propsData, onClose }) {
  let constructor = Vue.extend(Toast);
  let toast = new constructor({ propsData });
  toast.$slots.default = [message];
  toast.$mount();
  toast, $on("close", onClose);
  document.body.appendChild(toast.$el);
  return toast;
}
