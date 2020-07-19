import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import UserProfile from "../views/UserProfile.vue";
import Me from "../views/Me.vue";
import Requests from "../views/Requests.vue";
import Friends from "../views/Friends.vue";

import Connexion from "../views/Connexion.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/friends",
    name: "Friend",
    component: Friends,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/friendrequest",
    name: "friendrequest",
    component: Requests,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/me",
    name: "Me",
    component: Me,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/user/:id",
    name: "userprofile",
    component: UserProfile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/connexion/:type?",
    name: "Connexion",
    component: Connexion
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  console.log("salut c le router");
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log("2");

    if (store.getters.isLoggedIn) {
      console.log("3");

      next();
      return;
    }
    next("/connexion");
  } else {
    console.log("5");
    next();
  }
});

export default router;
