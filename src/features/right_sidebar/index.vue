<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Icon from '@/shared/ui/Icon.vue';
import ChatMessage from '@/shared/ui/chat_message/index.vue';
import { CHAT_MESSAGES, CHATS, CONTACTS, FILES } from '@/shared/utils/mock-data.ts';
import type { IChatMessage } from '@/features/app_chat/types';

const route = useRoute();
const router = useRouter();

const message = CHAT_MESSAGES[0] as IChatMessage;

const activePanel = computed(() => {
  const panel = route.query.panel;
  return typeof panel === 'string' ? panel : '';
});

const activeChat = computed(() => {
  const chatIndex = Number(route.params.id ?? 0);
  return CHATS[chatIndex] ?? CHATS[0];
});

const visibleMembers = computed(() =>
  CONTACTS.filter((contact) => activeChat.value.members.includes(contact.nick)),
);

const visibleFiles = computed(() => {
  const folder = typeof route.query.folder === 'string' ? route.query.folder : '';
  if (!folder) return FILES;
  return FILES.filter((file) => file.folder === folder);
});

const hideRightSidebar = async () => {
  const query = { ...route.query };
  delete query.panel;

  await router.replace({
    name: typeof route.name === 'string' ? route.name : undefined,
    params: route.params,
    query,
  });
};
</script>

<template>
  <div v-if="activePanel" class="right-sidebar">
    <div class="right-sidebar__header border-bottom-black">
      <h2>{{ activePanel }}</h2>
      <button class="right-sidebar__header--close-btn" @click="hideRightSidebar">
        <Icon name="close"></Icon>
      </button>
    </div>
    <div v-if="activePanel === 'files'">
      <div class="right-sidebar__block border-bottom-black">
        <h5>available files</h5>
        <ul class="right-sidebar__list">
          <li v-for="file in visibleFiles" :key="file.name" class="right-sidebar__list-item">
            <span>{{ file.name }}</span>
            <span>{{ file.mime }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div v-else-if="activePanel === 'members'">
      <div class="right-sidebar__block border-bottom-black">
        <h5>{{ activeChat.name }}</h5>
        <ul class="right-sidebar__list">
          <li
            v-for="member in visibleMembers"
            :key="member.nick"
            class="right-sidebar__list-item"
          >
            <span>{{ member.name }}</span>
            <span>{{ member.status }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div v-else-if="activePanel === 'search'">
      <div class="right-sidebar__block border-bottom-black">
        <h5>search</h5>
        <p>Search panel placeholder.</p>
      </div>
    </div>
    <div v-else-if="activePanel === 'pins'">
      <div class="right-sidebar__block border-bottom-black">
        <h5>pin list</h5>
        <p>Pinned items panel placeholder.</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.right-sidebar {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-4) var(--space-7);

    h2 {
      color: var(--text-primary);
      margin: 0;
      text-transform: uppercase;
    }

    &--close-btn {
      :hover {
        color: var(--critical);
      }
    }
  }

  &__block {
    padding: var(--space-4) var(--space-7);
    color: var(--text-white-dim);

    h5 {
      margin: 0 0 var(--space-4);
      text-transform: uppercase;
      font-size: 14px;
    }

    p {
      margin: 0 0 var(--space-2);
    }

    &--stats {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
    padding: var(--space-3) 0;
  }
}
</style>
