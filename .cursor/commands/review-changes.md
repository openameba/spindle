---
description: Review code changes based on Spindle guidelines
allowed-tools: Read, Glob, Grep, Bash
---

# Review Changes Command

## Overview

This command reviews code changes following Spindle's code review guidelines defined in `.github/copilot-instructions.md`.

## Steps

1. **Identify Changed Files**
   - Run `git status` and `git diff` to understand what changed
   - Determine which package(s) are affected

2. **Apply Review Guidelines**
   - Read and apply the guidelines from `.github/copilot-instructions.md`
   - Focus on the General section for all changes
   - Apply package-specific guidelines (e.g., spindle-ui) based on changed files

3. **Provide Feedback**
   - Summarize findings in a clear, actionable format
   - Reference specific files and line numbers
   - Group by: critical issues, suggestions, questions

## Usage

```bash
/review-changes
```
