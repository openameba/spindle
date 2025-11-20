# Tooltip

## 概要・背景

Tooltipは、UI要素に関連する補足的な説明や情報を提供するコンポーネントです。UIの見た目をすっきり保ちながら、必要な時にのみ情報を提供しますが、操作に不可欠な情報を表示するためには使用すべきではありません。

現時点では**クリックした際に表示する形式(トグルチップ形式)**として実装します。将来的にhoverによる表示にも破壊的変更なしで対応できる設計を想定しています。

モードレスとして実装され、必ず閉じるボタンが表示されます。トリガー要素(基本的にはインフォメーションアイコンやはてなアイコン)をクリックして表示します。閉じるボタンまたはトリガー要素の再クリックで非表示にできます。

## 使用例

### DO

- 補足的な情報や説明の提供に使用します
- トリガー要素は基本的にインフォメーションアイコンやはてなアイコンを使用します
- 矢印は基本的に「top」または「bottom」の方向に配置します
- トリガーが上下に配置されている場合は、「right」または「left」の方向を使用します
- トリガーが画面端から16〜36pxの範囲にある場合は、矢印の位置を「edgeStart」または「edgeEnd」に設定します

### DO NOT

- Tooltip内に操作にとって必須の情報を含めないでください
- クリックして表示するトリガーは基本的にアイコン以外使用しないでください
- Tooltip内に多くの情報やインタラクションを含めないでください
- できるだけ控えめに活用しましょう。Tooltipの使用は最小限にとどめることを推奨します

## 要素

### Design Tokens

#### Variant: Information
- Surface Accent Neutral High Emphasis (背景色)
- Text High Emphasis Inverse (テキスト色)
- Object High Emphasis Inverse (アイコン色)

#### Variant: Confirmation
- Surface Accent Primary (背景色)
- Text High Emphasis Inverse (テキスト色)
- Object High Emphasis Inverse (アイコン色)

#### Variant: Error
- Surface Caution (背景色)
- Text High Emphasis Inverse (テキスト色)
- Object High Emphasis Inverse (アイコン色)

#### その他
- Box Shadow Lv6 Strong
- Animation Appear In Duration (表示時のアニメーション時間)
- Animation Appear In Easing (表示時のイージング)
- Animation Disappear Duration (非表示時のアニメーション時間)
- Animation Disappear Easing (非表示時のイージング)

### プロパティ

#### Tooltip.Frame

```ts
type Direction = 'top' | 'right' | 'bottom' | 'left';
type Position = 'edgeStart' | 'start' | 'center' | 'end' | 'edgeEnd';
type Variant = 'information' | 'confirmation' | 'error';

type Props = {
  children: React.ReactNode;
  // Tooltipの開閉状態
  open: boolean;
  // Tooltipの色バリエーション。デフォルト値はinformationです
  variant?: Variant;
  // 矢印の向き。デフォルト値はtopです
  direction?: Direction;
  // 矢印の位置。デフォルト値はcenterです
  position?: Position;
  // 閉じるボタンがクリックされたときのコールバック
  onClose: () => void;
};
```

#### Tooltip.Trigger

```ts
type Props = {
  children: React.ReactNode;
};
```

#### Tooltip.Content

```ts
type Props = {
  children?: React.ReactNode;
};
```

#### レイアウト・動作
- `Tooltip.Trigger`内のトリガー要素に、自動的に`aria-describedby`、`aria-expanded`、`ref`を付与します
- Tooltipの`id`を自動生成し、`aria-describedby`で関連付けます
- トリガー要素のサイズを取得し、矢印がトリガーの中央に配置されるように位置を計算します
- Escapeキーでtooltipを閉じることができます
- 外側をクリックするとtooltipを閉じます

## 実装例

React実装の一例です。

```tsx
function TooltipExample() {
  const [open, setOpen] = useState(false);

  return (
    <Tooltip.Frame
      open={open}
      variant="information"
      onClose={() => setOpen(false)}
    >
      <Tooltip.Trigger>
        <IconButton
          aria-label="詳細情報"
          onClick={() => setOpen(!open)}
        >
          <Information aria-hidden="true" />
        </IconButton>
      </Tooltip.Trigger>
      <Tooltip.Content>
        ここに補足情報が入ります。
      </Tooltip.Content>
    </Tooltip.Frame>
  );
}
```

上記の実装から書き出されるマークアップです。

```html
<div class="spui-Tooltip">
  <button class="spui-IconButton" aria-label="詳細情報" aria-describedby=":r1:" aria-expanded="true">
    <svg aria-hidden="true"><!-- Information icon --></svg>
  </button>
  <div id=":r1:" class="spui-Tooltip-frame spui-Tooltip-frame--information spui-Tooltip-frame--top spui-Tooltip-frame--center" role="tooltip">
    <div class="spui-Tooltip-content">
      <div class="spui-Tooltip-text">ここに補足情報が入ります。</div>
      <button type="button" aria-label="閉じる">
        <svg aria-hidden="true"><!-- Cross icon --></svg>
      </button>
    </div>
    <div class="spui-Tooltip-arrow"></div>
  </div>
</div>
```

## アクセシビリティ

- [画像に代替テキストを提供する](https://a11y-guidelines.ameba.design/1/1/1/)[基本必須]
  - [ ] 閉じるボタンには`aria-label="閉じる"`が付与され、アイコンには`aria-hidden="true"`が付与されている
- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)[基本必須]
  - [ ] Tooltipに`role="tooltip"`が設定されている
  - [ ] トリガーボタンに`aria-describedby`でTooltipのIDが自動的に関連付けられている
  - [ ] トリガーボタンに`aria-expanded`で開閉状態が自動的に示されている
- [表示の向きを固定しない](https://a11y-guidelines.ameba.design/1/3/4/)[できれば]
  - [ ] 端末を横向きにしても、適切に文字が折り返されレイアウトが変わり、コンテンツが見切れていない
  - [ ] 端末の向きが縦向き(portrait)を前提としたデザインになっていない
- [テキストや文字画像のコントラストを確保する](https://a11y-guidelines.ameba.design/1/4/3/)[基本必須]
  - [ ] SpindleカラーパレットのTheme Colorsを適切に使い分け、コントラスト比を確保している(Text 4.5:1, Object 3:1)
- [テキストサイズを拡大縮小できる](https://a11y-guidelines.ameba.design/1/4/4/)[基本必須]
  - [ ] 画面を200%拡大・文字サイズを2倍に変更しても、適切に文字が折り返され、情報が欠落していない
- [リフローできる](https://a11y-guidelines.ameba.design/1/4/10/)[できれば]
  - [ ] 画面を400%まで拡大しても、画面幅に合わせて要素のサイズが変動し、テキストは適切に折り返される
- [ホバーまたはフォーカスで表示されるコンテンツを制御できる](https://a11y-guidelines.ameba.design/1/4/13/)[基本必須]
  - [ ] クリックで表示したTooltipは、閉じるボタンまたはEscキーで非表示にできる
  - [ ] Tooltip表示中も、Tooltipの内容にマウスホバーできる
  - [ ] Tooltipは自動で消えない(ユーザーが明示的に閉じるまで表示される)
- [キーボード、タッチデバイスで操作できる](https://a11y-guidelines.ameba.design/2/1/1/)[基本必須]
  - [ ] トリガーボタンと閉じるボタンにTabキーでフォーカスでき、EnterキーまたはSpaceキーで操作できる
  - [ ] Escapeキーでtooltipを閉じることができる
- [適切なフォーカス順序にする](https://a11y-guidelines.ameba.design/2/4/3/)[基本必須]
  - [ ] キーボード操作時に、トリガーボタン→Tooltip内の閉じるボタン→次の要素の順でフォーカスが移動する
- [フォーカスを見えるようにする](https://a11y-guidelines.ameba.design/2/4/7/)[基本必須]
  - [ ] トリガーボタンと閉じるボタンは、フォーカスの状態が見える
- [ターゲットのサイズを理解する](https://a11y-guidelines.ameba.design/2/5/5/)[できれば]
  - [ ] タップ領域は44px x 44px以上確保している
- [フォーカス時にコンテンツを大きく変更しない](https://a11y-guidelines.ameba.design/3/2/1/)[基本必須]
  - [ ] トリガーボタンにフォーカスしただけでは、Tooltipは表示されない(クリックが必要)
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)[基本必須]
  - [ ] HTML仕様に準拠した実装をしている
- [カスタムコントロールの操作性を担保する](https://a11y-guidelines.ameba.design/4/1/2/)[基本必須]
  - [ ] Tooltipに`role="tooltip"`を設定している
  - [ ] トリガーボタンに`aria-describedby`でTooltipのIDを関連付けている（自動）
  - [ ] トリガーボタンに`aria-expanded`で開閉状態を示している（自動）
  - [ ] スクリーンリーダーでも機能落ちがなく、読み上げが過不足なく行われている

## テスト方針

### ユニットテスト(Testing Library)

- `open`プロパティによる開閉の動作確認
- `onClose`コールバックが適切に呼び出されることの確認
- Escapeキー押下時に閉じることの確認
- 閉じるボタンクリック時に閉じることの確認
- `direction`と`position`が正しく適用されることの確認

### ヴィジュアルリグレッションテスト(Storybook)

- 各variant(information、confirmation、error)の表示確認
- 各direction(top、right、bottom、left)の表示確認
- 各position(edgeStart、start、center、end、edgeEnd)の表示確認
- モバイルとデスクトップでのサイズの確認
- 長いテキストの折り返し表示確認

## リンク集

- [Tooltip Pattern - APG | WAI | W3C](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)
- [ARIA: tooltip role - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role)
- [1.4.13 ホバーまたはフォーカスで表示されるコンテンツを制御できる - Ameba Accessibility Guidelines](https://a11y-guidelines.ameba.design/1/4/13/)
