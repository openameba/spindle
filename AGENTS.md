# Spindle Agents Guide

## Code Quality Guidelines
- Write clean, readable, and maintainable code
- Follow existing code patterns and conventions in the project
- Write self-documenting code that explains itself
- Add comments only when necessary to explain implementation intent or reasoning
- Avoid comments that simply restate what the code does
- Focus comments on "why" rather than "what" or "how"

## Commit Convention
- Follow [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/)
- Specify package name in scope
  - For multiple packages: use comma-separated list without spaces (e.g., `feat(spindle-ui,spindle-tokens): add new component`)
  - For root-level changes: omit scope (e.g., `chore: update CI configuration`)
- `feat` and `fix` will be reflected in CHANGELOG, so write titles that work as release notes
- Use Conventional Commits `BREAKING CHANGE` notation when there are breaking changes
- Use either Japanese or English for the text
- Do not include co-author, "Generated with", or other agent-specific information in commits
- Keep titles under 50 characters; may exceed if scope is long

## Issue Creation
- Use the `create-issue` command (.cursor/commands/create-issue.md) to ensure proper formatting and tracking when using Cursor

## Dependency Updates

### Package Installation
- Install devDependencies with exact versions: `yarn add --exact --dev <package>`

### Storybook
- When updating Storybook, use the official migration command: `npx storybook@{VERSION} upgrade`
- Use Chrome DevTools MCP to verify that all pages display without errors (errors may occur during rendering)
