import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/app/AppLayout.vue';
import FeedPage from '@/pages/feed/index.vue';
import ThreadPage from '@/pages/thread/index.vue';
import SearchPage from '@/pages/search/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: AppLayout },
    { path: '/feed', name: 'feed', component: FeedPage },
    { path: '/thread', name: 'thread', component: ThreadPage },
    { path: '/search', name: 'search', component: SearchPage },
  ],
});

export default router;
