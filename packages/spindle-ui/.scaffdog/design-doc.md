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

## Baseline
<!-- オプション項目です。コンポーネントが使用する（または使用予定の）Web Platform機能のBaselineステータスを記載します。

記載フロー:
1. 使用する（または使用予定の）HTML要素やCSS機能をリストアップします
   - 設計段階: 設計で使用を予定している機能をリストアップ
   - 実装段階: コンポーネントの実装（.tsx）とCSS（.css）から実際に使用している機能を特定
   - 既存の類似コンポーネントがあれば、それを参考にする
2. リストアップした機能について、Baseline情報を取得します

Baseline情報の取得方法（どちらかの方法で取得してください）:

方法1: `@vscode/web-custom-data`パッケージのJSONデータから取得します。

1. 以下のコードでデータを取得します:
   ```javascript
   const htmlData = require('@vscode/web-custom-data/data/browsers.html-data.json');
   const cssData = require('@vscode/web-custom-data/data/browsers.css-data.json');
   ```
2. HTML機能の場合、種類に応じて検索します:
   - HTML要素（`<dialog>`, `<div>`など）: `htmlData.tags.find(t => t.name === 'dialog')`で検索し、`status.baseline`を確認します
   - HTML属性（`accesskey`など）: `htmlData.globalAttributes.find(a => a.name === 'accesskey')`で検索し、`status.baseline`を確認します
3. CSS機能の場合、種類に応じて検索します:
   - 疑似クラス（`:has()`, `:user-invalid`など）: `cssData.pseudoClasses.find(p => p.name === ':has')`
   - 疑似要素（`::before`, `::after`など）: `cssData.pseudoElements.find(p => p.name === '::before')`
   - CSSプロパティ（`display`, `color`など）: `cssData.properties.find(p => p.name === 'display')`
   - @ルール（`@media`, `@keyframes`など）: `cssData.atDirectives.find(a => a.name === '@media')`
   - 検索後、`baseline.status`を確認します
4. Baseline statusの判定方法:
   - `status: "high"` または `baseline.status: "high"` → "Widely available"
   - `status: "low"` または `baseline.status: "low"` → "Newly available"
   - `baseline_low_date`からBaseline年を判定します（例: "2023-12-19" → Baseline 2023）

方法2: MDNサイトから手動で確認します。

1. MDNで該当の機能を検索します（例: "dialog element mdn"、":has css mdn"）
2. MDNページの「Baseline」セクションを確認します
3. Baselineステータスを判定します:
   - "Widely available" と表示されている場合 → "Widely available"
   - "Newly available" と表示されている場合 → 年を含めて記載（例: "Baseline 2023"）
   - "Limited availability" と表示されている場合 → "Limited availability"

記載例は以下の通りです。

- 標準的な機能のみを使用している場合:「Widely available」と記載。
- Widely available以外の機能が含まれる場合:機能をリストアップします。
  - Widely availableな機能 → `(Widely available)` と記載
  - Newly availableな機能 → 年号を含めて記載（例: `(Baseline 2023)`）
  - Limited availabilityな機能 → `(Limited availability)` と記載
  - 要素名と括弧の間には半角スペースを入れてください

例:
- `:has()` (Baseline 2023) - [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)
  - `html:has(.spui-Dialog:modal)`を使用して、モーダル表示時にページのスクロールを無効化しています
-->

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
