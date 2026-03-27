<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
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

const route = useRoute();

const filesRouteName = computed(() => (route.params.id ? 'chatFiles' : 'chatRootFiles'));
const contactsRouteName = computed(() => (route.params.id ? 'chatContacts' : 'chatRootContacts'));

const buildContactsRoute = (contactName: string) => ({
  name: contactsRouteName.value,
  params: route.params.id ? { id: route.params.id } : undefined,
  query: { contact: contactName },
});

const buildFolderRoute = (folderName: string) => ({
  name: filesRouteName.value,
  params: route.params.id ? { id: route.params.id } : undefined,
  query: { folder: folderName },
});

const buildFileRoute = (folderName: string, fileName: string) => ({
  name: filesRouteName.value,
  params: route.params.id ? { id: route.params.id } : undefined,
  query: { folder: folderName, file: fileName },
});

const formatTime = (value?: string | Date): string => {
  if (!value) return '';

  if (value instanceof Date) {
    return value.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  }

  const match = value.match(/\b\d{2}:\d{2}\b/);
  return match ? match[0] : value;
};

const buildItemRoute = (sectionName: string, itemIndex: number, itemName: string) => {
  if (sectionName === 'contacts') return buildContactsRoute(itemName);

  return { name: 'chatId', params: { id: `${itemIndex}` } };
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
          <router-link
            :to="buildItemRoute(sidebarItem.name, i, item.name)"
            class="navigation-sidebar__block-link"
          >
            <span class="block-link__side-wrapper">
              <Icon :name="item.icon" variant="outlined" />
              <span class="block-link__side-"></span>
              <span>{{ item.name }}</span>
            </span>
            <span class="block-link__side-wrapper">
              <span v-if="item.messagesCount">[{{ item.messagesCount }}]</span>
              <span v-else></span>
              <span class="navigation-sidebar__block-time">{{
                formatTime(item.lastActivity)
              }}</span>
            </span>
          </router-link>
        </li>
      </template>
      <template v-else>
        <li v-for="(item, i) in sidebarItem.items" :key="i">
          <router-link :to="buildFolderRoute(item.name)" class="block-tree__side-wrapper">
            <span>[-]</span>
            <span class="block-link__folder-name">{{ item.name }}</span>
          </router-link>
          <ul class="navigation-sidebar__block-tree">
            <li v-for="(file, i) in item.files" :key="i">
              <router-link :to="buildFileRoute(item.name, file)" class="block-tree__side-wrapper">
                <Icon :size="12" name="draft" variant="outlined" />
                <span class="block-tree__file-name">{{ file }}</span>
              </router-link>
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
    & > li.list-hover {
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
    width: 100%;

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
