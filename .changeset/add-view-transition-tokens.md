---
"@openameba/spindle-tokens": minor
"@openameba/spindle-mcp-server": minor
---

View Transition API用のトークンを追加。

- view-transition.cssを追加（root要素用のfade/slideアニメーション）
- 既存のAnimationトークンを参照することで一貫性を確保
- spindle-tokens-animation.cssとの併用が必須
- カスタマイズ可能なトークン（duration、easing、animation shorthand）を提供
