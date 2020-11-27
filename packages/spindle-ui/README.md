# Spindle UI (In development)

Spindle (Ameba Design System) UI Components

<p align="center">
  <img alt="Spindle" src="./docs/images/components.png" width="400">
</p>

> Spindle UIは試験開発中のため、大幅に変更される可能性があります。安定版リリースまでの間はバージョン番号は0となり、バージョンに関わらずbreaking changeが行われることがありますので、利用時には注意してください。変更内容は、[CHANGELOG](CHANGELOG.md)に記載されています。

![MIT licence](https://img.shields.io/npm/l/@openameba/spindle-ui) ![npm](https://img.shields.io/npm/v/@openameba/spindle-ui)


Spindle UIは、Amebaのデザインシステム「Spindle」で定義されたコンポーネントを配布するライブラリです。様々なタイプのプロジェクトに導入できるように設計されています。

## コンポーネント一覧
利用可能なコンポーネントは、[Storybook](https://ameba-spindle.web.app/)で公開されています。各コンポーネントの開発状況は[Stoybook Doc](https://ameba-spindle.web.app/?path=/docs/button--large)のStability Budgeで以下のように表されています。

- ![stability-stable](https://img.shields.io/badge/stability-stable-green.svg) 想定された機能が実装、テストされており本番環境で利用できます
- ![stability-unstable](https://img.shields.io/badge/stability-unstable-yellow.svg) 足りていない機能や不安定な動作があり、まだ完全ではないですが、本番環境で利用できます
- ![stability-wip](https://img.shields.io/badge/stability-work_in_progress-lightgrey.svg) 開発中のため、本番環境での利用はしない方がよいでしょう
- ![stability-experimental](https://img.shields.io/badge/stability-experimental-orange.svg) 実験的な機能で大きな変更や削除される可能性があります
- ![stability-deprecated](https://img.shields.io/badge/stability-deprecated-red.svg) 廃止される予定のため、できるだけはやく利用を停止してください

## インストール
```
npm install @openameba/spindle-ui
```
```
yarn add @openameba/spindle-ui
```

## 利用方法
Spindle UIは様々なパターンのアプリケーションで利用できます。詳細は各サンプルコードを閲覧してください。

- [React with CSS Modules](/examples/css-modules/)
- [React with PostCSS](/examples/postcss)
- [React with Sass](/examples/sass/)
- [React with styled-components](/examples/styled-components/)
- [Preact](/examples/preact/)
- [HTML](/examples/html/)

## ブラウザサポート
Spindle UIはFirefox、Google Chrome、Microsoft Edge、Safariの最新版とInternet Explorer 11で動作確認しています。ただし、CSS custom propertiesを使用しているため、Internet Explorer 11での利用時には[ie11-custom-properties](https://www.npmjs.com/package/ie11-custom-properties)や[css-vars-ponyfill](https://github.com/jhildenbiddle/css-vars-ponyfill)などpolyfillとの併用が必要です。

## 開発方法

```
yarn install
yarn dev # storybookが起動します
```

## ライセンス
Spindle IconsはMITライセンスで公開されています。ただし、アイコンは[Spindle Icons](../spindle-icons/)に準じて、Creative Commons BY-NC-ND 4.0ライセンスで公開されています。

## 関連ドキュメント
- [Design Doc](docs/design-doc.md)
