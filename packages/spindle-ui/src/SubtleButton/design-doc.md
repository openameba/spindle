# SubtleButton

## 概要・背景

SubtleButtonは、目立たせる必要のない補助的なアクションに使用するボタンコンポーネントです。「とじる」「キャンセル」「スキップ」など、ユーザーの主目的とは異なるアクションや、視覚的に軽いタッチポイントを提供する場面で使用します。

背景色を持たず、テキストのみで構成されているため、コンテンツの邪魔をせず、控えめにアクションを提供できます。ホバー時には下線が表示され、クリック可能な要素であることを視覚的に示します。

## 使用例

### DO

テキストリンクのような見た目で、控えめにアクションを提供したい場合に使用します。

```tsx
<SubtleButton size="large">とじる</SubtleButton>
<SubtleButton size="medium">キャンセル</SubtleButton>
<SubtleButton size="small">スキップ</SubtleButton>
```

モーダルやダイアログの「とじる」ボタンなど、補助的なアクションに使用します。

```tsx
<Dialog>
  <DialogContent>
    <p>内容</p>
  </DialogContent>
  <SubtleButton onClick={onClose}>とじる</SubtleButton>
</Dialog>
```

### DO NOT

主要なアクションには使用しないでください。「送信」「登録」「確定」など、ユーザーの主目的に関わるアクションには、より視覚的に強調された`Button`コンポーネントを使用してください。

## 要素

### Design Tokens

- Text Medium Emphasis (テキスト色)
- Focus Clarity (フォーカス時のアウトライン色)
- White 60 Alpha (タップ時のハイライト色)

### プロパティ

```ts
type Props = {
  children?: React.ReactNode;
  // デフォルト値はlargeです
  size?: 'large' | 'medium' | 'small';
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'>;
```

### CSSカスタムプロパティ

SubtleButtonコンポーネントは`--SubtleButton-*`変数を使用してスタイルをオーバーライドできます。

- `--SubtleButton-color`: テキスト色
- `--SubtleButton-onFocus-outlineColor`: フォーカス時のアウトライン色
- `--SubtleButton-tapHighlightColor`: タップ時のハイライト色

### スタイルのカスタマイズ

このコンポーネントは`className` propを受け付けません。スタイルをカスタマイズする場合は、上記のCSSカスタムプロパティを使用するか、ラッパー要素でレイアウトを制御してください。

## 実装例

React実装の一例です。

```tsx
<SubtleButton size="medium">とじる</SubtleButton>
```

上記の実装から書き出されるマークアップです。

```html
<button class="spui-SubtleButton spui-SubtleButton--medium">とじる</button>
```

## インタラクション

### ホバースタイル

- マウスホバー時にテキストへ下線が表示されます
- `@media (hover: hover)`を使用して、タッチデバイスではホバースタイルを適用しません

### フォーカススタイル

- キーボード操作時にフォーカスインジケーターが表示されます
- アウトラインは2px、オフセットは1pxです
- `:focus-visible`を使用して、マウスクリック時はアウトラインを表示しません

### 無効状態

- `disabled`属性が付与されると、透明度が0.3になります
- 無効状態ではホバースタイルは適用されません

### サイズ

- `large`: フォントサイズ14px（デフォルト）
- `medium`: フォントサイズ14px
- `small`: フォントサイズ13px

## アクセシビリティ

- [画像に代替テキストを提供する](https://a11y-guidelines.ameba.design/1/1/1/)[基本必須]
  - [ ] アイコンのみのボタンの場合、適切な`aria-label`を提供している
- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)[基本必須]
  - [ ] ボタンの目的や機能が明確に伝わるラベルが付いている
- [意味のある順序でコンテンツを表現する](https://a11y-guidelines.ameba.design/1/3/2/)[基本必須]
  - [ ] ボタンの配置順序が、視覚的な順序と一致している
- [感覚的な特徴だけで説明しない](https://a11y-guidelines.ameba.design/1/3/3/)[基本必須]
  - [ ] 色やアイコンだけでなく、テキストでもボタンの機能を説明している
- [色だけで伝えない](https://a11y-guidelines.ameba.design/1/4/1/)[基本必須]
  - [ ] ホバー状態を色だけでなく、下線でも区別できる
- [テキストや文字画像のコントラストを確保する](https://a11y-guidelines.ameba.design/1/4/3/)[基本必須]
  - [ ] SpindleカラーパレットのTheme Colorsを適切に使い分けている
- [テキストサイズを拡大縮小できる](https://a11y-guidelines.ameba.design/1/4/4/)[基本必須]
  - [ ] 画面を200%拡大・文字サイズを2倍に変更しても、適切に文字が折り返され、ボタンが見切れない
- [キーボード、タッチデバイスで操作できる](https://a11y-guidelines.ameba.design/2/1/1/)[基本必須]
  - [ ] Tabキーでフォーカスでき、EnterキーまたはSpaceキーで操作できる
- [適切なフォーカス順序にする](https://a11y-guidelines.ameba.design/2/4/3/)[基本必須]
  - [ ] キーボード操作の順序が、見た目の順序と一致している
- [フォーカスを見えるようにする](https://a11y-guidelines.ameba.design/2/4/7/)[基本必須]
  - [ ] ボタンは、フォーカスの状態が見える
- [ターゲットのサイズを理解する](https://a11y-guidelines.ameba.design/2/5/5/)[できれば]
  - [ ] タップ領域は、適切なサイズを確保している（目安として44px x 44px以上）
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)[基本必須]
  - [ ] HTML仕様に準拠した実装をしている
  - [ ] `button`要素を使用している

## テスト方針

### ユニットテスト

Testing Libraryを使用して、以下の観点をテストします。

- クリックイベントが正しく発火すること
- `ref`が正しく転送されること
- `disabled`属性が正しく設定されること
- `disabled`状態ではクリックイベントが発火しないこと

### Visual Regressionテスト

Storybookを使用して、以下のバリエーションをテストします。

- 各サイズ（large、medium、small）
- disabled状態
