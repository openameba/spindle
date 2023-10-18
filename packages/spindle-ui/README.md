# Spindle UI

Spindle (Ameba Design System) UI Components

<p align="center">
  <img alt="Spindle" src="./docs/images/components.png" width="400">
</p>

![MIT license](https://img.shields.io/npm/l/@openameba/spindle-ui) ![npm](https://img.shields.io/npm/v/@openameba/spindle-ui)


Spindle UIは、Amebaのデザインシステム「Spindle」で定義されたコンポーネントを配布するライブラリです。様々なタイプのプロジェクトに導入できるように設計されています。

## インストール
```
npm install @openameba/spindle-ui
```
```
yarn add @openameba/spindle-ui
```

## 利用方法

Spindle UIは以下のように利用できます。

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@openameba/spindle-ui';
// Tree Shakingされない環境下では個別にインポートすることを推奨します
// 例）`import { Button } from '@openameba/spindle-ui/Button';`

function App() {
  return <Button size="large" variant="contained">Spindle</Button>;
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

Spindle UIはmodule版の配信もしています。利用する際には、[導入ガイド](https://github.com/openameba/spindle/pull/175)を参考にしてください。

さらなる詳細は[コンポーネント一覧](#コンポーネント一覧)、[サンプルアプリケーション](#サンプルアプリケーション)を参照してください。

> **_NOTE:_**  アイコン利用時は[Spindle IconsのReactコンポーネント](/packages/spindle-icons#react)を読み、注意点を確認してください。

## コンポーネント一覧
利用可能なコンポーネントは、[Storybook](https://ameba-spindle.web.app/)で公開されています。各コンポーネントの開発状況は[Spindleサイトのコンポーネントステータスページ](https://spindle.ameba.design/components/status/)をご覧ください。

## サンプルアプリケーション
Spindle UIは様々なパターンのアプリケーションで利用できます。詳細は各サンプルコードを閲覧してください。

- [React with CSS Modules](/examples/css-modules/)
- [React with PostCSS](/examples/postcss/)
- [React with Sass](/examples/sass/)
- [React with styled-components](/examples/styled-components/)
- [Preact](/examples/preact/)
- [HTML](/examples/html/)

## スタイリング
Spindle UIのスタイルは、名前空間(`spui`)をもったCSSとして定義されています。これはスタイルを利用時に再定義する必要がないほか、コンポーネント志向のアプリケーションだけでなく、HTMLを中心としたWebページでも利用可能にするためです。

スタイルは以下の方法で利用できます。

### 必要なスタイルのみをビルド (推奨)
[webpack](https://webpack.js.org/)や[PostCSS](https://postcss.org/)、[Sass](https://sass-lang.com/)などを利用してアプリケーションに必要なスタイルのみをビルドします。生成したファイルは各アプリケーションで利用しているサーバから配信します。

この方法ではCSSファイルのサイズが最小限になり、配信サーバの品質も管理可能なため、できる限りこの方法での利用を推奨します。

導入の際には、サンプルアプリケーション([CSS Modules](/examples/css-modules/)、[PostCSS](/examples/postcss/)、[Sass](/examples/sass/)、[styled-components](/examples/styled-components/))を参考にしてください。

### CDNから読み込み
簡易的にSpindle UIのスタイルを試す場合には、CDNから読み込むと便利です。Webページの読み込み速度がそこまで重要でない場合、例えば開発環境や一部のランディングページなどで利用できます。

```HTML
<!-- Spindle UIで用意されている全てのスタイルを読み込む場合 -->
<!-- 常に最新のスタイルを読み込む場合。ただしリダイレクトされるため遅延します -->
<link rel="stylesheet" href="https://unpkg.com/@openameba/spindle-ui/index.css">
<!-- バージョンを指定して読み込む場合。リダイレクトされないのでレスポンスが少し早いです -->
<link rel="stylesheet" href="https://unpkg.com/@openameba/spindle-ui@1.0.0/index.css">

<!-- コンポーネント毎にスタイルを読み込む場合 -->
<!-- 常に最新のスタイルを読み込む場合。ただしリダイレクトされるため遅延します -->
<link rel="stylesheet" href="https://unpkg.com/@openameba/spindle-ui/Button/Button.css">
<!-- バージョンを指定して読み込む場合。リダイレクトされないのでレスポンスが少し早いです -->
<link rel="stylesheet" href="https://unpkg.com/@openameba/spindle-ui@1.0.0/Button/Button.css">
```

ただし、CSSファイルサイズやファイル数が不必要に大きくなり、CDNサーバが遅延の原因になる可能性があるため**本番Webアプリケーションでの利用は推奨していません**。

## ブラウザサポート
Spindle UIはFirefox、Google Chrome、Microsoft Edge、Safariの最新版とInternet Explorer 11で動作確認しています。ただし、CSS custom propertiesを使用しているため、Internet Explorer 11での利用時には[ie11-custom-properties](https://www.npmjs.com/package/ie11-custom-properties)や[css-vars-ponyfill](https://github.com/jhildenbiddle/css-vars-ponyfill)などpolyfillとの併用が必要です。

## 開発方法

```
yarn install
yarn dev # storybookが起動します
```

NOTE: 事前に [spindle-hooks](https://github.com/openameba/spindle/tree/main/packages/spindle-hooks) を以下のようにbuildしておく必要があります。

```
cd ../spindle-hooks
yarn build
cd -
```

新規コンポーネントを作成する際にはgenerateコマンドが便利です。推奨されるフローは、まずDesign Docを作成しPull Requestします。レビューが終わったらマージし、コンポーネント実装を進めます。

```
yarn generate
? Please select a document. (Use arrow keys)
❯ design doc 
? Please select the output destination directory. (Use arrow keys or type to search)
❯ src/ 
? Please enter a component name. NewComponent

🐶 Generated 1 files!

      ✔ src/NewComponent/design-doc.md
```

```
yarn generate
? Please select a document. (Use arrow keys)
❯ component 
? Please select the output destination directory. (Use arrow keys or type to search)
❯ src/ 
? Please enter a component name. NewComponent

🐶 Generated 7 files!

      ✔ src/NewComponent/index.ts
      ✔ src/NewComponent/NewComponent.tsx
      ✔ src/NewComponent/NewComponent.css
      ✔ src/NewComponent/NewComponent.stories.mdx
      ✔ src/NewComponent/NewComponent.test.tsx
      ✔ src/index.ts
      ✔ src/index.css
```

## 開発ガイドライン

### アニメーション
Spindleでは、[Amebaらしさ](https://spindle.ameba.design/principles/design/)を表現するためにできる限りアニメーションを付与したいと考えています。ただしプラットフォームでの実装難易度による開発コスト(短期的には開発時間、中長期的には変更のしにくさ、テストのしにくさ、予期せぬ問題の発生)を考慮し、アニメーション対応のガイドラインを作成しました。アニメーションを付与する際には以下のフローにそって判断してください。わからない場合には都度開発メンバーにヒアリングしてください。

- 機能的にアニメーションが必須な場合 (1)
  - まず標準的な方法で実装します。それが難しい場合にはハック的な方法を使って実装します (1.1)
- 機能的にアニメーションが必須ではない場合 (2)
  - 標準的な方法で実装できる場合は実装します (2.1)
  - ハック的な方法が必要な場合は、アニメーション実装をしません (2.2)

## ライセンス
Spindle UIはMITライセンスで公開されています。ただし、アイコンは[Spindle Icons](https://github.com/openameba/spindle/tree/main/packages/spindle-icons#%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B9)に準じて、Creative Commons BY-NC-ND 4.0ライセンスで公開されています。

## 関連ドキュメント
- [Design Doc](docs/design-doc.md)
