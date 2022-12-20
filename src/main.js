import { createApp } from "vue";
import "./style.css";
import { createRouter, createWebHashHistory } from "vue-router";
import ServicesPage from "./components/ServicesPage.vue";
import ServiceDescription from "./components/ServiceDescription.vue";
import AboutPage from "./components/AboutUsPage.vue";
import WorkshopPage from "./components/WorkshopPage.vue";
import Homepage from "./components/Homepage.vue";
import App from "./App.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", name: "Home", component: Homepage },
    { path: "/services", name: "Services", component: ServicesPage },
    {
      path: "/services/:service",
      name: "Service",
      component: ServiceDescription,
      props: true,
    },
    { path: "/workshop", name: "Workshop", component: WorkshopPage },
    { path: "/about", name: "About", component: AboutPage },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
