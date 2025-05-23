# Rate

## 概要・背景
Rateは、ユーザーが特定の項目やサービスに対して評価を行うためのコンポーネントです。

## スクリーンショット
![Rateコンポーネントのデザイン](https://github.com/user-attachments/assets/da61a975-3c8a-47a4-a6cf-329ea008470a)

## 使用例

### DO
Rateコンポーネントは、`Rate`に`max`と`value`の`props`を渡して使用することを想定しています。

```tsx
<Rate max={5} value={3.5} />
```

### DO NOT

#### 評価値がmaxより大きい
```tsx
<Rate max={5} value={6} />
```

#### 負の評価値
```tsx
<Rate max={5} value={-1} />
```

#### maxが0以下
```tsx
<Rate max={0} value={3.5} />
```

## 要素

### Design Tokens
- Object Medium Emphasis (アイコンのデフォルト色)
- Object Rate Orang (アイコンのアクティブ色)
- Color High Emphasis (数字の色)

### プロパティ

#### Rate
```ts
type Props = {
  max: number;
  value: number;
  size: 'large' | 'medium' | 'small';
  showText: boolean;
}
```

#### 評価値の変換処理
値を0.5刻みに変換する関数です。

```ts
const convertToValue = (num: number): number => {
  return Math.round(num * 2) / 2;
};
```

## 実装例
React実装の一例です。

```tsx
<Rate max={5} value={3.5} />
```

上記の実装から書き出されるマークアップです。

```html
<ul class="spui-Rate" aria-label="3.5">
  <li class="spui-Rate-item"><svg></svg></li>
  <li class="spui-Rate-item"><svg></svg></li>
  <li class="spui-Rate-item"><svg></svg></li>
  <li class="spui-Rate-item"><svg></svg></li>
  <li class="spui-Rate-item"><svg></svg></li>
</ul>
```

## アクセシビリティ

- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)[基本必須]
- [意味のある順序でコンテンツを表現する](https://a11y-guidelines.ameba.design/1/3/2/)[基本必須]
- [感覚的な特徴だけで説明しない](https://a11y-guidelines.ameba.design/1/3/3/)[基本必須]
- [表示の向きを固定しない](https://a11y-guidelines.ameba.design/1/3/4/)[できれば]
  - [ ] 端末を横向きにしても、適切に文字が折り返されレイアウトが変わり、コンテンツが見切れていない
  - [ ] 端末の向きが縦向き（portrait）を前提としたデザインになっていない
- [色だけで伝えない](https://a11y-guidelines.ameba.design/1/4/1/)[基本必須]
- [テキストや文字画像のコントラストを確保する](https://a11y-guidelines.ameba.design/1/4/3/)[基本必須]
  - [ ] SpindleカラーパレットのTheme Colorsを適切に使い分けている
- [テキストサイズを拡大縮小できる](https://a11y-guidelines.ameba.design/1/4/4/)[基本必須]
  - [ ] 画面を200%拡大・文字サイズを2倍に変更しても、適切に文字が折り返され、情報が欠落していない
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)[基本必須]
  - [ ] HTML仕様に準拠した実装をしている

## リンク集
特になし。
