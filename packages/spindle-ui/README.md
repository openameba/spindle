# Spindle UI (In development)

React Components with Spindle (Ameba Design System)

> Spindle UIは試験開発中のため、大幅に変更される可能性があります。安定版リリースまでの間はバージョン番号は0となり、バージョンに関わらずbreaking changeが行われることがありますので、利用時には注意してください。変更内容は、[CHANGELOG](CHANGELOG.md)に記載されています。

![MIT licence](https://img.shields.io/npm/l/@openameba/spindle-ui) ![npm](https://img.shields.io/npm/v/@openameba/spindle-ui)

## インストール
```
npm install @openameba/spindle-ui
```
```
yarn add @openameba/spindle-ui
```

## 利用方法

```JavaScript
import { Clock } from '@openameba/spindle-ui/Icon';

export function SomeButton() {
  return <button type="button"><Clock />時間を変更する</button>
}
```

利用できるコンポーネントは、[Storybook](https://ameba-spindle.web.app/)で確認できます。各コンポーネントの開発状況は[Stoybook Doc](https://ameba-spindle.web.app/?path=/docs/button--large)のStability Budgeで以下のように表されています。

- ![stability-stable](https://img.shields.io/badge/stability-stable-green.svg) 想定された機能が実装、テストされており本番環境で利用できます
- ![stability-unstable](https://img.shields.io/badge/stability-unstable-yellow.svg) 足りていない機能や不安定な動作があり、まだ完全ではないですが、本番環境で利用できます
- ![stability-wip](https://img.shields.io/badge/stability-work_in_progress-lightgrey.svg) 開発中のため、本番環境での利用はしない方がよいでしょう
- ![stability-experimental](https://img.shields.io/badge/stability-experimental-orange.svg) 実験的な機能で大きな変更や削除される可能性があります
- ![stability-deprecated](https://img.shields.io/badge/stability-deprecated-red.svg) 廃止される予定のため、できるだけはやく利用を停止してください

また、Spindle UIのスタイルはCSSファイルとして提供されています。スタイルを適用するには、HTMLからCSSを読み込むか、各ファイルからCSSを読み込みビルドする必要があります。詳細は[Design Doc](docs/design-doc.md)に記載されています。なお、スタイルの提供方法は実際の利用パターンに応じて変更される可能性があります。

```html
<!-- HTMLですべてのスタイルを読み込む例 -->
<link rel="stylesheet" href="https://unpkg.com/@openameba/spindle-ui/index.css">
```

```css
/* PostCSSなどで個別にスタイルを読み込む例 */
@import 'node_modules/@openameba/spindle-ui/Form/Checkbox.css';
```

## 開発方法

```
yarn install
yarn dev # storybookが起動します
```

## ライセンス
Spindle IconsはMITライセンスで公開されています。ただし、アイコンは[Spindle Icons](../spindle-icons/)に準じて、Creative Commons BY-NC-ND 4.0ライセンスで公開されています。

## 関連ドキュメント
- [Design Doc](docs/design-doc.md)
