# Create Changeset Command

## Overview

This command analyzes the current branch changes and creates an appropriate changeset for package releases.

## Steps

1. **Check Current State**
   - Check for uncommitted changes: `git status`
   - Check for committed changes on branch: `git log main..HEAD` (or `origin/main..HEAD`)
   - Determine which diff command to use based on the current state

2. **Analyze Changes**
   - Choose the appropriate git diff command:
     - If there are uncommitted changes: use `git diff` and/or `git diff --cached`
     - If there are only committed changes: use `git diff main...HEAD` (or `origin/main...HEAD`)
     - If both exist: analyze the full branch with `git diff main...HEAD`
   - Identify which packages are affected by the changes (check files under `packages/*/`)
   - If there are commits, review commit messages: `git log main..HEAD --oneline` (or `origin/main..HEAD`)
   - Determine if changes require a release (features, fixes, breaking changes) or not (docs, CI/CD)

3. **Determine Version Bump Type**
   - Analyze commit messages (Conventional Commits 1.0.0 format) if commits exist:
     - **major**: Contains `BREAKING CHANGE` in commit body, or breaking changes in code
     - **minor**: Starts with `feat:` or `feat(scope):` - new features (backward compatible)
     - **patch**: Starts with `fix:` or `fix(scope):` - bug fixes and minor improvements
     - Other types (`chore:`, `docs:`, `ci:`, etc.) typically don't require changesets unless they affect packages
   - Review actual code changes to confirm the appropriate version bump
   - When in doubt between minor and patch, prefer patch for safety

4. **Generate Changeset**
   - Create a changeset file with a descriptive filename in `.changeset/` directory
   - Filename format: Use kebab-case with `.md` extension
     - Examples: `.changeset/add-new-button.md`, `.changeset/fix-layout-bug.md`, `.changeset/update-icon-props.md`
   - File content format:
     ```markdown
     ---
     "@openameba/package-name": major|minor|patch
     ---

     Clear description of the change
     ```
   - Example content:
     ```markdown
     ---
     "@openameba/spindle-ui": minor
     ---

     Add new Button variant for secondary actions
     ```
   - For multiple packages:
     ```markdown
     ---
     "@openameba/spindle-ui": minor
     "@openameba/spindle-tokens": patch
     ---

     Add new color tokens and update Button component
     ```
   - The description should be user-friendly as it will appear in CHANGELOG

5. **Lint Changeset**
   - Run textlint to check the changeset file: `yarn textlint .changeset/<filename>.md`
   - If there are any linting errors, fix them before proceeding
   - Re-run textlint to confirm all issues are resolved

6. **Verify and Commit**
   - Display the generated changeset for review
   - Confirm it accurately reflects the changes
   - Once verified, commit the changeset file:
     - `git add .changeset/<filename>.md`
     - `git commit -m "chore: add changeset"`

## When NOT to Create a Changeset

Skip changeset creation for:
- Documentation updates (README, .md files)
- CI/CD configuration changes (.github/workflows/, etc.)
- Development tool configuration (eslint, prettier, etc.)
- Commits with `docs:`, `chore:`, `ci:`, `test:` types that don't affect packages
- Any changes that don't require a package release

## Usage

Run this command before pushing or creating a Pull Request to generate an appropriate changeset for the current changes.
