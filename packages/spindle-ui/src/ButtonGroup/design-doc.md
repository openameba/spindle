# ButtonGroup

## 概要・背景

ButtonGroupは、複数のボタンを横並び（row）または縦並び（column）に配置するためのレイアウトコンポーネントです。ボタン間の適切な間隔を保ち、一貫性のある視覚的なグループ化を提供します。

主に以下のようなシーンで使用されることを想定しています。
- フォームの送信ボタンとキャンセルボタンの配置
- モーダルのアクションボタンの配置
- 複数の選択肢を提供するボタンの配置

## スクリーンショット

## 使用例

ButtonGroupは、`direction`プロパティで配置方向を、`size`プロパティでボタン間の間隔を指定します。横並びの場合は`direction="row"`を指定します。

```tsx
<ButtonGroup direction="row" size="large">
  <Button size="large" variant="contained">新規登録</Button>
  <Button size="large" variant="outlined">ログイン</Button>
</ButtonGroup>
```

縦並びの場合は`direction="column"`を指定します。

```tsx
<ButtonGroup direction="column" size="large">
  <Button variant="contained">申請する</Button>
  <SubtleButton size="large">とじる</SubtleButton>
</ButtonGroup>
```

ButtonGroupの`size`プロパティは、子要素のButtonの`size`プロパティと一致させることを推奨します。一致させることで想定された余白が確保されます。`size`が異なる場合でも利用できますが、想定された値になっているか確認してください。

## 要素

### Design Tokens

ButtonGroupコンポーネント自体はデザイントークンを使用していません。子要素のボタンコンポーネントがデザイントークンを使用します。

### プロパティ

```ts
type Props = {
  direction?: 'row' | 'column';
  size?: 'large' | 'medium' | 'small';
} & React.HTMLAttributes<HTMLDivElement>;
```

- `direction`: ボタンの配置方向を指定します。デフォルトは`row`です
- `size`: ボタン間の間隔を決定します。子要素のボタンのサイズと一致させる必要があります。デフォルトは`large`です
- `className`: 追加のCSSクラス名を指定できます

## 実装例

React実装の一例です。

```tsx
<ButtonGroup direction="row" size="large">
  <Button size="large" variant="contained">新規登録</Button>
  <Button size="large" variant="outlined">ログイン</Button>
</ButtonGroup>
```

上記の実装から書き出されるマークアップです。

```html
<div class="spui-ButtonGroup spui-ButtonGroup--row spui-ButtonGroup--large">
  <button class="spui-Button spui-Button--large spui-Button--contained">新規登録</button>
  <button class="spui-Button spui-Button--large spui-Button--outlined">ログイン</button>
</div>
```

## アクセシビリティ

ButtonGroupはレイアウトを提供するコンポーネントであり、アクセシビリティ上の特別な配慮は不要です。子要素のボタンコンポーネントがそれぞれアクセシビリティの要件を満たす必要があります。

- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)[基本必須]
  - [ ] ボタンの配置順序が意味的に正しい順序になっている
- [意味のある順序でコンテンツを表現する](https://a11y-guidelines.ameba.design/1/3/2/)[基本必須]
  - [ ] DOMの順序と視覚的な順序が一致している
- [表示の向きを固定しない](https://a11y-guidelines.ameba.design/1/3/4/)[できれば]
  - [ ] 端末を横向きにしても、適切にレイアウトが変わり、コンテンツが見切れていない
- [テキストサイズを拡大縮小できる](https://a11y-guidelines.ameba.design/1/4/4/)[基本必須]
  - [ ] 画面を200%拡大・文字サイズを2倍に変更しても、適切に文字が折り返され、ボタンが見切れていない
- [キーボード、タッチデバイスで操作できる](https://a11y-guidelines.ameba.design/2/1/1/)[基本必須]
  - [ ] Tabキーでボタン間を移動できる
- [適切なフォーカス順序にする](https://a11y-guidelines.ameba.design/2/4/3/)[基本必須]
  - [ ] キーボード操作の順序が、見た目の順序と一致している
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)[基本必須]
  - [ ] HTML仕様に準拠した実装をしている

## テスト方針

ButtonGroupはシンプルなレイアウトコンポーネントのため、ユニットテストとヴィジュアルリグレッションテストで役割を分担してテストします。

### ユニットテスト（Testing Library）

ロジックとプロパティの振る舞いをテストします。

- プロパティのデフォルト値が正しく適用されること
- カスタム`className`が正しく追加されること
- HTML属性（`data-*`、`aria-*`など）が正しく伝播されること

### ヴィジュアルリグレッションテスト（Storybook）

視覚的な表示と間隔をテストします。

- 各サイズ・方向の組み合わせでの表示が正しいこと
- SubtleButtonとの組み合わせで適切な間隔が確保されること

## リンク集

特になし。
