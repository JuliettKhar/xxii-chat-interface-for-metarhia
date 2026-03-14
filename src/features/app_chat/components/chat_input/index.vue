<script setup lang="ts"></script>

<template>
  <div class="chat__input-wrapper">
    <div class="terminal-container">
      <div class="terminal-visual">
        <span id="mirror-text"></span><span class="terminal-cursor"></span>
      </div>

      <textarea id="terminal-input" spellcheck="false" autofocus></textarea>
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

.terminal-container {
  padding: 5px;
  box-sizing: border-box;
  position: relative;
  background: var(--bg);
  color: var(--text-white);
  //font-family: 'Courier New', monospace;
  font-size: 14px;
  //line-height: 1.4;
  width: 100%;
  min-height: 70px;
  margin-bottom: 10px;
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
  width: 10px;
  height: 1.2em;
  background: #00ff00;
  vertical-align: middle;
  animation: blink 1s steps(2) infinite;
  box-shadow: 0 0 5px rgba(0, 255, 0, 0.7);
  mix-blend-mode: difference;
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
