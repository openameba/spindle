# Create Issue Command

## Requirements

- MCP (Model Context Protocol) is required when creating issues. Choose one of the following options:
  - **Linear MCP** (for Ameba members with Linear account): [Linear MCP Setup](cursor://anysphere.cursor-deeplink/mcp/install?name=Linear&config=eyJ1cmwiOiJodHRwczovL21jcC5saW5lYXIuYXBwL3NzZSJ9)
  - **GitHub MCP** (for non-Ameba members): [GitHub MCP Setup](cursor://anysphere.cursor-deeplink/mcp/install?name=GitHub&config=eyJjb21tYW5kIjoiZG9ja2VyIHJ1biAtaSAtLXJtIC1lIEdJVEhVQl9QRVJTT05BTF9BQ0NFU1NfVE9LRU4gZ2hjci5pby9naXRodWIvZ2l0aHViLW1jcC1zZXJ2ZXIiLCJlbnYiOnsiR0lUSFVCX1BFUlNPTkFMX0FDQ0VTU19UT0tFTiI6IiJ9fQ%3D%3D)
- Target repository: `@openameba/spindle`
- Required tools:
  - Linear MCP: `mcp_Linear_create_issue`
  - GitHub MCP: `mcp_GitHub_create_issue`

## Pre-flight Checklist

**Always report the checklist results to the user BEFORE creating the issue, indicating which items passed or failed. Do not proceed with issue creation until all checklist items are verified and reported to the user.**

- [ ] MCP is configured and available (choose one):
  - Linear MCP
  - GitHub MCP
- [ ] Verify the target workspace/repository:
  - Linear MCP: Spindle workspace
  - GitHub MCP: `@openameba/spindle` repository
- [ ] Use appropriate MCP tool to create the issue:
  - Linear MCP: `mcp_Linear_create_issue`
  - GitHub MCP: `mcp_GitHub_create_issue`
- [ ] Prepare clear, descriptive Japanese title that allows users to understand the content at a glance
- [ ] Check for sensitive information in the issue content
  - API keys, passwords, or authentication tokens
  - Personal information (names, emails, phone numbers)
  - Internal URLs, server names, or infrastructure details
  - Business-sensitive data or confidential information
  - If potential security concerns exist, consult with the user
- [ ] For Linear MCP: Specify appropriate project:
  - Use `mcp_Linear_list_projects` to get project list and select appropriate project
  - If no suitable project exists, propose creating a new one and use `mcp_Linear_create_project` to add it (with user permission)

## Usage

Use this command to create issues with proper formatting and tracking.
