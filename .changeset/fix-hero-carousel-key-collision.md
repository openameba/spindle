---
"@openameba/spindle-hooks": minor
"@openameba/spindle-ui": patch
---

Add `itemKeys` to `useCarousel` return value so consumers can render `itemsToRender` without React duplicate-key warnings caused by head/tail clones. `HeroCarousel` now uses these stable keys instead of `item.link`.
