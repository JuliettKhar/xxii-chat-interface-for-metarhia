<script setup lang="ts">
import useChatInput from '@/features/app_chat/composables/useChatInput.ts';

const { mirror, textAreaInput, cursor } = useChatInput();
</script>

<template>
  <div class="chat__input-wrapper">
    <div ref="terminalContainer" class="terminal-container">
      <div class="terminal-visual">
        <span ref="mirror"></span>
        <span ref="cursor" class="terminal-cursor is-blinking"></span>
      </div>

      <textarea id="terminal-input" ref="textAreaInput" spellcheck="false" autofocus></textarea>
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
  padding: var(--space-5) var(--space-7);
  background: var(--aside-bg);
  margin: var(--space-5);
}

.input-wrapper {
  display: flex;
  min-height: 50px;
  gap: var(--space-5);
  background: var(--bg);
  padding: var(--space-3) var(--space-5);
  border-radius: 4px;
  margin-bottom: var(--space-5);

  .prompt {
    color: var(--text-secondary);
    font-weight: 500;
  }
}

.input-action-selectors {
  display: flex;
  gap: var(--space-5);
  color: var(--text-white);
  justify-content: space-between;

  &__wrapper {
    display: flex;
    gap: var(--space-5);

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

.terminal-container {
  padding: var(--space-2);
  box-sizing: border-box;
  position: relative;
  background: var(--bg);
  color: var(--text-white);
  //font-family: 'Courier New', monospace;
  font-size: 14px;
  //line-height: 1.4;
  width: 100%;
  min-height: 70px;
  margin-bottom: var(--space-5);
  border-radius: 3px;
}

#terminal-input,
.terminal-visual {
  //padding: 20px;
  margin: 0;
  border: none;
  font: inherit;
  line-height: inherit;
  white-space: pre-wrap;
  word-wrap: break-word;
}

#terminal-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  color: transparent;
  caret-color: transparent;
  resize: none;
  outline: none;
  z-index: 2;
}

.terminal-cursor {
  display: inline-block;
  width: 8px;
  height: 1.2em;
  background: #00ff00;
  vertical-align: middle;
  box-shadow: 0 0 5px rgba(0, 255, 0, 0.7);
  mix-blend-mode: difference;
}

.terminal-cursor.is-blinking {
  animation: blink 1s steps(2) infinite;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
