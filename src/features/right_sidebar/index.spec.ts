import { shallowMount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import RightSidebar from './index.vue';

const routeMock = {
  query: {} as Record<string, string>,
  params: {} as Record<string, string>,
  name: 'chatMessages',
};

const replaceMock = vi.fn();

vi.mock('vue-router', () => ({
  useRoute: () => routeMock,
  useRouter: () => ({
    replace: replaceMock,
  }),
}));

describe('RightSidebar', () => {
  beforeEach(() => {
    routeMock.query = {};
    routeMock.params = {};
    routeMock.name = 'chatMessages';
    replaceMock.mockReset();
  });

  it('does not render without active panel', () => {
    const wrapper = shallowMount(RightSidebar, {
      global: {
        stubs: {
          Icon: true,
        },
      },
    });

    expect(wrapper.find('.right-sidebar').exists()).toBe(false);
  });

  it('renders members panel for the active chat', () => {
    routeMock.query = { panel: 'members' };
    routeMock.params = { id: '1' };

    const wrapper = shallowMount(RightSidebar, {
      global: {
        stubs: {
          Icon: true,
        },
      },
    });

    expect(wrapper.text()).toContain('members');
    expect(wrapper.text()).toContain('!product');
    expect(wrapper.text()).toContain('name 1');
    expect(wrapper.text()).toContain('name 2');
    expect(wrapper.text()).toContain('name 3');
  });

  it('filters files by folder and closes via router replace', async () => {
    routeMock.query = { panel: 'files', folder: 'Projects' };

    const wrapper = shallowMount(RightSidebar, {
      global: {
        stubs: {
          Icon: true,
        },
      },
    });

    expect(wrapper.text()).toContain('report.pdf');
    expect(wrapper.text()).toContain('design.png');
    expect(wrapper.text()).not.toContain('old-chats');

    await wrapper.get('button').trigger('click');

    expect(replaceMock).toHaveBeenCalledWith({
      name: 'chatMessages',
      params: {},
      query: { folder: 'Projects' },
    });
  });
});
