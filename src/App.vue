<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  document.documentElement.dataset.theme = 'green';
});
</script>

<template>
  <main class="main">
    <router-view />
  </main>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
