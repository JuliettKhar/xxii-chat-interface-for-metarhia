# UI Requirements (UI-Only)

## Checklist
- Prepare screens list.
- Detect missing states: empty, loading, error, success.
- Navigation flows.
- Define colors.что
- Define typography scale: font families, sizes, weights, line-heights.
- Define spacing system: base unit, spacing scale.
- Define elevation / shadows.
- List reusable components: buttons, inputs, panels, selects.
- Define component variants: size, state, intent.
- Define component behavior rules.
- Interaction & State Definition: default, hover, focus, active, disabled.
- Define animations & transitions.
- Target platforms: Web, iOS, Android, Desktop.

## UI Structure
- Global layout: 3 columns, collapsible.
- Left sidebar: navigation (contacts, feeds, chats, folders, saved searches optional).
- Center column: main timeline + editor.
- Right sidebar: search results / details of selected block.
- Terminal feel: monospace font, tight spacing, clear separators.

## Spacing Rules
- Base unit: `2px`.
- Use spacing scale tokens instead of arbitrary pixel values.
- Use small tokens (`--space-1` to `--space-4`) for inline gaps, icon spacing, and dense terminal UI.
- Use medium tokens (`--space-5` to `--space-8`) for component padding, list rows, and block separation.
- Use larger tokens (`--space-10` and above) only for layout-level offsets and nested structures.
- Prefer consistent horizontal and vertical spacing from the same scale level inside one component.
- Avoid introducing custom values like `10px`, `14px`, `15px` when an existing spacing token can be used.
- If a value does not fit the scale, treat it as an exception and document why before adding it.

## Reusable Components
Reusable components in this project are UI elements that can be shared across multiple screens or features without being tied to one page-specific layout.

### Existing Components
- `Icon` (`src/shared/ui/Icon.vue`)  
  Base icon wrapper for Material Symbols usage.
- `ChatMessage` (`src/shared/ui/chat_message/index.vue`)  
  Reusable message/post item for chat and detail views.
- `ChatInput` (`src/features/app_chat/components/chat_input/index.vue`)  
  Reusable composer input block for message creation.
- `NavSidebarBlock` (`src/features/navigation_sidebar/components/NavSidebarBlock.vue`)  
  Reusable navigation section block for contacts, feeds, chats, and folders.

### Existing Layout / Panel Patterns
- `AppLayout` (`src/app/AppLayout.vue`)  
  Main 3-column application layout.
- `NavigationSidebar` (`src/features/navigation_sidebar/index.vue`)  
  Left navigation panel pattern composed from reusable blocks.
- `RightSidebar` (`src/features/right_sidebar/index.vue`)  
  Right-side details panel pattern.

### Local UI Patterns Not Yet Extracted
- Header action links in chat view (`src/pages/app_chat/index.vue`)
- Panel blocks inside the right sidebar (`src/features/right_sidebar/index.vue`)
- Navigation item rows inside sidebar blocks (`src/features/navigation_sidebar/components/NavSidebarBlock.vue`)
- Send / attach / emoji / poll actions currently rendered as plain buttons (`src/features/app_chat/components/chat_input/index.vue`)

### Missing But Required Components
- `Button` as a shared UI component
- `Input` as a shared UI component
- `Textarea` / `ComposerInput` as a generalized shared UI component
- `Panel` as a shared container component
- `Select` component

### Component Groups
- Foundations: `Icon`
- Inputs: `ChatInput` (partial), shared `Button` missing, shared `Input` missing, shared `Select` missing
- Data display: `ChatMessage`
- Navigation: `NavSidebarBlock`, `NavigationSidebar`
- Layout: `AppLayout`, `RightSidebar`

## Component Variants
Component variants should be defined only for reusable UI primitives and repeated patterns. Variants are split into three dimensions: `size`, `state`, and `intent`.

### Variant Dimensions
- `size`: visual scale of the component, for example `sm`, `md`, `lg`
- `state`: interaction or availability state, for example `default`, `hover`, `focus`, `active`, `disabled`
- `intent`: semantic or visual purpose, for example `primary`, `secondary`, `ghost`, `danger`, `info`

### Planned Variant Matrix
- `Icon`
  - `size`: `sm`, `md`, `lg`
  - `state`: none required as a standalone icon primitive
  - `intent`: optional `default`, `muted`, `accent`
- `Button`
  - `size`: `sm`, `md`
  - `state`: `default`, `hover`, `focus`, `active`, `disabled`
  - `intent`: `primary`, `secondary`, `ghost`
- `Input`
  - `size`: `sm`, `md`
  - `state`: `default`, `focus`, `error`, `disabled`
  - `intent`: not required initially
- `Textarea` / `ComposerInput`
  - `size`: `md`
  - `state`: `default`, `focus`, `disabled`
  - `intent`: not required initially
- `Panel`
  - `size`: `md`, `lg`
  - `state`: `default`, `active`
  - `intent`: `default`, `accent`, `info`
- `ChatMessage`
  - `size`: one default size for now
  - `state`: `default`, `highlighted`
  - `intent`: `plain`, `interactive`
- `NavItem` / `SidebarRow`
  - `size`: one default size for now
  - `state`: `default`, `hover`, `active`
  - `intent`: `default`, `selected`

### Already Present In Code
- `Icon` already supports `size` in `src/shared/ui/Icon.vue`
- `ChatMessage` already has a partial variant split through `hasReactions` in `src/shared/ui/chat_message/index.vue`
- Chat action buttons already have visual differences between regular and send actions in `src/features/app_chat/components/chat_input/index.vue`
- Right sidebar blocks already behave like panel variants, but are not extracted into a shared `Panel` component yet

## Component Behavior Rules
Behavior rules should be explicit, testable, and tied to reusable UI patterns instead of page-specific markup.

### Button
- Buttons must react to mouse click and keyboard activation.
- Disabled buttons must not trigger actions.
- Primary actions should remain visually distinct from secondary and ghost actions.
- Button labels should stay short and action-oriented.

### Input
- Inputs must keep focus styling visible while active.
- Disabled inputs must not accept interaction.
- Error state must be visually distinguishable from default state.
- Placeholder or helper text must not replace actual labels when context is needed.

### Textarea / ComposerInput
- Composer input must support multiline content.
- Composer input should preserve focus during related panel actions when possible.
- Submit action should remain separate and discoverable.
- Auxiliary actions such as attach, emoji, and poll should not block text input.

### NavItem / SidebarRow
- Navigation rows must have a clear hover and active state.
- Selecting a navigation row should change current context without ambiguous intermediate states.
- Baseline keyboard navigation should rely on semantic HTML and native browser focus behavior unless a custom composite widget is introduced.
- Unread or activity indicators must not break row alignment.

### SidebarBlock
- Sidebar sections must render consistently for all content groups: contacts, chats, feeds, folders.
- Folder-like rows should communicate expandable behavior separately from simple navigation rows.
- Collapsible content should preserve hierarchy and indentation.

### Panel / RightSidebar
- Side panels must open and close without breaking the main layout.
- Closing a panel must not destroy the current main content context.
- Panel content should be grouped into readable blocks with stable spacing and headings.
- Overlay-like behavior should remain lightweight and not interrupt primary reading or writing flows.

### ChatMessage
- Message metadata, content, and reactions should remain visually separated.
- Replies and reactions must appear only when relevant data exists.
- Interactive message actions must remain available without overpowering content readability.
- Message layout should support both plain and interactive variants.

### Current Behavior Already Visible In Code
- Right sidebar can be collapsed without removing the main chat layout in `src/app/AppLayout.vue`
- Chat message reply block is shown conditionally in `src/shared/ui/chat_message/index.vue`
- Chat input keeps a dedicated input area and separate action row in `src/features/app_chat/components/chat_input/index.vue`
- Sidebar rows already expose hover behavior in `src/features/navigation_sidebar/components/NavSidebarBlock.vue`

### Planned But Not Fully Implemented Yet
- Shared button behavior as a dedicated component
- Shared input and select behavior as dedicated components
- Explicit keyboard interaction model only for future custom composite widgets such as custom select, menu, or listbox
- Extracted panel behavior as a reusable shared `Panel` component

## Interaction And State Definition
Interactive UI elements must define their visual and behavioral states explicitly. In this project, interaction styling should stay consistent with the terminal-like visual direction: high contrast, simple inversion, accent color shifts, and minimal decorative effects.

### Required States
- `default`: base readable state with normal contrast
- `hover`: pointer-over state for interactive elements only
- `focus`: keyboard or active-input state with clear visible emphasis
- `active`: pressed or selected state
- `disabled`: unavailable state with reduced contrast and no interaction

### State Rules By Component Type
- `Button`
  - supports `default`, `hover`, `focus`, `active`, `disabled`
  - hover should change color or background, not layout
  - focus must remain visible for keyboard users
  - disabled must suppress click affordance
- `Input` and `Textarea / ComposerInput`
  - supports `default`, `focus`, `disabled`
  - may also support `error` as a semantic state
  - focus should be stronger than hover
  - disabled must reduce contrast and prevent editing
- `NavItem` / `SidebarRow`
  - supports `default`, `hover`, `focus`, `active`
  - active state must clearly indicate current context
  - hover and focus must not break alignment or row density
- `Panel`
  - supports `default`, `active`
  - active panel state may be expressed through border, heading emphasis, or accent tone
- `ChatMessage` actions
  - supports `default`, `hover`, `focus`, `active`
  - message content itself is primarily static, but nested actions follow interactive state rules

### Visual Language For States
- `default`: use standard semantic colors and current spacing rules
- `hover`: use accent or contrast inversion with no layout shift
- `focus`: use the clearest visible emphasis available in the system
- `active`: use a stronger accent than hover, or a selected background/border treatment
- `disabled`: reduce contrast, remove pointer cues, and prevent misleading active styling

### Current State Handling Already Present In Code
- Sidebar rows already define shared `hover`, `focus`, and `active` behavior in `src/shared/styles/_mixins.scss`
- Chat message action buttons already define `hover`, `focus`, and `active` color changes in `src/shared/ui/chat_message/index.vue`
- Chat input action buttons already define `hover`, `focus`, and `active` styles in `src/features/app_chat/components/chat_input/index.vue`
- Right sidebar close button already changes on hover in `src/features/right_sidebar/index.vue`

### Missing Or Incomplete States
- `disabled` state is not consistently implemented across interactive elements
- explicit `focus-visible` or equivalent keyboard-focused treatment is not yet defined as a shared rule
- active/selected state for navigation is not yet implemented as a complete system

## Keyboard Navigation And Focus Order
For the current stage of the project, keyboard navigation and focus order are primarily provided by semantic HTML and native browser behavior.

### Current Approach
- use semantic interactive elements wherever possible
- preserve native tab order instead of introducing manual focus management without need
- rely on browser-default keyboard behavior for links, buttons, inputs, and textarea
- avoid custom focus order logic unless a component cannot be expressed semantically

### Current Assessment
- no separate keyboard navigation system is required for the current semantic layout
- no custom roving tabindex model is required at this stage
- explicit keyboard behavior should only be introduced for future custom widgets such as `Select`, command palette, menu, or listbox

### Focus Order Rule
- focus should follow DOM order unless there is a strong interaction reason to override it
- visual order and DOM order should stay aligned
- hidden or collapsed UI regions must not remain focusable

### Future Trigger For Additional Work
- introduce dedicated keyboard specifications only when custom composite controls or non-native interaction patterns are added

### Documented Hotkeys And Keyboard Actions
- `Ctrl+K` opens the command palette placeholder
- `Ctrl+F` focuses the search input in the top bar
- `Esc` closes the right sidebar or active side panel
- `ArrowUp` moves selection upward in repeated navigation lists
- `ArrowDown` moves selection downward in repeated navigation lists
- `Enter` activates the currently focused navigation item

## Animations And Transitions
Animations and transitions in this project should stay minimal, purposeful, and consistent with the terminal-like interface. Motion is used to support orientation and feedback, not decoration.

### Motion Principles
- Use motion only when it clarifies state change, focus change, or panel visibility.
- Prefer opacity and transform transitions over layout-affecting animation.
- Avoid large, soft, playful motion patterns that conflict with the dense terminal UI.
- Repeated decorative animation should be limited to intentional terminal effects only.

### Timing Rules
- standard UI transition: `220ms ease`
- short feedback transitions may stay in the `150ms` to `220ms` range
- looping animation should be reserved for explicit system-like effects such as the terminal cursor

### Allowed Motion Patterns
- sidebar open/close transitions
- opacity changes for appearing and disappearing panels
- small directional slide transitions for side panels
- cursor blink or similar terminal-specific feedback
- button and control color transitions without layout movement

### Avoid
- bouncing, scaling, or spring-heavy animation
- long entrance animations for primary content
- simultaneous motion on too many screen regions
- decorative animation unrelated to interaction or terminal metaphor

### Current Motion Already Present In Code
- right sidebar transition classes are defined in `src/shared/styles/_transitions.scss`
- layout and right sidebar transitions are used in `src/app/AppLayout.vue`
- terminal cursor blink animation is implemented in `src/features/app_chat/components/chat_input/index.vue`

### Recommended Next Step
- Extract common transition timing and easing into shared motion tokens if animation usage grows beyond the current sidebar and cursor cases

## Target Platforms
The product targets multiple platforms, but current implementation status and UI requirements differ by platform.

### Current Implementation Status
- Current implemented platform: `Web`
- Current routing and runtime are web-based, as shown by `vue-router` with `createWebHistory`
- No platform-specific iOS, Android, or Desktop adaptation is implemented yet

### Target Platforms
- `Web`
- `iOS`
- `Android`
- `Desktop`

### Platform Expectations
- `Web`
  - primary platform for the current implementation
  - full keyboard navigation support is expected over time
  - multi-column layout is acceptable on larger screens
- `iOS`
  - future mobile adaptation target
  - touch-friendly controls and reduced multi-column density will be required
  - safe-area handling and mobile navigation patterns are not implemented yet
- `Android`
  - future mobile adaptation target
  - touch-first interaction and responsive layout reduction will be required
  - platform-specific mobile navigation patterns are not implemented yet
- `Desktop`
  - future desktop-oriented target beyond browser-only use
  - keyboard-first workflows and wide-layout support are expected
  - no dedicated desktop shell or native packaging is implemented yet

### Shared Cross-Platform UI Requirements
- layout must be able to degrade from 3 columns to fewer columns on smaller screens
- spacing and typography must remain readable across large and small viewports
- core interactions must support both pointer and keyboard where platform-appropriate
- controls intended for touch platforms must avoid overly small tap targets

### Current Limitation
- At this stage, the project should be treated as `web-first`, with other platforms documented as target directions rather than implemented UI support

## Sizing And Overflow Rules
Sizing and overflow behavior should be defined as a shared layout rule set rather than decided ad hoc in each component. This section extends the architecture rules for a 3-column collapsible layout.

### Layout Columns
- the application uses a 3-column layout: left sidebar, center content, right sidebar
- sidebars may collapse instead of forcing full-page horizontal scroll
- the center column must remain the primary flexible region
- columns that contain dynamic content must allow shrink behavior where needed, including `min-width: 0` on flexible regions

### Min And Max Size Rules
- primary flexible content regions must allow shrinking without breaking the grid
- side panels should have controlled width and must not expand indefinitely from content size alone
- composer and other input areas must define a minimum usable height
- interactive rows should keep a consistent minimum visual density and should not collapse below readable height

### Overflow Rules
- horizontal page-level overflow should be avoided in the main application layout
- when content exceeds available width, internal containers should clip, wrap, or truncate instead of expanding the whole layout
- right sidebar and similar secondary panels may hide overflow during collapse transitions
- long vertical content areas should scroll internally instead of forcing the full application shell to grow unpredictably

### Scrollable Regions
- message and post timelines are expected to be vertically scrollable content regions
- sidebars may become internally scrollable when item count exceeds viewport height
- detail panels and search result panels may become internally scrollable when content exceeds available height
- scrolling should happen inside the content region that owns the data, not on unrelated containers

### Reader Mode And Panel Replacement
- center content may switch to a more reading-oriented mode for long-form feed/post content
- search results may appear in the right panel or replace center content depending on context
- these changes must reuse the same sizing and overflow rules instead of introducing separate layout logic

### Current Code Signals
- current layout already uses flexible grid columns in `src/app/AppLayout.vue`
- current layout already prevents some horizontal overflow with `min-width: 0` and `overflow-x: hidden`
- right sidebar collapse already uses hidden overflow behavior in `src/app/AppLayout.vue`

### Missing Or Not Yet Unified
- explicit min/max width rules for left and right sidebars are not yet documented as numeric constraints
- vertical scroll ownership is not yet fully specified per region
- overflow behavior for long labels, metadata rows, and dense navigation lists is not yet fully specified

## Text Truncation Rules
Text truncation should be intentional and role-based. The UI must distinguish between text that should wrap, text that may truncate, and text that must remain fully visible whenever possible.

### General Rule
- truncate only short identifying labels or metadata when space is limited
- wrap longer reading content instead of truncating it
- avoid truncation for content whose full value is required for understanding or action

### Where Truncation Is Allowed
- navigation item labels in dense sidebar rows
- panel headings when layout width is constrained
- secondary metadata labels where the primary label remains visible
- inline action labels only if compact layout requires it

### Where Wrapping Is Preferred
- message body text
- post content and reader-mode content
- helper text, status explanations, and empty-state descriptions
- detailed panel content intended for reading

### Where Truncation Should Be Avoided
- timestamps and compact numeric metadata
- critical action labels such as send, close, search
- primary status messages such as error or success text
- values that become ambiguous when shortened without disclosure

### Component-Level Rules
- `NavItem` / `SidebarRow`
  - item title may truncate to preserve row density
  - unread counts and timestamps should remain visible
- `ChatMessage`
  - title may truncate in compact contexts if needed
  - body text should wrap
  - reaction and reply metadata should remain compact and readable
- `RightSidebar`
  - block headings may truncate only in narrow widths
  - body content should wrap by default
- `Button`
  - labels should stay short enough to avoid truncation in normal layout
  - truncation is a fallback, not a target behavior

### Disclosure Rule
- when truncation hides meaningful information, the full text should remain accessible through layout expansion, detail view, or future tooltip/title treatment

### Current Status
- truncation behavior is not yet implemented as a shared CSS utility or component rule
- this specification defines when truncation should be applied once text-overflow handling is added to the UI system
