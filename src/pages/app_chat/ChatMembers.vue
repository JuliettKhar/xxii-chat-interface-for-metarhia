<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { CHATS, CONTACTS } from '@/shared/utils/mock-data.ts';

const route = useRoute();

const activeChat = computed(() => {
  const chatIndex = Number(route.params.id ?? 0);
  return CHATS[chatIndex] ?? CHATS[0];
});

const visibleMembers = computed(() =>
  CONTACTS.filter((contact) => activeChat.value.members.includes(contact.nick)),
);
</script>

<template>
  <section class="chat-members">
    <div class="chat-members__header">
      <span>members</span>
      <span>/{{ activeChat.name }}</span>
    </div>
    <ul class="chat-members__list">
      <li
        v-for="member in visibleMembers"
        :key="member.nick"
        class="chat-members__item border-bottom-black"
      >
        <div>
          <p>{{ member.name }}</p>
          <span>{{ member.status }}</span>
        </div>
        <span>{{ member.nick }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.chat-members {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  color: var(--text-white-dim);

  &__header {
    display: flex;
    gap: var(--space-2);
    color: var(--text-primary);
    text-transform: uppercase;
  }

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-4) 0;

    p {
      margin: 0 0 var(--space-1);
      color: var(--text-primary);
    }

    span {
      font-size: 12px;
    }
  }
}
</style>
