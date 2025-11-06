# DropdownMenu
## 概要・背景
DropdownMenuコンポーネントは、ユーザーに選択肢やアクションを提供する際に利用します。

## スクリーンショット
### Variant
種類 | スクリーンショット
:-- | :-- |
`text` | <img width="310" alt="variantにtextを指定した場合のDropdownMenu" src="https://github.com/openameba/spindle/assets/42470015/b293a542-e3e7-4269-adb5-79f13aa85516">
`textWithIcon` | <img width="310" alt="variantにtextWithIconを指定した場合のDropdownMenu" src="https://github.com/openameba/spindle/assets/42470015/aa19bab8-f146-4e4d-9045-8a1945c7cdb1">
`headWithIcon` | <img width="310" alt="variantにheadWithIconを指定した場合のDropdownMenu" src="https://github.com/openameba/spindle/assets/42470015/c81b1085-4973-47f5-b823-a06458b598ab">
`headWithIconAndCaption` | <img width="310" alt="variantにheadWithIconAndCaptionを指定した場合のDropdownMenu" src="https://github.com/openameba/spindle/assets/42470015/225abe75-3b3a-46ad-b811-88c8acafd5d2">

### Position
種類 | スクリーンショット
:-- | :-- |
上開き | <img width="600" alt="positionにtopLeft, topCenter, topRightを指定した場合のDropdownMenu" src="https://github.com/openameba/spindle/assets/42470015/013963fd-b587-4c42-8126-e84b13b98e08">
右開き | <img width="600" alt="positionにrightTop, rightCenter, rightBottomを指定した場合のDropdownMenu" src="https://github.com/openameba/spindle/assets/42470015/28f237ed-f043-4def-a353-ceeb2557c3ff">
下開き | <img width="600" alt="positionにbottomLeft, bottomCenter, bottomRightを指定した場合のDropdownMenu" src="https://github.com/openameba/spindle/assets/42470015/c8af211f-f3a1-4193-abae-a5b379e52c55">
左開き | <img width="600" alt="positionにleftTop, leftCenter, leftBottomを指定した場合のDropdownMenu" src="https://github.com/openameba/spindle/assets/42470015/c266f3c4-d910-40e8-988a-f51538f61590">

## 使用例
### DO
DropdownMenuコンポーネントは、`DropdownMenu.{Caption|Frame|List|ListItem|Title}`を組み合わせて使用することを想定しています。

#### テキストのみ表示
テキストのみを表示するパターンです。
```tsx
<DropdownMenu.Frame>
  <button
    aria-controls="example"
    aria-expanded={open}
    onClick={onClick}
    ref={triggerRef}
    type="button"
  >
    開く
  </button>
  <DropdownMenu.List
    id="example"
    onClose={onClose}
    open={open}
    triggerRef={triggerRef}
  >
    <DropdownMenu.ListItem onClick={onClick1}>
      <DropdownMenu.Title>ここにテキストが入ります</DropdownMenu.Title>
    </DropdownMenu.ListItem>
    <DropdownMenu.ListItem onClick={onClick2}>
      <DropdownMenu.Title>ここにテキストが入ります</DropdownMenu.Title>
    </DropdownMenu.ListItem>
  </DropdownMenu.List>
</DropdownMenu.Frame>
```

#### アイコン + テキスト（高さ44px）を表示
テキストに対して左側にアイコンを表示するパターンです。アイコンは、選択肢やアクションの種類をユーザーが把握しやすくするために使用してください。
```tsx
<DropdownMenu.Frame>
  <button
    aria-controls="example"
    aria-expanded={open}
    onClick={onClick}
    ref={triggerRef}
    type="button"
  >
    開く
  </button>
  <DropdownMenu.List
    id="example"
    onClose={onClose}
    open={open}
    triggerRef={triggerRef}
    variant="textWithIcon"
  >
    <DropdownMenu.ListItem
      icon={<AllFill aria-hidden="true" />}
      onClick={onClick1}
    >
      <DropdownMenu.Title>ここにテキストが入ります</DropdownMenu.Title>
    </DropdownMenu.ListItem>
    <DropdownMenu.ListItem
      icon={<AllFill aria-hidden="true" />}
      onClick={onClick2}
    >
      <DropdownMenu.Title>ここにテキストが入ります</DropdownMenu.Title>
    </DropdownMenu.ListItem>
  </DropdownMenu.List>
</DropdownMenu.Frame>
```

#### アイコン + 見出し（高さ56px）を表示
見出しに対して左側にアイコンを表示するパターンです。アイコンは、選択肢やアクションの種類をユーザーが把握しやすくするために使用してください。
```tsx
<DropdownMenu.Frame>
  <button
    aria-controls="example"
    aria-expanded={open}
    onClick={onClick}
    ref={triggerRef}
    type="button"
  >
    開く
  </button>
  <DropdownMenu.List
    id="example"
    onClose={onClose}
    open={open}
    triggerRef={triggerRef}
    variant="headWithIcon"
  >
    <DropdownMenu.ListItem
      icon={<AllFill aria-hidden="true" />}
      onClick={onClick1}
    >
      <DropdownMenu.Title>ここにテキストが入ります</DropdownMenu.Title>
    </DropdownMenu.ListItem>
    <DropdownMenu.ListItem
      icon={<AllFill aria-hidden="true" />}
      onClick={onClick2}
    >
      <DropdownMenu.Title>ここにテキストが入ります</DropdownMenu.Title>
    </DropdownMenu.ListItem>
  </DropdownMenu.List>
</DropdownMenu.Frame>
```

#### アイコン + 見出し + キャプションを表示
見出しに対して左側にアイコンを表示するパターンです。アイコンは、選択肢やアクションの種類をユーザーが把握しやすくするために使用してください。

また、見出し下にキャプションを表示して内容を補足することもできます。
```tsx
<DropdownMenu.Frame>
  <button
    aria-controls="example"
    aria-expanded={open}
    onClick={onClick}
    ref={triggerRef}
    type="button"
  >
    開く
  </button>
  <DropdownMenu.List
    id="example"
    onClose={onClose}
    open={open}
    triggerRef={triggerRef}
    variant="headWithIconAndCaption"
  >
    <DropdownMenu.ListItem
      icon={<AllFill aria-hidden="true" />}
      onClick={onClick1}
    >
      <DropdownMenu.Title>ここにテキストが入ります</DropdownMenu.Title>
      <DropdownMenu.Caption>ここにキャプションが入ります</DropdownMenu.Caption>
    </DropdownMenu.ListItem>
    <DropdownMenu.ListItem
      icon={<AllFill aria-hidden="true" />}
      onClick={onClick2}
    >
      <DropdownMenu.Title>ここにテキストが入ります</DropdownMenu.Title>
      <DropdownMenu.Caption>ここにキャプションが入ります</DropdownMenu.Caption>
    </DropdownMenu.ListItem>
  </DropdownMenu.List>
</DropdownMenu.Frame>
```

### DO NOT
`DropdownMenu.List`内部に`DropdownMenu.ListItem`以外のものを配置したり、`DropdownMenu.ListItem`内部に`DropdownMenu.{Caption|Title}`以外のものを配置して使用することは想定していません。

また、`DropdownMenu.Frame`以外の何かで`DropdownMenu.List`（+ トリガーボタン）をラップすることも想定していません。

## 要素
### Design Tokens
- Surface Primary (背景色)
- Text High Emphasis (テキスト・見出し）
- Text Low Emphasis (キャプション）
- Object High Emphasis (アイコン)
- Border Low Emphasis (区切り線）
- Overlay Medium (シャドウ)

### プロパティ
#### `DropdownMenu.List`
```typescript
type Variant =
  | 'text'
  | 'textWithIcon'
  | 'headWithIcon'
  | 'headWithIconAndCaption';
type Position =
  | 'topLeft'
  | 'topCenter'
  | 'topRight'
  | 'rightTop'
  | 'rightCenter'
  | 'rightBottom'
  | 'bottomLeft'
  | 'bottomCenter'
  | 'bottomRight'
  | 'leftTop'
  | 'leftCenter'
  | 'leftBottom';
type Props = {
  children: React.ReactNode;
  open: boolean; // DropdownMenuの開閉状態を指定
  triggerRef: React.RefObject<HTMLButtonElement>;
  onClose: () => void; // openプロパティをfalseにするための処理を指定
  id?: string;
  position?: Position; // トリガーボタンに対してDropdownMenuをどの方向に開くかを指定
  variant?: Variant; // DropdownMenuの種類を指定
}
```

##### Variant
提供する選択肢やアクションに応じて使い分けてください。初期値は`text`です。
- `text`（初期値）：テキストのみを表示したい場合に利用します
- `textWithIcon`：テキストに加えてアイコンで補足したい場合に利用します
- `headWithIcon`：見出しに加えてアイコンで補足したい場合に利用します
- `headWithIconAndCaption`：見出しに加えてアイコンとキャプションで補足したい場合に利用します

##### Position
トリガーボタンに対してDropdownMenuをどの方向に開くかを指定してください。初期値は`leftTop`です。
その他にも下記を指定できます。
- `topLeft`
- `topCenter`
- `topRight`
- `rightTop`
- `rightCenter`
- `rightBottom`
- `bottomLeft`
- `bottomCenter`
- `bottomRight`
- `leftTop`（初期値）
- `leftCenter`
- `leftBottom`

ただし、閲覧デバイスがスマホサイズの場合は常に下に開かれます（左右揃えについては、`position`に指定されている値に依存します）

#### `DropdownMenu.ListItem`
```typescript
type Props = {
  children: React.ReactNode;
  onClick: () => void; // 各アイテムをクリックした際に実行したい処理を指定
  icon?: React.ReactNode; // （アイコンを表示したい場合は）Spindle Iconsを指定
}
```

#### `DropdownMenu.{Caption|Frame|Title}`
```typescript
type Props = {
  children?: ReactNode;
}
```

## 実装例
React実装の一例です。
```tsx
<DropdownMenu.Frame>
  <button
    aria-controls="example"
    aria-expanded={open}
    onClick={onClick}
    ref={triggerRef}
    type="button"
  >
    開く
  </button>
  <DropdownMenu.List
    id="example"
    onClose={onClose}
    open={open}
    position="rightTop"
    triggerRef={triggerRef}
    variant="text"
  >
    <DropdownMenu.ListItem onClick={onClick1}>
      <DropdownMenu.Title>ここにテキストが入ります</DropdownMenu.Title>
    </DropdownMenu.ListItem>
    <DropdownMenu.ListItem onClick={onClick2}>
      <DropdownMenu.Title>ここにテキストが入ります</DropdownMenu.Title>
    </DropdownMenu.ListItem>
  </DropdownMenu.List>
</DropdownMenu.Frame>
```
上記の実装から書き出されるマークアップです。
```html
<div class="spui-DropdownMenu">
  <button aria-controls="example" aria-expanded="true" type="button">開く</button>
  <div id="example" class="spui-DropdownMenu-menu spui-DropdownMenu-menu--text spui-DropdownMenu-menu--rightTop" role="menu">
    <div class="spui-DropdownMenu-menuItem">
      <button class="spui-DropdownMenu-menuButton" type="button" role="menuitem">
        <div class="spui-DropdownMenu-textContainer">
          <p class="spui-DropdownMenu-title">ここにテキストが入ります</p>
        </div>
      </button>
    </div>
    <div class="spui-DropdownMenu-menuItem">
      <button class="spui-DropdownMenu-menuButton" type="button" role="menuitem">
        <div class="spui-DropdownMenu-textContainer">
          <p class="spui-DropdownMenu-title">ここにテキストが入ります</p>
        </div>
      </button>
    </div>
  </div>
</div>
```

## アクセシビリティ
- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)[基本必須]
  - [ ] メニューは`div`（`role="menu"`）、各アイテムは`button`（`type="button"` + `role="menuitem"`）で実装している
- [表示の向きを固定しない](https://a11y-guidelines.ameba.design/1/3/4/)[できれば]
  - [ ] 端末を横向きにしても、表示されるメニューの位置が変わりメニューやテキストが見切れない
  - [ ] 端末の向きが縦向き（portrait）を前提としたデザインになっていない
- [テキストや文字画像のコントラストを確保する](https://a11y-guidelines.ameba.design/1/4/3/)[基本必須]
  - [ ] SpindleのカラーパレットのTheme Colorsを適切に使い分け、コントラスト比を確保している（Text 4.5:1, Object 3:1）
- [テキストサイズを拡大縮小できる](https://a11y-guidelines.ameba.design/1/4/4/)[基本必須]
  - [ ] 画面を200%拡大・文字サイズを2倍に変更しても、適切に文字が折り返され、情報が欠落していない
- [リフローできる](https://a11y-guidelines.ameba.design/1/4/10/)[できれば]
  - [ ] 画面を400%まで拡大しても、画面幅に合わせて画像や要素のサイズが変動し、テキストは適切に折り返される（レスポンシブデザイン）
- [キーボード、タッチデバイスで操作できる](https://a11y-guidelines.ameba.design/2/1/1/)[基本必須]
  - [ ] コンポーネントはEnterまたはSpaceキーで開閉でき、Escキーで閉じることができる。また、Tabキーでメニューアイテムとコンポーネントの後続の要素にフォーカスを移動できる
- [適切なフォーカス順序にする](https://a11y-guidelines.ameba.design/2/4/3/)[基本必須]
  - [ ] キーボード操作時に、開閉ボタン→メニューアイテム→コンポーネントの後続の要素の順でフォーカスが移動する
- [フォーカスを見えるようにする](https://a11y-guidelines.ameba.design/2/4/7/)[基本必須]
  - [ ] メニューアイテムは、フォーカスの状態が見える
- [ターゲットのサイズを理解する](https://a11y-guidelines.ameba.design/2/5/5/)[できれば]
  - [ ] タップ領域は44px × 44px以上確保している
- [フォーカス時にコンテンツを大きく変更しない](https://a11y-guidelines.ameba.design/3/2/1/)[基本必須]
  - [ ] キーボードフォーカス時に、ページ遷移・レイアウト変更・ダイアログの表示・フォーカスの移動をしていない
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)[基本必須]
  - [ ] HTML仕様に準拠した実装をしている
- [カスタムコントロールの操作性を担保する](https://a11y-guidelines.ameba.design/4/1/2/)[基本必須]
  - [ ] メニューに`role="menu"`、メニューアイテムのボタンに`role="menuitem"`を適切に設定している。また、トリガーボタンに`aria-controls`と`aria-expanded`を適切に設定している。
  - [ ] スクリーンリーダーでも機能落ちがなく、読み上げが過不足なく行われている

## リンク集
特になし。
