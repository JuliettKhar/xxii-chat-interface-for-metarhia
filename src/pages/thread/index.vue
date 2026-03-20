<template>
  <section class="screen">
    <header class="screen__header border-bottom-black">
      <span class="screen__label">thread</span>
      <h1 class="screen__title">Thread screen</h1>
    </header>
    <div class="screen__body">
      <p>Mock screen for thread/replies flow.</p>
      <p>Reserved for the separate thread view from the requirements.</p>
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
