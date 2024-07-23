import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import TrainingRoadmap from "../views/TrainingRoadmap.vue";
import Blog from "../views/Blog.vue";
import Resources from "../views/Resources.vue";
import Community from "../views/Community.vue";
import Contact from "../views/Contact.vue";
import FAQ from "../views/Faq.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/roadmap", component: TrainingRoadmap },
  { path: "/blog", component: Blog },
  { path: "/resources", component: Resources },
  { path: "/community", component: Community },
  { path: "/faq", component: FAQ },
  { path: "/contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
