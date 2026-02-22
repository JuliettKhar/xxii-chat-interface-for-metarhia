<script setup lang="ts"></script>

<template>
  <div class="layout-wrapper">
    <section class="layout-wrapper__right-sidebar">side1</section>
    <section class="layout-wrapper__chat">chat</section>
    <section class="layout-wrapper__left-sidebar">side2</section>
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

  &__right-sidebar {
    background: var(--aside-bg);
    border-right: .5px solid var(--accent-bg);
  }

  &__left-sidebar {
     border-left: .5px solid var(--accent-bg);
  }
}
</style>
