---
"@openameba/spindle-hooks": patch
"@openameba/spindle-mcp-server": patch
"@openameba/spindle-theme-switch": patch
"@openameba/spindle-ui": patch
---

TypeScript v6でビルド可能にするため、各パッケージのtsconfigを更新。spindle-hooksとspindle-uiのCJSビルドのtargetを `es5` から `es2018` に引き上げ (IE11等のES2018非対応環境は元々サポート対象外)。
