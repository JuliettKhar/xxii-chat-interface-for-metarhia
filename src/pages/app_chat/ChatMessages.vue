<script setup lang="ts">
import { CHAT_MESSAGES } from '@/shared/utils/mock-data.ts';
import ChatMessage from '@/shared/ui/chat_message/index.vue';
</script>

<template>
  <div class="chat-messages">
    <ChatMessage
      v-for="(message, i) in CHAT_MESSAGES"
      :key="i"
      :message="message"
      has-reactions
    />
  </div>
</template>

<style scoped lang="scss">
.chat-messages {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}
</style>
