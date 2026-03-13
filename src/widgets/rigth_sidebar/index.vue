<script setup lang="ts">
import Icon from '@/shared/ui/Icon.vue';
</script>

<template>
  <div class="right-sidebar">
    <div class="right-sidebar__header border-bottom-black">
      <h2>post details</h2>
      <button>
        <Icon name="close"></Icon>
      </button>
    </div>
    <div>
      <div class="right-sidebar__block border-bottom-black"></div>
      <div class="right-sidebar__block border-bottom-black">
        <h5>stats</h5>
        <p class="right-sidebar__block--stats">
          <span>Replies</span>
          <span>15</span>
        </p>
        <p class="right-sidebar__block--stats">
          <span>Reactions</span>
          <span>15</span>
        </p>
      </div>
      <div class="right-sidebar__block border-bottom-black">
        <h5>outline</h5>
        <p>-> Introduction</p>
        <p>-> Key features</p>
        <p>-> Next steps</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.right-sidebar {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 14px;

    h2 {
      color: var(--text-primary);
      margin: 0;
      text-transform: uppercase;
    }
  }

  &__block {
    padding: 8px 14px;
    color: var(--text-white);

    h5 {
      margin: 0 0 8px;
      text-transform: uppercase;
      font-size: 14px;
    }

    p {
      margin: 0 0 4px;
      //color: var(--text-secondary);
    }

    &--stats {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
