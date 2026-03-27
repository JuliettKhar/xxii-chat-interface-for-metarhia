import { describe, expect, it } from 'vitest';
import router from './index';

describe('app router', () => {
  it('resolves root files route', () => {
    const result = router.resolve({ name: 'chatRootFiles', query: { folder: 'Projects' } });

    expect(result.path).toBe('/files');
    expect(result.query.folder).toBe('Projects');
  });

  it('resolves chat members route with id', () => {
    const result = router.resolve({ name: 'chatMembers', params: { id: '1' } });

    expect(result.path).toBe('/chat/1/members');
  });

  it('resolves chat contacts route with query', () => {
    const result = router.resolve({
      name: 'chatContacts',
      params: { id: '2' },
      query: { contact: 'name 1' },
    });

    expect(result.path).toBe('/chat/2/contacts');
    expect(result.query.contact).toBe('name 1');
  });
});
