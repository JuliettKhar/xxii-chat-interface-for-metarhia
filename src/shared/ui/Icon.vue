<script setup lang="ts">
import { computed } from 'vue';

type IconVariant =
  | 'outlined'
  | 'symbols-outlined'
  | 'material-symbols-outlined'
  | string;

const props = withDefaults(
  defineProps<{
    name: string;
    variant?: IconVariant;
    size?: number | string;
    ariaLabel?: string;
  }>(),
  {
    variant: 'outlined',
    size: 16,
  },
);

const className = computed(() => {
  const variant = props.variant ?? 'outlined';

  if (
    variant === 'outlined' ||
    variant === 'symbols-outlined' ||
    variant === 'material-symbols-outlined'
  ) {
    return 'material-symbols-outlined';
  }

  return 'material-symbols-outlined';
});

const style = computed(() => ({
  fontSize: typeof props.size === 'number' ? `${props.size}px` : props.size,
  lineHeight: '1',
  display: 'inline-flex',
  alignItems: 'center',
  verticalAlign: 'middle',
}));
</script>

<template>
  <span :class="className" :style="style" role="img" :aria-label="ariaLabel || name">
    {{ name }}
  </span>
</template>
