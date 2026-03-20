<script setup lang="ts">
import NavigationSidebar from '@/features/navigation_sidebar/index.vue';
import AppChat from '@/pages/app_chat/index.vue';
import RightSidebar from '@/features/right_sidebar/index.vue';
import { ref } from 'vue';

const showRightSidebar = ref<boolean>(true);

const hideRightSidebar = () => {
  showRightSidebar.value = false;
};
</script>

<template>
  <div class="layout-wrapper" :class="{ 'no-right-sidebar': !showRightSidebar }">
    <aside class="layout-wrapper__left-sidebar"><NavigationSidebar /></aside>
    <section class="layout-wrapper__chat"><AppChat /></section>
    <aside
      class="layout-wrapper__right-sidebar"
      :class="{ 'layout-wrapper__right-sidebar--collapsed': !showRightSidebar }"
      :aria-hidden="!showRightSidebar"
    >
      <right-sidebar @hide="hideRightSidebar" />
    </aside>
  </div>
</template>

<style scoped lang="scss">
.layout-wrapper {
  display: grid;
  grid-template-columns: minmax(0, 25%) minmax(0, 1fr) var(--right-sidebar-width, 25%);
  min-height: inherit;
  transition: grid-template-columns 220ms ease;
  overflow-x: hidden;

  &__right-sidebar,
  &__left-sidebar {
    border: 0.5px none;
  }

  &__left-sidebar {
    background: var(--aside-bg);
    border-right: 0.5px solid var(--accent-bg);
  }

  &__chat {
    min-width: 0;
  }

  &__right-sidebar {
    transition: opacity 220ms ease, transform 220ms ease;
    will-change: opacity, transform;
    border-left: 0.5px solid var(--accent-bg);
    transform: translateX(0);
    opacity: 1;
    min-width: 0;
    overflow: hidden;
  }

  &__right-sidebar--collapsed {
    opacity: 0;
    transform: translateX(16px);
    border-left: none;
    pointer-events: none;
  }
}

.no-right-sidebar {
  --right-sidebar-width: 0px;
}
</style>
