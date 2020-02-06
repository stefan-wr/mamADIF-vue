import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import File from "@/views/File.vue";
import Privacy from "@/views/Privacy.vue";
import Help from "@/views/Help.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/file/:fileName",
    name: "file",
    component: File
  },
  {
    path: "/privacy/",
    name: "privacy",
    component: Privacy
  },
  {
    path: "/help/",
    name: "help",
    component: Help
  }
];

const router = new VueRouter({
  routes,
  // Scroll to top at all route navigations
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
