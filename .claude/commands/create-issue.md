# Create Issue Command

## Requirements

- MCP (Model Context Protocol) is required when creating issues. Choose one of the following options:
  - **Linear MCP** (for Ameba members with Linear account): `claude mcp add --transport sse linear-server https://mcp.linear.app/sse`
  - **GitHub MCP** (for non-Ameba members): `claude mcp add --transport http github https://api.githubcopilot.com/mcp -H "Authorization: Bearer YOUR_GITHUB_PAT"`
- Target repository: `@openameba/spindle`
- Required tools:
  - Linear MCP: `mcp_Linear_create_issue`
  - GitHub MCP: `mcp_GitHub_create_issue`

## Pre-flight Checklist

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

**Always report the checklist results to the user, indicating which items passed or failed.**

## Usage

Use this command to create issues with proper formatting and tracking.
