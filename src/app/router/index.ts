import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/app/AppLayout.vue';
import FeedPage from '@/pages/feed/index.vue';
import ThreadPage from '@/pages/thread/index.vue';
import AppChat from '@/pages/app_chat/index.vue';
import ChatMessages from '@/pages/app_chat/ChatMessages.vue';
import ChatFiles from '@/pages/app_chat/ChatFiles.vue';
import ChatContacts from '@/pages/app_chat/ChatContacts.vue';
import ChatMembers from '@/pages/app_chat/ChatMembers.vue';
import RightSidebar from '@/features/right_sidebar/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'chat',
          components: {
            Chat: AppChat,
            RightSidebar: RightSidebar,
          },
          children: [
            {
              path: '',
              name: 'chatRootMessages',
              component: ChatMessages,
            },
            {
              path: 'files',
              name: 'chatRootFiles',
              component: ChatFiles,
            },
            {
              path: 'contacts',
              name: 'chatRootContacts',
              component: ChatContacts,
            },
            {
              path: 'members',
              name: 'chatRootMembers',
              component: ChatMembers,
            },
          ],
        },
        {
          path: 'chat/:id',
          name: 'chatId',
          components: {
            Chat: AppChat,
            RightSidebar: RightSidebar,
          },
          children: [
            {
              path: '',
              name: 'chatMessages',
              component: ChatMessages,
            },
            {
              path: 'files',
              name: 'chatFiles',
              component: ChatFiles,
            },
            {
              path: 'contacts',
              name: 'chatContacts',
              component: ChatContacts,
            },
            {
              path: 'members',
              name: 'chatMembers',
              component: ChatMembers,
            },
          ],
        },
        {
          path: 'thread/:messageId',
          name: 'thread',
          components: {
            Chat: AppChat,
            RightSidebar: RightSidebar,
          },
        },
      ],
    },
    { path: '/feed', name: 'feed', component: FeedPage },
    { path: '/thread', name: 'thread', component: ThreadPage },
    // { path: '/search', name: 'search', component: SearchPage },
  ],
});

export default router;
