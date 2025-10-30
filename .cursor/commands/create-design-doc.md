# Create Design Doc Command

## Overview

This command creates a Design Doc for a Spindle UI component. It generates documentation following the template format, referencing existing Design Docs and component implementations.

## Steps

1. **Retrieve Design Doc Template**
   - Read the template from `packages/spindle-ui/.scaffdog/design-doc.md`

2. **Reference Existing Design Docs**
   - Read multiple Design Docs from similar components
   - Understand the structure and style
   - Examples: `packages/spindle-ui/src/Form/ButtonSwitch/design-doc.md`, `packages/spindle-ui/src/Rating/design-doc.md`

3. **Analyze Component Implementation**
   - TypeScript files (Props definitions)
   - CSS files (Design Tokens)
   - Stories files (variations)
   - MDX files (usage examples)

4. **Create Design Doc**
   - Place the file in the appropriate path based on the component name
   - Include the following sections:
     - **Overview & Background** (Required): Component purpose and use cases
     - **Screenshots** (Optional): Add if necessary
     - **Usage Examples** (Optional): DO/DO NOT best practices
     - **Elements** (Required):
       - Design Tokens: Colors and tokens used
       - Properties: TypeScript type definitions
     - **Implementation Examples** (Optional): React and HTML markup samples
     - **Accessibility** (Required): Checklist based on Ameba Accessibility Guidelines
     - **Testing Strategy** (Optional): Testing Library and Storybook test approach
     - **Links** (Optional): Reference documentation URLs

5. **Suggest Missing Stories and Tests**
   - Review existing Stories and identify missing variations (e.g., checked state)
   - Propose additional Stories if needed
   - Review existing tests and suggest missing test cases if needed

6. **Fix Linting and Formatting Issues**
   - Run `yarn fix` in the project root to automatically fix code formatting issues (Biome and lerna format will run)
   - Run `yarn textlint <path-to-design-doc>` and manually fix any errors or warnings until the command passes cleanly

## Usage

```bash
/create-design-doc Button
/create-design-doc Form/TextField
```

## Notes

- Design Docs don't need to be perfect. The goal is to document the background and design decisions that can't be understood from code alone
- They also serve as a review tool to identify unclear points or unconsidered aspects
- For components that don't accept `className` prop, add a note in the DO NOT section
- Use headings (e.g., `###`, `####`) to represent hierarchy in the markdown, not bold text
