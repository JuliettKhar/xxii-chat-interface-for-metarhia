import type { IChatMessage } from '@/features/app_chat/types';

export const CONTACTS = [
  {
    nick: 'name_1',
    name: 'name 1',
    bio: '',
    icon: 'person',
    lastActivity: '2025-12-15 12:41',
    messagesCount: 12,
    photo: null,
    status: 'online',
    created: '2025-12-10T09:30:00Z',
    updated: '2025-12-15T12:41:00Z',
    settings: {},
    nodes: [
      {
        name: 'node-1',
        domain: 'node1.local',
        ip: '127.0.0.1',
        ports: [7000, 7001],
      },
    ],
  },
  {
    nick: 'name_2',
    name: 'name 2',
    bio: '',
    icon: 'person',
    lastActivity: '2025-12-15 11:23',
    messagesCount: 24,
    photo: null,
    status: 'away',
    created: '2025-12-11T10:10:00Z',
    updated: '2025-12-15T11:23:00Z',
    settings: {},
    nodes: [
      {
        name: 'node-2',
        domain: 'node2.local',
        ip: '127.0.0.2',
        ports: [7000],
      },
    ],
  },
  {
    nick: 'name_3',
    name: 'name 3',
    bio: '',
    icon: 'person',
    lastActivity: '2025-12-14 09:00',
    photo: null,
    status: 'offline',
    created: '2025-12-09T14:00:00Z',
    updated: '2025-12-14T09:00:00Z',
    settings: {},
    nodes: [],
  },
];

export const FEEDS = [
  {
    name: '#announcement',
    owner: 'name_1',
    icon: 'campaign',
    description: '',
    lastActivity: '2025-12-15 12:32',
    created: '2025-12-01T08:00:00Z',
    visibility: 'public',
    joinPolicy: 'open',
    pinned: [],
  },
  {
    name: '#dev',
    owner: 'name_2',
    icon: 'code',
    description: '',
    lastActivity: '2025-12-15 10:12',
    created: '2025-12-02T09:15:00Z',
    visibility: 'public',
    joinPolicy: 'open',
    pinned: [],
  },
  {
    name: '#design',
    owner: 'name_3',
    icon: 'design_services',
    description: '',
    lastActivity: '2025-12-14 18:05',
    created: '2025-12-03T10:20:00Z',
    visibility: 'unlisted',
    joinPolicy: 'invite',
    pinned: [],
  },
  {
    name: '#random',
    owner: 'name_1',
    icon: 'shuffle',
    description: '',
    lastActivity: '2025-12-14 20:41',
    created: '2025-12-04T11:00:00Z',
    visibility: 'public',
    joinPolicy: 'open',
    pinned: [],
  },
];

export const CHATS = [
  {
    name: '!engineering',
    owner: 'name_1',
    icon: 'folder_code',
    description: '',
    created: '2025-12-05T08:30:00Z',
    lastActivity: '2025-12-15 12:01',
    messagesCount: 2,
    members: ['name_1', 'name_2'],
    admins: ['name_1'],
    moderators: [],
    mute: [],
    ban: [],
    pinned: [],
  },
  {
    name: '!product',
    owner: 'name_2',
    icon: 'contacts_product',
    description: '',
    created: '2025-12-06T09:00:00Z',
    lastActivity: '2025-12-15 11:04',
    messagesCount: 29,
    members: ['name_1', 'name_2', 'name_3'],
    admins: ['name_2'],
    moderators: [],
    mute: [],
    ban: [],
    pinned: [],
  },
  {
    name: '!general',
    owner: 'name_3',
    icon: 'settings_heart',
    description: '',
    created: '2025-12-07T10:00:00Z',
    lastActivity: '2025-12-14 17:22',
    messagesCount: 26,
    members: ['name_1', 'name_2', 'name_3'],
    admins: ['name_3'],
    moderators: [],
    mute: [],
    ban: [],
    pinned: [],
  },
];

export const FOLDERS = [
  {
    name: 'Projects',
    owner: 'name_1',
    parent: null,
    icon: 'folder',
    description: '',
    visibility: 'unlisted',
    files: ['project-alpha', 'project-beta'],
  },
  {
    name: 'Archive',
    owner: 'name_2',
    parent: null,
    icon: 'folder',
    description: '',
    visibility: 'unlisted',
    files: ['old-chats'],
  },
];

export const FILES = [
  {
    name: 'report.pdf',
    owner: 'name_1',
    folder: 'Projects',
    icon: 'file',
    description: '',
    mime: 'application/pdf',
    size: 2405120,
    checksum: '0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef',
    created: '2025-12-12T10:00:00Z',
    modified: '2025-12-12T10:05:00Z',
    visibility: 'unlisted',
  },
  {
    name: 'design.png',
    owner: 'name_3',
    folder: 'Projects',
    icon: 'image',
    description: '',
    mime: 'image/png',
    size: 512000,
    checksum: 'abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789',
    created: '2025-12-11T09:00:00Z',
    modified: '2025-12-11T09:30:00Z',
    visibility: 'public',
  },
];

export const PEERS = [
  {
    name: 'web',
    owner: 'name_1',
    lastSeen: '2025-12-15T12:40:00Z',
    ip: '127.0.0.1',
  },
  {
    name: 'mobile',
    owner: 'name_2',
    lastSeen: '2025-12-15T11:20:00Z',
    ip: '127.0.0.2',
  },
];

export const chatNav = [
  'Search', 'Pin list', 'Members', 'Files'
]

export const CHAT_MESSAGES: IChatMessage[] = [
  {
    title: 'Terminal UI Design System Release',
    author: 'sara',
    time: '2025-12-15 13:05',
    chat: '!engineering',
    created: '2025-12-15T13:05:00Z',
    edited: null,
    deleted: null,
    replyTo: null,
    forwarded: null,
    body:
      'We are excited to announce the release of our new terminal-inspired design system. This includes monospace typography, tight spacing, and keyboard-first navigation patterns.',
    content:
      'We are excited to announce the release of our new terminal-inspired design system. This includes monospace typography, tight spacing, and keyboard-first navigation patterns.',
    replies: 3,
    reactions: {
      '👍': ['name_1'],
      '⚡': ['name_2'],
    },
    pinned: false,
    attachments: [],
  },
  {
    title: 'Q4 Development Roadmap',
    author: 'sara',
    time: '2025-12-15 13:58',
    chat: '!product',
    created: '2025-12-15T13:58:00Z',
    edited: null,
    deleted: null,
    replyTo: null,
    forwarded: null,
    body:
      'Here is our planned roadmap for the next quarter: key focus performance improvements, new collaboration features, and enhanced search capabilities.',
    content:
      'Here is our planned roadmap for the next quarter: key focus performance improvements, new collaboration features, and enhanced search capabilities.',
    replies: 15,
    reactions: {
      '👍': ['name_1'],
      '⚡': ['name_2'],
    },
    pinned: false,
    attachments: [],
  },
  {
    title: 'Weekly Sync Notes',
    author: 'sara',
    time: '2025-12-13 10:12',
    chat: '!general',
    created: '2025-12-13T10:12:00Z',
    edited: null,
    deleted: null,
    replyTo: null,
    forwarded: null,
    body:
      'Summary of this week\'s meeting: Completed authentication flow, started work on real-time features, and discussed design patterns for the new system.',
    content:
      'Summary of this week\'s meeting: Completed authentication flow, started work on real-time features, and discussed design patterns for the new system.',
    replies: 5,
    reactions: {
      '👍': ['name_1'],
    },
    pinned: false,
    attachments: [],
  },
];

export const POSTS = [
  {
    title: 'Terminal UI Design System Release',
    subtitle: '',
    content:
      'We are excited to announce the release of our new terminal-inspired design system. This includes monospace typography, tight spacing, and keyboard-first navigation patterns.',
    feed: '#announcement',
    author: 'name_1',
    created: '2025-12-15T13:05:00Z',
    edited: null,
    published: '2025-12-15T13:05:00Z',
    deleted: null,
    status: 'published',
    reactions: {
      'ðŸ‘': ['name_1', 'name_2'],
      'âš¡': ['name_3'],
    },
    pinned: false,
    attachments: ['report.pdf'],
  },
];
