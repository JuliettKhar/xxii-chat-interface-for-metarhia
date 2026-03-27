import { onMounted, onUnmounted, ref } from 'vue';

export default function useChatInput () {
  const textAreaInput = ref<HTMLTextAreaElement | null>(null);
  const mirror = ref<HTMLSpanElement | null>(null);
  const cursor = ref<HTMLElement | null>(null);
  const terminalContainer = ref<HTMLElement | null>(null);
  let blinkTimeoutId: number | null = null;

  const setBlinking = (isBlinking: boolean) => {
    if (!cursor.value) {
      return;
    }
    if (isBlinking) {
      cursor.value.classList.remove('is-blinking');
      requestAnimationFrame(() => {
        cursor.value?.classList.add('is-blinking');
      });
      return;
    }
    cursor.value.classList.remove('is-blinking');
  };

  const addListeners = () => {
    if (!textAreaInput.value || !mirror.value || !cursor.value) {
      return;
    }

    textAreaInput.value.addEventListener('input', (event: Event) => {
      const target = event.target as HTMLTextAreaElement | null;
      mirror.value!.textContent = target?.value ?? '';
      setBlinking(false);
      if (blinkTimeoutId !== null) {
        window.clearTimeout(blinkTimeoutId);
      }
      blinkTimeoutId = window.setTimeout(() => {
        setBlinking(true);
      }, 350);
    });

    textAreaInput.value.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        const message = textAreaInput.value?.value.trim();
        if (message) {
          sendMessage(message);
        }
      }
    });

    terminalContainer.value?.addEventListener('click', (event: Event) => {
      if (event.target === terminalContainer.value) {
        textAreaInput.value!.focus();
      }
    });

    terminalContainer.value?.addEventListener('scroll', () => {
      document!.querySelector('.terminal-visual')!.scrollTop = textAreaInput.value!.scrollTop;
    });
  }

  const sendMessage = (_text: string) => {
    textAreaInput.value!.value = '';
    mirror.value!.innerText = '';
  };
  onMounted(() => {
    addListeners()
    setBlinking(true);
  })
  onUnmounted(() => {
    if (blinkTimeoutId !== null) {
      window.clearTimeout(blinkTimeoutId);
    }
  })

  return {
    textAreaInput,
    mirror,
    cursor,
    sendMessage,
  };

}
