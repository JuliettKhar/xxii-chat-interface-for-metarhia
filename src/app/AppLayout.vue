<script setup lang="ts">
import NavigationSidebar from '@/features/navigation_sidebar/index.vue';
import AppChat from '@/features/app_chat/index.vue';
</script>

<template>
  <div class="layout-wrapper">
    <section class="layout-wrapper__left-sidebar"><NavigationSidebar /></section>
    <section class="layout-wrapper__chat"><AppChat /></section>
    <section class="layout-wrapper__right-sidebar">side2</section>
  </div>
</template>

<style scoped lang="scss">
.layout-wrapper {
  display: grid;
  grid-template-columns: minmax(0, 25%) minmax(0, 50%) minmax(0, 25%);
  min-height: inherit;

  &__right-sidebar,
  &__left-sidebar {
    border: .5px none;
  }

  &__left-sidebar {
    background: var(--aside-bg);
    border-right: .5px solid var(--accent-bg);
  }

  &__right-sidebar {
     border-left: .5px solid var(--accent-bg);
  }
}
</style>
