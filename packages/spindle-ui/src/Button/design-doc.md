# Button

## 概要・背景

Buttonは、ユーザーがアクションを実行するための基本的なコンポーネントです。送信、選択、削除など、様々な操作に使用されます。

Buttonコンポーネントは5つのバリアント（`contained`、`outlined`、`lighted`、`neutral`、`danger`）、3つのサイズ（`large`、`medium`、`small`）、2つのレイアウト（`intrinsic`、`fullWidth`）をサポートしています。また、アイコンを含めることも可能で、アイコンの配置位置（`start`、`end`）を指定できます。

### バリアントの使い分け

各バリアントには明確な役割があり、適切に使い分けることでユーザーの主目的へ誘導し、画面の煩雑さを防ぎます。

#### Contained

- そのページにおけるユーザーの主目的に対して使用します
- 画面内に最小限の配置にとどめ、「登録する」「今すぐ購入する」「確定する」など重要なアクションに使用します

#### Outlined

- 2番目に重要なアクションに使用します
- Containedボタンに比べて相対的に重要度の低いアクション、例えばフォロー機能や、登録に対するログインなどに使用します

#### Neutral

- ページの主目的とは関係のない3番目のアクションに使用します
- いくつ並べても問題ありません
- 「詳細を見る」「トップに戻る」「削除する（破壊的でない削除）」などに使用します

#### Lighted

- 状態がアクティブであることを表現する特殊なバリアントです
- Containedボタンのようにアクションを促すものではなく、常にNeutralボタンとセットで使用します
- 単独での使用は避けてください

#### Danger

- 破壊的で取り消しのできない最終確認が必要なアクションにのみ使用します
- 「投稿を削除する」「アカウントを退会する」などの操作に限定します

### サイズとレイアウト

#### サイズ

- `large`: 最小高さ48px、フォントサイズ16px（デフォルト）
- `medium`: 最小高さ40px、フォントサイズ14px
- `small`: 最小高さ32px、フォントサイズ13px

#### レイアウト

- `intrinsic`: コンテンツに応じて幅が決まります（デフォルト）
- `fullWidth`: 親要素の幅いっぱいに広がります

幅は`layout`プロパティで制御します。`intrinsic`の場合、ボタンの幅はテキストやアイコンなどの内容に応じて自動的に決まります。`fullWidth`の場合、親要素の幅100%に広がります。

### アイコン

- `iconPosition="start"`: アイコンがテキストの前に配置されます（デフォルト）
- `iconPosition="end"`: アイコンがテキストの後に配置されます
- アイコンのサイズは各サイズに応じて調整されます
  - large: アイコン22px（start）/ 18px（end）、マージン6px
  - medium: アイコン20px（start）/ 16px（end）、マージン4px
  - small: アイコン16px（start）/ 14px（end）、マージン2px

### インタラクション

#### ホバースタイル

- マウスホバー時に背景色が変化します
- `@media (hover: hover)`を使用して、タッチデバイスではホバースタイルを適用しません
- 各バリアントごとに専用のホバー背景色が定義されています

#### アクティブスタイル

- クリック・タップ時に背景色が変化します
- 各バリアントごとに専用のアクティブ背景色が定義されています

#### フォーカススタイル

- キーボード操作時にフォーカスインジケーターが表示されます
- アウトラインは2px、オフセットは1pxです
- `:focus-visible`を使用して、マウスクリック時はアウトラインを表示しません

#### トランジション

- 背景色の変化には0.3秒のトランジションが適用されます

#### 無効状態

- `disabled`属性が付与されると、透明度が0.3になります
- 無効状態ではホバー・アクティブスタイルは適用されません

## 使用例

### DO

- 各バリアントは、アクションの重要度に応じて適切に使い分けます
- Containedボタンは画面内に1つまでにとどめます
- アイコンを使用して、アクションの意味を視覚的に補強できます
- Lightedボタンは必ずNeutralボタンとセットで使用します

### DO NOT

- Containedボタンを複数配置しないでください。ユーザーがどのアクションを優先すべきか判断できなくなります
- Lightedボタンを単独で使用しないでください。必ずNeutralボタンとセットで使用します
- Dangerボタンを破壊的でないアクションに使用しないでください

## 要素

### Design Tokens

#### Contained

- Surface Accent Primary (背景色)
- Text High Emphasis Inverse (テキスト色)
- Hover Contained Button (ホバー時の背景色)
- Active Contained Button (アクティブ時の背景色)

#### Outlined

- Border Accent Primary (ボーダー色)
- Text Accent Primary (テキスト色)
- Hover Outlined Button (ホバー時の背景色)
- Active Outlined Button (アクティブ時の背景色)

#### Lighted

- Surface Accent Primary Light (背景色)
- Text Accent Primary (テキスト色)
- Hover Lighted Button (ホバー時の背景色)
- Active Lighted Button (アクティブ時の背景色)

#### Neutral

- Surface Tertiary (背景色)
- Text Medium Emphasis (テキスト色)
- Hover Neutral Button (ホバー時の背景色)
- Active Neutral Button (アクティブ時の背景色)

#### Danger

- Border Caution (ボーダー色)
- Text Caution (テキスト色)
- Hover Danger Button (ホバー時の背景色)
- Active Danger Button (アクティブ時の背景色)

#### Focus

- Focus Clarity (フォーカス時のアウトライン色)

### プロパティ

```ts
type Props = {
  children?: React.ReactNode;
  // デフォルト値はintrinsicです
  layout?: 'intrinsic' | 'fullWidth';
  // デフォルト値はlargeです
  size?: 'large' | 'medium' | 'small';
  // デフォルト値はcontainedです
  variant?: 'contained' | 'outlined' | 'lighted' | 'neutral' | 'danger';
  icon?: React.ReactNode;
  // デフォルト値はstartです
  iconPosition?: 'start' | 'end';
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'>;
```

### CSSカスタムプロパティ

Buttonコンポーネントは`--Button-*`変数を使用してスタイルをオーバーライドできます。

#### 共通

- `--Button-tapHighlightColor`: タップ時のハイライト色
- `--Button-onFocus-outlineColor`: フォーカス時のアウトライン色

#### Contained

- `--Button--contained-backgroundColor`: 背景色
- `--Button--contained-color`: テキスト色
- `--Button--contained-onHover-backgroundColor`: ホバー時の背景色
- `--Button--contained-onActive-backgroundColor`: アクティブ時の背景色

#### Outlined

- `--Button--outlined-borderColor`: ボーダー色
- `--Button--outlined-color`: テキスト色
- `--Button--outlined-onHover-backgroundColor`: ホバー時の背景色
- `--Button--outlined-onActive-backgroundColor`: アクティブ時の背景色

#### Lighted

- `--Button--lighted-backgroundColor`: 背景色
- `--Button--lighted-color`: テキスト色
- `--Button--lighted-onHover-backgroundColor`: ホバー時の背景色
- `--Button--lighted-onActive-backgroundColor`: アクティブ時の背景色

#### Neutral

- `--Button--neutral-backgroundColor`: 背景色
- `--Button--neutral-color`: テキスト色
- `--Button--neutral-onHover-backgroundColor`: ホバー時の背景色
- `--Button--neutral-onActive-backgroundColor`: アクティブ時の背景色

#### Danger

- `--Button--danger-borderColor`: ボーダー色
- `--Button--danger-color`: テキスト色
- `--Button--danger-onHover-backgroundColor`: ホバー時の背景色
- `--Button--danger-onActive-backgroundColor`: アクティブ時の背景色

### スタイルのカスタマイズ

このコンポーネントは`className` propを受け付けません。スタイルをカスタマイズする場合は、上記のCSSカスタムプロパティを使用するか、ラッパー要素でレイアウトを制御してください。

## 実装例

React実装の一例です。

```tsx
<Button variant="contained" size="large" icon={<FileAdd />}>
  ファイルを選択する
</Button>
```

上記の実装から書き出されるマークアップです。

```html
<button class="spui-Button spui-Button--intrinsic spui-Button--large spui-Button--contained spui-Button--iconstart">
  <span class="spui-Button-icon spui-Button-icon--large">
    <svg></svg>
  </span>
  ファイルを選択する
</button>
```

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
  - [ ] バリアントの違いを色だけでなく、ラベルやアイコンでも区別できる
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
  - [ ] タップ領域は、largeサイズで48px x 48px以上、mediumサイズで40px x 40px以上、smallサイズで32px x 32px以上確保している
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)[基本必須]
  - [ ] HTML仕様に準拠した実装をしている
  - [ ] `button`要素を使用している

## テスト方針

### ユニットテスト

Testing Libraryを使用して、以下の観点をテストします。

- クリックイベントが正しく発火すること
- `ref`が正しく転送されること
- 各プロパティが正しく適用されること
- アイコンが正しく表示されること
- `disabled`状態が正しく機能すること

### Visual Regressionテスト

Storybookを使用して、以下のバリエーションをテストします。

- 各サイズ（large、medium、small）× 各バリアント（contained、outlined、lighted、neutral、danger）
- fullWidthレイアウト
- disabled状態
- アイコン付き（start、end）
- ホバー・フォーカス・アクティブ状態
