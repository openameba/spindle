# IconButton

## 概要・背景

IconButtonは、アイコン単体でボタンとするケースで使用するコンポーネントです。テキストラベルを持たず、アイコンのみで機能を表現します。視覚的にコンパクトで、ツールバーやヘッダーなどの限られたスペースに適しています。

アイコンは特異なものを避け、ひと目見ただけでアクションが想起される理解しやすいものを選ぶことが重要です。アイコンだけで意味を伝える必要があるため、適切な不可視ラベル（`aria-label`）の設定が必須です。

## 使用例

### DO

- 「追加」「削除」「編集」「閉じる」など、一般的で理解しやすいアイコンを使用します
- アクションの内容が伝わるような不可視ラベル（`aria-label`）を必ず設定します
- ツールバーやヘッダーなど、スペースが限られた場所で使用します
- `type="button"`を明示的に指定します（フォーム内での予期しない送信を防ぐため）

```tsx
<IconButton size="large" variant="contained" type="button">
  <PlusBold aria-label="追加" />
</IconButton>
```

### DO NOT

- このコンポーネントは`className` propを受け付けません。スタイルのカスタマイズには、CSSカスタムプロパティ（`--IconButton-*`）を使用してください
- 複雑で理解しにくいアイコンは避けてください
- 初めて見るユーザーが意味を理解できないアイコンは使用しないでください

## 要素

### Design Tokens

#### Contained（デフォルト）

- Surface Accent Primary (背景色)
- Object High Emphasis Inverse (アイコン色)
- Primary Green 100 (ホバー・アクティブ時の背景色)
- Focus Clarity (フォーカス時のアウトライン色)

#### Outlined

- Border Accent Primary (ボーダー色)
- Object Accent Primary (アイコン色)
- Primary Green 5 (ホバー・アクティブ時の背景色)

#### Lighted

- Surface Accent Primary Light (背景色)
- Object Accent Primary (アイコン色)
- Primary Green 10 (ホバー・アクティブ時の背景色)

#### Neutral

- Surface Tertiary (背景色)
- Object Medium Emphasis (アイコン色)
- Gray 20 Alpha (ホバー・アクティブ時の背景色)

#### Danger

- Border Caution (ボーダー色)
- Object Caution (アイコン色)
- Caution Red 5 Alpha (ホバー・アクティブ時の背景色)

### プロパティ

```ts
type Props = {
  children?: React.ReactNode;
  // デフォルト値はlargeです
  size?: 'large' | 'medium' | 'small' | 'exSmall';
  // デフォルト値はcontainedです
  variant?: 'contained' | 'outlined' | 'lighted' | 'neutral' | 'danger';
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'>;
```

### CSSカスタムプロパティ

IconButtonコンポーネントは`--IconButton-*`変数を使用してスタイルをオーバーライドできます。

- `--IconButton-tapHighlightColor`: タップ時のハイライト色
- `--IconButton-onFocus-outlineColor`: フォーカス時のアウトライン色
- `--IconButton--contained-backgroundColor`: containedバリアントの背景色
- `--IconButton--contained-color`: containedバリアントのアイコン色
- `--IconButton--contained-onActive-backgroundColor`: containedバリアント・アクティブ時の背景色
- `--IconButton--contained-onHover-backgroundColor`: containedバリアント・ホバー時の背景色
- `--IconButton--outlined-borderColor`: outlinedバリアントのボーダー色
- `--IconButton--outlined-color`: outlinedバリアントのアイコン色
- `--IconButton--outlined-onActive-backgroundColor`: outlinedバリアント・アクティブ時の背景色
- `--IconButton--outlined-onHover-backgroundColor`: outlinedバリアント・ホバー時の背景色
- `--IconButton--lighted-backgroundColor`: lightedバリアントの背景色
- `--IconButton--lighted-color`: lightedバリアントのアイコン色
- `--IconButton--lighted-onActive-backgroundColor`: lightedバリアント・アクティブ時の背景色
- `--IconButton--lighted-onHover-backgroundColor`: lightedバリアント・ホバー時の背景色
- `--IconButton--neutral-backgroundColor`: neutralバリアントの背景色
- `--IconButton--neutral-color`: neutralバリアントのアイコン色
- `--IconButton--neutral-onActive-backgroundColor`: neutralバリアント・アクティブ時の背景色
- `--IconButton--neutral-onHover-backgroundColor`: neutralバリアント・ホバー時の背景色
- `--IconButton--danger-borderColor`: dangerバリアントのボーダー色
- `--IconButton--danger-color`: dangerバリアントのアイコン色
- `--IconButton--danger-onActive-backgroundColor`: dangerバリアント・アクティブ時の背景色
- `--IconButton--danger-onHover-backgroundColor`: dangerバリアント・ホバー時の背景色

### サイズバリエーション

| サイズ | 幅 × 高さ | フォントサイズ |
|---|---|---|
| large | 48px × 48px | 1.375em |
| medium | 40px × 40px | 1.25em |
| small | 32px × 32px | 1em |
| exSmall | 24px × 24px | 1em |

### インタラクション

#### ホバースタイル

- マウスホバー時に背景色が変化します
- `@media (hover: hover)`を使用して、タッチデバイスではホバースタイルを適用しません

#### アクティブスタイル

- ボタンが押されている間、背景色が変化します

#### フォーカススタイル

- キーボード操作時にフォーカスインジケーターが表示されます
- アウトラインは2px、オフセットは1pxです
- `:focus-visible`を使用して、マウスクリック時はアウトラインを表示しません

#### 無効状態

- `disabled`属性が付与されると、透明度が0.3になります
- 無効状態ではホバースタイルは適用されません

### スタイルのカスタマイズ

このコンポーネントは`className` propを受け付けません。スタイルをカスタマイズする場合は、上記のCSSカスタムプロパティを使用してください。

## 実装例

React実装の一例です。

```tsx
<IconButton size="large" variant="contained" type="button">
  <PlusBold aria-label="追加" />
</IconButton>
```

上記の実装から書き出されるマークアップです。

```html
<button
  type="button"
  class="spui-IconButton spui-IconButton--large spui-IconButton--contained"
>
  <svg aria-label="追加"></svg>
</button>
```

フォーム内で意図的に`type="submit"`としたい場合を除き、`type="button"`を指定することを推奨します。`type`属性を省略した場合、デフォルトで`type="submit"`となるため、予期しないフォーム送信を引き起こす可能性があります。

## アクセシビリティ

- [画像に代替テキストを提供する](https://a11y-guidelines.ameba.design/1/1/1/)[基本必須]
  - [ ] アイコンに適切な`aria-label`を提供している
- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)[基本必須]
  - [ ] ボタンの目的や機能が明確に伝わるラベルが付いている
- [意味のある順序でコンテンツを表現する](https://a11y-guidelines.ameba.design/1/3/2/)[基本必須]
  - [ ] ボタンの配置順序が、視覚的な順序と一致している
- [感覚的な特徴だけで説明しない](https://a11y-guidelines.ameba.design/1/3/3/)[基本必須]
  - [ ] アイコンだけでなく、不可視ラベルでもボタンの機能を説明している
- [色だけで伝えない](https://a11y-guidelines.ameba.design/1/4/1/)[基本必須]
  - [ ] バリアントの違いを色だけでなく、適切な文脈で区別できる
- [テキストや文字画像のコントラストを確保する](https://a11y-guidelines.ameba.design/1/4/3/)[基本必須]
  - [ ] SpindleカラーパレットのTheme Colorsを適切に使い分けている
- [テキストサイズを拡大縮小できる](https://a11y-guidelines.ameba.design/1/4/4/)[基本必須]
  - [ ] 画面を200%拡大・文字サイズを2倍に変更しても、アイコンが適切に表示され、ボタンが見切れない
- [キーボード、タッチデバイスで操作できる](https://a11y-guidelines.ameba.design/2/1/1/)[基本必須]
  - [ ] Tabキーでフォーカスでき、EnterキーまたはSpaceキーで操作できる
- [適切なフォーカス順序にする](https://a11y-guidelines.ameba.design/2/4/3/)[基本必須]
  - [ ] キーボード操作の順序が、見た目の順序と一致している
- [フォーカスを見えるようにする](https://a11y-guidelines.ameba.design/2/4/7/)[基本必須]
  - [ ] ボタンは、フォーカスの状態が見える
- [ターゲットのサイズを理解する](https://a11y-guidelines.ameba.design/2/5/5/)[できれば]
  - [ ] タップ領域は44px x 44px以上確保している（large、mediumサイズで達成）
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)[基本必須]
  - [ ] HTML仕様に準拠した実装をしている
  - [ ] `button`要素を使用している

## テスト方針

### ユニットテスト

Testing Libraryを使用して、コンポーネントの基本的な動作をテストします。

- クリックイベントが正しく発火すること

各プロパティ（`size`、`variant`、`disabled`）の表示やスタイルに関するテストは、Storybookによるビジュアルリグレッションテストでカバーされています。

### Visual Regressionテスト

Storybookを使用して、以下のバリエーションをテストします。

- 各サイズ（large、medium、small、exSmall）× 各バリアント（contained、outlined、neutral、danger、lighted）
- disabled状態 × 各バリアント
- ホバー・フォーカス・アクティブ状態
