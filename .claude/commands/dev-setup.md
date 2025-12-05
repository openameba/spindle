---
description: Set up development environment for Spindle
allowed-tools: Bash(pnpm:*), Bash(npx:*), Bash(npm:*)
---

# Development Setup Command

## Overview

This command sets up the development environment by ensuring pnpm v10 is installed and running `pnpm install` to install dependencies.

## Steps

1. **Install/Verify pnpm v10**
   - Check if pnpm is installed by running `pnpm --version`
   - If pnpm is not installed or version is not 10.x, install it using `npm install --global pnpm@10`
   - Verify installation succeeded

2. **Install Dependencies**
   - Run `pnpm install --frozen-lockfile` to install all project dependencies
   - Report any errors that occur during installation

## Usage

Run `/dev-setup` to set up the development environment.
