export interface IChatMessage {
  /** UI title for list rendering. */
  title: string;
  /** Author id or name shown in UI. */
  author: string;
  /** UI time label (string or Date). */
  time: string | Date;
  /** UI body preview text. */
  body: string;
  /** UI replies count. */
  replies: number;
  /** Emoji reactions mapped to author ids. */
  reactions: Record<string, string[]>;
  /** Parent chat id. */
  chat: string;
  /** Creation timestamp. */
  created: string;
  /** Last edit timestamp. */
  edited: string | null;
  /** Soft delete timestamp. */
  deleted: string | null;
  /** Parent message id (threading). */
  replyTo: IChatMessage | null;
  /** Forwarded message id. */
  forwarded: IChatMessage | null;
  /** Message content. */
  content: string;
  /** Whether message is pinned. */
  pinned: boolean;
  /** Attached file ids. */
  attachments: string[];
}
