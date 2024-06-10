//import vue router
import { createRouter, createWebHistory } from "vue-router";

//import store vuex
import store from "../store";

//define a routes
const routes = [
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/auth/Register.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/auth/Login.vue"),
  },
  {
    path: "/user/dashboard",
    name: "dashboard",
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ "../views/dashboard/Index.vue"
      ),
    //chek is loggedIn
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/home/Index.vue"),
  },

  // {
  //   path: '/bidangs',
  //   name: 'bidangs',
  //   component: () => import(/* webpackChunkName: "category" */ '../views/bidang/Index.vue')
  // },

  {
    path: "/bidang/:slug",
    name: "detail_bidang",
    component: () =>
      import(
        /* webpackChunkName: "detail_bidang" */ "../views/bidang/Show.vue"
      ),
  },

  {
    path: "/posts",
    name: "posts.index",
    component: () =>
      import(/* webpackChunkName: "index" */ "../views/posts/Index.vue"),
  },

  {
    path: "/create",
    name: "posts.create",
    component: () =>
      import(/* webpackChunkName: "create" */ "../views/posts/Create.vue"),
  },
  
  {
    path: "/edit/:id",
    name: "posts.edit",
    component: () =>
      import(/* webpackChunkName: "edit" */ "../views/posts/Edit.vue"),
  },


];

//create router
const router = createRouter({
  history: createWebHistory(),
  routes, // <-- routes
});

//define route for handle authentication
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    //cek nilai dari getters isLoggedIn di module auth
    if (store.getters["auth/isLoggedIn"]) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
