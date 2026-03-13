export const CONTACTS = [
  {
    name: 'name 1',
    icon: 'person',
    lastActivity: '12:41',
    messagesCount: 12,
  },
  {
    name: 'name 2',
    icon: 'person',
    lastActivity: '11:23',
    messagesCount: 24,
  },
  {
    name: 'name 3',
    icon: 'person',
    lastActivity: 'yesterday',
  },
];

export const FEEDS = [
  {
    name: '#announcement',
    icon: 'campaign',
    lastActivity: '12:32',
  },
  {
    name: '#dev',
    icon: 'code',
    lastActivity: '10:12',
  },
  {
    name: '#design',
    icon: 'design_services',
    lastActivity: 'yesterday',
  },
  {
    name: '#random',
    icon: 'shuffle',
    lastActivity: 'yesterday',
  },
];

export const CHATS = [
  {
    name: '!engineering',
    icon: 'folder_code',
    lastActivity: '12:01',
    messagesCount: 2,
  },
  {
    name: '!product',
    icon: 'contacts_product',
    lastActivity: '11:04',
    messagesCount: 29,
  },
  {
    name: '!general',
    icon: 'settings_heart',
    lastActivity: 'yesterday',
    messagesCount: 26,
  },
];

export const FOLDERS = [
  {
    name: 'Projects',
    icon: 'folder',
    files: ['project-alpha', 'project-beta'],
  },
  {
    name: 'Archive',
    icon: 'folder',
    files: ['old-chats'],
  },
];

export const chatNav = [
  'Search', 'Pin list', 'Members', 'Files'
]

export const CHAT_MESSAGES = [
  {
    title: 'Terminal UI Design System Release',
    author: 'sara',
    time: '2025-12-15 13:05',
    body:
      'We are excited to announce the release of our new terminal-inspired design system. This includes monospace typography, tight spacing, and keyboard-first navigation patterns.',
    replies: 3,
    reactions: [
      { emoji: '👍', count: 12 },
      { emoji: '⚡', count: 5 },
    ],
  },
  {
    title: 'Q4 Development Roadmap',
    author: 'sara',
    time: '2025-12-15 13:58',
    body:
      'Here is our planned roadmap for the next quarter: key focus performance improvements, new collaboration features, and enhanced search capabilities.',
    replies: 15,
    reactions: [
      { emoji: '👍', count: 8 },
      { emoji: '⚡', count: 3 },
    ],
  },
  {
    title: 'Weekly Sync Notes',
    author: 'sara',
    time: '2025-12-13 10:12',
    body:
      'Summary of this week\'s meeting: Completed authentication flow, started work on real-time features, and discussed design patterns for the new system.',
    replies: 5,
    reactions: [
      { emoji: '👍', count: 2 },
    ],
  },
];
