# TextLink

## 概要・背景

TextLinkは、テキストベースのリンクを実装するためのコンポーネントです。ページ内のナビゲーションや外部リンクへの遷移など、様々な場所で使用されます。

TextLinkコンポーネントは2つのバリアント（`normal`、`subtle`）、アイコンの配置（`start`、`end`）、アンダーラインの表示パターン（デフォルト、アイコン付き、`underline="hover"`）をサポートしています。また、CSSカスタムプロパティを使用してスタイルを柔軟に上書きできる設計になっています。

### バリアントの使い分け

#### Normal（デフォルト）

- 通常のテキストリンクとして使用します
- Text Accent Primaryカラーを使用し、リンクであることを明確に示します
- 「もっと見る」「詳細を見る」など、一般的なリンクに使用します

#### Subtle

- 控えめなテキストリンクとして使用します
- Text Low Emphasisカラーを使用し、視覚的な主張を抑えます
- リスト内のリンクや、ページの補助的なナビゲーションなど、リンクが多く配置される場所での使用を想定しています

### アンダーラインの表示パターン

TextLinkのアンダーライン表示は、以下のルールで制御されます。

- **デフォルト**: 初期表示時にアンダーライン表示、ホバー時にアンダーライン非表示
- **アイコン付き**: 初期表示時にアンダーライン非表示、ホバー時にアンダーライン表示
- **underline="hover"**: 初期表示時にアンダーライン非表示、ホバー時にアンダーライン表示

アイコンが含まれる場合、初期状態でアンダーラインを非表示にすることで、アイコンとテキストの視覚的な一体感を保ちます。

### アイコン

- `iconPosition="start"`: アイコンがテキストの前に配置されます（デフォルト）
- `iconPosition="end"`: アイコンがテキストの後に配置されます
- アイコンを含む場合、`display: inline-flex`と`align-items: center`でテキストとアイコンを垂直方向に中央揃えします
- アイコンとテキストの間には4pxのマージンが設定されます
  - `iconPosition="start"`: アイコンの右側に4pxのマージン
  - `iconPosition="end"`: アイコンの左側に4pxのマージン
- アイコンは`line-height: 0`が適用され、テキストのline-heightの影響を受けません

### インタラクション

#### ホバースタイル

- マウスホバー時にアンダーラインの表示/非表示が切り替わります
- `@media (hover: hover)`を使用して、タッチデバイスではホバースタイルを適用しません

#### フォーカススタイル

- キーボード操作時にフォーカスインジケーターが表示されます
- アウトラインは2px、オフセットは1pxです
- `:focus-visible`を使用して、マウスクリック時はアウトラインを表示しません

### スタイルのカスタマイズ

TextLinkは様々な場所での利用が想定されるため、`--TextLink-*`変数を使用してスタイルを上書きできます。カラー、フォントウェイト、アイコンの色などを親要素で定義することにより、柔軟にカスタマイズできます。

## 使用例

### DO

- 通常のリンクとして「もっと見る」「詳細を見る」などの一般的なナビゲーションに使用します
- アイコンを使用する場合、装飾的なアイコンには`aria-hidden="true"`を付与します
- リスト内や補助的なナビゲーションなど、リンクが多く配置される場所では`variant="subtle"`を使用します
- スタイルをカスタマイズする場合は、親要素で`--TextLink-*`のCSSカスタムプロパティを定義します

### DO NOT

- このコンポーネントは`className` propを受け付けません
- ボタンのような動作（フォーム送信、モーダル表示など）には使用せず、Buttonコンポーネントを使用してください

## 要素

### Design Tokens

#### Normal

- Text Accent Primary（テキスト色）
- Object Accent Primary（アイコン色）
- Focus Clarity（フォーカス時のアウトライン色）

#### Subtle

- Text Low Emphasis（テキスト色）
- Object Low Emphasis（アイコン色）

### プロパティ

```ts
type Props = {
  children?: React.ReactNode;
  // デフォルト値はundefinedです
  variant?: 'subtle';
  icon?: React.ReactNode;
  // デフォルト値はstartです
  iconPosition?: 'start' | 'end';
  // デフォルト値はundefinedです
  underline?: 'hover';
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className'>;
```

### CSSカスタムプロパティ

TextLinkコンポーネントは`--TextLink-*`変数を使用してスタイルを上書きできます。

#### 共通

- `--TextLink-tapHighlightColor`: タップ時のハイライト色
- `--TextLink-onFocus-outlineColor`: フォーカス時のアウトライン色
- `--TextLink-color`: テキスト色
- `--TextLink-icon-color`: アイコン色
- `--TextLink-fontWeight`: フォントウェイト

#### Subtle

- `--TextLink--subtle-color`: テキスト色（subtleバリアント）
- `--TextLink--subtle-icon-color`: アイコン色（subtleバリアント）

## 実装例

React実装の一例です。

```tsx
<TextLink href="#" icon={<PencilAdd aria-hidden="true" />} iconPosition="start">
  ブログを書く
</TextLink>
```

上記の実装から書き出されるマークアップです。

```html
<a href="#" class="spui-TextLink spui-TextLink--hasIcon spui-TextLink--iconstart">
  <span class="spui-TextLink-icon">
    <svg aria-hidden="true"></svg>
  </span>
  ブログを書く
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
  - [ ] リンクであることを色だけでなく、アンダーラインでも示している
- [テキストや文字画像のコントラストを確保する](https://a11y-guidelines.ameba.design/1/4/3/)[基本必須]
  - [ ] SpindleカラーパレットのTheme Colorsを適切に使い分けている
- [テキストサイズを拡大縮小できる](https://a11y-guidelines.ameba.design/1/4/4/)[基本必須]
  - [ ] 画面を200%拡大・文字サイズを2倍に変更しても、適切に文字が折り返され、リンクが見切れない
  - [ ] フォントサイズは親要素から継承し、固定値を使用していない
- [キーボード、タッチデバイスで操作できる](https://a11y-guidelines.ameba.design/2/1/1/)[基本必須]
  - [ ] Tabキーでフォーカスでき、EnterキーまたはSpaceキーで遷移できる
- [適切なフォーカス順序にする](https://a11y-guidelines.ameba.design/2/4/3/)[基本必須]
  - [ ] キーボード操作の順序が、見た目の順序と一致している
- [フォーカスを見えるようにする](https://a11y-guidelines.ameba.design/2/4/7/)[基本必須]
  - [ ] リンクは、フォーカスの状態が見える
- [ターゲットのサイズを理解する](https://a11y-guidelines.ameba.design/2/5/5/)[できれば]
  - [ ] タップ領域は適切なサイズを確保している
- [リンクの目的を明確にする](https://a11y-guidelines.ameba.design/2/4/4/)[基本必須]
  - [ ] リンクのテキストだけで、遷移先や目的が理解できる
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)[基本必須]
  - [ ] HTML仕様に準拠した実装をしている
  - [ ] `a`要素を使用している
  - [ ] `href`属性が適切に設定されている

## テスト方針

### ユニットテスト

Testing Libraryを使用して、以下の観点をテストします。

- `ref`が正しく転送されること
- `href`属性が正しく渡されること
- `target`や`rel`などの属性が正しく渡されること
- `onClick`などのイベントハンドラーが正しく動作すること

### Visual Regressionテスト

Storybookを使用して、以下のバリエーションをテストします。

- 各バリアント（normal、subtle）
- アイコン付き（start、end）
- アンダーラインパターン（デフォルト、hover）
- ホバー・フォーカス状態
- スタイルのカスタマイズ（CSSカスタムプロパティ）

## リンク集

- [Ameba Accessibility Guidelines](https://a11y-guidelines.ameba.design/)
- [WCAG 2.1 - Link Purpose (In Context)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html)
