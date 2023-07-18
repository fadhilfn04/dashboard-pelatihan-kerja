import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Highcharts from "highcharts";
import Maps from "highcharts/modules/map";
import HighchartsVue from "highcharts-vue";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import router from "@/router/index.js";

import "typeface-poppins";
import "@/index.css";
import App from "@/App.vue";

Maps(Highcharts);

library.add(faSearch);

createApp(App)
  .use(HighchartsVue)
  .use(router)
  .use(VueSweetalert2)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
