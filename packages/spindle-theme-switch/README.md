# Spindle Theme Switch

`<spindle-theme-switch>`はライトテーマとダークテーマを切り替えるためのコンポーネントです。Spindleで定義しているスタイルや動作、アクセシビリティ要件を考慮して作成されています。

実装は[GoogleChromeLabs/dark-mode-toggle](https://github.com/GoogleChromeLabs/dark-mode-toggle)を継承して作成されています。

## Demo

`<spindle-theme-switch>`の利用例は以下のサイトで確認できます。

- [Spindleサイト](https://spindle.ameba.design/)
- [Ameba Accessibility Guidelines](https://a11y-guidelines.ameba.design/)
- [Spindle Theme Switch Example](https://ameba-spindle-theme-switch.web.app/)
- [blog.keiya01.dev](https://blog.keiya01.dev/) (拡張例は[Pull Request](https://github.com/keiya01/keiya01.dev/pull/7)で確認できます)

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
  <script src="https://unpkg.com/@openameba/spindle-theme-switch/dist/spindle-theme-switch.js" type="module"></script>
</head>

<body>
  <spindle-theme-switch appearance="switch" legend="テーマを切り替える"></spindle-theme-switch>
</body>
```

## 属性

`<spindle-theme-switch>`利用時には以下の属性を指定できます。

- `appearance` (String, Required): `switch`を指定します。
- `legend` (String, Optional): ラジオボタンで構成されているテーマスイッチにタイトルを設定します。
- `permanent` (Boolean, Optional): 特別な理由がない限り何も指定しないでください。Spindle Theme SwitchはOSの設定を尊重し、最初にスイッチを使ってテーマが更新された際にテーマをLocal Storageに保存し、再表示時に保存されたテーマを適用します。OSの設定含め初期設定を保存したい場合には`true`指定します。

NOTE:「スイッチなのになぜ`appearance=switch`を指定するの？」いい質問ですね。Custom Elements内で固定したいのですが、適切に指定できる場所がなく(constructorで属性を設定するとエラーになります)、Custom Elementsのデータフローに則って属性値として指定するのがよさそうなんです。なお、現時点の実装では指定しなくても動作しますが、今後意図した動作にならない可能性があります。

## 型定義の利用
`<spindle-theme-switch>`を拡張する場合には以下のようにして、定義された型を利用できます。

```typescript
import { SpindleThemeSwitch } from '@openameba/spindle-theme-switch';

class CustomizedSwitch extends SpindleThemeSwitch {
  constructor() {
    super();
  }
}

const switchEl = document.querySelector<SpindleThemeSwitch>('spindle-theme-switch');
```

また、ReactをTypeScriptで記述する場合には以下のようにファイルの冒頭で参照を指定すると、JSXで利用できます。

```typescript
/// <reference types="@openameba/spindle-theme-switch" />
```

## License

Spindle Theme Switch is licensed under MIT License. This software includes [GoogleChromeLabs/dark-mode-toggle](https://github.com/GoogleChromeLabs/dark-mode-toggle) that is distributed in the Apache License 2.0.
