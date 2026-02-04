# LinkButton

## 概要・背景

LinkButtonは、リンクとして機能しつつボタンと同等の視覚的強調を与えるためのコンポーネントです。フォーム送信ではなくページ遷移や別画面への導線を設定したいが、通常のリンクよりも強い注目を集めたい場面で使用します。ボタンと同様のバリエーション・サイズを備えており、ページの主要動線から補助動線まで一貫したトーンで表現できます。

## 使用例

### DO

- 遷移先が明確なリンクをボタン調の見た目で提示したいときに使用します
- ページ幅に合わせて広がるCTAが必要な場合は`layout="fullWidth"`を使います
- 装飾的なアイコンを並べる場合は`aria-hidden="true"`を付与してスクリーンリーダーに読み上げさせません

### DO NOT

- フォーム送信やモーダルの起動など、ページ遷移を伴わないアクションには使用しません（`Button`を使用）
- `className`でスタイルを当てることはできません。カスタマイズは提供されているCSSカスタムプロパティを利用してください

## 要素

### Design Tokens

- Surface Accent Primary（containedの背景色）
- Text High Emphasis Inverse（containedの文字色）
- Surface Accent Primary Light（lightedの背景色）
- Text Accent Primary（outlined / lightedの文字色）
- Border Accent Primary（outlinedの枠線色）
- Surface Tertiary（neutralの背景色）
- Text Medium Emphasis（neutralの文字色）
- Border Caution（dangerの枠線色）
- Text Caution（dangerの文字色）
- Focus Clarity（フォーカス時のアウトライン色）
- Gray 5 Alpha（タップ時のハイライト色）

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

LinkButtonコンポーネントは`--LinkButton-*`変数を使用してスタイルを上書きできます。

- `--LinkButton-tapHighlightColor`: タップ時のハイライト色
- `--LinkButton-onFocus-outlineColor`: フォーカス時のアウトライン色
- `--LinkButton--contained-*`: containedバリアントの背景色・文字色・ホバー/アクティブ時の背景色
- `--LinkButton--outlined-*`: outlinedバリアントの枠線色・文字色・ホバー/アクティブ時の背景色
- `--LinkButton--lighted-*`: lightedバリアントの背景色・文字色・ホバー/アクティブ時の背景色
- `--LinkButton--neutral-*`: neutralバリアントの背景色・文字色・ホバー/アクティブ時の背景色
- `--LinkButton--danger-*`: dangerバリアントの枠線色・文字色・ホバー/アクティブ時の背景色

## 実装例

```tsx
<LinkButton href="#" size="large" variant="contained">応援を送る</LinkButton>
<LinkButton
  href="#"
  layout="fullWidth"
  icon={<ChevronDownBold aria-hidden="true" />}
  iconPosition="end"
  size="medium"
  variant="outlined"
>
  もっと見る
</LinkButton>
```

上記の実装から書き出されるマークアップです。

```html
<a class="spui-LinkButton spui-LinkButton--large spui-LinkButton--contained" href="#">応援を送る</a>
<a
  class="spui-LinkButton spui-LinkButton--fullWidth spui-LinkButton--medium spui-LinkButton--outlined spui-LinkButton--iconend"
  href="#"
>
  <span class="spui-LinkButton-icon spui-LinkButton-icon--medium"><svg aria-hidden="true"></svg></span>もっと見る
</a>
```

## Baseline

Widely available

## アクセシビリティ

- [画像に代替テキストを提供する](https://a11y-guidelines.ameba.design/1/1/1/)[基本必須]
  - [ ] 装飾的なアイコンには`aria-hidden="true"`を付与している
  - [ ] アイコンのみのリンクの場合、適切な`aria-label`を提供している
- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)[基本必須]
  - [ ] リンクテキストから遷移先や目的が分かる文言を設定している
- [意味のある順序でコンテンツを表現する](https://a11y-guidelines.ameba.design/1/3/2/)[基本必須]
  - [ ] ページ内のフォーカス順序が視覚順と一致する配置にしている
- [感覚的な特徴だけで説明しない](https://a11y-guidelines.ameba.design/1/3/3/)[基本必須]
  - [ ] 色やアイコンだけでなく、テキストでもリンクの目的を伝えている
- [色だけで伝えない](https://a11y-guidelines.ameba.design/1/4/1/)[基本必須]
  - [ ] バリアントによらず、ホバーやフォーカス時の変化を色以外のアウトラインや下線で示している
- [テキストや文字画像のコントラストを確保する](https://a11y-guidelines.ameba.design/1/4/3/)[基本必須]
  - [ ] バリアントごとに背景色と文字色のコントラストが十分です
- [テキストサイズを拡大縮小できる](https://a11y-guidelines.ameba.design/1/4/4/)[基本必須]
  - [ ] 相対値でフォントサイズとパディングを設定し、拡大してもレイアウトが崩れない
- [キーボード、タッチデバイスで操作できる](https://a11y-guidelines.ameba.design/2/1/1/)[基本必須]
  - [ ] Tabキーでフォーカスでき、Enterキーでリンク遷移できる
- [適切なフォーカス順序にする](https://a11y-guidelines.ameba.design/2/4/3/)[基本必須]
  - [ ] 重要度に応じた順序でDOMに配置し、フォーカス移動に意図しない飛びがない
- [フォーカスを見えるようにする](https://a11y-guidelines.ameba.design/2/4/7/)[基本必須]
  - [ ] フォーカスインジケーターの太さとオフセットが視認できる値になっている
- [ターゲットのサイズを理解する](https://a11y-guidelines.ameba.design/2/5/5/)[できれば]
  - [ ] 最小タップサイズ（高さ32px以上）を満たすサイズを選択している
- [リンクの目的を明確にする](https://a11y-guidelines.ameba.design/2/4/4/)[基本必須]
  - [ ] 親文脈がなくてもリンクラベルだけで遷移先が理解できる
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)[基本必須]
  - [ ] `a`要素を使用し、`href`属性を適切に設定している

## テスト方針

### ユニットテスト

- `href`、`target`、`rel`などアンカー属性が正しく受け渡される
- `ref`が転送される
- `icon`有無と`iconPosition`の組み合わせでアイコンが正しく配置される
- `layout`と`size`の組み合わせでクラスが適用される

### Visual Regressionテスト

- 各バリアント（contained / outlined / lighted / neutral / danger）の見た目
- 各サイズ（large / medium / small）と`layout="fullWidth"`組み合わせ
- アイコン有無と左右配置のバリエーション
- ホバー・アクティブ・フォーカス状態の差分

## リンク集

- [Button](../Button/design-doc.md)
- [TextLink](../TextLink/design-doc.md)
