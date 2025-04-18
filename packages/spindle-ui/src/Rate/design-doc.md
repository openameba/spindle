# Rate

## 概要・背景
Rateは、ユーザーが特定の項目やサービスに対して星を使って評価を行うためのインターフェースを提供します。

## スクリーンショット

### Variant

種類 | スクリーンショット
:-- | :-- |
`star` | ![Star](URL)

### Layout

種類 | スクリーンショット
:-- | :-- |
`horizontal` | ![Horizontal](URL)

## 使用例

### DO
Rateコンポーネントは、`Rate.Frame`内部に`Rate.Item`を組み合わせて使用することを想定しています。

#### 星による評価

```tsx
<Rate.Frame variant="star" layout="horizontal" max={5} value={3.5} onChange={handleChange}>
  <Rate.Item value={1} />
  <Rate.Item value={2} />
  <Rate.Item value={3} />
  <Rate.Item value={4} />
  <Rate.Item value={5} />
</Rate.Frame>
```

### DO NOT
Rateコンポーネントの使用にあたって、以下のような誤った使用方法は避けてください。

```tsx
// Rate.Frame以外の何かでRate.Itemをラップする
<div>
  <Rate.Item value={1} />
  <Rate.Item value={2} />
</div>
```

## 要素

### Design Tokens
- 星の評価
  - active: Text Accent Primary (アクティブな星の色)
  - inactive: Text Low Emphasis (非アクティブな星の色)
- その他
  - Border Low Emphasis (ボーダー色)
  - Surface Primary (背景色)

### プロパティ

#### Rate.Frame
```ts
type Variant = 'star';
type Layout = 'horizontal';
type Props = {
  children?: React.ReactNode;
  variant?: Variant; // 評価の種類 (星)
  layout?: Layout; // レイアウトの種類 (水平, 垂直)
  max?: number; // 最大評価値
  value?: number; // 現在の評価値（整数または小数点以下0.5単位）
  onChange?: (value: number) => void; // 評価値が変更されたときのコールバック
}
```

#### Rate.Item
```ts
type Props = {
  value: number; // 各評価アイテムの値（整数）
  isActive?: boolean; // 星がアクティブかどうか
  isHalf?: boolean; // 星が半分かどうか
}
```

## 実装例
React実装の一例です。

```tsx
<Rate.Frame variant="star" layout="horizontal" max={5} value={3.5} onChange={handleChange}>
  <Rate.Item value={1} />
  <Rate.Item value={2} />
  <Rate.Item value={3} />
  <Rate.Item value={4} />
  <Rate.Item value={5} />
</Rate.Frame>
```

上記の実装から書き出されるマークアップです。

```html
<div class="spui-Rate spui-Rate--star spui-Rate--horizontal">
  <div class="spui-Rate-item" data-value="1"></div>
  <div class="spui-Rate-item" data-value="2"></div>
  <div class="spui-Rate-item" data-value="3"></div>
  <div class="spui-Rate-item" data-value="4"></div>
  <div class="spui-Rate-item" data-value="5"></div>
</div>
```

## アクセシビリティ

- [意味のある順序でコンテンツを表現する](https://a11y-guidelines.ameba.design/1/3/2/)[基本必須]
  - [ ] 見た目の順番と、キーボード操作の順番が一致している
- [表示の向きを固定しない](https://a11y-guidelines.ameba.design/1/3/4/)[できれば]
  - [ ] 端末を横向きにしても、適切に文字が折り返されレイアウトが変わり、コンテンツが見切れていない
  - [ ] 端末の向きが縦向き（portrait）を前提としたデザインになっていない
- [テキストや文字画像のコントラストを確保する](https://a11y-guidelines.ameba.design/1/4/3/)[基本必須]
  - [ ] SpindleカラーパレットのTheme Colorsを適切に使い分けている
- [テキストサイズを拡大縮小できる](https://a11y-guidelines.ameba.design/1/4/4/)[基本必須]
  - [ ] 画面を200%拡大・文字サイズを2倍に変更しても、適切に文字が折り返され、情報が欠落していない
- [リフローできる](https://a11y-guidelines.ameba.design/1/4/10/)[できれば]
  - [ ] 画面を400%まで拡大しても、画面幅に合わせて画像や要素のサイズが変動し、テキストは適切に折り返される（レスポンシブデザイン）
- [キーボード、タッチデバイスで操作できる](https://a11y-guidelines.ameba.design/2/1/1/)[基本必須]
  - [ ] コンポーネントはTabキーでフォーカスでき、EnterキーまたはSpaceキーで評価を選択できる
- [適切なフォーカス順序にする](https://a11y-guidelines.ameba.design/2/4/3/)[基本必須]
  - [ ] キーボード操作の順序が、見た目の順序と一致している
- [フォーカスを見えるようにする](https://a11y-guidelines.ameba.design/2/4/7/)[基本必須]
  - [ ] 評価アイテムは、フォーカスの状態が見える
- [ターゲットのサイズを理解する](https://a11y-guidelines.ameba.design/2/5/5/)[できれば]
  - [ ] タップ領域は44px × 44px以上確保している
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)[基本必須]
  - [ ] HTML仕様に準拠した実装をしている

### その他
コンポーネントからはアプリケーション内での使われ方や重要度がわからないため、`aria-*`属性や`role`属性は付与していません。そのため、コンポーネント利用時には適宜付与して支援技術に通知してください。

```tsx
<Rate.Frame role="radiogroup" variant="star" layout="horizontal" max={5} value={3.5} onChange={handleChange}>
  <Rate.Item role="radio" aria-checked={value >= 1} value={1} />
  <Rate.Item role="radio" aria-checked={value >= 2} value={2} />
  <Rate.Item role="radio" aria-checked={value >= 3} value={3} />
  <Rate.Item role="radio" aria-checked={value >= 4} value={4} />
  <Rate.Item role="radio" aria-checked={value >= 5} value={5} />
</Rate.Frame>
```

## リンク集
特になし
