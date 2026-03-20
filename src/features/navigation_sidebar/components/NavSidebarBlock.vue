<script setup lang="ts">
import Icon from '@/shared/ui/Icon.vue';
import type { INavSidebar } from '@/features/right_sidebar/types';

const props = withDefaults(
  defineProps<{
    sidebarItem: INavSidebar[];
  }>(),
  {
    sidebarItem: () => [
      {
        name: '',
        items: [],
      },
    ],
  },
);

const formatTime = (value?: string | Date): string => {
  if (!value) return '';

  if (value instanceof Date) {
    return value.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  }

  const match = value.match(/\b\d{2}:\d{2}\b/);
  return match ? match[0] : value;
};
</script>

<template>
  <div
    v-for="(sidebarItem, i) in props.sidebarItem"
    :key="i"
    class="navigation-sidebar__block border-bottom-black"
  >
    <h3 class="navigation-sidebar__block--contacts">{{ sidebarItem.name?.toUpperCase() }}</h3>
    <ul class="navigation-sidebar__block--list">
      <template v-if="!sidebarItem.isFolder">
        <li v-for="(item, i) in sidebarItem.items" :key="i" class="list-hover">
          <router-link to="" class="navigation-sidebar__block-link">
            <span class="block-link__side-wrapper">
              <Icon :name="item.icon" variant="outlined" />
              <span class="block-link__side-"></span>
              <span>{{ item.name }}</span>
            </span>
            <span class="block-link__side-wrapper">
              <span v-if="item.messagesCount">[{{ item.messagesCount }}]</span>
              <span v-else></span>
              <span class="navigation-sidebar__block-time">{{ formatTime(item.lastActivity) }}</span>
            </span>
          </router-link>
        </li>
      </template>
      <template v-else>
        <li v-for="(item, i) in sidebarItem.items" :key="i">
          <button class="block-tree__side-wrapper">
            <span>[-]</span>
            <span class="block-link__folder-name">{{ item.name }}</span>
          </button>
          <ul class="navigation-sidebar__block-tree">
            <li v-for="(file, i) in item.files" :key="i">
              <button class="block-tree__side-wrapper">
                <Icon :size="12" name="draft" variant="outlined" />
                <span class="block-tree__file-name">{{ file }}</span>
              </button>
            </li>
          </ul>
        </li>
      </template>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.navigation-sidebar {
  &__block {
    padding: 0 var(--space-7);

    h3 {
      color: var(--text-white-dim);
    }
    ul {
      list-style-type: none;
      padding: 0;

      li {
        margin: 0;
      }
    }
  }

  &__block-link {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    width: 100%;
    justify-content: space-between;
  }

  &__block-tree {
    padding-left: var(--space-10) !important;
  }

  &__block--list {
    & > li.list-hover, {
      @include mixins.sidebar-list-hover;
    }
  }

  &__block-time {
    margin-left: auto;
    font-size: 11px;
    color: var(--text-white-dim);
  }
}


.block-link {
  &__side-wrapper {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-3);
  }

  &__file-name {
    color: var(--text-primary);

    &:hover {
      color: var(--text-white-dim);
    }
  }
}

.block-tree {
  &__side-wrapper {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-3);

    &:hover,
    &:focus-visible {
      color: var(--critical);
    }
  }

  &__file-name {
    color: var(--text-primary);

    &:hover {
      color: var(--critical);
    }
  }
}
</style>
