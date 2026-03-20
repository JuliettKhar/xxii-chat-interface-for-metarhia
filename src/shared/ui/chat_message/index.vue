<script setup lang="ts">
import Icon from '@/shared/ui/Icon.vue';
import type { IChatMessage } from '@/features/app_chat/types';
const props = withDefaults(
  defineProps<{
    message: IChatMessage;
    hasReactions?: boolean;
  }>(),
  {
    message: () => ({
      title: '',
      author: '',
      time: '',
      body: '',
      replies: 0,
      reactions: {},
    }),
  },
);
</script>

<template>
  <div :class="{ chat__message: hasReactions, 'chat__message-plain': !hasReactions }">
    <h6>{{ props.message.title }}</h6>
    <p>
      <span>{{ props.message.author }}</span
      ><span>{{ props.message.time }}</span>
    </p>
    <p>{{ props.message.body }}</p>
    <div v-if="hasReactions" class="chat__message--replies">
      <button>
        <Icon name="add_comment"></Icon>
        <span>{{ props.message.replies }} replies</span>
      </button>
      <div>
        <span v-for="(authors, emoji) in props.message.reactions" :key="emoji">
          <span>{{ emoji }}</span>
          <span>{{ authors.length }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.chat {
  &__message {
    padding: 14px;
    background: var(--aside-bg);
    border-radius: 2px;

    h6 {
      margin: 2px 0;
      font-size: 14px;
      color: var(--text-primary);
    }

    p {
      margin: 4px 0;
      display: flex;
      gap: 8px;
      color: var(--text-white-dim);
      align-items: center;

      span:first-child {
        font-weight: 500;
        color: var(--text-secondary);
      }

      span:last-child {
        font-size: 11px;
        color: var(--text-white-dim);
      }
    }
  }

  &__message-plain {
    color: var(--text-primary);

    h6 {
      margin: 2px 0;
      font-size: 14px;
      color: var(--text-primary);
    }

    p {
      margin: 4px 0;
      display: flex;
      gap: 8px;
      align-items: center;

      span:first-child {
        font-weight: 500;
        color: var(--text-secondary);
      }

      span:last-child {
        font-size: 11px;
        color: var(--text-white-dim);
      }
    }
  }

  &__message--replies {
    margin-top: 10px;
    display: flex;
    gap: 4px;
    align-items: center;

    button {
      color: var(--accent-blue);

      &:hover,
      &:focus,
      &:active {
        color: var(--text-blue);
      }
    }
  }
}
</style>
