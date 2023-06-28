import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import ElementUI from "element-ui";
Vue.use(ElementUI);
import "element-ui/lib/theme-chalk/index.css";
import DcForm from "./demofrom/form";
import DcFormItem from "./demofrom/form-item";
import DcInput from "./demofrom/input";
import DictSelect from "./demofrom/dictSelect";
import DcInputText from "@/demofrom/form/components/dcInputText/dcInputText.vue";
import DcInputTextTootipy from "@/demofrom/form/components/dcInputText/dcInputTextTootipy.vue";
// import DcInputArea from "@/demofrom/form/components/dcInputArea/dcInputArea.vue";
Vue.use(DcForm);
Vue.use(DcFormItem);
Vue.use(DcInput);
Vue.use(DictSelect);
Vue.component(DcInputText.name, DcInputText);
Vue.component(DcInputTextTootipy.name, DcInputTextTootipy);
// Vue.component(DcInputArea.name, DcInputArea);

Vue.config.productionTip = false;
//创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
