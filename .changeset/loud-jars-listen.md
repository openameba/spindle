---
'@openameba/spindle-mcp-server': patch
---

Figma Code Connectがテンプレートファイル形式に移行したことに対応。コンポーネント情報の `figma` は `.figma.tsx` ではなく `.figma.ts` から取得するようになった。単一のFigmaコンポーネントセットのvariantとして定義されているコンポーネント (CapsuleTab / InlineTab / UnderlineTab) は、親ディレクトリの共有テンプレート (`NavigationTab.figma.ts`) を参照する。
