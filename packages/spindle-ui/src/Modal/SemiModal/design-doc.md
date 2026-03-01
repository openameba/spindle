# SemiModal

## 概要・背景

SemiModalは、ページを離れずに情報の提示や補助的な操作を行いたいときに利用するモーダルコンポーネントです。`type`によってポップアップ型(`popup`)と下部からせり上がるシート型(`sheet`)を切り替えられ、`size`で内容量に合わせたレイアウトを選択できます。タイトル・本文・フッターなどの要素を所定の子コンポーネントで構成し、必要に応じて`StyleOnly`でスタイルだけを適用することもできます。

HTMLDialogElementを基盤にしており、`open`プロパティの変更に応じて`showModal()` / `close()`を呼び出します。オーバーレイクリックやEscキー入力を検知して`onClose`を発火するため、呼び出し元で状態を同期してください。

## スクリーンショット

## 使用例

### DO

SemiModalは用途に応じて`type`と`size`を指定し、定義済みの子コンポーネントで要素を組み立てます。閉じるトリガーを持つボタンには`aria-haspopup="true"`を付与してください。

```tsx
const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

return (
  <>
    <Button aria-haspopup="true" onClick={handleOpen} size="medium" variant="neutral">
      SemiModalを開く
    </Button>
    <SemiModal.Frame
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      open={open}
      type="sheet"
      size="large"
      onClose={handleClose}
    >
      <SemiModal.Header id="dialog-title">
        <SemiModal.HeaderTitle>About Ameba</SemiModal.HeaderTitle>
      </SemiModal.Header>
      <SemiModal.Contents id="dialog-description">
        Amebaは月間7,500万人が利用する国民的メディアサービスです。
      </SemiModal.Contents>
      <SemiModal.Footer>
        <LinkButton href="https://about.ameba.jp/" layout="fullWidth" size="medium">
          サイトを見る
        </LinkButton>
      </SemiModal.Footer>
    </SemiModal.Frame>
  </>
);
```

`StyleOnly`はダイアログ要素を含まないラッパーです。既存のロジックで開閉を制御したい場合や、レイアウトだけを流用したい場合に利用します。

```tsx
<SemiModal.StyleOnly type="popup" size="small">
  <SemiModal.Header>
    <SemiModal.HeaderTitle>About Ameba</SemiModal.HeaderTitle>
  </SemiModal.Header>
  <SemiModal.Contents>
    独自の状態管理で開閉を制御したい場合などに利用します。
  </SemiModal.Contents>
</SemiModal.StyleOnly>
```

### DO NOT

- `Dialog`が適する「一問一答の重要な意思決定」に対してSemiModalを使わない
- `Frame`直下に未定義のタグを直接配置してレイアウトを崩さない（Header / Contents / Footerで構成する）
- シート型とポップアップ型を同一画面で同時に複数開かない

## 要素

### Design Tokens

- Surface Primary (背景色)
- Text High Emphasis (タイトルの色)
- Text Medium Emphasis (本文の色)
- Surface Tertiary (閉じるアイコンのホバー色)
- Focus Clarity (フォーカス時のボックスシャドウ)
- Object Low Emphasis (スクロールバーのつまみ色)
- Surface Secondary (スクロールバーのトラック色)
- Backdrop (オーバーレイ背景色、現在はハードコーディング `rgba(0, 0, 0, 0.6)`)
- Animation Appear In Duration (表示時のアニメーション時間: 350ms)
- Animation Disappear Duration (非表示時のアニメーション時間: 350ms)

#### CSSカスタマイズ用変数

- `--SemiModal-footer-justifyContent`: デスクトップ時のフッター整列
- `--SemiModal-footer-button-minWidth`: デスクトップ時のボタン最小幅
- `--SemiModal-sp-footer-justifyContent`: モバイル時のフッター整列

### プロパティ

#### SemiModal.Frame

```ts
interface SemiModalProps extends Omit<React.DialogHTMLAttributes<HTMLElement>, 'className'> {
  children?: React.ReactNode;
  type?: 'sheet' | 'popup';
  size?: 'large' | 'medium' | 'small';
  onCancel?: (event: React.BaseSyntheticEvent) => void;
  onClose?: (event: React.BaseSyntheticEvent) => void;
}
```

#### SemiModal.Header

```ts
type Props = React.ComponentProps<'header'> & { children: React.ReactNode };
```

#### SemiModal.HeaderTitle

```ts
type Props = React.ComponentProps<'p'>;
```

#### SemiModal.Contents

```ts
type Props = React.ComponentProps<'div'> & { children: React.ReactNode };
```

#### SemiModal.Footer

```ts
type Props = React.ComponentProps<'div'>;
```

#### SemiModal.StyleOnly

```ts
type Props = React.ComponentProps<'div'> & { size?: 'large' | 'medium' | 'small'; type?: 'sheet' | 'popup' };
```

### 仕様

#### レイアウト・動作

- `type="popup"`は画面中央に固定表示し、`type="sheet"`は下部からスライドインする
- `size`に応じて`max-width` / `max-height`が変化し、シート型は高さが`100dvh - 200px`を上限とする
- モバイルでは幅100%のシート表示になり、コンテンツ領域は`calc(100dvh - 20px * 2)`の高さを上限にスクロールする
- `open`が`true`になると`showModal()`を呼び出し、`open`が`false`になると`close()`を呼び出す
- オーバーレイ(Backdrop)クリックやEscキー入力で`onClose`を呼び出す
- `html:has(.spui-SemiModal[open])`でモーダル表示中のページスクロールを無効化する

## 実装例

React実装の一例です。`open`の状態と`onClose`ハンドラを連動させ、`aria-labelledby` / `aria-describedby`で見出しと本文を関連付けます。

```tsx
function SemiModalExample() {
  const [open, setOpen] = useState(false);
  const handleOpenButtonClick = () => setOpen(true);
  const handleDialogClose = () => setOpen(false);

  return (
    <>
      <Button aria-haspopup="true" onClick={handleOpenButtonClick} size="medium" variant="neutral">
        開く
      </Button>
      <SemiModal.Frame
        aria-describedby="dialog-description"
        aria-labelledby="dialog-title"
        open={open}
        onClose={handleDialogClose}
      >
        <SemiModal.Header id="dialog-title">
          <SemiModal.HeaderTitle>タイトルですよ</SemiModal.HeaderTitle>
        </SemiModal.Header>
        <SemiModal.Contents id="dialog-description">
          ここに本文が入りますよ
        </SemiModal.Contents>
        <SemiModal.Footer>
          <Button layout="fullWidth" size="medium" autoFocus>
            OK
          </Button>
        </SemiModal.Footer>
      </SemiModal.Frame>
    </>
  );
}
```

上記の実装から書き出されるマークアップです。

```html
<dialog class="spui-SemiModal" open aria-describedby="dialog-description" aria-labelledby="dialog-title" data-type="popup" data-size="medium">
  <form class="spui-SemiModal-frame" method="dialog">
    <header class="spui-SemiModal-header" id="dialog-title">
      <p class="spui-SemiModal-headerTitle">タイトルですよ</p>
      <div class="spui-SemiModal-closeIconButton">
        <button class="spui-IconButton spui-IconButton--large spui-IconButton--neutral" aria-label="閉じる">
          <svg aria-hidden="true" class="spui-SemiModal-closeIcon">...</svg>
        </button>
      </div>
    </header>
    <div class="spui-SemiModal-contents" id="dialog-description">
      ここに本文が入りますよ
    </div>
    <div class="spui-SemiModal-footer">
      <button class="spui-Button spui-Button--fullWidth spui-Button--medium spui-Button--contained" autofocus>OK</button>
    </div>
  </form>
</dialog>
```

## Figma Code Connect

### マッピング

#### PC向け（popup型）
- Figmaバリアント "size" (Large/Medium/Small) → React prop `size` (large/medium/small)
- Figmaバリアント "Title" (True/False) → `SemiModal.Header` と `SemiModal.HeaderTitle` の表示制御
- Figmaバリアント "Contents" (True/False) → `SemiModal.Contents` の表示制御
- Figmaバリアント "Footer" (True/False) → `SemiModal.Footer` の表示制御
- React prop `type` は "popup" に固定

#### SP向け（sheet型）
- Figmaバリアント "size" (Large/Medium/Small) → React prop `size` (large/medium/small)
- Figmaバリアント "Title" (True/False) → `SemiModal.Header` と `SemiModal.HeaderTitle` の表示制御
- Figmaバリアント "Contents" (True/False) → `SemiModal.Contents` の表示制御
- Figmaバリアント "Footer" (True/False) → `SemiModal.Footer` の表示制御
- React prop `type` は "sheet" に固定

### 実装例

PC向け（popup型）とSP向け（sheet型）それぞれのFigmaコンポーネントに対応するCode Connectを実装しています。

```tsx
// PC向け（popup）
figma.connect(
  SemiModal,
  'https://www.figma.com/design/FSgvRthUiMMXWgrSE4RUgr/Spindle-UI?node-id=454-39096',
  {
    props: {
      size: figma.enum('size', {
        Large: 'large',
        Medium: 'medium',
        Small: 'small',
      }),
      title: figma.boolean('Title', {
        true: (
          <SemiModal.Header>
            <SemiModal.HeaderTitle></SemiModal.HeaderTitle>
          </SemiModal.Header>
        ),
        false: undefined,
      }),
      contents: figma.boolean('Contents', {
        true: <SemiModal.Contents></SemiModal.Contents>,
        false: undefined,
      }),
      footer: figma.boolean('Footer', {
        true: (
          <SemiModal.Footer>
            <Button layout="fullWidth" size="medium"></Button>
          </SemiModal.Footer>
        ),
        false: undefined,
      }),
    },
    example: ({ size, title, contents, footer }) => (
      <SemiModal.Frame type="popup" size={size}>
        {title}
        {contents}
        {footer}
      </SemiModal.Frame>
    ),
  },
);

// SP向け（sheet）
figma.connect(
  SemiModal,
  'https://www.figma.com/design/FSgvRthUiMMXWgrSE4RUgr/Spindle-UI?node-id=457-38844',
  {
    props: {
      size: figma.enum('size', {
        Large: 'large',
        Medium: 'medium',
        Small: 'small',
      }),
      // ... PC向けと同様のprops
    },
    example: ({ size, title, contents, footer }) => (
      <SemiModal.Frame type="sheet" size={size}>
        {title}
        {contents}
        {footer}
      </SemiModal.Frame>
    ),
  },
);
```

## Baseline

- `:has()` (Baseline 2023) - [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)
  - `html:has(.spui-SemiModal[open])`でモーダル表示時にページのスクロールを無効化しています
- `dialog::backdrop`トランジションの離散アニメーション (Baseline 2024) - `display 350ms allow-discrete`, `overlay 350ms allow-discrete` を使用しています

## アクセシビリティ

- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)[基本必須]
  - [ ] `aria-labelledby`と`aria-describedby`を使用して、タイトルと本文をダイアログに関連付けている
- [意味のある順序でコンテンツを表現する](https://a11y-guidelines.ameba.design/1/3/2/)[基本必須]
  - [ ] コンテンツの読み上げ順序が視覚的な順序と一致している
- [感覚的な特徴だけで説明しない](https://a11y-guidelines.ameba.design/1/3/3/)[基本必須]
  - [ ] 色や形状だけでなく、テキストでも情報が伝わるようになっている
- [表示の向きを固定しない](https://a11y-guidelines.ameba.design/1/3/4/)[できれば]
  - [ ] 端末を横向きにしても、適切にレイアウトが変わり、コンテンツが見切れていない
- [テキストや文字画像のコントラストを確保する](https://a11y-guidelines.ameba.design/1/4/3/)[基本必須]
  - [ ] SpindleカラーパレットのTheme Colorsを適切に使い分けている
- [テキストサイズを拡大縮小できる](https://a11y-guidelines.ameba.design/1/4/4/)[基本必須]
  - [ ] 画面を200%拡大・文字サイズを2倍に変更しても、適切に文字が折り返され、情報が欠落していない
- [キーボード、タッチデバイスで操作できる](https://a11y-guidelines.ameba.design/2/1/1/)[基本必須]
  - [ ] Escapeキーでモーダルを閉じることができる
  - [ ] Tabキーでフォーカスを移動し、Enterキーまたはスペースキーでボタンを操作できる
- [適切なフォーカス順序にする](https://a11y-guidelines.ameba.design/2/4/3/)[基本必須]
  - [ ] キーボード操作の順序が、見た目の順序と一致している
