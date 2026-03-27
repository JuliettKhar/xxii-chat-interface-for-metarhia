import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import App from './App.vue';

describe('App', () => {
  it('sets the default theme on mount', () => {
    mount(App, {
      global: {
        stubs: {
          RouterView: { template: '<div data-test="router-view-stub" />' },
        },
      },
    });

    expect(document.documentElement.dataset.theme).toBe('green');
  });
});
