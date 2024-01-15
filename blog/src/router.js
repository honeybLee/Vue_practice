import { createWebHistory, createRouter } from "vue-router";

import COM_List from './components/List.vue'
import COM_Home from './components/Home.vue'
import COM_Detail from './components/Detail.vue'

const routes = [
  {
    path: "/list",
    name: 'List',
    component: COM_List,
  },
  {
    path: "/",
    name: 'Home',
    component: COM_Home,
  },
  {
    path: "/detail",
    name: 'Detail',
    component: COM_Detail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 