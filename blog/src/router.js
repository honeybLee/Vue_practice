import { createWebHistory, createRouter } from "vue-router";

import COM_List from './components/List.vue'
import COM_Home from './components/Home.vue'
import COM_Detail from './components/Detail.vue'
import COM_Author from './components/Author.vue'
import COM_Comment from './components/Comment.vue'

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
    path: "/detail/:idx",
    name: 'Detail',
    component: COM_Detail,
    children: [
      {
        path: "/author",
        name: 'Author',
        component: COM_Author,
      },
      {
        path: "/comment",
        name: 'Comment',
        component: COM_Comment,
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 