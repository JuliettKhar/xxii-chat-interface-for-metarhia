<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import NavigationSidebar from '@/features/navigation_sidebar/index.vue';

const route = useRoute();

const showRightSidebar = computed(() => typeof route.query.panel === 'string');
</script>

<template>
  <div :class="['layout-wrapper', { 'no-right-sidebar': !showRightSidebar }]">
    <aside class="layout-wrapper__left-sidebar">
      <navigation-sidebar class="layout-wrapper__right-sidebar" />
    </aside>
    <section class="layout-wrapper__chat">
      <router-view name="Chat"></router-view>
    </section>
    <aside
      :class="[
        'layout-wrapper__right-sidebar',
        { 'layout-wrapper__right-sidebar--collapsed': !showRightSidebar },
      ]"
    >
      <router-view name="RightSidebar"></router-view>
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
    transition:
      opacity 220ms ease,
      transform 220ms ease;
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
