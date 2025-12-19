# LinkButton

## 概要・背景

LinkButtonは、リンク遷移をボタンライクな見た目で提供するコンポーネントです。ページ遷移や別ページへの誘導など、リンクとしての意味を保ちつつ、CTAとして強調したい場合に使用します。

LinkButtonコンポーネントは5つのバリアント（`contained`、`outlined`、`lighted`、`neutral`、`danger`）、3つのサイズ（`large`、`medium`、`small`）、2つのレイアウト（`intrinsic`、`fullWidth`）をサポートしています。また、アイコンを含めることができ、配置位置（`start`、`end`）を指定できます。

### バリアントの使い分け

#### Contained

- リンク先へ強く誘導したい主アクションに使用します
- 画面内では最小限の配置にとどめ、「詳しく見る」「今すぐ使う」などの主要な遷移に使用します

#### Outlined

- 2番目に重要な遷移や、Containedより優先度が低い導線に使用します
- 補足情報へのリンクや、登録画面からのログイン導線などに適しています

#### Neutral

- コンテンツ補助の3番目の導線に使用します
- リストの末尾やセカンダリ情報へのリンクなど、複数並べても問題ない場面で利用します

#### Lighted

- 状態がアクティブであることを示す特殊なバリアントです
- Neutralと組み合わせて使用し、単独での利用は避けます

#### Danger

- 破壊的な結果に繋がるリンクにのみ使用します
- 「退会手続きへ進む」など、強い注意喚起が必要な遷移に限定します

### サイズとレイアウト

#### サイズ

- `large`: 最小高さ48px、フォントサイズ16px（デフォルト）
- `medium`: 最小高さ40px、フォントサイズ14px
- `small`: 最小高さ32px、フォントサイズ13px

#### レイアウト

- `intrinsic`: コンテンツ幅に応じてサイズが決まります（デフォルト）
- `fullWidth`: 親要素の幅に合わせて100%まで広がります

### アイコン

- `iconPosition="start"`: テキスト前にアイコンを配置します（デフォルト）
- `iconPosition="end"`: テキスト後にアイコンを配置します
- サイズに応じてアイコンの大きさと余白が調整されます
  - large: アイコン22px（start）/ 18px（end）、マージン6px
  - medium: アイコン20px（start）/ 16px（end）、マージン4px
  - small: アイコン16px（start）/ 14px（end）、マージン2px

### インタラクション

#### ホバースタイル

- `@media (hover: hover)`内で背景色が変化し、タッチデバイスではホバースタイルを適用しません
- バリアントごとに専用のホバー背景色が定義されています

#### アクティブスタイル

- クリック時に背景色が変化します
- バリアントごとに専用のアクティブ背景色が設定されています

#### フォーカススタイル

- キーボード操作時に2pxアウトライン（オフセット1px）を表示します
- `:focus-visible`でマウスクリック時のアウトライン表示を抑制しています

## 使用例

### DO

- ページ遷移や別タブでのリンクなど、ナビゲーション目的のCTAに使用します
- 強調したいリンクは`variant="contained"`で1つに絞り、その他の導線は`outlined`や`neutral`を使い分けます
- アイコンを装飾として使用する場合は、`aria-hidden="true"`を付与します
- 主要導線をフル幅で見せたい場合は`layout="fullWidth"`を使用します

### DO NOT

- フォーム送信やモーダル表示など、ボタンが適切なアクションには使用しないでください（Buttonコンポーネントを使用してください）
- `className` propを持たないため、直接クラスを付与してスタイルを変更しないでください
- `href`を持たない疑似ボタン用途では使用しないでください（リンクとしての意味が失われます）

## 要素

### Design Tokens

#### Contained

- Surface Accent Primary（背景色）
- Text High Emphasis Inverse（テキスト色）
- Hover Contained Button（ホバー時の背景色）
- Active Contained Button（アクティブ時の背景色）

#### Outlined

- Border Accent Primary（ボーダー色）
- Text Accent Primary（テキスト色）
- Hover Outlined Button（ホバー時の背景色）
- Active Outlined Button（アクティブ時の背景色）

#### Lighted

- Surface Accent Primary Light（背景色）
- Text Accent Primary（テキスト色）
- Hover Lighted Button（ホバー時の背景色）
- Active Lighted Button（アクティブ時の背景色）

#### Neutral

- Surface Tertiary（背景色）
- Text Medium Emphasis（テキスト色）
- Hover Neutral Button（ホバー時の背景色）
- Active Neutral Button（アクティブ時の背景色）

#### Danger

- Border Caution（ボーダー色）
- Text Caution（テキスト色）
- Hover Danger Button（ホバー時の背景色）
- Active Danger Button（アクティブ時の背景色）

#### Focus

- Focus Clarity（フォーカス時のアウトライン色）

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
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className'>;
```

### CSSカスタムプロパティ

LinkButtonは`--LinkButton-*`変数でスタイルをオーバーライドできます。

#### 共通

- `--LinkButton-tapHighlightColor`: タップ時のハイライト色
- `--LinkButton-onFocus-outlineColor`: フォーカス時のアウトライン色

#### Contained

- `--LinkButton--contained-backgroundColor`: 背景色
- `--LinkButton--contained-color`: テキスト色
- `--LinkButton--contained-onHover-backgroundColor`: ホバー時の背景色
- `--LinkButton--contained-onActive-backgroundColor`: アクティブ時の背景色

#### Outlined

- `--LinkButton--outlined-borderColor`: ボーダー色
- `--LinkButton--outlined-color`: テキスト色
- `--LinkButton--outlined-onHover-backgroundColor`: ホバー時の背景色
- `--LinkButton--outlined-onActive-backgroundColor`: アクティブ時の背景色

#### Lighted

- `--LinkButton--lighted-backgroundColor`: 背景色
- `--LinkButton--lighted-color`: テキスト色
- `--LinkButton--lighted-onHover-backgroundColor`: ホバー時の背景色
- `--LinkButton--lighted-onActive-backgroundColor`: アクティブ時の背景色

#### Neutral

- `--LinkButton--neutral-backgroundColor`: 背景色
- `--LinkButton--neutral-color`: テキスト色
- `--LinkButton--neutral-onHover-backgroundColor`: ホバー時の背景色
- `--LinkButton--neutral-onActive-backgroundColor`: アクティブ時の背景色

#### Danger

- `--LinkButton--danger-borderColor`: ボーダー色
- `--LinkButton--danger-color`: テキスト色
- `--LinkButton--danger-onHover-backgroundColor`: ホバー時の背景色
- `--LinkButton--danger-onActive-backgroundColor`: アクティブ時の背景色

## 実装例

React実装の一例です。

```tsx
<LinkButton
  href="https://example.com"
  icon={<GraphBar aria-hidden="true" />}
  size="medium"
  variant="outlined"
>
  アナリティクスを見る
</LinkButton>
```

上記の実装から書き出されるマークアップです。

```html
<a class="spui-LinkButton spui-LinkButton--intrinsic spui-LinkButton--medium spui-LinkButton--outlined spui-LinkButton--iconstart" href="https://example.com">
  <span class="spui-LinkButton-icon spui-LinkButton-icon--medium">
    <svg aria-hidden="true"></svg>
  </span>
  アナリティクスを見る
</a>
```

## Baseline

Widely available

## アクセシビリティ

- [画像に代替テキストを提供する](https://a11y-guidelines.ameba.design/1/1/1/)[基本必須]
  - [ ] 装飾的なアイコンには`aria-hidden="true"`を付与している
  - [ ] リンクがアイコンのみの場合、適切な`aria-label`を提供している
- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)[基本必須]
  - [ ] リンクの目的や遷移先が明確に伝わるテキストが含まれている
- [意味のある順序でコンテンツを表現する](https://a11y-guidelines.ameba.design/1/3/2/)[基本必須]
  - [ ] リンクの配置順序が、視覚的な順序と一致している
- [感覚的な特徴だけで説明しない](https://a11y-guidelines.ameba.design/1/3/3/)[基本必須]
  - [ ] 色やアイコンだけでなく、テキストでもリンクの目的を説明している
- [色だけで伝えない](https://a11y-guidelines.ameba.design/1/4/1/)[基本必須]
  - [ ] リンクであることを色だけでなく、装飾や配置でも示している
- [テキストや文字画像のコントラストを確保する](https://a11y-guidelines.ameba.design/1/4/3/)[基本必須]
  - [ ] SpindleカラーパレットのTheme Colorsを適切に使い分けている
- [テキストサイズを拡大縮小できる](https://a11y-guidelines.ameba.design/1/4/4/)[基本必須]
  - [ ] 画面を200%拡大してもテキストが折り返され、リンクが見切れない
  - [ ] フォントサイズは親要素から継承し、固定値を使用していない
- [キーボード、タッチデバイスで操作できる](https://a11y-guidelines.ameba.design/2/1/1/)[基本必須]
  - [ ] Tabキーでフォーカスでき、EnterキーまたはSpaceキーで遷移できる
- [適切なフォーカス順序にする](https://a11y-guidelines.ameba.design/2/4/3/)[基本必須]
  - [ ] キーボード操作の順序が、見た目の順序と一致している
- [フォーカスを見えるようにする](https://a11y-guidelines.ameba.design/2/4/7/)[基本必須]
  - [ ] フォーカスインジケーターが表示される
- [ターゲットのサイズを理解する](https://a11y-guidelines.ameba.design/2/5/5/)[できれば]
  - [ ] タップ領域はサイズに応じて十分な高さを確保している
- [リンクの目的を明確にする](https://a11y-guidelines.ameba.design/2/4/4/)[基本必須]
  - [ ] リンクテキストだけで遷移先や目的が理解できる
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)[基本必須]
  - [ ] HTML仕様に準拠した実装をしている
  - [ ] `a`要素を使用し、適切な`href`を設定している

## テスト方針

### ユニットテスト

Testing Libraryを使用して、以下を確認します。

- `ref`が正しく転送されること
- `href`、`target`、`rel`などの属性が正しく渡されること
- `onClick`などのイベントハンドラーが正しく動作すること
- アイコンが指定した位置とサイズで表示されること

### Visual Regressionテスト

Storybookを使用して、以下のバリエーションをテストします。

- 各サイズ（large、medium、small）× 各バリアント（contained、outlined、lighted、neutral、danger）
- fullWidthレイアウト
- アイコン付き（start、end）
- ホバー・フォーカス・アクティブ状態
