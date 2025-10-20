# AppealModal

## 概要・背景

AppealModalは、ユーザーに対して重要なお知らせや情報を伝えるためのモーダルコンポーネントです。HTMLDialogElementを利用しており、画像・タイトル・本文・ボタンなどの構成要素を組み合わせて使用します。特定用途での利用を想定しているため、カスタマイズ性は低く抑えられていますが、必要に応じて独自要素を追加できます。

モバイルとデスクトップでレイアウトが自動的に切り替わり、レスポンシブに対応しています。デスクトップではアイコンボタンでの閉じる操作、モバイルではテキストボタンでの閉じる操作が表示されます。

## スクリーンショット

## 使用例

### DO

AppealModalは、各要素を指定された子コンポーネントを使って構成します。

```tsx
<AppealModal.Frame
  open={open}
  size="medium"
  onClose={handleClose}
  onCancel={handleCancel}
>
  <AppealModal.Image>
    <img src="..." alt="..." />
  </AppealModal.Image>
  <AppealModal.Title>About Ameba</AppealModal.Title>
  <AppealModal.Body>
    お知らせ本文をここに記載します。
  </AppealModal.Body>
  <AppealModal.ButtonGroup>
    <LinkButton href="..." layout="fullWidth" size="medium">
      サイトを見る
    </LinkButton>
  </AppealModal.ButtonGroup>
</AppealModal.Frame>
```

画像要素には、レスポンシブ対応のためにpicture要素を使用することを推奨します。

```tsx
<AppealModal.Image>
  <picture>
    <source srcSet="..." media="(min-width: 768px)" />
    <img src="..." width="640" height="336" />
  </picture>
</AppealModal.Image>
```

### DO NOT

AppealModalは特定用途を想定しているため、定義されていない要素を独自に追加してレイアウトを大きく変更することは推奨されません。ただし、「次回から表示しない」チェックボックスなど、追加要素が必要な場合は`AppealModal.ButtonGroup`内に配置できます。

## 要素

### Design Tokens

- Surface Primary (背景色)
- Text High Emphasis (タイトルの色)
- Text Medium Emphasis (本文の色)
- Surface Tertiary (デスクトップでの閉じるアイコンボタンのホバー色)
- Focus Clarity (フォーカス時のボックスシャドウ)
- Border Low Emphasis (画像のボーダー色)

### プロパティ

#### AppealModal.Frame

```ts
interface AppealModalProps extends React.DialogHTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  // デフォルト値はlargeです
  size?: 'large' | 'medium' | 'small';
  onCancel?: (event: React.BaseSyntheticEvent) => void;
  onClose?: (event: React.BaseSyntheticEvent) => void;
}
```

#### AppealModal.StyleOnly

```ts
type Props = React.ComponentProps<'div'> & {
  size?: 'large' | 'medium' | 'small';
};
```

#### AppealModal.Title

```ts
type Props = React.ComponentProps<'p'>;
```

#### AppealModal.Image

```ts
type Props = React.ComponentProps<'div'>;
```

#### AppealModal.Body

```ts
type Props = React.ComponentProps<'p'>;
```

#### AppealModal.ButtonGroup

```ts
type Props = React.ComponentProps<typeof ButtonGroup>;
```

## 実装例

React実装の一例です。

```tsx
<AppealModal.Frame
  aria-describedby="dialog-description"
  aria-labelledby="dialog-title"
  open={open}
  size="medium"
  onClose={handleClose}
>
  <AppealModal.Image>
    <img
      style={{ height: 'auto', width: '100%' }}
      width="640"
      height="336"
      src="..."
    />
  </AppealModal.Image>
  <AppealModal.Title id="dialog-title">About Ameba</AppealModal.Title>
  <AppealModal.Body id="dialog-description">
    AmebaはAmebaブログをはじめ、最新の芸能人ニュースやマンガ・占いなど生きたコンテンツが集結した月間7,500万人が利用する国民的メディアサービスです。
  </AppealModal.Body>
  <AppealModal.ButtonGroup>
    <LinkButton href="https://about.ameba.jp/" layout="fullWidth" size="medium">
      サイトを見る
    </LinkButton>
  </AppealModal.ButtonGroup>
</AppealModal.Frame>
```

上記の実装から書き出されるマークアップです。

```html
<dialog class="spui-AppealModal spui-AppealModal--medium" open>
  <form class="spui-AppealModal-frame" method="dialog">
    <div class="spui-AppealModal-closeIconButton">
      <button class="spui-IconButton spui-IconButton--large spui-IconButton--neutral" aria-label="とじる">
        <svg aria-hidden="true">...</svg>
      </button>
    </div>
    <div class="spui-AppealModal-image">
      <img width="640" height="336" src="..." style="height: auto; width: 100%;">
    </div>
    <p class="spui-AppealModal-title" id="dialog-title">About Ameba</p>
    <p class="spui-AppealModal-body" id="dialog-description">
      AmebaはAmebaブログをはじめ、最新の芸能人ニュースやマンガ・占いなど生きたコンテンツが集結した月間7,500万人が利用する国民的メディアサービスです。
    </p>
    <div class="spui-ButtonGroup spui-ButtonGroup--column spui-ButtonGroup--medium spui-AppealModal-buttonGroup">
      <a class="spui-LinkButton spui-LinkButton--fullWidth spui-LinkButton--medium spui-LinkButton--contained" href="https://about.ameba.jp/">サイトを見る</a>
    </div>
    <div class="spui-AppealModal-closeTextButton">
      <button class="spui-SubtleButton spui-SubtleButton--large">とじる</button>
    </div>
  </form>
</dialog>
```

## アクセシビリティ

- [画像に代替テキストを提供する](https://a11y-guidelines.ameba.design/1/1/1/)[基本必須]
  - [ ] 画像には適切な代替テキストが提供されている
  - [ ] 閉じるアイコンには`aria-label="とじる"`が付与され、SVGには`aria-hidden="true"`が付与されている
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
- [フォーカスを見えるようにする](https://a11y-guidelines.ameba.design/2/4/7/)[基本必須]
  - [ ] ボタンは、フォーカスの状態が見える
- [ターゲットのサイズを理解する](https://a11y-guidelines.ameba.design/2/5/5/)[できれば]
  - [ ] タップ領域は44px x 44px以上確保している
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)[基本必須]
  - [ ] HTML仕様に準拠した実装をしている
  - [ ] dialog要素とform要素を正しく使用している
- [カスタムコントロールの操作性を担保する](https://a11y-guidelines.ameba.design/4/1/2/)[基本必須]
  - [ ] HTMLDialogElementを使用しており、モーダルとして適切に動作する
  - [ ] モーダルが開いている間、背景のコンテンツにはフォーカスが移動しない

## テスト方針

Testing Libraryを使用したユニットテストでは、以下の項目を確認します。

- モーダルの開閉動作が正しく機能するか
- `onClose`と`onCancel`コールバックが適切に呼び出されるか
- バックドロップクリックで閉じる動作が機能するか
- Escapeキーで閉じる動作が機能するか
- 各子コンポーネント（Title、Image、Body、ButtonGroup）が正しくレンダリングされるか

Storybookを使用したビジュアルリグレッションテストでは、以下の項目を確認します。

- 各サイズ（large、medium、small）でのレイアウト
- モバイルとデスクトップでのレスポンシブ表示
- StyleOnlyバリアントが正しく表示されるか
- カスタマイズされたバージョンが正しく表示されるか

## リンク集

- [HTMLDialogElement - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement)
- [dialog polyfill](https://github.com/GoogleChrome/dialog-polyfill)
- [Ameba Accessibility Guidelines](https://a11y-guidelines.ameba.design/)
