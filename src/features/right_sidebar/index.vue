<script setup lang="ts">
import Icon from '@/shared/ui/Icon.vue';
import ChatMessage from '@/shared/ui/chat_message/index.vue';
import { CHAT_MESSAGES } from '@/shared/utils/mock-data.ts';
import type { IChatMessage } from '@/features/app_chat/types';

const emits = defineEmits(['hide']);

const message = CHAT_MESSAGES[0] as IChatMessage;

const hideRightSidebar = () => emits('hide');
</script>

<template>
  <div class="right-sidebar">
    <div class="right-sidebar__header border-bottom-black">
      <h2>post details</h2>
      <button class="right-sidebar__header--close-btn" @click="hideRightSidebar">
        <Icon name="close"></Icon>
      </button>
    </div>
    <div>
      <div class="right-sidebar__block border-bottom-black">
        <ChatMessage :message="message" class="" />
      </div>
      <div class="right-sidebar__block border-bottom-black">
        <h5>stats</h5>
        <p class="right-sidebar__block--stats">
          <span>Replies</span>
          <span>15</span>
        </p>
        <p class="right-sidebar__block--stats">
          <span>Reactions</span>
          <span>15</span>
        </p>
      </div>
      <div class="right-sidebar__block border-bottom-black">
        <h5>outline</h5>
        <p>-> Introduction</p>
        <p>-> Key features</p>
        <p>-> Next steps</p>
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
}
</style>
