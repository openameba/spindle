# Spindle Highlight.js Themes

Spindle Highlight.js Themesは、Highlight.js用のコードシンタックステーマ(CSS)です。LightテーマとDarkテーマが用意されており、どちらも背景色とテキスト色のコントラスト比を担保するように作成されています。

実際にコードに適用されたスタイルは、[サンプルページ](https://ameba-spindle-highlightjs.web.app/)で閲覧できます。

## テーマ

### Light
![Lightテーマのスクリーンショット](./spindle-light.png)

### Dark
![Darkテーマのスクリーンショット](./spindle-dark.png)

# Usage
Spindle Highlight.js Themesを利用するには、npm経由で読み込む(推奨)もしくは、CDN経由で読み込む方法があります。なお、Highlight.jsの使い方は[公式サイト](https://highlightjs.org/)を参照してください。

## npm or Yarn
```
npm install @openameba/spindle-highlightjs-themes
```

```
yarn add @openameba/spindle-highlightjs-themes
```

インストールしたCSSは、SassやPostCSSなどで読み込んで利用します。

```css
@import '@openameba/spindle-highlightjs-themes/spindle-light.css'
```

```css
@import '@openameba/spindle-highlightjs-themes/spindle-dark.css'
```

## CDN
```html
<link rel="stylesheet" href="https://unpkg.com/@openameba/spindle-highlightjs-themes@0.1.0/spindle-light.min.css">
```

```html
<link rel="stylesheet" href="https://unpkg.com/@openameba/spindle-highlightjs-themes@0.1.0/spindle-dark.min.css">
```

HTMLからCDNを経由して直接読み込みます。CDNの配信のため、サイトの表示速度に影響を及ぼす可能性があります。

## バージョニング
### 0.x
Highlight.jsのバージョン10と互換性があります。それ以外のバージョンでも利用できる可能性はありますが、動作確認していません。
