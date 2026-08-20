---
"@openameba/spindle-ui": patch
---

Paginationの初回描画がmatchMediaの結果に依存し、SSRが生成したHTMLと食い違ってhydration mismatchになる問題を修正。ビューポート判定はマウント後に反映する。
