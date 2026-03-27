# xxii-chat-vue

Open-source chat interface prototype built with Vue 3, TypeScript, and Vite.

This repository focuses on the web UI for a terminal-like messaging product with chats, feeds, files, contacts, folders, and contextual side panels. At the current stage it is primarily an interface and routing prototype backed by mock data.

## What it is

- 3-column chat layout: left navigation, center content, right contextual sidebar
- terminal-inspired visual direction
- Vue Router based navigation for chats, contacts, folders, files, and members views
- right sidebar quick actions from chat header: search, pins, members, files
- mock entities for chats, feeds, contacts, folders, files, posts, and messages

## Current status

Implemented in the UI:

- chat shell with header, message list, composer, and right sidebar
- left navigation sections for contacts, feeds, chats, and folders
- route-driven center views for messages, files, contacts, and members
- query-driven right sidebar panels opened from chat header actions
- reusable UI pieces such as icons, chat message blocks, sidebar blocks, and chat input

Not implemented yet:

- backend integration
- persistence
- real search
- realtime transport
- access control
- production-ready domain flows

## Product direction

The broader product direction is described in [ARCHITECTURE.md](./ARCHITECTURE.md) and supporting UI docs in [docs/ui-logic.md](./docs/ui-logic.md) and [docs/ui-requirements.md](./docs/ui-requirements.md).

Core interface goals:

- chats, feeds, and file exchange in one shell
- keyboard-friendly navigation
- compact, readable, terminal-like interaction model
- open-source friendly foundation for further iteration

## Tech stack

- Vue 3
- TypeScript
- Vite
- Vue Router
- Pinia
- Vitest
- ESLint
- Prettier

## Getting started

Requirements:

- Node.js `^20.19.0 || >=22.12.0`
- npm

Install dependencies:

```sh
npm install
```

Start the dev server:

```sh
npm run dev
```

Build for production:

```sh
npm run build
```

Preview production build:

```sh
npm run preview
```

## Quality checks

Type check:

```sh
npm run type-check
```

Unit tests:

```sh
npm run test:unit
```

Lint:

```sh
npm run lint
```

Format source files:

```sh
npm run format
```

## Project structure

The project loosely follows an FSD-style structure adapted for a UI prototype. The goal is to keep application shell concerns, route-level screens, feature blocks, and shared primitives separated so the interface can grow without collapsing into page-local coupling.

Current layers:

- `src/app`  
  Application-level setup. Contains the main layout, router, and top-level composition of the shell.
- `src/pages`  
  Route-level screens and views. These files describe what is rendered for a specific route or major screen state such as chat messages, files, contacts, and members.
- `src/features`  
  Reusable feature blocks tied to user scenarios rather than to one page only. Examples in this project include navigation sidebar, right sidebar, and chat input.
- `src/shared`  
  Shared foundation used across the app: UI primitives, styles, types, and mock data.

This is not a strict, fully enforced FSD implementation yet. In particular:

- there is no dedicated `entities` layer yet
- domain data currently lives mostly in shared mock data and shared types
- some view logic still sits close to route components because the project is still in interface prototyping stage

Repository layout:

```text
src/
  app/
    router/             Route definitions
    AppLayout.vue       Main 3-column shell
  pages/
    app_chat/           Chat-related route views
    feed/               Feed screen
    thread/             Thread screen
    search/             Search screen placeholder
  features/
    app_chat/           Chat-specific feature blocks such as composer
    navigation_sidebar/ Left navigation UI
    right_sidebar/      Contextual right panel UI
  shared/
    assets/             Static assets
    styles/             Global styles, tokens, mixins, transitions
    types/              Shared schema and TS types
    ui/                 Reusable UI primitives and blocks
    utils/              Mock data and helpers
docs/                   UI notes and requirements
ARCHITECTURE.md         Product and domain direction
```

Practical interpretation of the structure:

- put routing, layout orchestration, and app bootstrap in `app`
- put full route screens in `pages`
- put reusable user-facing interface behavior in `features`
- put generic building blocks and cross-cutting resources in `shared`

As the project moves beyond mock data, a natural next step would be introducing clearer `entities` and possibly `widgets` layers to separate domain objects from larger composed interface sections.

## Notes

- The repository is currently web-first.
- Most screens are driven by mock data from `src/shared/utils/mock-data.ts`.
- Routing and panel behavior are still evolving as the UI is refined.

## License

License is not defined in this repository yet.
