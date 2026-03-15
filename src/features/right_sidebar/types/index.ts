export interface INavSidebar {
  /** Section label (e.g. contacts, feeds). */
  name: string;
  /** Items within the section. */
  items: INavSidebarItem[];
  /** Whether this section renders folders tree. */
  isFolder?: boolean;
}

interface INavSidebarItem {
  /** Display name. */
  name: string;
  /** Icon identifier. */
  icon: string;
  /** Last activity label. */
  lastActivity?: string | Date;
  /** Unread/messages count. */
  messagesCount?: number;
  /** Child items for folders. */
  files?: string[];
}
