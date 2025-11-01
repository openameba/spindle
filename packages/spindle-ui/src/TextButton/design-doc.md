# TextButton

## 概要・背景

TextButtonは、テキストリンクのような見た目でボタンとして機能するコンポーネントです。「もっと見る」「ブログを書く」などのアクションに使用され、ページ内で視覚的な重さを抑えながらもユーザーにアクションを促すことができます。

TextButtonコンポーネントは2つのバリアント（デフォルトと`subtle`）、アイコン配置（`start`、`end`）、アンダーラインの制御（`hover`）をサポートしています。デフォルトではアンダーラインが表示されますが、アイコンを含む場合やホバー時のみ表示する設定も可能です。

また、このコンポーネントは様々な箇所での利用が想定されるため、CSSカスタムプロパティ（`--TextButton-*`）を使用してスタイルを柔軟に上書きできます。

### TextLinkとの違い

TextButtonとTextLinkは見た目が似ていますが、使用するHTML要素と用途が異なります。

| | TextButton | TextLink |
|---|---|---|
| **HTML要素** | `<button>` | `<a>` |
| **主な用途** | ページ内でのアクション実行 | ページ間のナビゲーション |
| **使用例** | モーダル表示、状態変更、アコーディオン展開 | 別ページへの遷移、外部リンク |
| **受け付ける属性** | `type`, `disabled`, `onClick` など | `href`, `target`, `rel` など |
| **適切な使用ケース** | URLを持たず、JavaScriptで処理を実行する場合 | URLを持ち、ページ遷移する場合 |

スクリーンリーダーユーザーに正しい操作方法を伝えるため、用途に応じて適切なコンポーネントを選択してください。

## 使用例

### DO

- 「もっと見る」「詳細を見る」などの追加情報へのナビゲーションに使用します
- 「コメントを表示」「詳細設定を開く」などの補助的なアクションに使用します
- アイコンを使用して、アクションの意味を視覚的に補強できます
- 外部のスタイルシステムと統合する場合は、CSSカスタムプロパティを使用してスタイルを調整します

### DO NOT

- 「送信する」「登録する」などの主要なアクションには使用しないでください。これらには[Button](https://ameba-spindle.web.app/?path=/docs/button--button)コンポーネントの`contained`バリアントを使用します
- このコンポーネントは`className` propを受け付けません。スタイルのカスタマイズには、CSSカスタムプロパティを使用してください

## 要素

### Design Tokens

#### デフォルト

- Text Accent Primary (テキスト色)
- Object Accent Primary (アイコン色)
- Focus Clarity (フォーカス時のアウトライン色)

#### Subtle

- Text Low Emphasis (テキスト色)
- Object Low Emphasis (アイコン色)

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
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'>;
```

### CSSカスタムプロパティ

TextButtonコンポーネントは`--TextButton-*`変数を使用してスタイルをオーバーライドできます。

- `--TextButton-tapHighlightColor`: タップ時のハイライト色
- `--TextButton-onFocus-outlineColor`: フォーカス時のアウトライン色
- `--TextButton-color`: テキスト色
- `--TextButton-icon-color`: アイコン色
- `--TextButton-fontWeight`: フォントウェイト
- `--TextButton--subtle-color`: subtleバリアントのテキスト色
- `--TextButton--subtle-icon-color`: subtleバリアントのアイコン色

### アンダーラインの表示パターン

テキストのアンダーラインは以下のルールで表示されます。

- 何も指定しない: 初期表示時にunderline表示、hover時にunderline非表示
- アイコンあり: 初期表示時にunderline非表示、hover時にunderline表示
- `underline="hover"`: 初期表示時にunderline非表示、hover時にunderline表示

### インタラクション

#### ホバースタイル

- マウスホバー時にアンダーラインの表示/非表示が切り替わります
- `@media (hover: hover)`を使用して、タッチデバイスではホバースタイルを適用しません

#### フォーカススタイル

- キーボード操作時にフォーカスインジケーターが表示されます
- アウトラインは2px、オフセットは1pxです
- `:focus-visible`を使用して、マウスクリック時はアウトラインを表示しません

#### 無効状態

- `disabled`属性が付与されると、透明度が0.3になります
- 無効状態ではアンダーラインは表示されません

### スタイルのカスタマイズ

このコンポーネントは`className` propを受け付けません。スタイルをカスタマイズする場合は、上記のCSSカスタムプロパティを使用してください。フォントサイズは親要素から継承されます。

## 実装例

React実装の一例です。

```tsx
<TextButton
  type="button"
  icon={<ChevronRightBold aria-hidden="true" />}
  iconPosition="end"
>
  コメントを表示
</TextButton>
```

上記の実装から書き出されるマークアップです。

```html
<button type="button" class="spui-TextButton spui-TextButton--hasIcon spui-TextButton--iconend">
  <span class="spui-TextButton-icon">
    <svg aria-hidden="true"></svg>
  </span>
  コメントを表示
</button>
```

フォーム内で意図的に`type="submit"`としたい場合を除き、`type="button"`を指定することを推奨します。`type`属性を省略した場合、デフォルトで`type="submit"`となるため、予期しないフォーム送信を引き起こす可能性があります。

## アクセシビリティ

- [画像に代替テキストを提供する](https://a11y-guidelines.ameba.design/1/1/1/)[基本必須]
  - [ ] アイコンのみのボタンの場合、適切な`aria-label`を提供している
  - [ ] 装飾的なアイコンには`aria-hidden="true"`を付与している
- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)[基本必須]
  - [ ] ボタンの目的や機能が明確に伝わるラベルが付いている
- [意味のある順序でコンテンツを表現する](https://a11y-guidelines.ameba.design/1/3/2/)[基本必須]
  - [ ] ボタンの配置順序が、視覚的な順序と一致している
- [感覚的な特徴だけで説明しない](https://a11y-guidelines.ameba.design/1/3/3/)[基本必須]
  - [ ] 色やアイコンだけでなく、テキストでもボタンの機能を説明している
- [色だけで伝えない](https://a11y-guidelines.ameba.design/1/4/1/)[基本必須]
  - [ ] バリアントの違いを色だけでなく、テキストでも区別できる
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
  - [ ] タップ領域は44px x 44px以上確保している
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)[基本必須]
  - [ ] HTML仕様に準拠した実装をしている
  - [ ] `button`要素を使用している

## テスト方針

### ユニットテスト

Testing Libraryを使用して、コンポーネントの基本的な動作をテストします。

- クリックイベントが正しく発火すること
- `ref`が正しく転送されること

各プロパティ（`variant`、`icon`、`iconPosition`、`underline`、`disabled`）の表示やスタイルに関するテストは、Storybookによるビジュアルリグレッションテストでカバーされています。

### Visual Regressionテスト

Storybookを使用して、以下のバリエーションをテストします。

- デフォルト（normal）× disabled状態
- アイコン付き（start、end）× disabled状態
- subtleバリアント × disabled状態
- subtleバリアント × アイコン付き（start、end）× disabled状態
- underline="hover" × disabled状態
- ホバー・フォーカス状態
