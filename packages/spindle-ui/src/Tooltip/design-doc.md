# Tooltip

## 概要・背景

Tooltipは、UI要素に関連する補足的な説明や情報を提供するコンポーネントです。UIの見た目をすっきり保ちながら、必要な時にのみ情報を提供しますが、操作に不可欠な情報を表示するためには使用すべきではありません。

Figmaには表示形式はモードレスとモードの2種類が定義されていますが、現時点ではモードレスモード形式のみを実装します。モード形式は将来的にmodeのバリエーションとして対応する可能性があります。

また、表示パターンは以下の2種類があります。
- クリック表示: トリガー要素をクリックして表示する形式（トグルチップ）
- 初期表示: `open={true}`で最初から表示する形式

将来的にホバー形式も対応する可能性があります。

モードレスとして実装され、必ず閉じるボタンが表示されます。トリガー要素は基本的にインフォメーションアイコンやはてなアイコンを使用します。閉じるボタンまたはTooltipの外側をクリックで非表示にできます。

## 使用例

### クリック表示と初期表示の使い分け

#### クリック表示（トグルチップ）
トリガー要素をクリックして表示する形式です。補足的な情報や説明の提供に使用します。

- トリガー要素は基本的にインフォメーションアイコンやはてなアイコンを使用します
- クリックして表示するトリガーは基本的にアイコン以外使用しないでください

#### 初期表示
ページ読み込み時から表示する形式です。`open={true}`を設定します。チュートリアルや初回訪問時の説明など、補足的な情報を最初から表示したい場合に使用します。

### DO NOT

- Tooltip内に操作にとって必須の情報を含めないでください
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
  // ポインターが指す向き。デフォルト値はtopです
  direction?: Direction;
  // ポインターの位置。デフォルト値はcenterです
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

### 仕様

#### ポインター

Tooltipには三角形のポインターが表示され、トリガー要素を指し示します。ポインターの**向き（direction）**と**位置（position）**を指定できます。

**direction（ポインターが指す向き）**: Tooltipがトリガーのどの方向に表示されるかを指定します。ポインターは基本的に「上（Top）」または「下（Bottom）」の方向に配置しましょう。対象オブジェクトが上下に配置されている場合は、「右（Right）」または「左（Left）」の方向を使用することを推奨します。

- `top`: トリガーの下に表示され、ポインターが上を指す（基本）
- `bottom`: トリガーの上に表示され、ポインターが下を指す（基本）
- `right`: トリガーの左に表示され、ポインターが右を指す
- `left`: トリガーの右に表示され、ポインターが左を指す

**position（ポインターの位置）**: ポインターがTooltip内のどの位置に配置されるかを指定します。トリガーオブジェクトが、端から16～36pxの範囲に配置される場合は、ポインターの位置を「Edge Start」または「Edge End」に設定して表示します。

- `center`: ポインターがトリガーの中央に配置される（デフォルト）
- `start`: ポインターがTooltipの開始位置寄りに配置される
- `end`: ポインターがTooltipの終了位置寄りに配置される
- `edgeStart`: トリガーが画面端から16-36pxの範囲にある場合に使用
- `edgeEnd`: トリガーが画面端から16-36pxの範囲にある場合に使用

#### レイアウト・動作
- `Tooltip.Trigger`内のトリガー要素に、自動的に`aria-describedby`、`aria-expanded`、`ref`を付与します
- Tooltipの`id`を自動生成し、`aria-describedby`で関連付けます
- トリガー要素のサイズを取得し、ポインターがトリガーの中央に配置されるように位置を計算します
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
  <div id=":r1:" class="spui-Tooltip-frame spui-Tooltip-frame--information spui-Tooltip-frame--top spui-Tooltip-frame--center">
    <div class="spui-Tooltip-content">
      <div class="spui-Tooltip-text">ここに補足情報が入ります。</div>
      <div class="spui-Tooltip-closeButton">
        <button class="spui-IconButton spui-IconButton--exSmall spui-IconButton--neutral" type="button" aria-label="閉じる">
          <svg aria-hidden="true"><!-- Cross icon --></svg>
        </button>
      </div>
    </div>
  </div>
</div>
```

## アクセシビリティ

- [画像に代替テキストを提供する](https://a11y-guidelines.ameba.design/1/1/1/)[基本必須]
  - [ ] 閉じるボタンには`aria-label="閉じる"`が付与され、アイコンには`aria-hidden="true"`が付与されている
- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)[基本必須]
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
  - [ ] 画面拡大時にもTooltipの表示位置が適切に調整される
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
  - [ ] トリガー要素のタップ領域は、余白を含めて44px x 44px以上確保している
- [フォーカス時にコンテンツを大きく変更しない](https://a11y-guidelines.ameba.design/3/2/1/)[基本必須]
  - [ ] トリガーボタンにフォーカスしただけでは、Tooltipは表示されない(クリックが必要)
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)[基本必須]
  - [ ] HTML仕様に準拠した実装をしている
- [カスタムコントロールの操作性を担保する](https://a11y-guidelines.ameba.design/4/1/2/)[基本必須]
  - [ ] トリガーボタンに`aria-describedby`でTooltipのIDを関連付けている（自動）
  - [ ] トリガーボタンに`aria-expanded`で開閉状態を示している（自動）
  - [ ] スクリーンリーダーでも機能落ちがなく、読み上げが過不足なく行われている

## テスト方針

### ユニットテスト（Testing Library）

- `open`プロパティによる開閉の動作確認
- `onClose`コールバックが適切に呼び出されることの確認
- Escapeキー押下時に閉じることの確認
- 閉じるボタンクリック時に閉じることの確認
- 外側クリック時に閉じることの確認

### ヴィジュアルリグレッションテスト（Storybook）

- 各variant（information、confirmation、error）の表示確認
- 各direction（top、right、bottom、left）の表示確認
- 各position（edgeStart、start、center、end、edgeEnd）の表示確認
- モバイルとデスクトップでのサイズの確認
- 長いテキストの折り返し表示確認

## リンク集

- [Tooltip Pattern - APG | WAI | W3C](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)
- [ARIA: tooltip role - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role)
- [1.4.13 ホバーまたはフォーカスで表示されるコンテンツを制御できる - Ameba Accessibility Guidelines](https://a11y-guidelines.ameba.design/1/4/13/)
