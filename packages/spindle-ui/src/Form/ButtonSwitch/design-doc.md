# ButtonSwitch

## 概要・背景

2つの選択肢のうち1つを選択するためのコンポーネントです。スイッチのような操作感を持ち、選択肢を切り替えることができます。どちらも選択していないニュートラルな状態を持つこともできることが、[Radio](https://ameba-spindle.web.app/?path=/story/form-radio--radio)や[ToggleSwitch](https://ameba-spindle.web.app/?path=/docs/form-toggleswitch--toggle-switch)との違いです。

## スクリーンショット

## 使用例

### DO

ラベルには「できれば」「必須」「すべて」など、フィルタリングの条件に類する言葉を使用することを想定しています。また、文字数は最大5文字程度を目安とします。外部の見出し等と関連付けるために、`aria-labelledby` を用いた名前付けを行ってください。

```tsx
<ButtonSwitch
  value="prefer" // "prefer" or "required" or null
  options={[
    {
      label: 'できれば',
      value: 'prefer',
    },
    {
      label: '必須',
      value: 'required',
    },
  ]}
  onClick={(value) => console.log(value)}
/>
```

#### ラベルとの関連付け

```tsx
<h2 id="label-id">公開範囲</h2>
<ButtonSwitch
  ariaLabelledby="label-id"
  value="prefer"
  options={[
    { label: 'できれば', value: 'prefer' },
    { label: '必須', value: 'required' },
  ]}
  onClick={(value) => console.log(value)}
/>
```

### DO NOT

ラベルには「送信」「実行」など、直接的なアクションを想起する動詞は使用しないでください。

2つ以上の選択肢を持たせることも可能ですが、レイアウトが崩れやすくなるため推奨しません。

## 要素

### Design Tokens

- Surface Tertiary (背景色)
- Text Medium Emphasis (テキスト色)
- Hover Neutral Button (ホバー時の背景色)
- Surface Accent Primary (選択時の背景色)
- Text High Emphasis Inverse (選択時のテキスト色)
- Object High Emphasis Inverse (選択時のチェックアイコンの色)
- Hover Contained Button (ホバー時かつ選択時の背景色)
- Border Row Empasis (中央のボーダー色)

### プロパティ

```ts
type Props = {
  id?: string;
  value: string | null;
  options: {
    label: string;
    value: string;
  }[];
  onClick: (value: string) => void;
};
```

## 実装例

書き出されるマークアップです。

```html
<div class="spui-ButtonSwitch" role="group" aria-labelledby="label-id">
  <button type="button" aria-pressed="true" class="spui-ButtonSwitch-button">選択肢1</button>
  <button type="button" aria-pressed="false" class="spui-ButtonSwitch-button">選択肢2</button>
</div>
```

## アクセシビリティ

- [画像に代替テキストを提供する](https://a11y-guidelines.ameba.design/1/1/1/)
  - [ ] チェックアイコンは代替テキストが空になっている
- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)
  - [ ] label要素と関連付けられている
- [色だけで伝えない](https://a11y-guidelines.ameba.design/1/4/1/)
  - [ ] 色だけで選択状態を伝えない
- [テキストや文字画像のコントラストを確保する](https://a11y-guidelines.ameba.design/1/4/3/)
  - [ ] SpindleカラーパレットのTheme Colorsを適切に使い分けている
- [テキストサイズを拡大縮小できる](https://a11y-guidelines.ameba.design/1/4/4/)
  - [ ] 画面を200%拡大・文字サイズを2倍に変更しても、適切に文字が折り返され、チェックアイコンも見切れない
- [キーボード、タッチデバイスで操作できる](https://a11y-guidelines.ameba.design/2/1/1/)
  - [ ] Tabキーでフォーカスでき、上下左右キーで選択肢を移動・切り替えできる
  - [ ] EnterキーまたはSpaceキーでフォーカス中のアイテムの選択状態を切り替えることができる
- [適切なフォーカス順序にする](https://a11y-guidelines.ameba.design/2/4/3/)
  - [ ] キーボード操作の順序が、見た目の順序と一致している
- [フォーカスを見えるようにする](https://a11y-guidelines.ameba.design/2/4/7/)
  - [ ] ボタンは、フォーカスの状態が見える
- [ターゲットのサイズを理解する](https://a11y-guidelines.ameba.design/2/5/5/)
  - [ ] タップ領域は44px x 44px以上確保している
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)
  - [ ] HTML仕様に準拠した実装をしている
- [カスタムコントロールの操作性を担保する](https://a11y-guidelines.ameba.design/4/1/2/)
- [ ] ボタンスイッチをラップしている要素は`div role="group"`で、外部テキストと名前付けできる（`aria-labelledby`）。選択中のボタンに`aria-pressed="true"`、選択されていないボタンに`aria-pressed="false"`を付与している
  - [ ] スクリーンリーダーでも機能落ちがなく、どのボタンが選択状態かが過不足なく読み上げられている
