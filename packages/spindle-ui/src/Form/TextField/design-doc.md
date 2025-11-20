# TextField

## 概要・背景

TextFieldは、1行のテキスト入力を提供するフォームコンポーネントです。標準のHTML input要素をラップし、Spindleのデザインシステムに沿ったスタイルを提供します。ユーザー名、メールアドレス、検索キーワードなど、短いテキストの入力に使用されることを想定しています。

複数行のテキスト入力が必要な場合は、[Textarea](https://ameba-spindle.web.app/?path=/story/form-textarea--text-area)コンポーネントを使用してください。

## 使用例

### DO

TextFieldは、`id`プロパティを必須として使用します。[InputLabel](https://ameba-spindle.web.app/?path=/story/form-inputlabel--input-label)と組み合わせて、入力欄に明確なラベルを提供してください。

```tsx
<InputLabel id="username">ユーザー名</InputLabel>
<TextField id="username" placeholder="ameba-blog" variant="medium" />
```

#### エラー状態の表示

入力値が不正な場合は、`hasError`プロパティを指定してエラー状態を表示します。[InvalidMessage](https://ameba-spindle.web.app/?path=/story/form-invalidmessage--invalid-message)と組み合わせることで、ユーザーに具体的なエラー内容を伝えることができます。

エラーメッセージとの紐付けには、`aria-invalid`と`aria-errormessage`（または`aria-describedby`）を使用します。

```tsx
<InputLabel id="email">メールアドレス</InputLabel>
<TextField
  id="email"
  type="email"
  hasError={hasError}
  aria-invalid={hasError}
  aria-errormessage="email-error"
/>
<InvalidMessage id="email-error" visible={hasError}>
  メールアドレスの形式が正しくありません
</InvalidMessage>
```

#### サイズのバリエーション

`variant`プロパティで、`large`（48px）または`medium`（40px）のサイズを選択できます。デフォルトは`medium`です。

```tsx
<TextField id="search" placeholder="検索" variant="large" />
```

### DO NOT

このコンポーネントは`className`プロパティを受け取らないため、スタイルを直接変更できません。レイアウトやスタイルを調整する必要がある場合は、このコンポーネントを別のコンポーネントでラップするなど、コンポーネントを組み合わせて実装してください。

## 要素

### Design Tokens

- Surface Primary (背景色)
- Border Medium Emphasis (ボーダー色)
- Border High Emphasis (フォーカス時のボーダー色)
- Text High Emphasis (入力テキスト色)
- Text Disabled (プレースホルダーテキスト色)
- Focus Ambiguous (フォーカス時のシャドウ色)
- Surface Caution Light (エラー時の背景色)
- Border Caution (エラー時のボーダー色)

### プロパティ

```ts
type Props = {
  // フォーカス制御のためのref
  ref?: React.Ref<HTMLInputElement>;
  // エラー状態の表示
  hasError?: boolean;
  // 入力欄のID (必須)
  id: string;
  // サイズのバリエーション (デフォルト: medium)
  variant?: 'large' | 'medium';
  // 標準のinput要素の属性 (className以外)
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'>;
```

## 実装例

### React実装の例

```tsx
<TextField
  id="username"
  placeholder="ameba-blog"
  variant="medium"
  hasError={false}
/>
```

### 書き出されるマークアップ

```html
<input
  class="spui-TextField spui-TextField--medium"
  id="username"
  placeholder="ameba-blog"
/>
```

エラー状態の場合は`is-error`クラスが付与されます。

```html
<input
  class="spui-TextField spui-TextField--medium is-error"
  id="username"
  placeholder="ameba-blog"
/>
```

## アクセシビリティ

- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)[基本必須]
  - [ ] InputLabel要素のfor属性で入力欄と関連付けている
  - [ ] idプロパティが適切に設定され、対応するラベルと一致している
- [テキストや文字画像のコントラストを確保する](https://a11y-guidelines.ameba.design/1/4/3/)[基本必須]
  - [ ] SpindleカラーパレットのTheme Colorsを適切に使い分けている
- [テキストサイズを拡大縮小できる](https://a11y-guidelines.ameba.design/1/4/4/)[基本必須]
  - [ ] 画面を200%拡大・文字サイズを2倍に変更しても、適切に文字が折り返され、情報が欠落していない
- [キーボード、タッチデバイスで操作できる](https://a11y-guidelines.ameba.design/2/1/1/)[基本必須]
  - [ ] Tabキーでフォーカスでき、キーボードで文字入力ができる
- [フォーカスを見えるようにする](https://a11y-guidelines.ameba.design/2/4/7/)[基本必須]
  - [ ] 入力欄は、フォーカスの状態が見える（`:focus-visible`擬似クラスで適切なスタイルが適用されている）
- [ターゲットのサイズを理解する](https://a11y-guidelines.ameba.design/2/5/5/)[できれば]
  - [ ] タップ領域は最小でも40px x 40px以上確保している
- [入力を補助する](https://a11y-guidelines.ameba.design/3/3/2/)[できれば]
  - [ ] 適切な`type`属性（`email`、`tel`、`url`など）を指定している
  - [ ] 適切な`autocomplete`属性を指定している
- [エラーを特定できる](https://a11y-guidelines.ameba.design/3/3/1/)[基本必須]
  - [ ] エラー時に`aria-invalid="true"`を指定している
  - [ ] エラーメッセージを`aria-errormessage`または`aria-describedby`で関連付けている
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)[基本必須]
  - [ ] HTML仕様に準拠した実装をしている
  - [ ] セマンティックな`<input>`要素を使用している

## テスト方針

### ユニットテスト (Testing Library)

- TextFieldがレンダリングされること
- キーボードで文字入力ができること
- `ref`が適切に転送されること
- 標準のHTML属性（`placeholder`、`disabled`、`type`など）が適切に反映されること

### ヴィジュアルリグレッションテスト (Storybook)

- 通常状態（large/medium）
- エラー状態（large/medium）
- プレースホルダー表示
- 入力値がある状態
- 無効化状態（`disabled`）
- 長いテキストを含む状態

## リンク集

- [HTMLのinput要素 (MDN)](https://developer.mozilla.org/ja/docs/Web/HTML/Element/input)
- [HTMLのinput要素のtype属性 (MDN)](https://developer.mozilla.org/ja/docs/Web/HTML/Element/input#input_types)
