# Checkbox

## 概要・背景

Checkboxは、ユーザーが複数の選択肢の中から0個以上を選択するためのフォームコンポーネントです。単独での利用、または複数のCheckboxをグループ化した利用を想定しています。標準的なHTML input要素のtype="checkbox"をラップし、Spindleのデザインシステムに沿ったスタイルを提供します。

## スクリーンショット

## 使用例

### DO

Checkboxは、ラベルテキスト付きで使用することを推奨します。テキストがない場合は、`aria-label`属性で適切なラベルを提供してください。

```tsx
<Checkbox name="blog" value="amebaBlog">
  Amebaブログ
</Checkbox>
```

#### テキストなしで使用する場合

```tsx
<Checkbox aria-label="Amebaブログ" name="blog" value="amebaBlog" />
```

#### 暗い背景で使用する場合

暗い背景で使用する場合は、`inverse`プロパティを指定します。

```tsx
<Checkbox name="blog" value="amebaBlog" inverse>
  Amebaブログ
</Checkbox>
```

### DO NOT

ラベルテキストがなく、かつ`aria-label`も指定しない実装は避けてください。スクリーンリーダーユーザーがチェックボックスの目的を理解できません。

このコンポーネントは`className`プロパティを受け取らないため、チェックボックス自体の見た目を変更することはできません。レイアウトやスタイルを調整する必要がある場合は、このコンポーネントを別のコンポーネントでラップするなど、コンポーネントを組み合わせて実装してください。

## 要素

### Design Tokens

- Surface Primary (背景色)
- Text Low Emphasis (ラベルテキストの色)
- Border Medium Emphasis (チェックボックスのボーダー色)
- Border Low Emphasis Inverse (inverse時のボーダー色)
- Object Accent Primary (チェック時の背景色・選択時のテキスト色)
- Text High Emphasis Inverse (チェック時のアイコン色)
- Text Disabled (disabled時のテキスト色)
- Focus Clarity (フォーカス時のアウトライン色)

### プロパティ

```ts
type Props = {
  // ラベルテキスト (オプション)
  children?: React.ReactNode;
  // 暗い背景での使用時にtrue
  inverse?: boolean;
  // 標準のinput要素の属性 (name, value, checked, disabled, onChange など)
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'>;
```

## 実装例

### React実装の例

```tsx
<Checkbox name="blog" value="amebaBlog">
  Amebaブログ
</Checkbox>
```

### 書き出されるマークアップ

```html
<label class="spui-Checkbox-label">
  <input class="spui-Checkbox-input" type="checkbox" name="blog" value="amebaBlog">
  <span class="spui-Checkbox-icon">
    <svg aria-hidden="true"><!-- CheckBold icon --></svg>
  </span>
  <span class="spui-Checkbox-outline"></span>
  <span class="spui-Checkbox-text">Amebaブログ</span>
</label>
```

## アクセシビリティ

- [画像に代替テキストを提供する](https://a11y-guidelines.ameba.design/1/1/1/)[基本必須]
  - [ ] チェックアイコンに`aria-hidden="true"`を指定し、装飾として扱っている
- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)[基本必須]
  - [ ] label要素でinput要素とラベルテキストを関連付けている
  - [ ] テキストがない場合は`aria-label`属性でラベルを提供している
- [色だけで伝えない](https://a11y-guidelines.ameba.design/1/4/1/)[基本必須]
  - [ ] チェック状態を色だけでなく、チェックアイコンの表示で伝えている
- [テキストや文字画像のコントラストを確保する](https://a11y-guidelines.ameba.design/1/4/3/)[基本必須]
  - [ ] SpindleカラーパレットのTheme Colorsを適切に使い分けている
- [テキストサイズを拡大縮小できる](https://a11y-guidelines.ameba.design/1/4/4/)[基本必須]
  - [ ] 画面を200%拡大・文字サイズを2倍に変更しても、適切に文字が折り返され、チェックボックスも見切れない
- [キーボード、タッチデバイスで操作できる](https://a11y-guidelines.ameba.design/2/1/1/)[基本必須]
  - [ ] Tabキーでフォーカスでき、SpaceキーまたはEnterキーでチェック状態を切り替えできる
- [適切なフォーカス順序にする](https://a11y-guidelines.ameba.design/2/4/3/)[基本必須]
  - [ ] キーボード操作の順序が、見た目の順序と一致している
- [フォーカスを見えるようにする](https://a11y-guidelines.ameba.design/2/4/7/)[基本必須]
  - [ ] チェックボックスは、フォーカスの状態が見える
  - [ ] テキストがある場合とない場合で、適切なフォーカスインジケーターを表示している
- [ターゲットのサイズを理解する](https://a11y-guidelines.ameba.design/2/5/5/)[できれば]
  - [ ] タップ領域が44px x 44px程度確保されている（テキストがある場合）
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)[基本必須]
  - [ ] HTML仕様に準拠した実装をしている
  - [ ] セマンティックなinput[type="checkbox"]要素を使用している

## テスト方針

### ユニットテスト (Testing Library)

- チェックボックスがレンダリングされること
- クリック時にonChangeイベントが発火すること
- disabled状態で操作できないこと
- checked属性が適切に反映されること
- aria-label属性が適切に設定されること

### ヴィジュアルリグレッションテスト (Storybook)

- 通常状態
- チェック状態
- disabled状態
- テキスト付き
- inverse状態
- フォーカス状態

## リンク集

- [HTMLのinput要素 (MDN)](https://developer.mozilla.org/ja/docs/Web/HTML/Element/input/checkbox)
- [ARIA: checkbox role (MDN)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
