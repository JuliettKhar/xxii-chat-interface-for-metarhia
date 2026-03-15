<script setup lang="ts">
import { CHAT_MESSAGES, chatNav } from '@/shared/utils/mock-data.ts';
import ChatInput from '@/features/app_chat/components/chat_input/index.vue';
import ChatMessage from '@/shared/ui/chat_message/index.vue';
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
            <router-link to="" class="chat__nav-link"> [ {{ item }} ] </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="chat__message-wrapper">
      <ChatMessage
        v-for="(message, i) in CHAT_MESSAGES"
        :key="i"
        :message="message"
        has-reactions
      />
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
  color: var(--text-white);

  &__header {
    padding: 10px 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__header-left {
    span:first-child {
      margin-right: 10px;
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
        background: var(--text-white);
        margin-left: 8px;
        opacity: 0.7;
      }
    }

    span:last-child {
      font-weight: 500;
      opacity: 0.7;
    }
  }

  &__nav {
    ul {
      display: flex;
      gap: 14px;
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        @include mixins.sidebar-list-hover;
      }

      li > a {
        padding: 2px;
        display: inline-block;
        opacity: 0.7;
      }
    }
  }

  &__message-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 8px 14px;
    flex: 1;
  }
}
</style>
