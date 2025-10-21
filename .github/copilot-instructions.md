# Code Review Guidelines

## General

- Point out if any tests or documentation related to the changes are missing, and provide suggestions when possible
- Check accessibility implementation (refer to packages/spindle-mcp-server/src/accessibility.ts and component design-doc.md for detailed checklist):
  - Semantic HTML and appropriate ARIA attributes
  - Keyboard navigation support
  - Visible focus states

## spindle-ui

For ./packages/spindle-ui/ changes, review the following:

- Verify related files are updated together (e.g., when updating a component, check if tests, stories, and docs also need updates)
  - Each component has: index.ts (export), .tsx (implementation), .css (styles), .test.tsx (tests), .stories.tsx (component examples), .mdx (detailed docs), design-doc.md (design documentation), .figma.tsx (Code Connect)
  - Tests cover updated functionality
  - Stories cover key component variants and use cases
  - Documentation reflects current behavior
  - Code Connect mapping is updated if component API changed
- For new components, verify required files are created: index.ts, .tsx, .css, .test.tsx, .stories.tsx, .mdx, design-doc.md, .figma.tsx
  - If files are missing, point out which files need to be created
  - If files exist but are incomplete, suggest content or ask user how to proceed
- For components wrapping a single interactive element (button, input, a, etc.), verify `forwardRef` is implemented to allow ref access
- Check that `className` prop is not accepted unless explicitly required (style customization should use CSS custom properties instead)
