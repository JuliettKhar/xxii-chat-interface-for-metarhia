<script setup lang="ts"></script>

<template>
  <div class="chat__input-wrapper">
    <div class="input-wrapper" contenteditable>
      <span class="prompt">> new post to #random</span>
    </div>
    <div class="input-action-selectors">
      <div class="input-action-selectors__wrapper">
        <button>[ attach ]</button>
        <button>[ emoji ]</button>
        <button>[ poll ]</button>
      </div>
      <button class="input-action-selectors__send">[ send ]</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.chat__input-wrapper {
  padding: 10px 15px;
  background: var(--aside-bg);
  margin: 10px;
}

.input-wrapper {
  display: flex;
  min-height: 50px;
  gap: 10px;
  background: var(--bg);
  padding: 6px 10px;
  border-radius: 4px;
  margin-bottom: 10px;

  .prompt {
    color: var(--text-secondary);
    font-weight: 500;
  }
}

.input-action-selectors {
  display: flex;
  gap: 10px;
  color: var(--text-white);
  justify-content: space-between;

  &__wrapper {
    display: flex;
    gap: 10px;

    button {
      color: var(--accent-blue);

      &:hover,
      &:focus,
      &:active {
        color: var(--text-blue);
      }
    }
  }

  &__send {
    color: var(--text-black);
    background: var(--accent-2);

    &:hover,
    &:focus,
    &:active {
      background: var(--accent);
    }
  }
}
</style>
