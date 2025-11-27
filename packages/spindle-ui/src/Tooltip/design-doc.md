# Tooltip

## 概要・背景

Tooltipは、UI要素に関連する補足的な説明や情報を提供するコンポーネントです。UIの見た目をすっきり保ちながら、必要な時にのみ情報を提供しますが、操作に不可欠な情報を表示するためには使用すべきではありません。

FigmaではTooltip（モードレス形式）とToggletip（モード形式）の2種類が定義されていますが、実装上は別Componentとして実装します。ToggletipはTooltipコンポーネントとしての対応予定はありません。

Tooltipコンポーネントは、表示方法によって次の2つのモードをサポートします。

### Controlled Mode
`open`と`onClose`プロパティを指定して、表示/非表示を外部から制御します。

- **クリック表示**: トリガー要素をクリックして表示/非表示を切り替える
- **初期表示**: `open={true}`で最初から表示する

閉じるボタンが表示され、閉じるボタン・Escapeキー・外側クリック・トリガー再クリックで非表示にできます。

### Uncontrolled Mode
`open`プロパティを指定しない場合、内部で自動的にhover/focusで表示/非表示を管理します。

- **hover表示**: トリガー要素にマウスホバーで表示
- **focus表示**: トリガー要素にフォーカスで表示

閉じるボタンは表示されず、マウスを離す/フォーカスを外すと自動的に非表示になります。

## 使用例

### Controlled Mode: クリック表示

トリガー要素をクリックして表示する形式です。補足的な情報や説明の提供に使用します。

```tsx
const [open, setOpen] = useState(false);

<Tooltip.Frame open={open} onClose={() => setOpen(false)}>
  <Tooltip.Trigger>
    <IconButton aria-label="詳細情報" onClick={() => setOpen(!open)}>
      <Information aria-hidden="true" />
    </IconButton>
  </Tooltip.Trigger>
  <Tooltip.Content>補足情報</Tooltip.Content>
</Tooltip.Frame>
```

- トリガー要素は基本的にインフォメーションアイコンやはてなアイコンを使用します
- 閉じるボタンが表示されます

### Controlled Mode: 初期表示

ページ読み込み時から表示する形式です。チュートリアルや初回訪問時の説明など、補足的な情報を最初から表示したい場合に使用します。

```tsx
const [open, setOpen] = useState(true);  // 初期状態から表示

<Tooltip.Frame open={open} onClose={() => setOpen(false)}>
  <Tooltip.Trigger>
    <IconButton aria-label="詳細情報">
      <Information aria-hidden="true" />
    </IconButton>
  </Tooltip.Trigger>
  <Tooltip.Content>チュートリアル: この機能の使い方</Tooltip.Content>
</Tooltip.Frame>
```

- 閉じるボタンが表示されます

### Uncontrolled Mode: hover/focus表示

トリガー要素にマウスホバーまたはフォーカスで自動的に表示されます。補足的な情報を提供する一般的なtooltipの動作です。

```tsx
<Tooltip.Frame>
  <Tooltip.Trigger>
    <IconButton aria-label="詳細情報">
      <Information aria-hidden="true" />
    </IconButton>
  </Tooltip.Trigger>
  <Tooltip.Content>マウスホバーまたはフォーカスで表示されます。</Tooltip.Content>
</Tooltip.Frame>
```

- 閉じるボタンは表示されません
- マウスを離す、またはフォーカスを外すと自動的に非表示になります

### DO

- **操作に必須でない補足的な説明や情報を提供する際に使用する**
  - ツールチップは、UIの見た目をすっきり保ちながら、必要な時にのみ補足情報を提供するために使用します

### DO NOT

- **ツールチップ内に操作にとって必須の情報を含めない**
  - ツールチップはユーザーがトリガーして初めて表示されるため、操作にとって必要な情報は予め表示しておくようにしましょう。ツールチップの使用はできる限り控えめにすることが理想です
- **クリックして表示するトリガーは基本的にアイコン以外使用しない**
  - テキストやリンクにツールチップを付けると、ユーザーのメンタルモデルに反した挙動となり、混乱を招く可能性があります。基本的には、インフォメーションアイコンやはてなアイコンをクリックした際に表示されるようにしましょう
- **ツールチップ内に多くの情報やインタラクションを含めない**
  - ツールチップはあくまで補足の情報になります。情報が多くなる場合やインタラクションを多数含めたい場合にはモーダルの使用や別ページへの遷移を検討しましょう

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

### Variantの使い分け

通知の内容によって、3種類を使い分けて使用してください。

- **`information`**: 補足情報を伝えるため（デフォルト）
- **`confirmation`**: 訴求したい内容を伝えるため
- **`error`**: 特定の要素に対してエラーメッセージを表示するため

### プロパティ

#### Tooltip.Frame

```ts
type Direction = 'top' | 'right' | 'bottom' | 'left';
type Position = 'edgeStart' | 'start' | 'center' | 'end' | 'edgeEnd';
type Variant = 'information' | 'confirmation' | 'error';

type Props = {
  children: React.ReactNode;
  // Tooltipの開閉状態。指定しない場合はUncontrolled Mode（hover/focus表示）
  open?: boolean;
  // Tooltipの色バリエーション。デフォルト値はinformationです
  variant?: Variant;
  // ポインターが指す向き。デフォルト値はtopです
  direction?: Direction;
  // ポインターの位置。デフォルト値はcenterです
  position?: Position;
  // 閉じるボタンがクリックされたときのコールバック。Controlled Modeの場合のみ使用
  onClose?: () => void;
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

#### モードの判定と動作

**Controlled Mode（`open`プロパティあり）:**
- クリック表示または初期表示
- 閉じるボタンが表示される
- `role`属性なし
- `aria-expanded`が設定される
- 外側クリック、Escapeキー、閉じるボタン、トリガー再クリックで閉じる
- `Tooltip.Trigger`に`aria-describedby`、`aria-expanded`、`ref`を自動付与

**Uncontrolled Mode（`open`プロパティなし）:**
- hover/focus表示
- 閉じるボタンは表示されない
- `role="tooltip"`が設定される
- `aria-expanded`は設定されない
- マウスを離す、フォーカスを外すと自動的に非表示
- `Tooltip.Trigger`に`aria-describedby`、`ref`を自動付与
- トリガー要素の`onMouseEnter`、`onMouseLeave`、`onFocus`、`onBlur`を内部で管理

#### 共通動作
- `Tooltip.Trigger`内のトリガー要素に、自動的に`aria-describedby`、`ref`を付与します
- Tooltipの`id`を自動生成し、`aria-describedby`で関連付けます
- トリガー要素のサイズを取得し、ポインターがトリガーの中央に配置されるように位置を計算します

## アクセシビリティ

### 共通

- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)[基本必須]
  - [ ] トリガーボタンに`aria-describedby`でTooltipのIDが自動的に関連付けられている
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
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)[基本必須]
  - [ ] HTML仕様に準拠した実装をしている
- [カスタムコントロールの操作性を担保する](https://a11y-guidelines.ameba.design/4/1/2/)[基本必須]
  - [ ] トリガーボタンに`aria-describedby`でTooltipのIDを関連付けている（自動）
  - [ ] スクリーンリーダーでも機能落ちがなく、読み上げが過不足なく行われている

### Controlled Modeのみ

- [画像に代替テキストを提供する](https://a11y-guidelines.ameba.design/1/1/1/)[基本必須]
  - [ ] 閉じるボタンには`aria-label="閉じる"`が付与され、アイコンには`aria-hidden="true"`が付与されている
- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)[基本必須]
  - [ ] トリガーボタンに`aria-expanded`で開閉状態が自動的に示されている
- [ホバーまたはフォーカスで表示されるコンテンツを制御できる](https://a11y-guidelines.ameba.design/1/4/13/)[基本必須]
  - [ ] クリックで表示したTooltipは、閉じるボタン・Escapeキー・外側クリックで非表示にできる
  - [ ] Tooltipは自動で消えない(ユーザーが明示的に閉じるまで表示される)
- [キーボード、タッチデバイスで操作できる](https://a11y-guidelines.ameba.design/2/1/1/)[基本必須]
  - [ ] トリガーボタンと閉じるボタンにTabキーでフォーカスでき、EnterキーまたはSpaceキーで操作できる
  - [ ] Escapeキーでtooltipを閉じることができる
- [適切なフォーカス順序にする](https://a11y-guidelines.ameba.design/2/4/3/)[基本必須]
  - [ ] キーボード操作時に、トリガーボタン→Tooltip内の閉じるボタン→次の要素の順でフォーカスが移動する
- [フォーカス時にコンテンツを大きく変更しない](https://a11y-guidelines.ameba.design/3/2/1/)[基本必須]
  - [ ] トリガーボタンにフォーカスしただけでは、Tooltipは表示されない(クリックが必要)

### Uncontrolled Modeのみ

- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)[基本必須]
  - [ ] Tooltipに`role="tooltip"`が設定されている
- [ホバーまたはフォーカスで表示されるコンテンツを制御できる](https://a11y-guidelines.ameba.design/1/4/13/)[基本必須]
  - [ ] マウスホバーまたはフォーカスで表示したTooltipは、マウスを離す/フォーカスを外すと非表示になる
  - [ ] Tooltip表示中も、Tooltipの内容にマウスホバーできる
  - [ ] Tooltipは自動で消える（マウスを離す/フォーカスを外すと消える）

## テスト方針

### ユニットテスト（Testing Library）

#### Controlled Mode
- `open`プロパティによる開閉の動作確認
- `onClose`コールバックが適切に呼び出されることの確認
- Escapeキー押下時に閉じることの確認
- 閉じるボタンクリック時に閉じることの確認
- 外側クリック時に閉じることの確認
- `aria-describedby`と`aria-expanded`が自動的に設定されることの確認

#### Uncontrolled Mode
- マウスホバー時に表示されることの確認
- フォーカス時に表示されることの確認
- マウスを離すと非表示になることの確認
- フォーカスを外すと非表示になることの確認
- `aria-describedby`が自動的に設定されることの確認
- `aria-expanded`が設定されないことの確認
- 閉じるボタンが表示されないことの確認

### ヴィジュアルリグレッションテスト（Storybook）

- 各variant（information、confirmation、error）の表示確認
- 各direction（top、right、bottom、left）の表示確認
- 各position（edgeStart、start、center、end、edgeEnd）の表示確認
- Controlled ModeとUncontrolled Modeの表示確認
- モバイルとデスクトップでのサイズの確認
- 長いテキストの折り返し表示確認

## リンク集

- [Tooltip Pattern - APG | WAI | W3C](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)
- [ARIA: tooltip role - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role)
- [1.4.13 ホバーまたはフォーカスで表示されるコンテンツを制御できる - Ameba Accessibility Guidelines](https://a11y-guidelines.ameba.design/1/4/13/)
