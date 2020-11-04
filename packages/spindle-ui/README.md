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

利用できるコンポーネントは、[Storybook](https://ameba-spindle.web.app/)で確認できます。

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
