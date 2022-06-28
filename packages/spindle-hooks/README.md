# Spindle Hooks (In development)

Spindle (Ameba Design System) Hooks

<p align="center">
  <img alt="Spindle" src="./docs/images/components.png" width="400">
</p>

> Spindle Hooks は試験開発中のため、大幅に変更される可能性があります。安定版リリースまでの間はバージョン番号は 0 となり、バージョンに関わらず breaking change が行われることがありますので、利用時には注意してください。変更内容は、[CHANGELOG](CHANGELOG.md)に記載されています。

![MIT licence](https://img.shields.io/npm/l/@openameba/spindle-hooks) ![npm](https://img.shields.io/npm/v/@openameba/spindle-hooks)

Spindle Hooks は、Ameba のデザインシステム「Spindle」で定義されたコンポーネントの機能部分にフォーカスし、再利用可能な React Hooks を提供するライブラリです。様々なタイプのプロジェクトに導入できるように設計されています。

## インストール

```
npm install @openameba/spindle-hooks
```

```
yarn add @openameba/spindle-hooks
```

## 利用方法

Spindle Hooks は以下のように利用できます。

```js
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { useTimeDistance } from '@openameba/spindle-hooks';

function App() {
  const publishedAt = '2022-03-11T01:15:51.237Z';
  const [dateString] = useTimeDistance(publishedAt);
  return <time datetime={publishedAt}>{dateString}</time>;
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

Spindle Hooks は Spindle UI と同様に module 版の配信もしています。利用する際には、[導入ガイド](https://github.com/openameba/spindle/pull/175)を参考にしてください(リンク先は spindle-ui なので spindle-hooks に置き換えてください)。

## Hooks 一覧

利用可能な React Hooks は、[Storybook](https://ameba-spindle-hooks.web.app/)で公開されています。各コンポーネントの開発状況は[Stoybook Doc](https://ameba-spindle-hooks.web.app/?path=/docs/usecarousel--normal)の Stability Budge で以下のように表されています。

- ![stability-stable](https://img.shields.io/badge/stability-stable-green.svg) 想定された機能が実装、テストされており本番環境で利用できます
- ![stability-unstable](https://img.shields.io/badge/stability-unstable-yellow.svg) 足りていない機能や不安定な動作があり、まだ完全ではないですが、本番環境で利用できます
- ![stability-wip](https://img.shields.io/badge/stability-work_in_progress-lightgrey.svg) 開発中のため、本番環境での利用はしない方がよいでしょう
- ![stability-experimental](https://img.shields.io/badge/stability-experimental-orange.svg) 実験的な機能で大きな変更や削除される可能性があります
- ![stability-deprecated](https://img.shields.io/badge/stability-deprecated-red.svg) 廃止される予定のため、できるだけはやく利用を停止してください

## ブラウザサポート

Spindle Hooks は Firefox、Google Chrome、Microsoft Edge、Safari の最新版と Internet Explorer 11 で動作確認しています。

## 開発方法

```
yarn install
yarn dev # storybookが起動します
```

新規 Hooks を追加する際には利用方法がイメージしやすいように Storybook も追加します。
必要に応じてユニットテストも追加します。

ユニットテストは以下のように実行します。

```sh
yarn test:interaction
```

## ライセンス

Spindle Hooks は MIT ライセンスで公開されています。ただし、アイコンは[Spindle Icons](../spindle-icons/)に準じて、Creative Commons BY-NC-ND 4.0 ライセンスで公開されています。

## 関連ドキュメント

- [Design Doc](docs/design-doc.md)
