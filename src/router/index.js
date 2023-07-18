import { createRouter, createWebHistory } from "vue-router";
import Portal from "@/views/PortalView.vue";
import Dashboard from "@/views/DashboardView.vue";
import SignInView from "@/views/SignInView.vue";
import ApiGenerator from "@/views/ApiGeneratorView.vue";
import UploadManagement from "@/views/UploadManagementView.vue";
import PetaPersebaranTenagaKerja from "@/components/Dashboard/PetaPersebaranTenagaKerja.vue";
import SumberDataView from "@/views/SumberDataView.vue";

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
    path: "/sign-in",
    name: "Sign In",
    component: SignInView,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/maps-indonesia",
    name: "Maps Indonesia",
    component: PetaPersebaranTenagaKerja,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/sumber-data",
    name: "Sumber Data",
    component: SumberDataView,
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
