<script setup lang="ts">
import { ref } from 'vue';
import { CHATS, CONTACTS, FEEDS, FOLDERS } from '@/features/navigation_sidebar/utils/mock-data.ts';
import Icon from '@/shared/ui/Icon.vue';

const contacts = ref([...CONTACTS]);
const feeds = [...FEEDS];
const chats = ref([...CHATS]);
const folders = ref([...FOLDERS]);
</script>

<template>
  <nav class="navigation-sidebar">
    <div class="navigation-sidebar__menu-header border-bottom-black">
      <h2>$ Chat title</h2>
      <span class="navigation-sidebar__menu-header--peers">peers: 4</span>
    </div>
    <div>
      <div class="navigation-sidebar__block border-bottom-black">
        <h3 class="navigation-sidebar__block--contacts">CONTACTS</h3>
        <ul class="navigation-sidebar__block--list">
          <li v-for="(item, i) in contacts" :key="i">
            <router-link to="" class="navigation-sidebar__block-link">
              <Icon :name="item.icon" variant="outlined" />
              <span>{{ item.name }}</span>
              <span class="navigation-sidebar__block-time">{{ item.lastActivity }}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="navigation-sidebar__block border-bottom-black">
        <h3>FEEDS</h3>
        <ul class="navigation-sidebar__block--list">
          <li v-for="(item, i) in feeds" :key="i">
            <router-link to="" class="navigation-sidebar__block-link">
              <Icon :name="item.icon" variant="outlined" />
              <span>{{ item.name }}</span>
              <span class="navigation-sidebar__block-time">{{ item.lastActivity }}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="navigation-sidebar__block border-bottom-black">
        <h3>CHATS</h3>
        <ul class="navigation-sidebar__block--list">
          <li v-for="(item, i) in chats" :key="i">
            <router-link to="" class="navigation-sidebar__block-link">
              <Icon :name="item.icon" variant="outlined" />
              <span>{{ item.name }}</span>
              <span class="navigation-sidebar__block-time">{{ item.lastActivity }}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="navigation-sidebar__block border-bottom-black">
        <h3>FOLDERS</h3>
        <ul class="navigation-sidebar__block--list">
          <li v-for="(item, i) in folders" :key="i">
            <router-link to="" class="navigation-sidebar__block-link">
              <Icon :name="item.icon" variant="outlined" />
              <span>{{ item.name }}</span>
<!--              <span class="navigation-sidebar__block-time">{{ item.lastActivity }}</span>-->
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navigation-sidebar {
  &__menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 14px;

    h2 {
      margin: 0;
    }

    &--peers {
      flex-basis: 100px;
    }
  }

  &__block {
    padding: 0 14px;
    ul {
      list-style-type: none;
      padding: 0;

      li {
        margin: 0;
      }
    }
  }

  &__block-link {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
  }

  &__block--list {
    & > li {
      cursor: pointer;
      padding: 6px;

      &:hover {
        background-color: var(--critical);
        color: var(--text-white);
      }
    }
  }

  &__block-time {
    margin-left: auto;
    font-size: 11px;
    opacity: 0.7;
    color: var(--text-white);
  }
}
</style>
