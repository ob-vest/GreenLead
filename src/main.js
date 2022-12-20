import { createApp } from "vue";
import "./style.css";
import { createRouter, createWebHashHistory } from "vue-router";
import ServicesPage from "./components/ServicesPage.vue";
import ServiceDescription from "./components/ServiceDescription.vue";
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
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
