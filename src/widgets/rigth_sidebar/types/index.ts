export interface INavSidebar {
  name: string;
  items: INavSidebarItem[];
  isFolder?: boolean;
}

interface INavSidebarItem {
  name: string;
  icon: string;
  lastActivity?: string | Date;
  messagesCount?: number;
  files?: string[];
}
