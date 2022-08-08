# Spindle Theme Switch

`<spindle-theme-switch>`はライトテーマとダークテーマを切り替えるためのコンポーネントです。Spindleで定義しているスタイルや動作、アクセシビリティ要件を考慮して作成されています。

実装は[GoogleChromeLabs/dark-mode-toggle](https://github.com/GoogleChromeLabs/dark-mode-toggle)を継承して作成されています。

## Demo

`<spindle-theme-switch>`の利用例は以下のサイトで確認できます。

- https://ameba-spindle-theme-switch.web.app/
- https://a11y-guidelines.ameba.design/

## Usage

`<spindle-theme-switch>`を利用する方法は以下のサンプルコードを参考にしてください。

```html
<head>
  <meta name="color-scheme" content="light dark">
  <!-- テーマのスタイルを読み込むには3つの方法があります -->
  <!-- Option 1: ameba-color-palette.cssを読み込み、その中で指定されているCSSカスタムプロパティを利用します -->
  <link rel="stylesheet" href="https://unpkg.com/ameba-color-palette.css/ameba-color-palette.css">
  <link rel="stylesheet" href="style.css">
  <!-- Option 2: <link media=""> を利用してそれぞれのテーマCSSを読み込みます -->
  <link rel="stylesheet" href="light.css" media="(prefers-color-scheme: light)">
  <link rel="stylesheet" href="dark.css" media="(prefers-color-scheme: dark)">
  <!-- Option 3: カスタム属性を利用してそれぞれのテーマのスタイルを指定します -->
  <style>
    /* Set light theme here */

    /* Set dark theme */
    :root[data-color-scheme="dark"] {}
    @media (prefers-color-scheme: dark) {
      :root:not([data-color-scheme]),
      :root[data-color-scheme="dark"] {}
    }
  </style>
  <!-- type=moduleを指定してスクリプトを読み込みます -->
  <script src="https://unpkg.com/@openameba/spindle-theme-switch/spindle-theme-switch.js" type="module"></script>
</head>

<body>
  <spindle-theme-switch legend="テーマを切り替える" permanent></spindle-theme-switch>
</body>
```

## 属性

`<spindle-theme-switch>`利用時には主に以下の属性をしていします。

- `legend`: ラジオボタンで構成されているテーマスイッチにタイトルを指定します。
- `permanent`: テーマの変更をLocal Storageに保存し、再表示時に保存されたテーマを適用します。なお、`remember`にテキストが指定されても非表示になります。

指定できる指定できる属性は https://github.com/GoogleChromeLabs/dark-mode-toggle#properties を参照してください。

## License
Spindle Theme Switch is licensed under MIT License. This software includes [GoogleChromeLabs/dark-mode-toggle](https://github.com/GoogleChromeLabs/dark-mode-toggle) that is distributed in the Apache License 2.0.
