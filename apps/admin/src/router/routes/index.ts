import { PageConstants } from "@celeris/constants";
import { loadRoutesFromModules } from "@celeris/utils";
import type { RouteRecordRaw } from "vue-router";
import { PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE } from "~/router/routes/basic";

const modules = import.meta.glob<{ default: any }>("./modules/**/*.ts", { eager: true });
const routeModuleList: RouteRecordRaw[] = loadRoutesFromModules(modules);

export const asyncRoutes = [PAGE_NOT_FOUND_ROUTE, ...routeModuleList];

// 根路由
export const RootRoute: RouteRecordRaw = {
  path: "/",
  name: "Root",
  redirect: PageConstants.BASE_HOME,
  meta: {
    title: "Root",
  },
};

export const LoginRoute: RouteRecordRaw = {
  path: PageConstants.BASE_LOGIN,
  name: "Login",
  component: () => import("~/pages/login/index.vue"),
  meta: {
    title: "Login",
  },
};

export const ChartRoute: RouteRecordRaw = {
  path: "/chat",
  name: "Chat",
  component: () => import("~/pages/chat/index.vue"),
  meta: {
    title: "Chat",
  },
};

// Basic routing without permission
// 无需认证的基本路由
export const basicRoutes: RouteRecordRaw[] = [
  RootRoute,
  LoginRoute,
  ChartRoute,
  REDIRECT_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
];
