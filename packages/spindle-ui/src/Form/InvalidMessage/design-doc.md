# InvalidMessage

## 概要・背景

InvalidMessageは、フォーム入力欄のバリデーションエラーメッセージを表示するためのコンポーネントです。入力欄の下に表示され、ユーザーにエラー内容を伝えます。警告アイコンとテキストで構成され、`visible`プロパティで表示・非表示を制御できます。

フォームコンポーネント（[TextField](https://ameba-spindle.web.app/?path=/story/form-textfield--text-field)や[TextArea](https://ameba-spindle.web.app/?path=/story/form-textarea--text-area)など）と組み合わせて使用することを想定しています。

## 使用例

### DO

InvalidMessageは、フォーム入力欄の下に配置し、エラーが発生した場合に`visible={true}`を指定して表示します。エラーメッセージは具体的で、ユーザーが修正方法を理解できる内容にしてください。

```tsx
<TextField id="email" hasError={hasError} />
<InvalidMessage visible={hasError}>
  メールアドレスの形式が正しくありません
</InvalidMessage>
```

#### 入力欄との関連付け

入力欄に`aria-invalid="true"`を設定してエラー状態を示し、`aria-errormessage`属性でエラーメッセージのIDを参照することで、入力欄とエラーメッセージを関連付けます。対象ユーザーの環境に合わせて保守的にしたい場合は、`aria-describedby`でも問題ありません。

`id`はページ内で重複しない固有なものにしてください。

```tsx
<TextField
  id="username"
  hasError={hasError}
  aria-invalid={hasError}
  aria-errormessage="username-error"
/>
<InvalidMessage id="username-error" visible={hasError}>
  ユーザー名は3文字以上で入力してください
</InvalidMessage>
```

#### スクリーンリーダーへの通知

エラーメッセージが表示された際、スクリーンリーダーへ通知する方法は利用状況によって異なります。例えば以下のような選択肢があります。

- `role="alert"`を指定する（即座に通知される）
- `aria-live="polite"`を指定する（読み上げが中断されないタイミングで通知される）
- 通知用の要素を作成し、そこに`role="alert"`を指定してエラーメッセージの内容を動的に更新する

アプリケーションの要件に応じて、エラーメッセージを表示する要素や表示タイミングを工夫し適切な方法を選択してください。重複通知にならないように注意してください。

### DO NOT

このコンポーネントは`className`プロパティを受け取らないため、スタイルを直接変更できません。レイアウトやスタイルを調整する必要がある場合は、このコンポーネントを別のコンポーネントでラップするなど、コンポーネントを組み合わせて実装してください。

エラーメッセージが表示されていない状態でも、DOM上に要素が存在するため、`hidden`属性が適切に設定されていることを確認してください。`visible={false}`の場合は、`hidden`属性が自動的に付与されます。

## 要素

### Design Tokens

- Text Caution (テキスト色・アイコン色)

### プロパティ

```ts
type Props = {
  children?: React.ReactNode;
  visible?: boolean;
} & Omit<React.HTMLAttributes<HTMLParagraphElement>, 'className'>;
```

## 実装例

### React実装の例

```tsx
<TextField
  id="file"
  hasError={hasError}
  aria-invalid={hasError}
  aria-errormessage="file-error"
/>
<InvalidMessage id="file-error" visible={hasError}>
  ファイル形式が正しくありません
</InvalidMessage>
```

### 書き出されるマークアップ

```html
<p class="spui-InvalidMessage" id="file-error">
  <span class="spui-InvalidMessage-icon">
    <svg aria-hidden="true"><!-- ExclamationmarkCircleFill icon --></svg>
  </span>
  <span class="spui-InvalidMessage-body">ファイル形式が正しくありません</span>
</p>
```

非表示時は`hidden`属性が付与されます。

```html
<p class="spui-InvalidMessage" id="file-error" hidden>
  <span class="spui-InvalidMessage-icon">
    <svg aria-hidden="true"><!-- ExclamationmarkCircleFill icon --></svg>
  </span>
  <span class="spui-InvalidMessage-body">ファイル形式が正しくありません</span>
</p>
```

## Baseline

Widely available

## アクセシビリティ

- [画像に代替テキストを提供する](https://a11y-guidelines.ameba.design/1/1/1/)[基本必須]
  - [ ] 警告アイコンに`aria-hidden="true"`を指定し、装飾として扱っている
- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)[基本必須]
  - [ ] 入力欄に`aria-invalid`属性を設定している
  - [ ] 入力欄とエラーメッセージを`aria-errormessage`で関連付けている（保守的な場合は`aria-describedby`でも可）
- [色だけで伝えない](https://a11y-guidelines.ameba.design/1/4/1/)[基本必須]
  - [ ] エラー状態を色だけでなく、警告アイコンとテキストで伝えている
- [テキストや文字画像のコントラストを確保する](https://a11y-guidelines.ameba.design/1/4/3/)[基本必須]
  - [ ] SpindleカラーパレットのTheme Colorsを適切に使い分けている
- [テキストサイズを拡大縮小できる](https://a11y-guidelines.ameba.design/1/4/4/)[基本必須]
  - [ ] 画面を200%拡大・文字サイズを2倍に変更しても、適切に文字が折り返され、情報が欠落していない
- [エラーを特定できる](https://a11y-guidelines.ameba.design/3/3/1/)[基本必須]
  - [ ] エラーメッセージが表示されている
  - [ ] エラーメッセージが入力欄と関連付けられている
- [エラーの修正を提案する](https://a11y-guidelines.ameba.design/3/3/3/)[基本必須]
  - [ ] エラーメッセージに具体的な修正方法が記載されている
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)[基本必須]
  - [ ] HTML仕様に準拠した実装をしている
  - [ ] セマンティックな`<p>`要素を使用している
- [コンテンツの変更をユーザーに知らせる](https://a11y-guidelines.ameba.design/4/1/3/)[できれば]
  - [ ] エラーメッセージが表示された際に、スクリーンリーダーに通知される（`role="alert"`や`aria-live`属性、または通知用要素の活用など。利用状況に応じた適切な方法を選択）

## テスト方針

### ユニットテスト (Testing Library)

- InvalidMessageがレンダリングされること
- `visible={true}`の時に表示されること
- `visible={false}`の時に`hidden`属性が付与されること
- `children`が適切に表示されること
- 警告アイコンが表示されること
- `aria-hidden="true"`がアイコンに設定されていること
- 標準のHTML属性（`id`、`role`など）が適切に反映されること

### ヴィジュアルリグレッションテスト (Storybook)

- 表示状態（`visible={true}`）
- 非表示状態（`visible={false}`）
- 長いテキストの場合の表示
- TextFieldとの紐付け（`aria-invalid`、`aria-errormessage`、`role="alert"`を含むインタラクティブなStory）

## リンク集

- [ARIA: alert role (MDN)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alert_role)
- [ARIA live regions (MDN)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)

