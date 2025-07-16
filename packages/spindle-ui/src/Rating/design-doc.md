# Rating

## 概要・背景
Ratingは、ユーザーが特定の項目やサービスに対して「評価結果を表示する」ためのコンポーネントです。
本コンポーネントは評価値の表示を想定しており、ユーザーによる評価入力や変更機能は提供しません。

## スクリーンショット
![Ratingコンポーネントのデザイン](https://github.com/user-attachments/assets/ddce8680-ddba-4510-a65b-b3f82e13db99)

## 使用例

### DO
Ratingコンポーネントは、`Rating`に`max`と`value`の`props`を渡して使用することを想定しています。

```tsx
<Rating max={5} value={3.5} />
```

### DO NOT
以下のようなpropsの渡し方でも描画可能ですが、意図しない表示になる可能性があるため明示的に扱いを設計することを推奨します。

#### 評価値がmaxより大きい
```tsx
<Rating max={5} value={6} />
```

#### 負の評価値
```tsx
<Rating max={5} value={-1} />
```

#### maxが0以下
```tsx
<Rating max={0} value={3.5} />
```

## 要素

### Design Tokens
- Border Medium Emphasis (アイコンのデフォルト色)
- Object Rating Orang (アイコンのアクティブ色)
- Text High Emphasis (数字の色)

### プロパティ

#### Rating
```ts
type Props = {
  max: number;
  value: number;
  size: 'large' | 'medium' | 'small';
  showText?: boolean;
}
```

#### 評価値の変換処理
評価値（value）は、0.5刻みで表示されます。小数第1位以下は四捨五入され、0.5単位に変換されます。

```ts
const convertToValue = (num: number): number => {
  return Math.round(num * 2) / 2;
};
```

## 実装例
React実装の一例です。

```tsx
<Rating max={5} value={3.5} showText={true} size="medium" />
```

上記の実装から書き出されるマークアップです。

```html
<div class="spui-Rating" aria-label="3.5">
  <p class="spui-Rating-text spui-Rating-text--medium">3.5</p>
  <ul class="spui-Rating" aria-label="3.5">
    <li class="spui-Rating-item"><svg class="spui-Rating-item-icon spui-Rating-item-icon--medium"></svg></li>
    <li class="spui-Rating-item"><svg class="spui-Rating-item-icon spui-Rating-item-icon--medium"></svg></li>
    <li class="spui-Rating-item"><svg class="spui-Rating-item-icon spui-Rating-item-icon--medium"></svg></li>
    <li class="spui-Rating-item"><svg class="spui-Rating-item-icon spui-Rating-item-icon--medium"></svg></li>
    <li class="spui-Rating-item"><svg class="spui-Rating-item-icon spui-Rating-item-icon--medium"></svg></li>
  </ul>
</div>
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
