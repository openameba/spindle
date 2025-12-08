# Create Design Doc Command

## Overview

This command creates a Design Doc for a Spindle UI component. It generates documentation following the template format, referencing existing Design Docs and component implementations. It can work with both existing and new components, and optionally includes Figma Code Connect information if a Figma URL is provided.

## Steps

1. **Determine Component Status**
   - Check if the component already exists in `packages/spindle-ui/src/`
   - If the component doesn't exist, this is a new component
   - Skip steps marked with (existing components only) for new components

2. **Retrieve Design Doc Template**
   - Read the template from `packages/spindle-ui/.scaffdog/design-doc.md`

3. **Reference Existing Design Docs**
   - Read multiple Design Docs from similar components
   - Understand the structure and style
   - Examples: `packages/spindle-ui/src/Form/ButtonSwitch/design-doc.md`, `packages/spindle-ui/src/Rating/design-doc.md`

4. **Process Figma URL** (if provided)
   - Check if Figma MCP is available (look for `mcp__figma-desktop__get_design_context` or `mcp__figma__get_design_context`)
   - Extract the node-id from the Figma URL and convert format
     - Example: `https://www.figma.com/design/FILE_KEY/FILE_NAME?node-id=1-2` → extract `1-2` → convert to `1:2`
   - If Figma MCP is available:
     - Use `get_design_context` with the converted nodeId (e.g., `1:2`) to fetch component information
     - This retrieves properties, variants, design tokens, and component structure
     - Use this information to populate the Figma Code Connect section with accurate property mappings
   - If Figma MCP is not available:
     - Inform the user that Figma MCP is not configured
     - Store the Figma URL and node-id for manual Code Connect documentation

5. **Analyze Component Implementation** (existing components only)
   - TypeScript files (Props definitions)
   - CSS files (Design Tokens)
   - Stories files (variations)
   - MDX files (usage examples)

6. **Create Design Doc**
   - Place the file in the appropriate path based on the component name
   - Include the following sections:
     - **Overview & Background** (Required): Component purpose and use cases
     - **Screenshots** (Optional): Add if necessary
     - **Usage Examples** (Optional): DO/DO NOT best practices
     - **Elements** (Required):
       - Design Tokens: Colors and tokens used
       - Properties: TypeScript type definitions
     - **Implementation Examples** (Optional): React and HTML markup samples
     - **Figma Code Connect** (Optional): If Figma URL was provided, populate this section with:
       - The extracted node-id formatted as `node-id=X:Y`
       - Mapping design showing how Figma variants/properties map to React props
       - Implementation example using `figma.connect()` with the proper URL and mappings
     - **Accessibility** (Required): Checklist based on Ameba Accessibility Guidelines
     - **Testing Strategy** (Optional): Testing Library and Storybook test approach
     - **Links** (Optional): Reference documentation URLs

7. **Suggest Missing Stories and Tests** (existing components only)
   - Review existing Stories and identify missing variations (e.g., checked state)
   - Propose additional Stories if needed
   - Review existing tests and suggest missing test cases if needed

8. **Fix Linting and Formatting Issues**
   - Run `pnpm fix` in the project root to automatically fix code formatting issues (Biome and lerna format will run)
   - Run `pnpm textlint <path-to-design-doc>` and manually fix any errors or warnings until the command passes cleanly

## Usage

```bash
# Existing component
/create-design-doc Button

# Existing component with nested path
/create-design-doc Form/TextField

# New component with Figma URL
/create-design-doc NewComponent https://www.figma.com/design/FILE_KEY/FILE_NAME?node-id=1-2

# Existing component with Figma URL to add Code Connect section
/create-design-doc Button https://www.figma.com/design/FILE_KEY/FILE_NAME?node-id=123-456
```

## Notes

- Design Docs don't need to be perfect. The goal is to document the background and design decisions that can't be understood from code alone
- They also serve as a review tool to identify unclear points or unconsidered aspects
- For components that don't accept `className` prop, add a note in the DO NOT section
- Use headings (e.g., `###`, `####`) to represent hierarchy in the markdown, not bold text
