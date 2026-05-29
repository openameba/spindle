---
name: create-spindle-component
description: >-
  Create a new Spindle UI component end-to-end: research prior art, write a
  Design Doc, get author approval, scaffold and implement (tsx/css/stories/
  test/mdx), verify lint and tests, then commit, add a changeset and open a
  Draft PR. Use when the user asks to add / create / build a new spindle-ui
  component (e.g. "Badgeコンポーネントを作りたい", "新しいコンポーネントを追加",
  "add a new Spindle component").
allowed-tools: Read, Write, Edit, Glob, Grep, Bash(pnpm:*), Bash(git:*), Bash(npx:*)
---

# Create Spindle Component

## Purpose

Orchestrate the creation of a new `@openameba/spindle-ui` component from a one-line
request to a Draft PR, reusing the repo's existing assets (scaffdog generator,
`/create-design-doc`, `create-changeset`) instead of reinventing them.

## When to Invoke

Invoke when the user wants to **add a brand-new** spindle-ui component.

Do NOT invoke for: modifying/refactoring an existing component, bug fixes,
docs-only changes, or token-only changes. Those have their own flows.

## Prerequisites

- Dependencies installed (`pnpm install`; if not set up, run `/dev-setup`).
- Work from `packages/spindle-ui`.
- All research uses files **inside this repository** — do not depend on external
  MCP servers. Everything needed (component source, design tokens, a11y patterns)
  lives in the working tree, which also reflects uncommitted local edits.

## Language Policy

- This skill's instructions are in English for token efficiency.
- **User-facing output stays Japanese** (per `CLAUDE.md`): the approval-gate
  summary and the PR body. Commit messages follow Conventional Commits (JP or EN).

## Workflow

Run these steps in order. The approval gate (step 4) is a hard stop.

### 1. Intake

Confirm with the user:
- Component **name** in PascalCase (e.g. `Badge`).
- Whether it nests under a namespace (e.g. `Form/Switch`) — most live flat under
  `src/<Name>/`, form controls live under `src/Form/<Name>/`.
- Requirements: purpose, variants, sizes, states, and the interactive element it
  wraps (button / input / a / none).

### 2. Research (read-only, in-repo)

Gather prior art and design material by reading files directly:
- **Duplicate check**: `Glob packages/spindle-ui/src/*/index.ts` and
  `packages/spindle-ui/src/Form/*/index.ts`; confirm the name is not taken.
- **Reference 2–3 similar components** end-to-end (`.tsx`, `.css`, `.stories.tsx`,
  `.test.tsx`, `design-doc.md`). Good exemplars: `src/Button/*` (forwardRef +
  variants), `src/Form/Checkbox/*` (input + label), `src/Rating/*` (composite).
- **Design tokens**: `Grep` token names used by similar components in their
  `.css` `:root` blocks; tokens are CSS custom properties (`var(--color-...)`).
- **Accessibility**: study `aria-*` / `role` usage in the reference components and
  check `.github/copilot-instructions.md` for required a11y points.
- Also account for how comparable components elsewhere are conventionally named,
  typed, and given a11y roles.

See `references/component-conventions.md` for the condensed convention reference.

### 3. Design Doc

Run `/create-design-doc <Name>` (template: `packages/spindle-ui/.scaffdog/design-doc.md`).
Required sections: Overview & Background / Elements (Design Tokens + Properties) /
Accessibility.

### 4. ★ APPROVAL GATE — hard stop

Post a **Japanese** summary in chat covering: Props type, variants/sizes, design
tokens to use, a11y approach (roles/aria/keyboard), and the intended DOM structure.
**Wait for the author's reply. Do NOT scaffold or implement until they approve.**
If they request changes, update the Design Doc and re-present. This gate is the
single most important behavior of this skill.

### 5. Scaffold

From `packages/spindle-ui`, run `pnpm generate` and enter the component name.
This creates `index.ts`, `.tsx`, `.css`, `.stories.tsx`, `.mdx`, `.test.tsx` under
`src/<Name>/` and auto-appends exports to `src/index.ts` and `src/index.css`.

If the interactive prompt cannot be driven non-interactively, create the files
manually following `references/component-conventions.md` and add the two export
lines by hand. For a nested component (`Form/<Name>`), also export from
`src/Form/index.ts`.

### 6. Implement

Follow the approved Design Doc.

- **`.tsx`**: Use `forwardRef` when wrapping a single interactive element. Do **not**
  accept a `className` prop — type props as
  `interface Props extends Omit<React.XxxHTMLAttributes<HTMLXxxElement>, 'className'>`.
  Build class names from a `const BLOCK_NAME = 'spui-<Name>'` with the
  `[BLOCK_NAME, ...].filter(Boolean).join(' ')` pattern.
- **`.css`**: Expose overridable `--<Name>-*` custom properties in a `:root` block;
  use the `spui-` SUIT/BEM namespace; keep declarations in
  **alphabetical property order** (stylelint enforces this).
- **`.stories.tsx`**: CSF3, cover the main variants.
- **`.mdx`**: usage docs (the scaffold seeds this).
- **`.test.tsx`**: **rewrite the scaffold's `@jest/globals` import — it is wrong for
  this repo.** Use Vitest globals (`vi`, `describe`, `test`, `expect` are global; no
  import) with `@testing-library/react` + `@testing-library/user-event`. Cover at
  minimum: interaction (click), `forwardRef` forwarding, and key state changes.

The reviewer (`.github/copilot-instructions.md`) expects 8 files per component
including `design-doc.md` and `.figma.tsx` (Code Connect). `design-doc.md` comes
from step 3. `.figma.tsx` requires Figma Code Connect — see "Future extension"; for
v1, note it as a follow-up in the PR rather than fabricating mappings.

### 7. Verify

From `packages/spindle-ui`, run until green (report failures verbatim, do not hide):
- `pnpm lint:style` (auto-fix with `pnpm fix` where safe)
- `pnpm test:interaction` (vitest run)
- Optionally `pnpm build` / `pnpm size`.

### 8. Commit

Conventional Commits, written as a release note (it lands in CHANGELOG):
`feat(spindle-ui): add <Name> component`. Work on the current feature branch.

### 9. Changeset

Invoke the `create-changeset` skill (`@openameba/spindle-ui`, typically `minor`).

### 10. Draft PR

Open a **Draft** PR using whatever GitHub integration is available (`gh` CLI if
present, otherwise the GitHub MCP tools). The branch is already pushed via
`git push -u origin <branch>`. PR body in **Japanese**: 概要 / 背景 / 変更点 /
確認方法. Optionally offer to watch the PR for CI/review activity.

## Future extension: Figma (disabled in v1)

When a Figma MCP is connected: pull the design with `get_design_context`, reflect it
in the implementation, then generate a `<Name>.figma.tsx` using `figma.connect()`
(Code Connect) to map Figma variants/props to React props. Bidirectional
(code → Figma) sync is a later consideration. None of this runs in v1.

## References

- `references/component-conventions.md` — condensed spindle-ui conventions + paths.
- `references/evaluation.md` — evaluation scenarios and the pass/fail rubric.
