<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { CONTACTS } from '@/shared/utils/mock-data.ts';

const route = useRoute();

const activeContact = computed(() => {
  const contact = route.query.contact;
  return typeof contact === 'string' ? contact : '';
});
</script>

<template>
  <section class="chat-contacts">
    <div class="chat-contacts__header">
      <span>contacts</span>
      <span v-if="activeContact">/{{ activeContact }}</span>
    </div>
    <ul class="chat-contacts__list">
      <li
        v-for="contact in CONTACTS"
        :key="contact.nick"
        class="chat-contacts__item border-bottom-black"
        :class="{ 'chat-contacts__item--active': contact.name === activeContact }"
      >
        <div>
          <p>{{ contact.name }}</p>
          <span>{{ contact.status }}</span>
        </div>
        <span>{{ contact.lastActivity }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.chat-contacts {
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

    &--active {
      color: var(--critical);

      p {
        color: var(--critical);
      }
    }

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
