# Spindle Tokens

Spindle (Ameba Design System) Design Tokens

<p align="center">
  <img alt="Spindle TokensはFigmaのAPIを経由してStyle Dictionary形式のJSONを作成し、各アプリケーションに適した形式に変換します" src="./spindle-tokens.png" width="1200">
</p>

Spindle TokensはAmebaのデザインシステム「Spindle」で定義されたデザイントークンを管理します。デザイントークンは[DTCG (Design Tokens W3C Community Group)](https://www.w3.org/community/design-tokens/)フォーマットに準拠したJSON形式で管理され、[Style Dictionary](https://github.com/amzn/style-dictionary)により各アプリケーション向けの形式に変換されます。

## インストール

```bash
npm install @openameba/spindle-tokens
```

## 使い方

※ 本番環境で利用する際にはセルフホストすることを推奨します。

### 基本的な読み込み

```css
@import '@openameba/spindle-tokens/dist/css/spindle-tokens-animation.css';
@import '@openameba/spindle-tokens/dist/css/spindle-tokens-font.css';
@import '@openameba/spindle-tokens/dist/css/spindle-tokens-shadow.css';
@import '@openameba/spindle-tokens/dist/css/view-transition.css';
```

```javascript
import '@openameba/spindle-tokens/dist/css/spindle-tokens-animation.css';
import '@openameba/spindle-tokens/dist/css/spindle-tokens-font.css';
import '@openameba/spindle-tokens/dist/css/spindle-tokens-shadow.css';
import '@openameba/spindle-tokens/dist/css/view-transition.css';
```

```html
<link rel="stylesheet" href="https://unpkg.com/@openameba/spindle-tokens/dist/css/spindle-tokens-animation.css">
<link rel="stylesheet" href="https://unpkg.com/@openameba/spindle-tokens/dist/css/spindle-tokens-font.css">
<link rel="stylesheet" href="https://unpkg.com/@openameba/spindle-tokens/dist/css/spindle-tokens-shadow.css">
<link rel="stylesheet" href="https://unpkg.com/@openameba/spindle-tokens/dist/css/view-transition.css">
```

## View Transitionトークン

[View Transition API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API) を利用する際は、view-transition.cssを読み込むことで、Spindleのアニメーショントークンに基づいた一貫したトランジション体験を提供できます。

### 注意事項

- view-transition.cssはspindle-tokens-animation.cssとの併用が必須です
- view-transition.cssには `@view-transition { navigation: auto; }` が含まれているため、CSSを読み込むだけで条件に合う場合は自動的にトランジションが発生します。条件の詳細は [MDN - @view-transition](https://developer.mozilla.org/ja/docs/Web/CSS/Reference/At-rules/@view-transition#navigation) を参照してください
- 現在はページ全体でのトランジション（root要素）のみ対応しています
- 個別要素に対するView Transitionは、プロジェクトごとに都度実装してください

### 基本的な使い方

```css
/* spindle-tokens-animation.cssの読み込みが必須 */
@import '@openameba/spindle-tokens/dist/css/spindle-tokens-animation.css';
@import '@openameba/spindle-tokens/dist/css/view-transition.css';
```

### カスタマイズ可能なトークン

#### 分割トークン（細かい調整用）

- `--view-transition-root-old-fade-duration` - 消えていく要素のフェード時間
- `--view-transition-root-old-fade-easing` - 消えていく要素のフェードイージング
- `--view-transition-root-old-slide-duration` - 消えていく要素のスライド時間
- `--view-transition-root-old-slide-easing` - 消えていく要素のスライドイージング
- `--view-transition-root-new-fade-duration` - 出現する要素のフェード時間
- `--view-transition-root-new-fade-easing` - 出現する要素のフェードイージング
- `--view-transition-root-new-slide-duration` - 出現する要素のスライド時間
- `--view-transition-root-new-slide-easing` - 出現する要素のスライドイージング

#### shorthand トークン（パターン丸ごと差し替え用）

- `--view-transition-root-old-animation` - 消えていく要素のアニメーション全体
- `--view-transition-root-new-animation` - 出現する要素のアニメーション全体

### カスタマイズ例

```css
/* 少しだけ遅くしたいページ */
.page--slow-transition {
  --view-transition-root-new-fade-duration: 400ms;
}

/* LPだけはパターン丸ごと別のアニメーションにしたい */
.page--lp {
  --view-transition-root-old-animation:
    300ms ease-in both spindle-view-transition-fade-out;
  --view-transition-root-new-animation:
    300ms ease-out both spindle-view-transition-fade-in;
}
```

## Spacingトークン

Spacingトークンはデバイスサイズに応じて異なる値を持ちます。対象デバイスに合わせて適切なファイルを読み込むか、メディアクエリで切り替えてください。

### 単一デバイス向けの場合

```css
/* Mobile向けの場合 */
@import '@openameba/spindle-tokens/dist/css/spindle-tokens-spacing-mobile.css';
```

### レスポンシブ対応の場合
```html
<link rel="stylesheet" href="https://unpkg.com/@openameba/spindle-tokens/dist/css/spindle-tokens-spacing-mobile.css" media="(max-width: 767px)">
<link rel="stylesheet" href="https://unpkg.com/@openameba/spindle-tokens/dist/css/spindle-tokens-spacing-tablet.css" media="(min-width: 768px) and (max-width: 1023px)">
<link rel="stylesheet" href="https://unpkg.com/@openameba/spindle-tokens/dist/css/spindle-tokens-spacing-desktop.css" media="(min-width: 1024px)">
```

## 開発方法

```sh
# Figmaで定義されたデザイントークンをJSON形式のファイルに変換し、保存します
FIGMA_TOKEN=*** FIGMA_COLOR_PRIMITIVE_FILE_ID=*** FIGMA_COLOR_THEME_FILE_ID=*** FIGMA_COLOR_THEME_DARK_FILE_ID=*** FIGMA_DROP_SHADOW_FILE_ID=*** pnpm export

# JSONファイルを元に各プラットフォームで利用する形式に変換します
pnpm build
```

## ライセンス
Spindle TokensはMITライセンスで公開されています。
