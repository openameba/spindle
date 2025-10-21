# Radio

## 概要・背景

Radioは、複数の選択肢から1つを選択するためのフォームコンポーネントです。同じ`name`属性を持つRadioボタンのグループ内で、常に1つだけが選択された状態になります。標準的なHTML input要素のtype="radio"をラップし、Spindleのデザインシステムに沿ったスタイルを提供します。テキストラベルの有無に関わらず使用でき、視覚的にも操作的にもアクセシブルな実装を提供します。

## スクリーンショット

## 使用例

### DO

Radioボタンは、排他的な選択肢を提供する際に使用します。テキストラベル付きで使用することを推奨します。

```tsx
<Radio id="option1" name="group1">
  選択肢1
</Radio>
<Radio id="option2" name="group1">
  選択肢2
</Radio>
```

#### テキストなしで使用する場合

テキストラベルなしで使用する場合は、必ず`aria-label`属性で適切なラベルを提供してください。

```tsx
<Radio aria-label="Amebaブログ" id="blog" name="service" />
```

#### グループ化して提示する場合

関連するラジオボタンを1つの質問として提示する場合は、`fieldset`と`legend`を用いて意味づけを行い、支援技術にグループ名を提供することを推奨します。

```tsx
<fieldset>
  <legend>サービスを選択</legend>
  <Radio id="service-1" name="service">
    Amebaブログ
  </Radio>
  <Radio id="service-2" name="service">
    Amebaマンガ
  </Radio>
  <Radio id="service-3" name="service">
    Amebaピグ
  </Radio>
</fieldset>
```

### DO NOT

ラベルテキストがなく、かつ`aria-label`も指定しない実装は避けてください。スクリーンリーダーユーザーがラジオボタンの目的を理解できません。

このコンポーネントは`className`プロパティを受け取らないため、ラジオボタン自体の見た目を変更することはできません。レイアウトやスタイルを調整する必要がある場合は、このコンポーネントを別のコンポーネントでラップするなど、コンポーネントを組み合わせて実装してください。

複数選択が必要な場合は、Radioではなく[Checkbox](https://ameba-spindle.web.app/?path=/story/form-checkbox--checkbox)を使用してください。

オン/オフの切り替えが必要な場合は、[ToggleSwitch](https://ameba-spindle.web.app/?path=/docs/form-toggleswitch--toggle-switch)の使用を検討してください。

## 要素

### Design Tokens

- Surface Primary (背景色)
- Border Medium Emphasis (未選択時のボーダー色)
- Object Accent Primary (選択時の背景色・選択時のテキスト色)
- Text High Emphasis Inverse (選択時のチェックアイコン色)
- Text Low Emphasis (未選択時のテキスト色)
- Text Disabled (無効時のテキスト色)
- Focus Clarity (フォーカス時のアウトライン色)

### プロパティ

```ts
type Props = {
  // ラベルテキスト (オプション)
  children?: React.ReactNode;
  // 一意のID (必須)
  id: string;
  // 標準のinput要素の属性 (name, value, checked, disabled, onChange など)
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'>;
```

## 実装例

### React実装の例

```tsx
<Radio id="option1" name="service">
  Amebaブログ
</Radio>
```

### 書き出されるマークアップ

```html
<label class="spui-Radio-label" for="option1">
  <input class="spui-Radio-input" id="option1" type="radio" name="service">
  <span class="spui-Radio-icon">
    <svg aria-hidden="true"><!-- CheckBold icon --></svg>
  </span>
  <span class="spui-Radio-outline"></span>
  <span class="spui-Radio-text">Amebaブログ</span>
</label>
```

## アクセシビリティ

- [画像に代替テキストを提供する](https://a11y-guidelines.ameba.design/1/1/1/)[基本必須]
  - [ ] チェックアイコンに`aria-hidden="true"`を指定し、装飾として扱っている
- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)[基本必須]
  - [ ] label要素でinput要素とラベルテキストを関連付けている
  - [ ] テキストがない場合は`aria-label`属性でラベルを提供している
  - [ ] 関連するラジオボタンをグループ化する場合は`fieldset`と`legend`を使用している
- [色だけで伝えない](https://a11y-guidelines.ameba.design/1/4/1/)[基本必須]
  - [ ] 選択状態を色だけでなく、チェックアイコンの表示で伝えている
- [テキストや文字画像のコントラストを確保する](https://a11y-guidelines.ameba.design/1/4/3/)[基本必須]
  - [ ] SpindleカラーパレットのTheme Colorsを適切に使い分けている
- [テキストサイズを拡大縮小できる](https://a11y-guidelines.ameba.design/1/4/4/)[基本必須]
  - [ ] 画面を200%拡大・文字サイズを2倍に変更しても、適切に文字が折り返され、ラジオボタンも見切れない
- [キーボード、タッチデバイスで操作できる](https://a11y-guidelines.ameba.design/2/1/1/)[基本必須]
  - [ ] Tabキーでフォーカスでき、SpaceキーまたはEnterキーで選択できる
  - [ ] 矢印キーでグループ内のラジオボタン間を移動できる
- [適切なフォーカス順序にする](https://a11y-guidelines.ameba.design/2/4/3/)[基本必須]
  - [ ] キーボード操作の順序が、見た目の順序と一致している
- [フォーカスを見えるようにする](https://a11y-guidelines.ameba.design/2/4/7/)[基本必須]
  - [ ] ラジオボタンは、フォーカスの状態が見える
  - [ ] テキストがある場合とない場合で、適切なフォーカスインジケーターを表示している
- [ターゲットのサイズを理解する](https://a11y-guidelines.ameba.design/2/5/5/)[できれば]
  - [ ] タップ領域が44px x 44px程度確保されている（テキストがある場合）
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)[基本必須]
  - [ ] HTML仕様に準拠した実装をしている
  - [ ] セマンティックなinput[type="radio"]要素を使用している

## テスト方針

### ユニットテスト (Testing Library)

- ラジオボタンがレンダリングされること
- ラベルをクリックしたときに選択状態になること
- ラジオボタン本体をクリックしたときに選択状態になること
- クリック時にonChangeイベントが発火すること
- disabled状態で操作できないこと
- checked属性が適切に反映されること
- aria-label属性が適切に設定されること
- `ref`が正しくフォワードされること
- 同じグループ内で別のラジオボタンを選択したときに、以前選択されていたものが解除されること
- キーボードナビゲーション（矢印キー）でグループ内のラジオボタン間を移動できること

### ヴィジュアルリグレッションテスト (Storybook)

- 通常状態
- チェック状態
- disabled状態
- disabled状態でチェックされている状態
- テキスト付き（同じnameを持つ複数のラジオボタングループ、長いテキストの折り返し表示を含む）
- フォーカス状態

## リンク集

- [MDN: &lt;input type="radio"&gt;](https://developer.mozilla.org/ja/docs/Web/HTML/Element/input/radio)
- [ARIA: radio role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role)
