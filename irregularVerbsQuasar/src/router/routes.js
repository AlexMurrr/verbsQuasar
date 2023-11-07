const routes = [
  {
    path: "/",
    component: () => import("layouts/MenuLayout.vue"),
    children: [
      { path: "/profile", component: () => import("pages/ProfileVerbs.vue") },
      { path: "/rules", component: () => import("pages/RulesVerbs.vue") },
      { path: "/reg", component: () => import("pages/RegVerbs.vue") },
      { path: "/log", component: () => import("pages/EntranceVerbs.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
