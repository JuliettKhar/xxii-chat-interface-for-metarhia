<script setup lang="ts">
import { CHATS, CONTACTS, FEEDS, FOLDERS } from '@/shared/utils/mock-data.ts';
import NavSidebarBlock from '@/features/navigation_sidebar/components/NavSidebarBlock.vue';

const sidebarNav = [
  { name: 'contacts', items: [...CONTACTS] },
  { name: 'feeds', items: [...FEEDS] },
  { name: 'chats', items: [...CHATS] },
  { name: 'folders', items: [...FOLDERS], isFolder: true },
];
</script>

<template>
  <nav class="navigation-sidebar">
    <div class="navigation-sidebar__menu-header border-bottom-black">
      <router-link to="/" class="navigation-sidebar__menu-header-link">
        <img src="@/shared/assets/metarhia.svg" alt="logo" />
      </router-link>
      <span class="navigation-sidebar__menu-header--peers"><span>peers:</span> 4</span>
    </div>
    <NavSidebarBlock :sidebarItem="sidebarNav" />
  </nav>
</template>

<style scoped lang="scss">
.navigation-sidebar {
  &__menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-4) var(--space-7);

    h2 {
      margin: 0;
    }

    &-link {
      display: flex;

      img {
        max-width: 77px;
      }
    }

    &--peers {
      flex-basis: 100px;

      span:first-child {
        color: var(--text-white-dim);
      }
    }
  }
}
</style>
