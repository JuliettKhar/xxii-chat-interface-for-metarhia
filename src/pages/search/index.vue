<template>
  <section class="screen">
    <header class="screen__header border-bottom-black">
      <span class="screen__label">search</span>
      <h1 class="screen__title">Search screen</h1>
    </header>
    <div class="screen__body">
      <p>Mock screen for search results and filters flow.</p>
      <p>Added to cover the architecture requirements with a dedicated route.</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.screen {
  min-height: 100vh;
  background: var(--bg);
  color: var(--text-primary);
}

.screen__header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
}

.screen__label {
  color: var(--text-secondary);
  text-transform: uppercase;
}

.screen__title {
  margin: 0;
  font-size: var(--font-size-lg);
}

.screen__body {
  padding: 16px;
  color: var(--text-white-dim);
}
</style>
