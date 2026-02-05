# InlineDropDown

## 概要・背景

InlineDropDownは、一覧画面の並び替えやフィルターなど、フォーム以外のコンテキストで選択肢を素早く切り替えるためのドロップダウンコンポーネントです。選択済みの値とアイコンを横並びで表示し、テキスト部分だけをサイズ違いで切り替えられるため、画面上のコンパクトな操作領域に適しています。

ネイティブの`select`要素を透過し、視覚的な表示をオーバーレイする構造を採用しています。選択肢が変更されると、JavaScriptで選択中のオプションテキストを取得して表示を更新します。フォーム送信やアクセシビリティはネイティブ要素が担うため、見た目と操作性の一貫性を保ちながらインラインUIを実現します。

InlineDropDownは試験的なコンポーネントであるため、破壊的な変更や削除等おこなわれる可能性があることに注意して利用してください。

## スクリーンショット

## 使用例

### DO

余白を含めてタップターゲットが44px以上になるよう配置してください。

ラベルを`aria-label`で設定し、`select`要素のサイズに応じて`visualSize`を選択してください。

```tsx
<InlineDropDown aria-label="期間を選択" name="term">
  <option value="today">今日</option>
  <option value="seven_days">7日間</option>
  <option value="thirty_days">30日間</option>
</InlineDropDown>
```

#### 小サイズで使う場合

```tsx
  <InlineDropDown visualSize="small" aria-label="期間を選択" name="term">
    <option value="today">今日</option>
    <option value="seven_days">7日間</option>
    <option value="thirty_days">30日間</option>
  </InlineDropDown>
```

### DO NOT

このコンポーネントは並び替えなどのインライン操作向けであり、フォーム本体の主要な選択UIとしては`DropDown`など標準的なコンポーネントを優先してください。

`className`プロパティで直接スタイル変更はできません。見た目の調整が必要な場合はラッパーコンポーネント側でレイアウトを制御してください。

## 要素

### Design Tokens

- Surface Primary (背景色)
- Surface Secondary (アイコン背景色)
- Surface Caution Light (エラー時背景色)
- Text High Emphasis (選択テキスト色)
- Text Disabled (未選択テキスト色)
- Object Low Emphasis (アイコン色)
- Border Medium Emphasis (ボーダー色)
- Border High Emphasis (フォーカス時ボーダー色)
- Border Caution (エラー時ボーダー色)
- Focus Ambiguous (フォーカス時アウトライン)

### プロパティ

```ts
interface Props
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'className'> {
  children?: React.ReactNode;
  visualSize?: 'medium' | 'small';
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}
```

`visualSize`は選択テキストとアイコンのサイズを切り替えます。`select`要素自体はネイティブのサイズに依存するため、フォームレイアウトに合わせて適切なサイズを選択してください。

## 実装例

React実装の一例です。`aria-label`によるラベリングを行うシンプルなパターンのみを示します。

```tsx
<InlineDropDown aria-label="期間を選択" name="term" placeholder="期間を選択">
  <option value="today">今日</option>
  <option value="seven_days">7日間</option>
  <option value="thirty_days">30日間</option>
</InlineDropDown>
```

上記の実装から書き出されるマークアップです。

```html
<label class="spui-InlineDropDown-label">
  <span class="spui-InlineDropDown-visual">
    <span class="spui-InlineDropDown-text spui-InlineDropDown-text--medium">今日</span>
    <span class="spui-InlineDropDown-icon spui-InlineDropDown-icon--medium"><svg aria-hidden="true"></svg></span>
  </span>
  <select class="spui-InlineDropDown-select spui-InlineDropDown-select--medium" aria-label="期間を選択" name="term" placeholder="期間を選択">
    <option value="today">今日</option>
    <option value="seven_days">7日間</option>
    <option value="thirty_days">30日間</option>
  </select>
  <span class="spui-InlineDropDown-outline"></span>
</label>
```

## アクセシビリティ

- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)[基本必須]
  - [ ] `aria-label`属性を設定し、適切なラベリングを行っている
- [テキストや文字画像のコントラストを確保する](https://a11y-guidelines.ameba.design/1/4/3/)[基本必須]
  - [ ] SpindleカラーパレットのTheme Colorsを適切に使い分けている
- [テキストサイズを拡大縮小できる](https://a11y-guidelines.ameba.design/1/4/4/)[基本必須]
  - [ ] 画面を200%拡大・文字サイズを2倍に変更しても、適切に文字が折り返され、情報が欠落していない
- [キーボード、タッチデバイスで操作できる](https://a11y-guidelines.ameba.design/2/1/1/)[基本必須]
  - [ ] Tabキーでフォーカスでき、上下キーで選択肢を移動できる
  - [ ] Spaceキーでドロップダウンを開くことができる
- [適切なフォーカス順序にする](https://a11y-guidelines.ameba.design/2/4/3/)[基本必須]
  - [ ] ラベル→InlineDropDown→同じ行で右隣に配置する並び替え・フィルター操作の順にTab移動でき、画面上で左から右へ並ぶ視覚順と一致している
- [フォーカスを見えるようにする](https://a11y-guidelines.ameba.design/2/4/7/)[基本必須]
  - [ ] select要素は、フォーカスの状態が見える（フォーカス時のアウトラインが表示される）
- [ターゲットのサイズを理解する](https://a11y-guidelines.ameba.design/2/5/5/)[基本必須]
  - [ ] InlineDropDown単体では44px未満のため、余白を含めてタップ領域が44px以上になるようレイアウトしている
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)[基本必須]
  - [ ] HTML仕様に準拠した実装をしている
  - [ ] ネイティブのselect要素を使用しているため、標準的なHTMLセマンティクスを維持している
- [カスタムコントロールの操作性を担保する](https://a11y-guidelines.ameba.design/4/1/2/)[基本必須]
  - [ ] ネイティブのselect要素を使用しているため、ブラウザの標準的なキーボード操作とスクリーンリーダーサポートが提供されている
  - [ ] 装飾用のアイコンには`aria-hidden="true"`を付与している

## テスト方針

### Testing Libraryでのユニットテスト

- 選択肢の選択が正しく動作し、表示テキストが更新されることを確認
- `onChange`ハンドラーが正しく呼び出されることを確認
- `ref`が正しく転送されることを確認
- `disabled`プロパティが正しく適用されることを確認
- プレースホルダーのみ指定された状態から選択肢を切り替えた際に表示が更新されることを確認

### Storybookでのテスト

- Mediumサイズの表示
- Smallサイズの表示
- プレースホルダー状態の表示
- ドロップダウン要素自体が無効化されている状態の表示
- 並び替えなどのインライン利用シナリオでの見た目確認

## リンク集

- [HTML select要素 - MDN Web Docs](https://developer.mozilla.org/ja/docs/Web/HTML/Element/select)
