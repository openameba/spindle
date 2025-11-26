# Fix Storybook Errors Command

## Overview

This command uses Chrome DevTools MCP to check all Storybook pages, detect console errors and visual display errors, and automatically fix them when possible.

## Prerequisites

- Chrome DevTools MCP must be configured. If not already set up:
  - Click this link to install: https://cursor.com/en/install-mcp?name=chrome-devtools&config=eyJjb21tYW5kIjoibnB4IC15IGNocm9tZS1kZXZ0b29scy1tY3BAbGF0ZXN0In0%3D
  - Wait for user confirmation that setup is complete
  - Verify MCP tools are accessible before proceeding

## Steps

### Step 0: Verify Chrome DevTools MCP Setup

1. **Check MCP Availability**
   - Check if Chrome DevTools MCP tools are available (e.g., `navigate_page`, `list_console_messages`, `take_snapshot`)
   - **If Chrome DevTools MCP is NOT configured:**
     - Display a clear error message to the user:
       ```
       Chrome DevTools MCP is not configured.
       
       Please set up Chrome DevTools MCP before running this command:
       1. Click this link to install: https://cursor.com/en/install-mcp?name=chrome-devtools&config=eyJjb21tYW5kIjoibnB4IC15IGNocm9tZS1kZXZ0b29scy1tY3BAbGF0ZXN0In0%3D
       2. Wait for the setup to complete
       3. Restart Cursor if needed
       4. Run this command again
       ```
     - Exit the command without proceeding to further steps
   - **If Chrome DevTools MCP IS configured:**
     - Verify that essential tools are accessible
     - Proceed to Step 1

### Step 1: Launch Storybook

1. **Install Dependencies**
   - Run the `dev-setup` command to ensure dependencies are installed
   - Wait for the command to complete successfully
   - If the command fails, report the error and exit

2. **Start Storybook in Background**
   - Navigate to `packages/spindle-ui` directory
   - Run `yarn storybook:start` in background
   - Capture and store the process ID (PID) immediately after starting
   - Save the PID to a temporary file (e.g., `/tmp/storybook_pid.txt`) for later cleanup
   - Example: `yarn storybook:start & echo $! > /tmp/storybook_pid.txt`

3. **Wait for Storybook to be Ready**
   - Poll `http://localhost:6006` until it responds (max 60 seconds)
   - Check every 2 seconds using `curl` or similar
   - If timeout occurs, report error and proceed to cleanup before exiting

### Step 2: Collect All Story URLs from Storybook API

1. **Fetch Stories from API**
   - Send HTTP GET request to `http://localhost:6006/index.json`
   - Parse the JSON response

2. **Extract Story Information**
   - From the `entries` object, extract each entry's key and value
   - Each entry has:
     - Key: story ID (e.g., `"button--large"`)
     - Value: story metadata with `type` field (`"story"` or `"docs"`)
   - Generate URLs:
     - For stories: `http://localhost:6006/?path=/story/{id}` (use the entry key as `id`)
     - For docs pages: `http://localhost:6006/?path=/docs/{id}` (use the entry key as `id`)
   - Filter entries where `type` is `"story"` or `"docs"`
   - Remove duplicates and create URL list

### Step 3: Error Detection with Chrome DevTools MCP

**IMPORTANT: Check ALL URLs - No Sampling**
- You MUST check every single URL from the list
- Do NOT skip pages or use sampling
- Check all pages sequentially, one by one, from the top of the list
- This may take time, but completeness is critical

For each URL in the complete list (starting from the first URL):

1. **Navigate to Page**
   - Use `mcp__chrome-devtools__navigate_page` to navigate to the story URL
   - Wait for page load (the tool handles this automatically)

2. **Check Console Errors**
   - Use `mcp__chrome-devtools__list_console_messages` to get all console messages
   - Filter messages where `level` is `"error"`
   - Extract error details:
     - Error message text
     - File path and line number (if available)
     - Error type (TypeError, ReferenceError, SyntaxError, etc.)

3. **Check Visual Errors** (if needed)
   - Use `mcp__chrome-devtools__take_snapshot` to get DOM snapshot
   - Search for error display patterns:
     - React Error Boundary error messages
     - Common error text patterns ("Error", "Failed", "Cannot", etc.)
     - Error display CSS classes or IDs

4. **Check Network Errors** (optional)
   - Use `mcp__chrome-devtools__list_network_requests` to check for failed network requests
   - Identify 4xx/5xx status codes or failed resource loads

### Step 4: Error Classification and Fixing

1. **Analyze Detected Errors**
   - Categorize errors into:
     - **Auto-fixable errors**:
       - Import path errors (relative path corrections)
       - Unused imports
       - Simple type errors (adding type assertions, etc.)
       - Basic syntax errors
       - HTML structure errors (e.g., nested `<p>` tags)
       - React key duplication errors
     - **Report-only errors**:
       - Complex logic errors
       - External dependency issues
       - Design/layout issues

2. **Identify Source Files**
   - Extract file paths from error messages
   - Map errors to source files in `packages/spindle-ui/src`
   - **If needed**, search for related files with similar issues:
     - Use `Grep` to find similar error patterns in the codebase
     - Check files with dependencies to the target file (imports/exports)

### Step 5: Execute Auto-fix

1. **Apply Fixes**
   - For each auto-fixable error:
     - Read the source file using `read_file`
     - Apply appropriate fix using `search_replace`:
       - Fix import paths
       - Remove unused imports
       - Add type assertions
       - Fix syntax errors
       - Fix HTML structure errors (remove nested invalid tags)
       - Fix React key duplication (use index-based keys when needed)
     - Save the file

2. **Re-check Fixed Pages - Two-Stage Verification**

   After fixing errors, verify the fixes using the following approach:

   **Stage 1: Browser Hard Reload**
   - Use `navigate_page` with `ignoreCache: true` to force cache-free reload
   - Use `list_console_messages` to check if errors are resolved
   - **If errors are resolved** → Success! Mark as fixed and move to next error
   - **If errors persist** → Proceed to Stage 2

   **Stage 2: Clear Cache and Restart Storybook**
   - Browser hard reload is not sufficient for Storybook module cache
   - Storybook caches compiled modules in `node_modules/.cache/storybook`
   - Stop Storybook, clear cache, and restart:
     ```bash
     lsof -ti:6006 | xargs kill -9
     cd packages/spindle-ui && rm -rf node_modules/.cache/storybook
     yarn storybook:start
     ```
   - Wait for server to be ready (poll `http://localhost:6006`)
   - Navigate to the page with `ignoreCache: true`
   - Check errors again
   - **If errors are resolved** → Success! Mark as fixed
   - **If errors still persist** → Mark as report-only (fix may be incorrect or incomplete)

### Step 6: Report Results

1. **Display Summary**
   - **Confirm that ALL pages were checked** (no sampling was used)
   - Total number of pages checked (should match the URL list count)
   - Number of pages with no errors
   - Number of pages with errors

2. **List Auto-fixed Errors**
   - Display list of errors that were automatically fixed
   - Include file paths and error descriptions

3. **List Manual Fix Required Errors**
   - Display details of errors requiring manual fixes
   - Include:
     - Page URL
     - Error message
     - File path and line number
     - Error type
     - Suggested fix (if applicable)

### Step 7: Cleanup

1. **Terminate Storybook Process**
   - **Method 1: Use stored PID**
     - Read the PID from the temporary file (e.g., `/tmp/storybook_pid.txt`)
     - If PID file exists and contains a valid PID:
       - Check if the process is still running: `ps -p {PID}`
       - If running, terminate it: `kill {PID}`
       - Wait 2 seconds, then check if process still exists
       - If still running, force kill: `kill -9 {PID}`
   
   - **Method 2: Find process by port (fallback)**
     - If PID file doesn't exist or process is not found:
       - Find process using port 6006: `lsof -ti:6006`
       - If process found, capture the PID
       - Terminate the process: `kill {PID}`
       - Wait 2 seconds, then check if process still exists
       - If still running, force kill: `kill -9 {PID}`
   
   - **Method 3: Terminate all processes on port 6006 (last resort)**
     - If above methods fail:
       - Find all processes: `lsof -ti:6006 | xargs kill -9`
       - Verify port is free: `lsof -ti:6006` should return nothing

2. **Verify Cleanup**
   - Check that port 6006 is no longer in use: `lsof -ti:6006`
   - If port is still in use, report warning to user
   - Remove temporary files:
     - Delete PID file: `/tmp/storybook_pid.txt`
     - Delete any other temporary files created during execution (e.g., `/tmp/storybook_urls.txt`, `/tmp/error_check_results.txt`)

## Usage

```bash
/fix-storybook-errors
```

## Notes

- Storybook startup may take time, so appropriate wait times are set
- For large numbers of stories, sequential processing is used for stability
- Error fixes are applied carefully; backup or git status check is recommended
- Chrome DevTools MCP must be available before running this command

