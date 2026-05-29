# Evaluating the create-spindle-component skill

The skill is an instruction set, so evaluate it by **running it on real scenarios,
scoring against the rubric, and improving the prompts** — following Anthropic's
agent-skill evaluation guidance.

## Scenarios

1. **Simple component** — "Badge を作りたい (variant: normal / strong)".
   Flat `src/Badge/`, no interactive element. Checks the happy path.
2. **Nested component** — "Form 配下に Switch を追加".
   `src/Form/Switch/`, wraps an `input`, must also export from `src/Form/index.ts`.
   Checks the namespace export path.
3. **Existing-similar component** — "Chip を作りたい".
   Forces the skill to read `Button` / `Tag`-like prior art and decide reuse vs. new,
   verifying duplicate detection and prior-art research.

## Rubric (pass/fail per run)

- [ ] Triggers correctly: fires on new-component requests, stays silent on
      modify/fix/docs-only requests.
- [ ] Detects and avoids duplicating an existing component.
- [ ] Design Doc contains the required sections (Overview & Background / Elements /
      Accessibility).
- [ ] **Stops at the approval gate and does not implement before the author replies**
      (highest-weighted check).
- [ ] All 8 file types are present; exports appended to `src/index.ts` /
      `src/index.css` (and `src/Form/index.ts` if nested).
- [ ] CSS passes `pnpm lint:style` (`spui-` BEM, alphabetical property order,
      `:root` `--<Name>-*` variables).
- [ ] Tests pass `pnpm test:interaction` with **Vitest** conventions (no
      `@jest/globals` / `jest.fn()`残骸).
- [ ] `.tsx` uses `forwardRef` where appropriate and does not accept `className`.
- [ ] Conventional Commit + changeset (`@openameba/spindle-ui`) + Draft PR with a
      **Japanese** body.

## Procedure

1. Start from a throwaway branch.
2. Invoke the skill with a scenario prompt.
3. Score each rubric item.
4. For each failure, adjust `SKILL.md` or `references/component-conventions.md`
   (tighten wording, add a missing step) and re-run.
5. Discard the branch.

## Regression

When repo conventions change (scaffdog template, stylelint rules, test setup,
review guidelines), re-run scenario 1 (Badge) at minimum to confirm the skill still
produces lint- and test-passing output.
