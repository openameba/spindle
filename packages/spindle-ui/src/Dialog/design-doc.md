# Dialog

## 概要・背景

Dialogは、ユーザーに重要な意思決定を促す時に利用されるモーダルコンポーネントです。ユーザーのメインタスクを中断して、確認や決定が必要な情報を表示します。

対して、サービスからの一方的な訴求をする場合は、DialogではなくModalを利用することを推奨します。また、ポップアップで満たす目的やユーザーの行える動作について、一問一答に収まらないような複雑な状態の場合も同様です。Modalを利用するか別のページへ遷移させることを推奨します。

Spindle UIのDialogは[HTMLDialogElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement)を利用して実装されており、ブラウザネイティブの機能を活用しています。また、`dialog`要素には`form method="dialog"`要素が内包されているため、自然なフォーム送信フローとダイアログの閉じる動作を統合できます。

## 使用例

### 通知コンポーネントの使い分け

ユーザーに画面内で通知する手段として、Toast、SnackBar、InlineNotification、Dialog、Modalコンポーネントがあります。

| コンポーネント | 用途 | テキストの長さ | 追加のアクション | 自動で消える |
|---|---|---|---|---|
| Toast | 完了タイミングに気づくための最低限のフィードバック | 1行 | なし | 4秒 |
| SnackBar | ユーザーにとって読む価値があるもの | 3行まで | あり | 10秒 |
| InlineNotification | ユーザーが追加のアクションを実行すると通知の役割を果たすもの | 制限なし | あり | 消えない |
| Dialog | ユーザーのメインタスクを中断して確認してもらうべき重要な意思決定 | 制限なし | あり | 消えない |
| Modal | サービスからの一方的な訴求や複雑な操作が必要な場合 | 制限なし | あり | 消えない |

### DO

- ユーザーのメインタスクを中断して確認してもらうべき重要な意思決定に使用する

### DO NOT

- 重要な意思決定でない通知や訴求に利用しない
- 複数のDialog／Modalを同時に展開しない

## 要素

### Design Tokens

- Surface Primary (背景色)
- Text Medium Emphasis (本文テキスト色)
- Text High Emphasis (タイトルテキスト色)
- Focus Clarity (フォーカス時のアウトライン色)
- Box Shadow Lv6 Normal (ダイアログの影)
- Backdrop (オーバーレイ背景色、現在はハードコーディング `rgba(0, 0, 0, 0.8)`)
- Animation Appear In Easing (表示時のイージング)
- Animation Appear In Duration (表示時のアニメーション時間: 350ms)
- Animation Disappear Duration (非表示時のアニメーション時間: 150ms)

### WAI-ARIA

- `aria-labelledby`: タイトル要素のIDを指定し、ダイアログのラベルとして関連付ける
- `aria-describedby`: 本文要素のIDを指定し、ダイアログの説明として関連付ける
- `aria-haspopup="true"`: ダイアログを開くボタンに指定する

### プロパティ

#### Dialog.Frame

```ts
interface DialogProps extends React.DialogHTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  onCancel?: (event: React.BaseSyntheticEvent) => void;
  onClose?: (event: React.BaseSyntheticEvent) => void;
}
```

#### Dialog.StyleOnly

```ts
interface PartsProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}
```

#### Dialog.Title、Dialog.Body

```ts
interface PartsProps {
  children?: React.ReactNode;
  id?: string;
}
```

#### Dialog.ButtonGroup

ButtonGroupコンポーネントのプロパティを継承し、`size`は固定で`"medium"`が指定されます。

### 仕様

#### サイズ

- **幅**: `400px`
- **padding**: `24px`（モバイル）、`36px`（デスクトップ：768px以上）
- **border-radius**: `20px`
- **最小マージン**: `36px`（小デバイス：472px以下）

#### レイアウト・動作

- 画面の天地中央（上下左右の中央）に表示
- モーダル内のコンテンツ領域にコンテンツの高さが収まらない場合はスクロールが発生
- Dialog／Modalを表示するためにクリックする要素（button）には`aria-haspopup="true"`を指定する
- キーボードトラップを考慮する
- Overlay(Backdrop)クリックでDialog／Modalを閉じることができる
- 375px相当端末時の画面レイアウトを作成する

## 実装例

React実装の一例です。

### 利用時の注意

- ダイアログ起動時にフォーカスさせたい要素には、可能な限り`autofocus`属性を指定します
- `Dialog.Frame`は`className`プロパティを受け付けません。スタイルのカスタマイズが必要な場合は`Dialog.StyleOnly`を使用します。`Dialog.StyleOnly`は`<dialog>`要素ではなく`<div>`要素のため、ブラウザのUA Stylesheetが適用されません。表示位置やオーバーレイなどのスタイルは`className`プロパティを使って自分で指定する必要があります
- `type`属性を指定されていない`Button`は、ダイアログを閉じるボタンになります。ボタンに固有の処理を追加したい場合には`type="button"`や`type="reset"`などの属性を指定します

```tsx
function DialogExample() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);
  const handleOpenButtonClick = () => setOpen(true);
  const handleDialogCancel = () => setOpen(false);
  const handleDialogClose = () => setOpen(false);

  return (
    <>
      <Button aria-haspopup="true" onClick={handleOpenButtonClick} size="medium" variant="neutral">
        開く
      </Button>
      <Dialog.Frame
        aria-describedby="dialog-description"
        aria-labelledby="dialog-title"
        ref={dialogRef}
        open={open}
        onCancel={handleDialogCancel}
        onClose={handleDialogClose}
      >
        <Dialog.Title id="dialog-title">タイトルですよ</Dialog.Title>
        <Dialog.Body id="dialog-description">ここに本文が入りますよ</Dialog.Body>
        <Dialog.ButtonGroup>
          <Button layout="fullWidth" size="medium" autoFocus>OK</Button>
        </Dialog.ButtonGroup>
      </Dialog.Frame>
    </>
  );
}
```

上記の実装から書き出されるマークアップです。

```html
<dialog class="spui-Dialog" open aria-describedby="dialog-description" aria-labelledby="dialog-title">
  <form method="dialog">
    <p class="spui-Dialog-title" id="dialog-title">タイトルですよ</p>
    <p class="spui-Dialog-body" id="dialog-description">ここに本文が入りますよ</p>
    <div class="spui-ButtonGroup spui-ButtonGroup--row spui-ButtonGroup--medium spui-Dialog-buttonGroup">
      <button class="spui-Button spui-Button--fullWidth spui-Button--medium spui-Button--contained" autofocus>OK</button>
    </div>
  </form>
</dialog>
```

### StyleOnly

`HTMLDialogElement`を利用しない場合には、`Dialog.StyleOnly`を利用しSpindleで定義されたスタイルを流用できます。ダイアログの動作を独自で定義したい場合や他ライブラリの利用等でスタイルだけ使いたい場合を想定しています。

```tsx
<Dialog.StyleOnly>
  <Dialog.Title>タイトルですよ</Dialog.Title>
  <Dialog.Body>ここに本文が入りますよ</Dialog.Body>
  <Dialog.ButtonGroup>
    <Button layout="fullWidth" size="medium" autoFocus>OK</Button>
  </Dialog.ButtonGroup>
</Dialog.StyleOnly>
```

### ButtonGroup

`Dialog.ButtonGroup`を利用して、ボタンの並ぶ方向を横・縦に指定できます。ボタンは`Button`のmediumサイズを利用してください。

```tsx
// 横並び（デフォルト）
<Dialog.ButtonGroup>
  <Button layout="fullWidth" size="medium" variant="neutral">キャンセル</Button>
  <Button layout="fullWidth" size="medium" variant="danger">削除する</Button>
</Dialog.ButtonGroup>

// 縦並び
<Dialog.ButtonGroup direction="column">
  <Button layout="fullWidth" size="medium">Spindleをフォローする</Button>
  <Button layout="fullWidth" size="medium" variant="neutral">キャンセル</Button>
</Dialog.ButtonGroup>

// SubtleButtonとの組み合わせ
<Dialog.ButtonGroup direction="column">
  <Button layout="fullWidth" size="medium">Spindleをフォローする</Button>
  <SubtleButton size="medium">とじる</SubtleButton>
</Dialog.ButtonGroup>
```

## Baseline

- `:has()` (Baseline 2023) - [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)
  - `html:has(.spui-Dialog:modal)`を使用して、モーダル表示時にページのスクロールを無効化しています

## アクセシビリティ

- [画像に代替テキストを提供する](https://a11y-guidelines.ameba.design/1/1/1/)[基本必須]
  - [ ] ボタン内のアイコンは適切な代替テキストまたはaria-labelを持っている
- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)[基本必須]
  - [ ] `aria-labelledby`でタイトルと関連付けられている
  - [ ] `aria-describedby`で本文と関連付けられている
  - [ ] ダイアログを開くボタンに`aria-haspopup="true"`が指定されている
- [表示の向きを固定しない](https://a11y-guidelines.ameba.design/1/3/4/)[できれば]
  - [ ] 端末を横向きにしても、文字が適切に折り返されてレイアウトが変わり、コンテンツが見切れていない
- [色だけで伝えない](https://a11y-guidelines.ameba.design/1/4/1/)[基本必須]
  - [ ] ボタンのvariantを適切に使い分け、色だけで意味を伝えない
- [テキストや文字画像のコントラストを確保する](https://a11y-guidelines.ameba.design/1/4/3/)[基本必須]
  - [ ] SpindleカラーパレットのTheme Colorsを適切に使い分けている
- [テキストサイズを拡大縮小できる](https://a11y-guidelines.ameba.design/1/4/4/)[基本必須]
  - [ ] 画面を200%拡大・文字サイズを2倍に変更しても、適切に文字が折り返され、情報が欠落していない
- [リフローできる](https://a11y-guidelines.ameba.design/1/4/10/)[できれば]
  - [ ] 画面拡大時にもDialog内の情報は見切れない
- [キーボード、タッチデバイスで操作できる](https://a11y-guidelines.ameba.design/2/1/1/)[基本必須]
  - [ ] Tabキーでフォーカスでき、EnterキーまたはSpaceキーでボタンを実行できる
  - [ ] Escapeキーでダイアログを閉じることができる
  - [ ] ダイアログが開いている間、フォーカストラップが機能し、ダイアログ外の要素にフォーカスが移動しない
- [適切なフォーカス順序にする](https://a11y-guidelines.ameba.design/2/4/3/)[基本必須]
  - [ ] キーボード操作の順序が、見た目の順序と一致している
- [フォーカスを見えるようにする](https://a11y-guidelines.ameba.design/2/4/7/)[基本必須]
  - [ ] ボタンやフォーカス可能な要素は、フォーカスの状態が見える
  - [ ] Safariでも適切にフォーカスリングが表示される（カスタムスタイルを適用）
- [ターゲットのサイズを理解する](https://a11y-guidelines.ameba.design/2/5/5/)[できれば]
  - [ ] タップ領域は44px x 44px以上確保している
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)[基本必須]
  - [ ] HTML仕様に準拠した実装をしている
  - [ ] `<dialog>`要素を正しく使用し、`showModal()`で表示している
- [フォーカス管理をする](https://a11y-guidelines.ameba.design/4/1/2/)[基本必須]
  - [ ] ダイアログが開いたとき、適切な要素にフォーカスが移動する（`autofocus`属性を推奨）
  - [ ] ダイアログが閉じたとき、フォーカスがダイアログを開いたボタンに戻る

## テスト方針

### ユニットテスト（Testing Library）

- `open`プロパティによる開閉の動作確認
- `onClose`コールバックが適切に呼び出されることの確認
- `onCancel`コールバック（Escapeキー押下時）の動作確認
- バックドロップクリック時に`onClose`が呼び出されることの確認
- フォーム送信時の動作確認

### ヴィジュアルリグレッションテスト（Storybook）

- 各ButtonGroupのバリエーション（横並び、縦並び、SubtleButtonとの組み合わせ）の表示確認
- StyleOnlyの表示確認
- 長いテキストの折り返し表示確認

**注意**: 小デバイス（375px）での表示確認は、Storybook v9ではviewportアドオンの仕様により自動テストができません。重要度は高くないため、自動テストができなくても問題ありません。必要に応じて手動で確認してください。

## リンク集

- [HTMLDialogElement - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement)
- [4.1.2 カスタムコントロールの操作性を担保する - Ameba Accessibility Guidelines](https://a11y-guidelines.ameba.design/4/1/2/)
