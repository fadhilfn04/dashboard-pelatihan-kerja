import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Highcharts from "highcharts";
import Accessibility from "highcharts/modules/accessibility";
import Maps from "highcharts/modules/map";
import HighchartsVue from "highcharts-vue";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import Antd from "ant-design-vue";
import 'ant-design-vue/dist/reset.css';

import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.js";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import "leaflet-fullscreen";
import "@coreui/coreui/dist/css/coreui.min.css";

import router from "@/router/index.js";
import "leaflet.markercluster/dist/leaflet.markercluster.js";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.fullscreen/Control.FullScreen.css";
import "leaflet.fullscreen/Control.FullScreen.js";

import "typeface-poppins";
import "@/index.css";
import App from "@/App.vue";
import { Table } from 'ant-design-vue';

Maps(Highcharts);
Accessibility(Highcharts);

import Exporting from 'highcharts/modules/exporting';
Exporting(Highcharts);

library.add(faSearch);

createApp(App)
  .use(HighchartsVue)
  .use(router)
  .use(VueSweetalert2)
  .use(Antd)
  .use(Table)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
