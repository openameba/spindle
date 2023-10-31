# InlineNotification
## 概要・背景
InlineNotificationコンポーネントは、ユーザーのアクションに対してお知らせをする際に利用します。Toast, SnackBarのようにコンテンツに重ねての表示ではなく、コンテンツと同じ階層での表示になります。

また、エラー内容を表示するForm/InvalidMessageコンポーネントとは異なり、フォームに紐づかない形で提供されます。

### 他の通知系コンポーネント（Toast, SnackBar）との違い
現状下記のように使い分けています。

Component | テキストの長さ | 追加のアクションの有無 | 自動で消える秒数 | 表示位置 | メッセージの内容
:-- | :-- | :-- | :-- | :-- | :--
Toast | 1行のみ | なし | 4秒 | フローティングで位置固定で表示（画面上下の中央のみ） | 見落としても支障がない
Snackbar | 3,4行まで | あり | 10秒 | フローティングで位置固定で表示（画面上下の左・右・中央）| 読んでは欲しい、訴求
InlineNotification | 制限なし | あり | 消えない | ページに埋め込む必要がありレイアウトに影響を与える | エラー通知など、ユーザーの追加のアクションが必要なもの

## スクリーンショット
### Variant
種類 | スクリーンショット
:-- | :-- |
`information` | ![Information](https://github.com/openameba/spindle/assets/42470015/4cf6d507-e77c-4b91-b2a1-a6cbc87ff960)
`confirmation` | ![Confirmation](https://github.com/openameba/spindle/assets/42470015/cb9c35b8-0069-4434-b502-6e729f8f1927)
`error` | ![Error](https://github.com/openameba/spindle/assets/42470015/dc4a875b-d737-4ffc-818c-26eea447c168)

### Layout
種類 | スクリーンショット
:-- | :-- |
`inset` | ![Inset](https://github.com/openameba/spindle/assets/42470015/e20eb985-3102-4ced-9580-9b9e28fabc5d)
`full` | ![Full](https://github.com/openameba/spindle/assets/42470015/466c6200-11e1-4bd4-aad1-a597c2e81cf0)

## 使用例
### DO
InlineNotificationコンポーネントは、`InlineNotification.Frame`内部に`InlineNotification.{Text|Icon|IconButton|Avatar|TextButton|Button}`を組み合わせて使用することを想定しています。

#### テキストのみ表示
```tsx
<InlineNotification.Frame visible>
  <InlineNotification.Text>ここにテキストを入力します</InlineNotification.Text>
</InlineNotification.Frame>
```

#### アイコン + テキストを表示
本文に対して左側に表示されるアイコンです。お知らせの種類をユーザーが把握しやすくするために使用してください。
```tsx
<InlineNotification.Frame visible>
  <InlineNotification.Icon><Information aria-hidden="true"/></InlineNotification.Icon>
  <InlineNotification.Text>ここにテキストを入力します</InlineNotification.Text>
</InlineNotification.Frame>
```

#### 画像 + テキストを表示
本文に対して左側に表示される画像です。お知らせの種類をユーザーが把握しやすくするために使用してください。
```tsx
<InlineNotification.Frame visible>
  <InlineNotification.Avatar src="/avatar.png" alt="アバター画像"/>
  <InlineNotification.Text>ここにテキストを入力します</InlineNotification.Text>
</InlineNotification.Frame>
```

#### テキスト + IconButtonを表示
本文に対して右側に表示されるIconButtonです。
```tsx
<InlineNotification.Frame visible>
  <InlineNotification.Text>ここにテキストを入力します</InlineNotification.Text>
  <InlineNotification.IconButton><CrossBold aria-label="とじる"/></InlineNotification.IconButton>
</InlineNotification.Frame>
```

#### テキスト + TextButtonを表示
本文に対して右側に表示されるTextButtonです。ユニークな文字列を入れる必要がある時に使用します。
```tsx
<InlineNotification.Frame visible>
  <InlineNotification.Text>ここにテキストを入力します</InlineNotification.Text>
  <InlineNotification.TextButton>とじる</InlineNotification.TextButton>
</InlineNotification.Frame>
```

#### テキスト + Buttonを表示
本文に対して右側に表示されるButtonです。強調したい重要な導線がある時に使用します。
```tsx
<InlineNotification.Frame visible>
  <InlineNotification.Text>ここにテキストを入力します</InlineNotification.Text>
  <InlineNotification.Button>確認</InlineNotification.Button>
</InlineNotification.Frame>
```

### DO NOT
`InlineNotification.Frame`内部に`InlineNotification.{Text|Icon|IconButton|Avatar|TextButton|Button}`以外のものを配置して使用することは想定していません。

また、`InlineNotification.Frame`以外の何かで`InlineNotification.{Text|Icon|IconButton|Avatar|TextButton|Button}`をラップすることも想定していません。

## 要素
### Design Tokens
- Information
  - `emphasis: false`
    - Surface Tertiary (背景色)
    - Text Medium Emphasis (テキストカラー)
    - Object Medium Emphasis (オブジェクトカラー)
  - `emphasis: true`
    - Surface Accent Neutral High Emphasis (背景色)
    - Text High Emphasis Inverse (テキストカラー)
    - Object High Emphasis Inverse (オブジェクトカラー)
- Confirm
  - `emphasis: false`
    - Surface Accent Primary Light (背景色)
    - Text Accent Primary (テキストカラー)
    - Object Accent Primary (オブジェクトカラー)
  - `emphasis: true`
    - Surface Accent Primary (背景色)
    - Text High Emphasis Inverse (テキストカラー)
    - Object High Emphasis Inverse (オブジェクトカラー)
- Error
  - `emphasis: false`
    - Surface Caution Light (背景色)
    - Text Caution (テキストカラー)
    - Object Caution (オブジェクトカラー)
  - `emphasis: true`
    - Surface Caution (背景色)
    - Text High Emphasis Inverse (テキストカラー)
    - Object High Emphasis Inverse (オブジェクトカラー)

### プロパティ
#### `InlineNotification.Frame`
```typescript
type Variant = 'information' | 'confirmation' | 'error';
type Layout = 'inset' | 'full';
type Props = {
  children?: ReactElement;
  variant?: Variant;
  emphasis?: boolean;
  layout?: Layout;
  visible?: boolean;
}
```

##### Variant
通知の内容によって、3種類使い分けて使用してください。初期値は`information`です。
- `information`（初期値）：システム上で処理が実行された事を報告するときに使用します。必ずしも情報がユーザーにとって喜ばしくない状況で使用することが多いです
- `confirmation`：主にユーザーが行なったアクションに対して実行が成功した時などに使用します。情報がユーザーにとって喜ばしい状況で使用します
- `error`：システム上で処理が実行された際に、ユーザーの想定外のエラーが起きた時に使用します。エラー以外の否定的な動作には`error`は使わずに、`information`を使用してください

##### Layout
状況によって2種類の形状を使い分けて使用してください。初期値は`inset`です。
- `inset`（初期値）：お知らせをコンテンツの間に挿入する時に使用します。最大幅はコンテンツ幅に合わせます
- `full`：そのview全体に影響を及ぼすお知らせや留意事項に使用します。コンテナ幅いっぱいに広がって表示されます

##### Emphasis
状況によって2種類の強弱を使い分けて使用してください。初期値は`false`です。

#### `InlineNotification.{Text|Icon|IconButton|TextButton|Button}`
```typescript
type Props = {
  children?: ReactNode;
}
```

#### `InlineNotification.Avatar`
```typescript
type Props = {
  src: string;
  alt?: string // 初期値は空文字
}
```

## 実装例
React実装の一例です。
```tsx
<InlineNotification.Frame variant="information" visible>
  <InlineNotification.Icon><Information aria-hidden="true"/></InlineNotification.Icon>
  <InlineNotification.Text>ブログの管理者が承認するまで、コメントが反映されない場合があります</InlineNotification.Text>
</InlineNotification.Frame>
```
上記の実装から書き出されるマークアップです。
```html
<div class="spui-InlineNotification spui-InlineNotification--information">
  <div class="spui-InlineNotification-content">
    <div class="spui-InlineNotification-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" role="img" aria-hidden="true"><path d="M12.01 22c5.51 0 10-4.49 10-10s-4.49-10-10-10-10 4.49-10 10 4.48 10 10 10Zm0-18c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8Zm-1.25 12.5V11a1.25 1.25 0 0 1 2.5 0v5.5a1.25 1.25 0 0 1-2.5 0Zm0-8.75a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z"></path></svg>
    </div>
    <p class="spui-InlineNotification-text">ブログの管理者が承認するまで、コメントが反映されない場合があります</p>
  </div>
</div>
```

## アクセシビリティ
### チェックリスト
- [画像に代替テキストを提供する](https://a11y-guidelines.ameba.design/1/1/1/)[基本必須]
  - [ ] Avatar画像はalt属性をPropsとして提供しているため、必要に応じて指定する
  - [ ] Avatar画像を装飾目的として利用する場合は、何も指定しない（初期値の空文字が設定される）
- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)[基本必須]
  - [ ] マシンリーダブルに実装している
- [意味のある順序でコンテンツを表現する](https://a11y-guidelines.ameba.design/1/3/2/)[基本必須]
  - [ ] 見た目の順番と、キーボード操作の順番が一致している
- [表示の向きを固定しない](https://a11y-guidelines.ameba.design/1/3/4/)[できれば]
  - [ ] 端末を横向きにしても、適切に文字が折り返されレイアウトが変わり、コンテンツが見切れていない
  - [ ] 端末の向きが縦向き（portrait）を前提としたデザインになっていない
- [テキストや文字画像のコントラストを確保する](https://a11y-guidelines.ameba.design/1/4/3/)[基本必須]
  - [ ] SpindleカラーパレットのTheme Colorsを適切に使い分けている
- [テキストサイズを拡大縮小できる](https://a11y-guidelines.ameba.design/1/4/4/)[基本必須]
  - [ ] 画面を200%拡大・文字サイズを2倍に変更しても、適切に文字が折り返され、情報が欠落していない
- [リフローできる](https://a11y-guidelines.ameba.design/1/4/10/)[できれば]
  - [ ] 画面を400%まで拡大しても、画面幅に合わせて画像や要素のサイズが変動し、テキストは適切に折り返される（レスポンシブデザイン）
- [適切なフォーカス順序にする](https://a11y-guidelines.ameba.design/2/4/3/)[基本必須]
  - [ ] キーボード操作の順序が、見た目の順序と一致している
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)[基本必須]
  - [ ] HTML仕様に準拠した実装をしている

### その他
コンポーネントからはアプリケーション内での使われ方や重要度がわからないため、`aria-*`属性や`role`属性は付与していません。そのため、コンポーネント利用時には適宜付与して支援技術に通知してください。
```tsx
<InlineNotification.Frame role="alert" variant="error" visible>
  <InlineNotification.Icon><ExclamationmarkCircleFill aria-hidden="true"/></InlineNotification.Icon>
  <InlineNotification.Text>ファイル形式が正しくありません</InlineNotification.Text>
</InlineNotification.Frame>
```

## リンク集
特になし
