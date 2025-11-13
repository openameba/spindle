# DropDown

## 概要・背景

DropDownは、ユーザーが複数の選択肢の中から1つを選択するためのフォームコンポーネントです。標準的なHTML select要素をラップし、Spindleのデザインシステムに沿ったスタイルを提供します。

本コンポーネントは、ネイティブのselect要素の見た目をカスタマイズするために、視覚的なオーバーレイを使用しています。実際のselect要素は透明にして、その上に選択されたテキストとアイコンを表示する構造になっています。これにより、ブラウザ間で一貫したデザインを実現しています。

## スクリーンショット

## 使用例

### DO

DropDownは、`aria-label`属性または`InputLabel`コンポーネントと組み合わせて、適切なラベリングを行ってください。

```tsx
<DropDown aria-label="期間を選択" name="term">
  <option value="today">今日</option>
  <option value="seven_days">7日間</option>
  <option value="thirty_days">30日間</option>
</DropDown>
```

#### InputLabelと組み合わせて使用する場合

```tsx
<>
  <InputLabel id="term-selection">期間を選択</InputLabel>
  <DropDown id="term-selection" name="term">
    <option value="today">今日</option>
    <option value="seven_days">7日間</option>
    <option value="thirty_days">30日間</option>
  </DropDown>
</>
```

#### エラー状態を表示する場合

```tsx
<DropDown aria-label="期間を選択" hasError name="term">
  <option value="today">今日</option>
  <option value="seven_days">7日間</option>
  <option value="thirty_days">30日間</option>
</DropDown>
```

### DO NOT

このコンポーネントは`className`プロパティを受け取らないため、ドロップダウン自体の見た目を変更することはできません。レイアウトやスタイルを調整する必要がある場合は、このコンポーネントを別のコンポーネントでラップするなど、コンポーネントを組み合わせて実装してください。

ラベルテキストがなく、かつ`aria-label`も指定しない実装は避けてください。スクリーンリーダーユーザーがドロップダウンの目的を理解できません。

## 要素

### Design Tokens

- Surface Primary (背景色)
- Surface Secondary (アイコン領域の背景色)
- Surface Caution Light (エラー時の背景色)
- Text High Emphasis (選択時のテキスト色)
- Text Disabled (未選択時のテキスト色)
- Object Low Emphasis (アイコンの色)
- Border Medium Emphasis (ボーダー色)
- Border High Emphasis (フォーカス時のボーダー色)
- Border Caution (エラー時のボーダー色)
- Focus Ambiguous (フォーカス時のシャドウ色)

### プロパティ

```ts
interface Props
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'className'> {
  children?: React.ReactNode;
  hasError?: boolean;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}
```

## 実装例

React実装の一例です。

```tsx
<DropDown aria-label="期間を選択" name="term">
  <option value="today">今日</option>
  <option value="seven_days">7日間</option>
  <option value="thirty_days">30日間</option>
</DropDown>
```

上記の実装から書き出されるマークアップです。

```html
<label class="spui-DropDown-label is-active">
  <span class="spui-DropDown-visual">今日</span>
  <span class="spui-DropDown-icon">
    <svg aria-hidden="true">...</svg>
  </span>
  <select aria-label="期間を選択" class="spui-DropDown-select" name="term">
    <option value="today">今日</option>
    <option value="seven_days">7日間</option>
    <option value="thirty_days">30日間</option>
  </select>
  <span class="spui-DropDown-outline"></span>
</label>
```

## アクセシビリティ

- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)[基本必須]
  - [ ] `aria-label`属性または`InputLabel`コンポーネントと組み合わせて、適切なラベリングを行っている
- [色だけで伝えない](https://a11y-guidelines.ameba.design/1/4/1/)[基本必須]
  - [ ] エラー状態を色だけでなく、ボーダー色と背景色の両方で伝えている
- [テキストや文字画像のコントラストを確保する](https://a11y-guidelines.ameba.design/1/4/3/)[基本必須]
  - [ ] SpindleカラーパレットのTheme Colorsを適切に使い分けている
- [テキストサイズを拡大縮小できる](https://a11y-guidelines.ameba.design/1/4/4/)[基本必須]
  - [ ] 画面を200%拡大・文字サイズを2倍に変更しても、適切に文字が折り返され、情報が欠落していない
- [キーボード、タッチデバイスで操作できる](https://a11y-guidelines.ameba.design/2/1/1/)[基本必須]
  - [ ] Tabキーでフォーカスでき、上下キーで選択肢を移動できる
  - [ ] EnterキーまたはSpaceキーでドロップダウンを開くことができる
- [適切なフォーカス順序にする](https://a11y-guidelines.ameba.design/2/4/3/)[基本必須]
  - [ ] キーボード操作の順序が、見た目の順序と一致している
- [フォーカスを見えるようにする](https://a11y-guidelines.ameba.design/2/4/7/)[基本必須]
  - [ ] select要素は、フォーカスの状態が見える（フォーカス時のアウトラインが表示される）
- [ターゲットのサイズを理解する](https://a11y-guidelines.ameba.design/2/5/5/)[基本必須]
  - [ ] タップ領域は40px以上の高さを確保している
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)[基本必須]
  - [ ] HTML仕様に準拠した実装をしている
  - [ ] ネイティブのselect要素を使用しているため、標準的なHTMLセマンティクスを維持している
- [カスタムコントロールの操作性を担保する](https://a11y-guidelines.ameba.design/4/1/2/)[基本必須]
  - [ ] ネイティブのselect要素を使用しているため、ブラウザの標準的なキーボード操作とスクリーンリーダーサポートが提供されている
  - [ ] 装飾用のアイコンには`aria-hidden="true"`を付与している

## テスト方針

### Testing Libraryでのユニットテスト

- 選択肢の選択が正しく動作することを確認
- `onChange`ハンドラーが正しく呼び出されることを確認
- `ref`が正しく転送されることを確認
- `hasError`プロパティが正しく適用されることを確認
- `disabled`プロパティが正しく適用されることを確認
- 選択が変更された際に表示テキストが正しく更新されることを確認

### Storybookでのテスト

- デフォルト状態の表示
- 選択済みかつ無効化されたオプションがある場合の表示
- エラー状態の表示
- ドロップダウン要素自体が無効化されている状態の表示
- 初期選択がない状態（プレースホルダー状態）の表示

## リンク集

- [HTML select要素 - MDN Web Docs](https://developer.mozilla.org/ja/docs/Web/HTML/Element/select)

