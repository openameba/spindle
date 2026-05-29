# Spindle UI Component Conventions

Condensed reference so the skill does not have to re-derive conventions each run.
Source paths are given so you can read the live files when in doubt.

## Directory & files (one component = one directory)

A complete component under `packages/spindle-ui/src/<Name>/` (or
`src/Form/<Name>/` for form controls) has **8 file types**
(source: `.github/copilot-instructions.md`):

| File | Origin | Notes |
|------|--------|-------|
| `index.ts` | scaffold | `export { <Name> } from './<Name>';` |
| `<Name>.tsx` | scaffold | implementation |
| `<Name>.css` | scaffold | styles |
| `<Name>.stories.tsx` | scaffold | CSF3 stories |
| `<Name>.mdx` | scaffold | usage docs |
| `<Name>.test.tsx` | scaffold (rewrite) | tests — convert to Vitest |
| `design-doc.md` | `/create-design-doc` | design rationale |
| `<Name>.figma.tsx` | Figma Code Connect | deferred in v1 (see SKILL Future extension) |

`pnpm generate` (scaffdog) produces the first six. It does **not** create
`design-doc.md` or `.figma.tsx`.

## Export flow (scaffdog automates the root edits)

- Component `index.ts` exports the component.
- `pnpm generate` auto-appends to `src/index.ts`
  (`export { <Name> } from './<Name>';`) and to `src/index.css`
  (`@import './<Name>/<Name>.css';`).
- **Nested (Form) components** are exported from `src/Form/index.ts` and re-exported
  via `export * as Form from './Form'` in `src/index.ts` — add the
  `src/Form/index.ts` line manually if scaffolding nested.

## TSX conventions (source: `src/Button/Button.tsx`, `src/Form/Checkbox/Checkbox.tsx`)

- `import React, { forwardRef } from 'react';`
- Props extend the host element's attributes minus `className`:
  ```ts
  interface Props
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
    // component-specific props with defaults
  }
  ```
- `forwardRef` when wrapping a single interactive element; use a named inner
  function: `export const Button = forwardRef<HTMLButtonElement, Props>(function Button(...) {...})`.
- `const BLOCK_NAME = 'spui-<Name>';` then compose classes:
  ```ts
  className={[BLOCK_NAME, `${BLOCK_NAME}--${variant}`, cond && `${BLOCK_NAME}--x`]
    .filter(Boolean)
    .join(' ')}
  ```
- Spread `...rest` onto the host element; forward `ref`.
- Do **not** accept a `className` prop — customization goes through CSS custom
  properties.

## CSS conventions (source: `src/Button/Button.css`, `.stylelintrc.json`)

- Namespace: `spui-` SUIT/BEM (`stylelint-selector-bem-pattern`, preset `suit`,
  namespace `spui`).
- Expose overridable variables in a `:root` block named `--<Name>-*`
  (e.g. `--Button--contained-backgroundColor`), referencing design tokens via
  `var(--color-...)`. Tokens come from spindle-tokens / `ameba-color-palette`.
- **Alphabetical property order** is enforced (`order/properties-alphabetical-order`).
- Base config: `stylelint-config-standard` with `color-function-notation: legacy`,
  `alpha-value-notation: number`.
- Lint: `pnpm lint:style`; auto-fix: `pnpm fix`.

## Test conventions (source: `src/Button/Button.test.tsx`, `vitest.config.ts`, `setup-tests.ts`)

- **Vitest with globals** (`globals: true`, `environment: jsdom`,
  `setupFiles: ['./setup-tests.ts']` which imports `@testing-library/jest-dom`).
- `vi`, `describe`, `test`, `expect` are **global — do not import them**. The
  scaffdog template's `import { jest } from '@jest/globals';` is wrong; delete it
  and use `vi.fn()` instead of `jest.fn()`.
- Imports actually used:
  ```ts
  import { render, screen } from '@testing-library/react';
  import userEvent from '@testing-library/user-event';
  import React from 'react';
  ```
- Cover: interaction (`userEvent.setup()` + `user.click(...)`), `forwardRef`
  (`React.createRef` then `expect(...).toEqual(ref.current)`), and state changes.
- Run: `pnpm test:interaction` (= `vitest run`).

## Storybook conventions

- CSF3: `const meta: Meta<typeof X> = { title: '<Name>', component: X }; export default meta;`
- `type Story = StoryObj<typeof meta>;` then named exports per variant.
- For nested components, use a hierarchical `title` (e.g. `'Form/<Name>'`).

## Review checklist (source: `.github/copilot-instructions.md`)

- All related files updated together; all 8 files present for a new component.
- `forwardRef` for single-interactive-element wrappers.
- No `className` prop unless explicitly required.
- Semantic HTML + appropriate ARIA; keyboard navigation; visible focus states.

## Reference implementations

- `src/Button/*` — forwardRef, multiple variants/sizes/layouts, icon slot.
- `src/Form/Checkbox/*` — input wrapped in label, `forwardRef` to the input.
- `src/Rating/*` — composite component with subcomponents.
- `src/Dialog/*` — overlay/portal pattern.
