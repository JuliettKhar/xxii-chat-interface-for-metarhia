<script setup lang="ts">
import { CHAT_MESSAGES, chatNav } from '@/shared/utils/mock-data.ts';
import Icon from '@/shared/ui/Icon.vue';
import ChatInput from '@/widgets/rigth_sidebar/components/chat_input/index.vue';
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
            <router-link to="" class="chat__nav-link"> [{{ item }}] </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="chat__message-wrapper">
      <div v-for="(message, i) in CHAT_MESSAGES" :key="i" class="chat__message">
        <h6>{{ message.title }}</h6>
        <p>
          <span>{{ message.author }}</span
          ><span>{{ message.time }}</span>
        </p>
        <p>{{ message.body }}</p>
        <div class="chat__message--replies">
          <button>
            <Icon name="add_comment"></Icon>
            <span>{{ message.replies }} replies</span>
          </button>
          <div>
            <span v-for="(reaction, i) in message.reactions" :key="i">
              <span>{{ reaction.emoji }}</span>
              <span>{{ reaction.count }}</span>
            </span>
          </div>
        </div>
      </div>
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
    padding: 6px 14px;
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
      color: var(--text-white);
      opacity: 0.7;
      align-items: center;

      span:first-child {
        font-weight: 500;
        color: var(--text-secondary);
      }

      span:last-child {
        font-size: 11px;
        color: var(--text-white);
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

  &__input {
  }
}
</style>
