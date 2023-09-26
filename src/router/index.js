import { createRouter, createWebHistory } from "vue-router";
import Portal from "@/views/PortalView.vue";
import Dashboard from "@/views/DashboardView.vue";
import SignInView from "@/views/SignInView.vue";
import ApiGenerator from "@/views/ApiGeneratorView.vue";
import UploadManagement from "@/views/UploadManagementView.vue";
import UploadSourceData from "@/views/UploadSourceDataView.vue";
import UploadFilePendukung from "@/views/UploadFilePendukungView.vue";
import ProfilPeserta from "@/views/ProfilPesertaView.vue";

const routes = [
  {
    path: "/",
    name: "Portal",
    component: Portal,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
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
    path: "/cari-profil-peserta",
    name: "Profil Peserta",
    component: ProfilPeserta,
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
      }
    }
  } else {
    const token = localStorage.getItem("token");

    if (!token || token.expiredAt < Date.now()) {
      localStorage.removeItem("token");
      next();
    } else {
      next({
        path: "/",
        query: "",
      });
    }
  }
});

export default router;
