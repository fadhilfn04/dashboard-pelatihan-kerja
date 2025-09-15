import axios from "axios";
import SignInView from "@/views/SignInView.vue";
import SignInViewSSO from "@/views/SignInViewSSO.vue";
import Dashboard from "@/views/DashboardView.vue";
import ApiGenerator from "@/views/ApiGeneratorView.vue";
import DashboardETL from "@/views/DashboardETLView.vue";
import LogAktifitas from "@/views/LogAktifitasView.vue";
import ProfilPeserta from "@/views/ProfilPesertaView.vue";
import { createRouter, createWebHistory } from "vue-router";
import UploadManagement from "@/views/UploadManagementView.vue";
import UploadSourceData from "@/views/UploadSourceDataView.vue";
import UploadFilePendukung from "@/views/UploadFilePendukungView.vue";
import UploadDataChart from "@/views/UploadDataChartView.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/dashboard-etl/:title",
    name: "Dashboard ETL",
    component: DashboardETL,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/sign-in",
    name: "Sign In",
    component: SignInView,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/sign-in-sso",
    name: "Sign In SSO",
    component: SignInViewSSO,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/api-generator",
    name: "Api Generator",
    component: ApiGenerator,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/upload-management",
    name: "Upload Management",
    component: UploadManagement,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/upload-management/source-data",
    name: "Upload Management Source Data",
    component: UploadSourceData,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/upload-management/file-pendukung",
    name: "Upload Management File Pendukung",
    component: UploadFilePendukung,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/upload-management/chart-data",
    name: "Upload Management Chart Data",
    component: UploadDataChart,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/cari-profil-peserta",
    name: "Profil Peserta",
    component: ProfilPeserta,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/log-aktifitas",
    name: "Log Aktifitas",
    component: LogAktifitas,
    meta: {
      requiresAuth: true,
    },
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
      next({
        path: "/sign-in",
        query: { redirect: to.fullPath },
      });
    } else {
      if (token.expiredAt < Date.now()) {
        localStorage.removeItem("token");
        next({
          path: "/sign-in",
          query: { redirect: to.fullPath },
        });
      }else{
        next();
        const email = localStorage.getItem("email");
        const token = JSON.parse(localStorage.getItem("token"));
        axios.post(import.meta.env.VITE_API_URL + '/activity-log-add', {
          email: email,
          from: from.fullPath,
          to: to.fullPath,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }, {
          headers: {
            'Authorization': "Bearer " + token.value,
            'Content-Type': 'multipart/form-data'
          },
        })
        .catch((error) => {
          console.error("Error saving activity log:", error);
        });
      }
    }
  } else {
    const token = localStorage.getItem("token");

    if (!token || token.expiredAt < Date.now()) {
      localStorage.removeItem("token");
      next();
    } else {
      next({
        path: "/sign-in",
        query: "",
      });
    }
  }
});

export default router;
