export interface Author {
  /** Unique username or handle. */
  nick: string;
  /** Display name. */
  name: string;
  /** Short profile description. */
  bio: string;
  /** Small avatar/icon identifier. */
  icon: string;
  /** Profile photo file id. */
  photo: string | null;
  /** Presence state. */
  status: 'online' | 'away' | 'dnd' | 'offline' | 'unknown';
  /** Account creation timestamp. */
  created: string;
  /** Last profile update timestamp. */
  updated: string;
  /** Arbitrary user settings object. */
  settings: Record<string, unknown>;
  /** Associated node ids for this author. */
  nodes: string[];
}

export interface Node {
  /** Node identifier. */
  name: string;
  /** Node domain name. */
  domain: string;
  /** Node IP address. */
  ip: string;
  /** Service ports exposed by the node. */
  ports: number[];
}

export interface Peer {
  /** Peer device name (e.g. web, mobile). */
  name: string;
  /** Author id who owns this peer. */
  owner: string;
  /** Last activity timestamp. */
  lastSeen: string;
  /** Peer IP address. */
  ip: string;
}

export interface Folder {
  /** Folder name. */
  name: string;
  /** Author id who owns the folder. */
  owner: string;
  /** Parent folder id (for nesting). */
  parent: string | null;
  /** Optional icon identifier. */
  icon?: string;
  /** Optional description text. */
  description?: string;
  /** Access level. */
  visibility: 'public' | 'unlisted';
}

export interface FileEntity {
  /** File name. */
  name: string;
  /** Author id who owns the file. */
  owner: string;
  /** Folder id containing the file. */
  folder: string;
  /** Optional icon identifier. */
  icon?: string;
  /** Optional description text. */
  description?: string;
  /** MIME type. */
  mime: string;
  /** File size in bytes. */
  size: number;
  /** SHA256 checksum. */
  checksum: string;
  /** Upload timestamp. */
  created: string;
  /** Last modified timestamp. */
  modified: string;
  /** Access level. */
  visibility: 'public' | 'unlisted';
}

export interface Feed {
  /** Feed/channel name. */
  name: string;
  /** Author id who owns the feed. */
  owner: string;
  /** Optional icon identifier. */
  icon?: string;
  /** Optional description text. */
  description?: string;
  /** Creation timestamp. */
  created: string;
  /** Access level. */
  visibility: 'public' | 'private' | 'unlisted';
  /** Membership policy. */
  joinPolicy: 'open' | 'invite' | 'request';
  /** Pinned message ids. */
  pinned: string[];
}

export interface Post {
  /** Post title. */
  title: string;
  /** Optional subtitle. */
  subtitle?: string;
  /** Post body content. */
  content: string;
  /** Target feed id. */
  feed: string;
  /** Author id of the post. */
  author: string;
  /** Creation timestamp. */
  created: string;
  /** Last edit timestamp. */
  edited?: string | null;
  /** Publish timestamp. */
  published?: string | null;
  /** Soft delete timestamp. */
  deleted?: string | null;
  /** Post lifecycle state. */
  status: 'draft' | 'published' | 'archived';
  /** Emoji reactions mapped to author ids. */
  reactions: Record<string, string[]>;
  /** Whether post is pinned. */
  pinned: boolean;
  /** Attached file ids. */
  attachments: string[];
}

export interface Chat {
  /** Chat identifier. */
  name: string;
  /** Author id of the chat owner. */
  owner: string;
  /** Optional icon identifier. */
  icon?: string;
  /** Optional description text. */
  description?: string;
  /** Creation timestamp. */
  created: string;
  /** Last activity timestamp. */
  lastActivity: string;
  /** Chat member author ids. */
  members: string[];
  /** Chat admin author ids. */
  admins: string[];
  /** Chat moderator author ids. */
  moderators: string[];
  /** Muted author ids. */
  mute: string[];
  /** Banned author ids. */
  ban: string[];
  /** Pinned message ids. */
  pinned: string[];
}

export interface Message {
  /** Parent chat id. */
  chat: string;
  /** Message author id. */
  author: string;
  /** Message text content. */
  content: string;
  /** Creation timestamp. */
  created: string;
  /** Last edit timestamp. */
  edited?: string | null;
  /** Soft delete timestamp. */
  deleted?: string | null;
  /** Parent message id (threading). */
  replyTo?: string | null;
  /** Forwarded message id. */
  forwarded?: string | null;
  /** Emoji reactions mapped to author ids. */
  reactions: Record<string, string[]>;
  /** Whether message is pinned. */
  pinned: boolean;
  /** Attached file ids. */
  attachments: string[];
}
