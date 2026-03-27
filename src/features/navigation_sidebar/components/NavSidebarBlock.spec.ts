import { mount } from '@vue/test-utils';
import type { DOMWrapper } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import NavSidebarBlock from './NavSidebarBlock.vue';

const routeMock = {
  params: {} as Record<string, string>,
};

vi.mock('vue-router', () => ({
  useRoute: () => routeMock,
}));

const expectLinkAt = (
  links: DOMWrapper<HTMLAnchorElement>[],
  index: number,
) => {
  const link = links[index];

  expect(link).toBeDefined();

  return link!;
};

describe('NavSidebarBlock', () => {
  beforeEach(() => {
    routeMock.params = {};
  });

  it('renders contacts links to root contacts route', () => {
    const wrapper = mount(NavSidebarBlock, {
      props: {
        sidebarItem: [
          {
            name: 'contacts',
            items: [
              {
                name: 'name 1',
                icon: 'person',
                lastActivity: '2025-12-15 12:41',
                messagesCount: 12,
              },
            ],
          },
        ],
      },
      global: {
        stubs: {
          Icon: true,
          RouterLink: {
            props: ['to'],
            template: '<a :data-to="JSON.stringify(to)"><slot /></a>',
          },
        },
      },
    });

    const link = wrapper.get('a');

    expect(link.text()).toContain('name 1');
    expect(link.attributes('data-to')).toContain('"name":"chatRootContacts"');
    expect(link.attributes('data-to')).toContain('"contact":"name 1"');
  });

  it('renders folder and file links to root files route', () => {
    const wrapper = mount(NavSidebarBlock, {
      props: {
        sidebarItem: [
          {
            name: 'folders',
            isFolder: true,
            items: [
              {
                name: 'Projects',
                icon: 'folder',
                files: ['project-alpha'],
              },
            ],
          },
        ],
      },
      global: {
        stubs: {
          Icon: true,
          RouterLink: {
            props: ['to'],
            template: '<a :data-to="JSON.stringify(to)"><slot /></a>',
          },
        },
      },
    });

    const links = wrapper.findAll('a');
    const folderLink = expectLinkAt(links, 0);
    const fileLink = expectLinkAt(links, 1);

    expect(folderLink.attributes('data-to')).toContain('"name":"chatRootFiles"');
    expect(folderLink.attributes('data-to')).toContain('"folder":"Projects"');
    expect(fileLink.attributes('data-to')).toContain('"name":"chatRootFiles"');
    expect(fileLink.attributes('data-to')).toContain('"file":"project-alpha"');
  });

  it('uses chat scoped routes when chat id is active', () => {
    routeMock.params = { id: '3' };

    const wrapper = mount(NavSidebarBlock, {
      props: {
        sidebarItem: [
          {
            name: 'folders',
            isFolder: true,
            items: [
              {
                name: 'Archive',
                icon: 'folder',
                files: ['old-chats'],
              },
            ],
          },
        ],
      },
      global: {
        stubs: {
          Icon: true,
          RouterLink: {
            props: ['to'],
            template: '<a :data-to="JSON.stringify(to)"><slot /></a>',
          },
        },
      },
    });

    const links = wrapper.findAll('a');
    const folderLink = expectLinkAt(links, 0);
    const fileLink = expectLinkAt(links, 1);

    expect(folderLink.attributes('data-to')).toContain('"name":"chatFiles"');
    expect(folderLink.attributes('data-to')).toContain('"id":"3"');
    expect(fileLink.attributes('data-to')).toContain('"name":"chatFiles"');
    expect(fileLink.attributes('data-to')).toContain('"file":"old-chats"');
  });
});
