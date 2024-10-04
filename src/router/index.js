import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
import DetailView from "@/views/DetailView.vue";
import Product from "@/views/Product.vue";
import Account from "@/views/Account.vue";
import Dashboard from "@/views/Dashboard.vue";
import NotFound from "@/views/NotFound.vue";


const routes = [
  { path: "/", component: HomeView,

    children: [
      { path: "about", component: AboutView },
      { path: "contact", component: ContactView },
      { path: "detail", component: DetailView},
      { path: "product", component: Product },
      { path: "account", component: Account},
      { path: "dashboard", component: Dashboard },
    ]
  },
  { path: "/register", component: RegisterView },
  { path: "/login", component: LoginView },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
