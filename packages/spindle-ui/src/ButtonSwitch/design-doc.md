# ButtonSwitch

## 概要・背景

2つの選択肢のうち1つを選択するためのコンポーネントです。スイッチのような操作感を持ち、選択肢を切り替えることができます。どちらも選択していないニュートラルな状態を持つこともできます。

## スクリーンショット

## 使用例

### DO

```tsx
<ButtonSwitch
  value="option1" // "option1" or "option2" or null
  options={[
    {
      label: '選択肢1',
      value: 'option1',
    },
    {
      label: '選択肢2',
      value: 'option2',
    },
  ]}
  onClick={(value) => console.log(value)}
/>
```

### DO NOT

2つ以上の選択肢を持たせることも可能ですが、レイアウトが崩れやすくなるため推奨しません。

## 要素

### Design Tokens

- Surface Tertiary (背景色)
- Text Medium Emphasis (テキスト色)
- Surface Quaternary (ホバー時の背景色)
- Surface Accent Primary (選択時の背景色)
- Text High Emphasis Inverse (選択時のテキスト色)
- Border Row Empasis (中央のボーダー色)

### プロパティ

```ts
type Props = {
  value: string | null;
  options: {
    label: string;
    value: string;
  }[];
  onClick?: (value: string) => void;
};
```

## 実装例

書き出されるマークアップです。

```html
<div class="spui-ButtonSwitch" role="group">
  <button
    type="button"
    aria-pressed="true"
    class="spui-ButtonSwitch--button"
    data-value="option1"
  >
    選択肢1
  </button>
  <button
    type="button"
    aria-pressed="false"
    class="spui-ButtonSwitch--button"
    data-value="option2"
  >
    選択肢2
  </button>
</div>
```

## アクセシビリティ

- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)
- [色だけで伝えない](https://a11y-guidelines.ameba.design/1/4/1/)
  - [ ] 色だけで選択状態を伝えない
- [テキストや文字画像のコントラストを確保する](https://a11y-guidelines.ameba.design/1/4/3/)
  - [ ] SpindleカラーパレットのTheme Colorsを適切に使い分けている
- [テキストサイズを拡大縮小できる](https://a11y-guidelines.ameba.design/1/4/4/)
  - [ ] 画面を200%拡大・文字サイズを2倍に変更しても、適切に文字が折り返される
- [キーボード、タッチデバイスで操作できる](https://a11y-guidelines.ameba.design/2/1/1/)
  - [ ] Tabキーでフォーカスでき、Enterキーで選択できる
- [適切なフォーカス順序にする](https://a11y-guidelines.ameba.design/2/4/3/)
  - [ ] キーボード操作の順序が、見た目の順序と一致している
- [フォーカスを見えるようにする](https://a11y-guidelines.ameba.design/2/4/7/)
  - [ ] ボタンは、フォーカスの状態が見える
- [ターゲットのサイズを理解する](https://a11y-guidelines.ameba.design/2/5/5/)
  - [ ] タップ領域は44px x 44px以上確保している
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)
  - [ ] HTML仕様に準拠した実装をしている
- [カスタムコントロールの操作性を担保する](https://a11y-guidelines.ameba.design/4/1/2/)
  - [ ] ボタンスイッチをラップしているdiv要素に`role="group"`、選択中のボタンに`aria-pressed="true"`を付与している
  - [ ] スクリーンリーダーでも機能落ちがなく、読み上げが過不足なく行われている
