# Spindle Agents Guide

## Development Setup
- Use the `dev-setup` command (@.claude/commands/dev-setup.md) to set up the development environment

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
- Use the `create-issue` command (@.claude/commands/create-issue.md) to ensure proper formatting and tracking

## Code Review
- Use the `review-changes` command (@.claude/commands/review-changes.md) to review code changes based on Spindle guidelines
- Review guidelines are defined in `.github/copilot-instructions.md`

## Pull Request Creation
- Write the PR summary in Japanese, providing a concise overview of the changes

## Dependency Updates

### Package Installation
- Install devDependencies with exact versions: `yarn add --exact --dev <package>`

### Storybook
- When updating Storybook, use the official migration command: `npx storybook@{VERSION} upgrade`
- Use Chrome DevTools MCP to verify that all pages display without errors (errors may occur during rendering)

## Note

### File Reference Notation
This guide uses `@` prefix notation (e.g., `@.claude/commands/...`) for Claude-specific command references. This differs from AGENTS.md which uses relative path notation (e.g., `.cursor/commands/...`). Both notations are intentional based on each tool's requirements.
