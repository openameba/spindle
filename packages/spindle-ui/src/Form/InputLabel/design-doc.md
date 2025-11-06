# InputLabel

## 概要・背景

InputLabelは、フォーム入力要素に対してラベルを提供するためのコンポーネントです。標準のHTML label要素をラップし、Spindleのデザインシステムに沿ったスタイルを提供します。このコンポーネントは、テキストフィールド、テキストエリア、セレクトボックスなど、さまざまなフォーム要素と組み合わせて使用されることを想定しています。

## 使用例

### DO

InputLabelは、`id`プロパティで関連付けるフォーム要素のIDを指定して使用します。

```tsx
<InputLabel id="comment">コメントを入力</InputLabel>
<input type="text" id="comment" />
```

#### 子要素が空の場合

子要素が空の場合、ラベルは自動的に非表示になります（`display: none`が適用されます）。これにより、空のラベルが不要な余白を作ることを防ぎます。

```tsx
<InputLabel id="comment" />
```

### DO NOT

このコンポーネントは`className`プロパティを受け取らないため、ラベル自体の見た目を変更できません。レイアウトやスタイルを調整する必要がある場合は、このコンポーネントを別のコンポーネントでラップするなど、コンポーネントを組み合わせて実装してください。

## 要素

### Design Tokens

- Text Medium Emphasis (ラベルテキストの色)

### プロパティ

```ts
type Props = {
  // ラベルのテキスト内容
  children?: React.ReactNode;
  // 関連付けるフォーム要素のID (必須)
  id: string;
  // 標準のlabel要素の属性 (htmlFor以外)
} & Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'className'>;
```

## 実装例

### React実装の例

```tsx
<InputLabel id="comment">コメントを入力</InputLabel>
<input type="text" id="comment" />
```

### 書き出されるマークアップ

```html
<label class="spui-InputLabel" for="comment">コメントを入力</label>
```

## アクセシビリティ

- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)[基本必須]
  - [ ] label要素のfor属性でフォーム要素と関連付けている
  - [ ] idプロパティが適切に設定され、対応するフォーム要素と一致している
- [テキストや文字画像のコントラストを確保する](https://a11y-guidelines.ameba.design/1/4/3/)[基本必須]
  - [ ] SpindleカラーパレットのTheme Colorsを適切に使い分けている
- [テキストサイズを拡大縮小できる](https://a11y-guidelines.ameba.design/1/4/4/)[基本必須]
  - [ ] 画面を200%拡大・文字サイズを2倍に変更しても、適切に文字が折り返される
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)[基本必須]
  - [ ] HTML仕様に準拠した実装をしている
  - [ ] セマンティックなlabel要素を使用している

## テスト方針

### ユニットテスト (Testing Library)

- ラベルがレンダリングされること
- ラベルをクリックすると、関連付けられたフォーム要素がフォーカスされること
- 子要素が空の場合、ラベルが非表示になること

### ヴィジュアルリグレッションテスト (Storybook)

- 通常状態
- 長いテキストを含む状態

## リンク集

- [HTMLのlabel要素 (MDN)](https://developer.mozilla.org/ja/docs/Web/HTML/Element/label)
