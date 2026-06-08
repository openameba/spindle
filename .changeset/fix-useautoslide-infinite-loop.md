---
"@openameba/spindle-hooks": patch
"@openameba/spindle-ui": patch
---

Fix infinite re-render ("Maximum update depth exceeded") in `useAutoSlide` / `HeroCarousel` when `autoplay` is enabled. The timeout id is now held in a ref instead of state so the auto-slide callbacks stay stable and the mount effect no longer re-runs on every commit. Surfaced under React 19.
