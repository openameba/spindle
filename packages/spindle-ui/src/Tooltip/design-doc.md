# Tooltip

## 概要・背景

Tooltipは、UI要素に関連する補足的な説明や情報を提供するコンポーネントです。UIの見た目をすっきり保ちながら、必要な時にのみ情報を提供しますが、操作に不可欠な情報を表示するためには使用すべきではありません。

FigmaではTooltip（モードレス形式）とToggletip（モード形式）の2種類が定義されていますが、実装上は別Componentとして実装します。ToggletipはTooltipコンポーネントとしての対応予定はありません。

## スクリーンショット

<img width="1924" height="814" alt="4種類のツールチップの表示形式、トリガー、目的について説明されている" src="https://github.com/user-attachments/assets/21b6889e-7d1e-43f8-aba0-e5e2ab517f58" />


### 表示トリガー

デバイスに応じて自動的に最適なトリガーを選択します。

- **ポインティングデバイス**: hover/focusで表示、マウスを離す/フォーカスを外すと非表示
- **タッチデバイス**: tapで表示/非表示を切り替え

### 初期表示の挙動

#### 初期表示なし（デフォルト）

デフォルトでは初期状態で非表示です。hover/focusまたはclick/tapで表示されます。

#### 初期表示あり

`defaultOpen={true}`を指定すると、初期状態から表示されます。

**特殊ケース - 再表示しない場合：**

オンボーディングやアップデートなど、一度閉じたらページをリロードするまで再表示したくない場合があります。このような場合、Tooltipの表示状態は利用側で管理する必要があります。

`defaultOpen`プロパティは初期表示の制御のみを行うため、状態が変わっても再評価されません。一度閉じたら表示しないようにするには、Tooltipコンポーネント自体を条件付きでレンダリングする必要があります（実装例を参照）。

なお、このケースでは機能を持つ要素（ボタンなど）に直接Tooltipを付けることも許容されます。一度閉じたら再表示されないため、ユーザーがその要素を操作する際にTooltipが邪魔になることがありません。

### バリアント

通知の内容によって、3種類のバリアントを使い分けて使用します。

- **`information`**: 補足情報を伝えるため（デフォルト）
- **`confirmation`**: 訴求したい内容を伝えるため
- **`error`**: 特定の要素に対してエラーメッセージを表示するため

## 使用例

### DO

- **操作に必須でない補足的な説明や情報を提供する**
  - Tooltipは、UIの見た目をすっきり保ちながら、必要な時にのみ補足情報を提供するために使用します。操作に必要な情報は予め表示しておき、Tooltipの使用はできる限り控えめにすることが理想です
- **トリガーにはインフォメーションアイコンやはてなアイコンを使用する**
  - 原則として、機能を持つ要素（ボタンなど）に直接付けず、その隣にアイコンを配置します
  - ユーザーのメンタルモデルに合致し、ボタンの本来の機能を妨げません
  - **例外**: 初期表示ありかつ再表示しないケース（オンボーディングやアップデートなど）では、機能を持つ要素に直接付けることも許容されます

### DO NOT

- **多くの情報やインタラクションを含めない**
  - 情報が多くなる場合やインタラクションを多数含めたい場合にはモーダルの使用や別ページへの遷移を検討しましょう
- **テキストやリンクに付けない**
  - ユーザーのメンタルモデルに反した挙動となり、混乱を招く可能性があります

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
  // 初期状態で表示するかどうか。デフォルト値はfalseです
  defaultOpen?: boolean;
  // Tooltipが閉じられたときのコールバック
  onClose?: () => void;
  // Tooltipの色バリエーション。デフォルト値はinformationです
  variant?: Variant;
  // ポインターが指す向き。デフォルト値はtopです
  direction?: Direction;
  // ポインターの位置。デフォルト値はcenterです
  position?: Position;
};
```

#### Tooltip.Trigger

```ts
type TriggerProps = {
  ref: React.RefCallback<HTMLElement>;
  'aria-describedby': string;
  'aria-expanded'?: boolean;
  onMouseEnter: (e: React.MouseEvent) => void;
  onFocus: () => void;
  onBlur: () => void;
  onPointerDown: (e: React.PointerEvent) => void;
  onPointerUp: (e: React.PointerEvent) => void;
};

type Props = {
  children: (props: TriggerProps) => React.ReactNode;
};
```

childrenは関数として定義します。関数の引数にはトリガー要素に必要なprops（`ref`、`aria-describedby`、`aria-expanded`、`onMouseEnter`、`onFocus`、`onBlur`、`onPointerDown`、`onPointerUp`）が渡されます。

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

#### 閉じるボタンの表示

閉じるボタンは**初期表示時のみ**表示されます：

- `defaultOpen={true}`の場合、初期表示時に閉じるボタンが表示される
- 一度閉じた後、hover/focusまたはclick/tapで再表示された時は閉じるボタンは表示されない
- `defaultOpen={false}`または未指定の場合、閉じるボタンは表示されない

#### 閉じる動作

Tooltipの閉じる動作は表示状態に応じて自動的に最適化されます：

**`defaultOpen={false}`または`defaultOpen={true}`で一度閉じた後の再表示の場合：**
- ポインティングデバイス: マウスを離す/フォーカスを外すと自動で閉じる
- タッチデバイス: 再度クリック/タップ、または領域外クリックで閉じる

**`defaultOpen={true}`で初期表示されている場合：**
- 閉じるボタンで閉じる
- Tooltipまたはその内部要素にフォーカスが当たっている時、Escapeキーで閉じる
- 領域外クリックでは閉じない（閉じるボタンがあるため）

#### ARIA 属性

Tooltipは、表示状態に応じて適切なARIA属性を自動的に付与します。

**`defaultOpen={false}`または`defaultOpen={true}`で一度閉じた後の再表示の場合：**

- `role="tooltip"`を使用
- トリガー要素に`aria-describedby`でTooltipのIDを関連付け
- `aria-expanded`は使用しない（自動表示のため）

**`defaultOpen={true}`で初期表示されている場合：**

- `role="group"`を使用
- トリガー要素に`aria-describedby`でTooltipのIDを関連付け
- トリガー要素に`aria-expanded`で開閉状態を示す

#### 共通動作
- `Tooltip.Trigger`のchildrenとして渡された関数に、トリガー要素に必要なprops（`ref`、`aria-describedby`、`aria-expanded`、`onMouseEnter`、`onFocus`、`onBlur`、`onPointerDown`、`onPointerUp`）を渡します
- Tooltipの`id`を自動生成し、`aria-describedby`で関連付けます
- トリガー要素のサイズを取得し、ポインターがトリガーに対して相対的に適切な位置に配置されるように計算します

#### トリガー要素の要件

`Tooltip.Trigger`から渡されるprops（`ref`、`aria-describedby`、`aria-expanded`、`onMouseEnter`、`onFocus`、`onBlur`、`onPointerDown`、`onPointerUp`）を適切に受け取れるようにしてください。

## 実装例

React実装の一例です。

```tsx
<Tooltip.Frame defaultOpen={false} variant="information" direction="top" position="center">
  <Tooltip.Trigger>
    {props => (
      <IconButton {...props} size="exSmall" variant="neutral" aria-label="詳細情報">
        <Information aria-hidden="true" />
      </IconButton>
    )}
  </Tooltip.Trigger>
  <Tooltip.Content>補足情報</Tooltip.Content>
</Tooltip.Frame>
```

上記の実装から書き出されるマークアップです。

```html
<div class="spui-Tooltip">
  <button
    class="spui-IconButton spui-IconButton--exSmall spui-IconButton--neutral"
    aria-label="詳細情報"
    aria-describedby="tooltip-1"
    aria-expanded="true"
  >
    <svg aria-hidden="true"><!-- Information icon --></svg>
  </button>
  <div
    id="tooltip-1"
    class="spui-Tooltip-frame spui-Tooltip-frame--information spui-Tooltip-frame--top spui-Tooltip-frame--center"
    role="group"
    style="--Tooltip-trigger-width: 48px; --Tooltip-trigger-height: 48px;"
  >
    <div class="spui-Tooltip-content">
      <div class="spui-Tooltip-text">
        補足情報
      </div>
      <button class="spui-Tooltip-closeButton" aria-label="閉じる">
        <svg class="spui-Tooltip-closeButtonIcon" aria-hidden="true"><!-- Close icon --></svg>
      </button>
    </div>
  </div>
</div>
```

### 初期表示あり（再表示しない）

一度閉じたらページをリロードするまで再表示しないパターンです。`defaultOpen`は初期表示の制御のみを行うため、条件付きレンダリングで実装します。

```tsx
const [hasSeenTooltip, setHasSeenTooltip] = useState(() => {
  return localStorage.getItem('tutorial-tooltip-seen') === 'true';
});

{!hasSeenTooltip ? (
  <Tooltip.Frame
    defaultOpen={true}
    onClose={() => {
      localStorage.setItem('tutorial-tooltip-seen', 'true');
      setHasSeenTooltip(true);
    }}
  >
    <Tooltip.Trigger>
      {props => (
        <IconButton {...props} size="exSmall" variant="neutral" aria-label="詳細情報">
          <Information aria-hidden="true" />
        </IconButton>
      )}
    </Tooltip.Trigger>
    <Tooltip.Content>新機能: 機能が追加されました</Tooltip.Content>
  </Tooltip.Frame>
) : (
  <IconButton size="exSmall" variant="neutral" aria-label="詳細情報">
    <Information aria-hidden="true" />
  </IconButton>
)}
```

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
  - [ ] トリガーボタンにフォーカスした際、ボタンの内容に加えてTooltipの説明内容（`aria-describedby`）が読み上げられる
- [ポインタ操作のキャンセルができる](https://a11y-guidelines.ameba.design/2/5/2/)[基本必須]
  - [ ] タッチデバイスで、トリガーを押したまま指をずらして外で離した場合、操作がキャンセルされる

### `defaultOpen={false}`の場合

- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)[基本必須]
  - [ ] Tooltipに`role="tooltip"`が設定されている
  - [ ] `aria-expanded`は使用していない
- [ホバーまたはフォーカスで表示されるコンテンツを制御できる](https://a11y-guidelines.ameba.design/1/4/13/)[基本必須]
  - [ ] マウスホバーまたはフォーカスで表示したTooltipは、マウスを離す/フォーカスを外すと非表示になる
  - [ ] Tooltip表示中も、Tooltipの内容にマウスホバーできる
  - [ ] Tooltipは自動で消える（マウスを離す/フォーカスを外すと消える）

### `defaultOpen={true}`の初期表示時のみ

- [画像に代替テキストを提供する](https://a11y-guidelines.ameba.design/1/1/1/)[基本必須]
  - [ ] 閉じるボタンには`aria-label="閉じる"`が付与され、アイコンには`aria-hidden="true"`が付与されている
- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)[基本必須]
  - [ ] `role="group"`が設定されている
  - [ ] トリガーボタンに`aria-expanded`で開閉状態が自動的に示されている
- [ホバーまたはフォーカスで表示されるコンテンツを制御できる](https://a11y-guidelines.ameba.design/1/4/13/)[基本必須]
  - [ ] 初期表示または手動で開いたTooltipは、閉じるボタンで非表示にできる
  - [ ] Tooltipまたはその内部要素にフォーカスが当たっている時は、Escapeキーで非表示にできる
  - [ ] 領域外クリックでは閉じない（閉じるボタンがあるため）
  - [ ] Tooltipは自動で消えない（ユーザーが明示的に閉じるまで表示される）
- [キーボード、タッチデバイスで操作できる](https://a11y-guidelines.ameba.design/2/1/1/)[基本必須]
  - [ ] トリガーボタンと閉じるボタンにTabキーでフォーカスでき、EnterキーまたはSpaceキーで操作できる
- [適切なフォーカス順序にする](https://a11y-guidelines.ameba.design/2/4/3/)[基本必須]
  - [ ] キーボード操作時に、トリガーボタン→Tooltip内の閉じるボタン→次の要素の順でフォーカスが移動する

### `defaultOpen={true}`で一度閉じた後の再表示時

- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)[基本必須]
  - [ ] `role="group"`から`role="tooltip"`に切り替わっている
  - [ ] `aria-expanded`は使用していない
  - [ ] 上記「`defaultOpen={false}`の場合」の全てのチェック項目を満たしている

## テスト方針

### ユニットテスト（Testing Library）

#### 共通

- `aria-describedby` が自動的に設定されることの確認

#### `defaultOpen={false}`の場合

- hover時に表示されることの確認
- focus時に表示されることの確認
- フォーカスを外すと非表示になることの確認
- Escapeキーで非表示になることの確認
- `role="tooltip"` が設定されることの確認
- `aria-expanded`が設定されていないことの確認
- 閉じるボタンが表示されないことの確認
- タッチデバイスでタップでトグルすることの確認
- タッチデバイスでトリガーを押したまま外で離した場合、キャンセルされる（開かない）ことの確認
- タッチデバイスで領域外タップでフェードアウトすることの確認

#### `defaultOpen={true}`の初期表示時の場合

- 初期状態で表示されることの確認
- `role="group"`が設定されることの確認
- `aria-expanded="true"`が設定されることの確認
- 閉じるボタンが表示されることの確認
- 閉じるボタンクリック時に閉じることの確認
- Tooltipまたはその内部要素にフォーカスが当たっている時、Escapeキー押下で閉じることの確認
- 領域外クリックでは閉じないことの確認

#### `defaultOpen={true}`で一度閉じた後の再表示時

- hover/focusで再表示されることの確認
- `role="group"`から`role="tooltip"`に切り替わることの確認
- `aria-expanded`が設定されていないことの確認
- 閉じるボタンが表示されないことの確認
- 上記「`defaultOpen={false}`の場合」の全てのテストが通ることの確認

### ヴィジュアルリグレッションテスト（Storybook）

- 各variant（information、confirmation、error）の表示確認
- 各direction（top、right、bottom、left）の表示確認
- 各position（edgeStart、start、center、end、edgeEnd）の表示確認
- defaultOpenの各設定値における表示確認
- モバイルとデスクトップでのサイズの確認
- 長いテキストの折り返し表示確認

## リンク集

- [Tooltip Pattern - APG | WAI | W3C](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)
- [ARIA: tooltip role - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role)
- [1.4.13 ホバーまたはフォーカスで表示されるコンテンツを制御できる - Ameba Accessibility Guidelines](https://a11y-guidelines.ameba.design/1/4/13/)
