---
name: 'design doc'
root: 'src/'
output: '**/*'
ignore: []
questions:
  name: 'Please enter a component name.'
---

# `{{ inputs.name | pascal }}/design-doc.md`

```
# {{ inputs.name | pascal }}

<!-- NOTE: Design Docにはコードだけでは読み取れないコンポーネントが作られた背景や設計のポイントを記載します。また、レビューを通じて不明点や考慮できていない箇所を洗い出す役割も兼ねています。仕様書ではないので完璧に記述する必要はありません！ -->

## 概要・背景
<!-- 必須項目です。コンポーネントの概要や必要になった背景などを簡潔に記載します -->

## スクリーンショット
<!-- オプション項目です。設計を説明する上で必要なスクリーンショットがあれば追加します。画像はリポジトリに含めなくて良いので、GitHubへのアップロードを推奨しています 例) https://github.com/openameba/spindle/pull/732#discussion_r1238040016 -->

## 使用例
<!-- オプション項目です。コンポーネントの使用例や誤った使い方があれば記載します -->

### DO

### DO NOT

## 要素
<!-- 必須項目です。コンポーネントに必要な要素をあらかじめリストアップします -->

### Design Tokens
<!--
コンポーネントで利用するデザイントークン(色・アニメーションなど)をリストアップします
https://github.com/openameba/spindle/tree/main/packages/spindle-tokens/tokens

Design Docには以下の形式で記述します (トークン名はCSSカスタムプロパティの形式でも問題ありません)

(例)
- Surface Primary (背景色)
- Text Medium Emphasis (本文テキスト色)
-->

### プロパティ
<!--
コンポーネントで利用するプロパティ(Props)をリストアップします。

Design Docには以下のように、TypeScript形式で記述します。

(例)
type Props = {
  active?: boolean;
  // デフォルト値はmediumです
  size?: 'large' | 'medium' | 'small';
};
-->

## 実装例
<!-- オプション項目です。大まかなコードを書いたり、複数の実装を比較する際に利用します -->

## アクセシビリティ
<!-- 必須項目です。「Ameba Accessibility Checklist」を使って対応する項目をリストアップします。対応する項目を以下の形式で記述します。
- [項目](ガイドラインURL) [重要度]
  - [ ] 実装内容
-->

## テスト方針
<!-- オプション項目です。コンポーネントはどのようにテストされるのか記載します。SpindleではTesting LibraryでのユニットテストとStorybookでのヴィジュアルリグレッションテストをしているので、それらを使いどのようにテストするとよいか記述するとよいでしょう。
-->

## リンク集
<!-- オプション項目です。ドキュメントや参考にした実装例のURLをリストアップします。非公開のリンクを記載しないように注意してください -->

```
