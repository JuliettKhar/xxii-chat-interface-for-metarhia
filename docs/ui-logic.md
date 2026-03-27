**Layout**
- Base layout with collapsible sidebars.
- 3-column terminal-like layout scaffold.
- Left nav (sections + pinned), center timeline + composer, right details/search panel.
- Monospace typography, separators, compact density.
- Columns can collapse/expand with persisted UI state.

**Navigation And Focus**
- Keyboard-first navigation (or propose a better UI).
- Focus management: nav -> timeline -> composer.
- Hotkeys: Ctrl+K (command palette placeholder), Ctrl+F (search focus), Esc (close right panel).

**Left Sidebar**
- Chats list (pinned + unread + last activity).
- Render chats list and allow selecting chat context.
- Sections: Pinned Chats, Chats, Feed (see Feed & publishing UI logic #10), Folders (see other issue), Contacts.
- Item row: icon, name, unread badge, last activity time.
- Context label on selection: `!chat`.
- Unread badge updates from derived unread state.
- Keyboard navigation: up/down/Enter.

**Center Column**
- Chat header bar + quick actions.
- Show current context and actions in top bar.
- `!chat` label + title + hover/expand description.
- Buttons: Search, Pins, Members, Files (open right panel tabs).
- Tabs open in right panel without losing composer focus.

**Right Sidebar**
- Details/search panel.
- Header shows connection/peer indicator placeholder.
- Pinned list opens in right panel, jump-to-item.

**Requirements Checklist**
- Prepare screens list.
- Detect missing states: empty, loading, error, success.
- Navigation flows.
- Define colors.
- Define typography scale: font families, sizes, weights, line-heights.
- Define spacing system: base unit, spacing scale.
- Define elevation / shadows.
- List reusable components: buttons, inputs, panels, selects.
- Define component variants: size, state, intent.
- Define component behavior rules.
- Interaction & state definition: default, hover, focus, active, disabled.
- Define animations & transitions.
- Target platforms: Web, iOS, Android, Desktop.

**Screens**
- Interface Feed.
![img.png](img.png)
- Interface Chat.
![img_1.png](img_1.png)
- Interface Thread.
![img_2.png](img_2.png)
