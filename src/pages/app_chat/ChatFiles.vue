<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { FILES } from '@/shared/utils/mock-data.ts';

const route = useRoute();

const activeFolder = computed(() => {
  const folder = route.query.folder;
  return typeof folder === 'string' ? folder : '';
});

const activeFile = computed(() => {
  const file = route.query.file;
  return typeof file === 'string' ? file : '';
});

const visibleFiles = computed(() => {
  if (!activeFolder.value) return FILES;
  return FILES.filter((file) => file.folder === activeFolder.value);
});
</script>

<template>
  <section class="chat-files">
    <div class="chat-files__header">
      <span>files</span>
      <span v-if="activeFolder">/{{ activeFolder }}</span>
      <span v-if="activeFile">/{{ activeFile }}</span>
    </div>
    <ul class="chat-files__list">
      <li
        v-for="file in visibleFiles"
        :key="file.name"
        class="chat-files__item border-bottom-black"
        :class="{ 'chat-files__item--active': file.name === activeFile }"
      >
        <div>
          <p>{{ file.name }}</p>
          <span>{{ file.folder }}</span>
        </div>
        <span>{{ file.mime }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.chat-files {
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
