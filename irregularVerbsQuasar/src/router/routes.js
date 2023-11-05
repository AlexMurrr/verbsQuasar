const routes = [
  {
    path: "/",
    component: () => import("layouts/MenuLayout.vue"),
    children: [
      { path: "/profile", component: () => import("pages/ProfileVerbs.vue") },
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
