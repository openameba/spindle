#!/usr/bin/env bash
set -euo pipefail

changeset version

# spindle-illust-maker pins the published @openameba/spindle-ui, which Renovate
# keeps equal to the workspace version. changesets then treats it as an internal
# dependency and rewrites it to the not-yet-published next version, which breaks
# the lockfile update below. Keep the pin as is; Renovate updates it after publish.
git checkout -- packages/spindle-illust-maker
git clean -fdq packages/spindle-illust-maker

pnpm install --lockfile-only --no-frozen-lockfile
