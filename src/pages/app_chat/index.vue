<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { chatNav } from '@/shared/utils/mock-data.ts';
import ChatInput from '@/features/app_chat/components/chat_input/index.vue';

const route = useRoute();

const navRoutes = computed<Record<string, { name?: string; params?: { id: string | string[] }; query?: Record<string, unknown> } | string>>(() => {
  const currentName = typeof route.name === 'string' ? route.name : undefined;

  return {
    Search: {
      name: currentName,
      params: route.params.id ? { id: route.params.id } : undefined,
      query: { ...route.query, panel: 'search' },
    },
    'Pin list': {
      name: currentName,
      params: route.params.id ? { id: route.params.id } : undefined,
      query: { ...route.query, panel: 'pins' },
    },
    Members: {
      name: currentName,
      params: route.params.id ? { id: route.params.id } : undefined,
      query: { ...route.query, panel: 'members' },
    },
    Files: {
      name: currentName,
      params: route.params.id ? { id: route.params.id } : undefined,
      query: { ...route.query, panel: 'files' },
    },
  };
});
</script>

<template>
  <section class="chat">
    <div class="chat__header border-bottom-black">
      <div class="chat__header-left">
        <span> #random</span>
        <span>team announcements and updates</span>
      </div>
      <nav class="chat__nav">
        <ul>
          <li v-for="item in chatNav" :key="item">
            <router-link :to="navRoutes[item] ?? ''" class="chat__nav-link">
              [ {{ item }} ]
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="chat__message-wrapper">
      <router-view />
    </div>
    <div class="chat__input">
      <ChatInput />
    </div>
  </section>
</template>

<style scoped lang="scss">
.chat {
  display: flex;
  flex-direction: column;
  height: 100%;
  color: var(--text-white-dim);

  &__header {
    padding: var(--space-5) var(--space-7);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__header-left {
    span:first-child {
      margin-right: var(--space-5);
      color: var(--text-secondary);
      position: relative;

      &:after {
        position: absolute;
        top: 0;
        right: -13%;
        transform: translateX(0);
        content: '';
        display: inline-block;
        width: 2px;
        height: 14px;
        background: var(--text-white-dim);
        margin-left: var(--space-4);
      }
    }

    span:last-child {
      font-weight: 500;
    }
  }

  &__nav {
    ul {
      display: flex;
      gap: var(--space-7);
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        @include mixins.sidebar-list-hover;
      }

      li > a {
        padding: var(--space-1);
        display: inline-block;
      }
    }
  }

  &__message-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--space-5);
    padding: var(--space-4) var(--space-7);
    flex: 1;
  }
}
</style>
