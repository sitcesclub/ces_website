# CES Website — Agent Guidelines

Technical rules for contributors and AI coding agents working on the CES website.

## 1. Core Principles

- Prefer **simple, readable, maintainable code**.
- Reuse existing code before creating new abstractions.
- Keep changes **focused**; do not modify unrelated files.
- Preserve existing architecture and visual language unless a change requires otherwise.
- Do not introduce dependencies, patterns, or infrastructure without a clear reason.
- Leave the repository easier to understand than you found it.

---

## 2. Repository Structure

Use this separation of responsibilities:

```text
app/          → routes, layouts, page composition
components/   → UI components
data/         → content/data
lib/          → shared logic/utilities
types/        → shared TypeScript types
public/       → static assets
.github/      → CI, issue/PR templates
```

Recommended component organization:

```text
components/
├── ui/        # reusable UI primitives
├── layout/    # Navbar, Footer, etc.
├── home/      # homepage-specific components
├── events/    # event-specific components
└── alumni/    # alumni-specific components
```

Rules:

- `app/` handles **where**.
- `components/` handles **how**.
- `data/` handles **what**.
- `public/` contains static assets.
- Do not create unnecessary top-level directories.
- Do not put large UI implementations directly in `page.tsx`; compose sections from components.

---

## 3. Components

Before creating a component:

1. Search for an existing one.
2. Reuse or extend it if appropriate.
3. Create a new component only for a distinct responsibility.

Naming:

```text
EventCard.tsx
GradTalkCard.tsx
SectionHeading.tsx
```

Use PascalCase for React component files.

Avoid duplicate variants such as:

```text
EventCard.tsx
EventCard2.tsx
EventCardNew.tsx
EventCardFinal.tsx
```

Do not over-abstract. Avoid generic components created only because two pieces of UI look vaguely similar.

### Server vs Client

Server Components are the default.

Use `"use client"` only when client-side state, effects, browser APIs, or event handlers are required.

Keep Client Components as small as practical.

---

## 4. Data and Content

Separate content from presentation.

Prefer:

```text
data/events.ts
components/events/EventCard.tsx
```

rather than embedding large datasets inside components.

Rules:

- Keep repeated content in one source of truth.
- Do not duplicate event/alumni/domain data across pages.
- Components render data; data files contain content.
- Keep page-specific content close to its relevant data/component when appropriate.

---

## 5. Assets

Store static assets under:

```text
public/
├── images/
│   ├── brand/
│   ├── events/
│   ├── alumni/
│   ├── team/
│   └── misc/
├── icons/
└── fonts/
```

### Image and Asset Rules

- Use lowercase `kebab-case` for all asset file names and directory names.
- Ensure consistent directory casing across the repository (for example, `public/members/`, `public/events/`, `public/alumni/`).
- Never use uppercase, PascalCase, camelCase, or mixed-case directory or asset names.
- Use descriptive names.
- Optimize images before committing them.
- Do not commit unnecessary camera originals or multi-MB images.
- Prefer WebP/AVIF for photographs where appropriate.
- Use SVG for logos/icons when appropriate.
- PNG is appropriate when transparency/lossless quality is required.

Good:

```text
code-for-communities-2026.webp
mriganka-roy.webp
ces-mascot.webp
public/members/amol-kumar.png
public/alumni/arpan-dey.png
```

Bad:

```text
IMG_4920.jpg
new.png
final-final.png
latest2.jpg
public/Members/Amol-Kumar.png
public/alumni/ArpanDey.png
```

Never use `final`, `new`, `old`, `latest`, etc. for versioning. Git handles versions.

Use `next/image` when appropriate.

Provide meaningful `alt` text for informative images; use `alt=""` for genuinely decorative images.

---

## 6. Styling & Design

Follow the existing CES visual system.

Maintain consistency in:

- typography
- spacing
- colors
- borders/radius
- cards
- buttons
- responsive behavior
- animation

Avoid unnecessary:

- glow effects
- gradients
- animations
- decorative UI
- visual noise

Do not redesign unrelated sections as part of a feature/fix.

---

## 7. Responsive & Accessibility

Every UI change should be checked on:

```text
mobile → tablet → desktop → wide desktop
```

Do not fix one breakpoint by breaking another.

Use semantic HTML and accessible interactions.

Check:

- keyboard navigation
- focus states
- meaningful alt text
- color contrast
- accessible buttons/links
- reduced-motion behavior where relevant
- no horizontal overflow

---

## 8. Performance

Prefer:

- optimized images
- Server Components
- minimal client-side JavaScript
- existing dependencies
- lazy loading where useful

Avoid:

- unnecessary dependencies
- unnecessarily large assets
- unnecessary Client Components
- expensive work during rendering

Do not add a dependency for functionality that can reasonably use existing tooling.

---

## 9. Security

Never commit:

```text
.env
.env.local
API keys
tokens
passwords
private credentials
service-account files
```

Use `.env.example` for documented variable names without secrets.

Do not expose server-side secrets to client code.

Avoid unsafe HTML rendering and validate untrusted input.

Follow `SECURITY.md` for vulnerability reporting.

---

## 10. TypeScript

Prefer explicit types.

Avoid `any` unless genuinely necessary and justified.

Use shared types from `types/` when a type is reused across modules.

Use project path aliases:

```tsx
import Hero from "@/components/home/Hero";
```

instead of deep relative imports.

---

## 11. Git

Never push directly to `main`.

Use focused branches:

```text
feature/<name>
fix/<name>
refactor/<name>
docs/<name>
chore/<name>
```

Keep branches and commits focused.

Use concise Conventional Commit-style messages:

```text
feat: add alumni gallery
fix: center hero content
docs: update contributing guide
refactor: simplify event cards
style: adjust domain spacing
chore: update dependencies
```

Follow repository commit-signing requirements where configured.

---

## 12. Pull Requests

Before opening a PR:

```text
[ ] Change is focused
[ ] Existing code/components were checked for reuse
[ ] UI tested on relevant breakpoints
[ ] Accessibility considered
[ ] No secrets committed
[ ] No unnecessary dependencies
[ ] Lint passes
[ ] Build passes
[ ] Diff reviewed
```

UI changes should include screenshots when useful.

Do not mix unrelated refactors into feature/fix PRs.

See `CONTRIBUTING.md` for the full contribution workflow.

---

## 13. Testing

Run the project's available checks before submitting changes.

At minimum, when available:

```bash
npm run lint
npm run build
```

Do not claim a test passed unless it was actually run.

For UI changes, manually verify:

- layout
- responsiveness
- interactions
- images
- links
- console errors

---

## 14. Documentation

Update documentation when project behavior or requirements change.

Examples:

```text
new environment variable → .env.example / docs
new contribution rule    → CONTRIBUTING.md
architecture change      → relevant documentation
security process change  → SECURITY.md
```

Do not leave important project knowledge only in chat or personal notes.

---

## 15. Open Source Conduct

CES is an open-source project.

- Be respectful and constructive.
- Critique code, not contributors.
- Welcome first-time contributors.
- Explain requested review changes.
- Avoid unnecessary gatekeeping.
- Give credit where appropriate.

Follow `CODE_OF_CONDUCT.md`.

---

## 16. AI Coding Agent Rules

AI agents must:

- inspect existing code before changing architecture
- search for reusable components before creating new ones
- follow this file's structure and naming rules
- make the smallest reasonable change
- avoid unrelated modifications
- avoid unnecessary dependencies
- never invent APIs, files, environment variables, or functionality
- never expose secrets
- report what changed
- report what was actually tested
- not claim tests passed when they were not run

Do not perform broad refactors unless explicitly requested.

---

## 17. Before Creating a File

Ask:

```text
1. Does this already exist?
2. Can existing code be reused?
3. Does it belong in an existing directory?
4. Is it UI, data, logic, type, or asset?
5. Does it need to be a Client Component?
6. Is there a simpler solution?
```

---

## 18. Forbidden Patterns

Do not introduce:

```text
❌ duplicate components
❌ duplicated content
❌ random files in public/
❌ unoptimized image dumps
❌ meaningless filenames
❌ unnecessary "use client"
❌ unnecessary dependencies
❌ giant page components
❌ utility dumping grounds
❌ hardcoded repeated data
❌ committed secrets
❌ direct pushes to main
❌ unrelated PR changes
❌ silent architectural rewrites
❌ accessibility regressions
❌ responsive regressions
```

---

## 19. Final Rule

> **Make the smallest clean change that solves the problem, follows the existing architecture, and leaves the repository better for the next CES contributor.**

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
