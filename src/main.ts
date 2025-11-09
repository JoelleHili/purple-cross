import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/styles/global.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";

/* add icons to the library */
library.add(fas);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
