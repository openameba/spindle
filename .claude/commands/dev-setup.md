---
description: Set up development environment for Spindle
allowed-tools: Bash(yarn:*), Bash(npm:*)
---

# Development Setup Command

## Overview

This command sets up the development environment by ensuring Yarn v1 is installed and running `yarn install` to install dependencies.

## Steps

1. **Install/Verify Yarn v1**
   - Check if Yarn is installed by running `yarn --version`
   - If Yarn is not installed or version is not 1.x, install it using `npm install --global yarn`
   - Verify installation succeeded

2. **Install Dependencies**
   - Run `yarn install` to install all project dependencies
   - Report any errors that occur during installation

## Usage

Run `/dev-setup` to set up the development environment.
