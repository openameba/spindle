# Code Review Guidelines

## General

- Point out if any tests or documentation related to the changes are missing, and provide suggestions when possible
- Check accessibility implementation:
  - Refer to detailed checklists:
    - `packages/spindle-mcp-server/src/accessibility.ts` (Ameba a11y guidelines checklist with URLs)
    - Component-specific design-doc.md (e.g., `packages/spindle-ui/src/Form/Checkbox/design-doc.md`)
  - Key points to verify:
    - Semantic HTML and appropriate ARIA attributes
    - Keyboard navigation support (Tab, Enter, Space, arrow keys)
    - Visible focus states

### File Reference Conventions

Different tools use different file reference syntax. **Do not suggest unifying these - they are intentional:**

- `.claude/commands/`: Use `@` prefix (e.g., `@.github/copilot-instructions.md`, `@packages/spindle-ui/...`)
- `.cursor/commands/`: Use relative paths (e.g., `.github/copilot-instructions.md`, `packages/spindle-ui/...`)
- `CLAUDE.md`: Use `@` prefix for Claude-specific command paths (e.g., `@.claude/commands/...`)
- `AGENTS.md`: Use relative paths for command paths (e.g., `.cursor/commands/...`)

## spindle-ui

For ./packages/spindle-ui/ changes, review the following:

- Verify related files are updated together (e.g., when updating a component, check if tests, stories, and docs also need updates)
  - Each component has:
    - `index.ts` (export)
    - `.tsx` (implementation)
    - `.css` (styles)
    - `.test.tsx` (tests)
    - `.stories.tsx` (component examples)
    - `.mdx` (detailed docs)
    - `design-doc.md` (design documentation)
    - `.figma.tsx` (Code Connect)
  - Tests cover updated functionality
  - Stories cover updated functionality (key component variants, props combinations, and use cases)
  - Documentation reflects current behavior
  - Code Connect mapping is updated if component API changed
- For new components, verify required files are created: index.ts, .tsx, .css, .test.tsx, .stories.tsx, .mdx, design-doc.md, .figma.tsx
  - If files are missing, point out which files need to be created
  - If files exist but are incomplete, suggest content or ask user how to proceed
- For components wrapping a single interactive element (button, input, a, etc.), verify `forwardRef` is implemented to allow ref access
- Check that `className` prop is not accepted unless explicitly required (style customization should use CSS custom properties instead)
