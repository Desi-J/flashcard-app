import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue';
import StudyView from '@/views/StudyView.vue';
import DetailsView from '@/views/DetailsView.vue';
import EditView from '@/views/EditView.vue';
import CreateView from '@/views/CreateView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView},
  { path: '/study', name: 'study', component: StudyView},
  { path: '/details', name: 'details', component: DetailsView},
  { path: '/create', name: 'create', component: CreateView},
  { path: '/edit', name: 'edit', component: EditView},
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;