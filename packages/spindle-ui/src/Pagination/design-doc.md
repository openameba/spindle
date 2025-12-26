# Pagination

## 概要・背景

ページ送りを行うためのコンポーネントです。利用環境や情報量に応じて表示密度や遷移手段を自動的に調整し、前後移動・特定ページへのジャンプ・端への移動を一貫したパターンで示します。

## 使用例

### DO

ページ数が多い箇所、現在ページを明示しつつリンク遷移も可能にしたい時での利用を想定しています。`createUrl`で各ページの詳細URLを生成し、`onPageChange`はページ遷移時に必要な周辺処理のトリガーとして利用します。

```tsx
<Pagination
  total={20}
  current={8}
  linkFollowType="all"
  createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
  onPageChange={(event, pageNumber) => {
    event.preventDefault();
  }}
/>
```

### DO NOT

- `current` を1未満や `total`を下回らない値に設定しない
- `total`が0の状態で使用しない
- `createUrl`に無効なURLを返す関数を渡さない

## 要素

### Design Tokens

- `--color-surface-tertiary`（非アクティブ数字ボタンの背景）
- `--color-text-medium-emphasis`（非アクティブ文字色）
- `--color-border-low-emphasis`（アクティブ枠線色）
- `--color-text-low-emphasis`（アクティブ文字色）
- `--color-focus-clarity`（フォーカスリング色）
- `--color-object-low-emphasis`（省略記号アイコン色）
- `--color-surface-quaternary`（ホバー背景）
- `--color-tap-highlight-base`（タップハイライト）

### プロパティ

```ts
export type LinkFollowType = 'all' | 'none' | 'firstPage';

interface Props extends React.HTMLAttributes<HTMLElement> {
  current: number;
  total: number;
  linkFollowType: LinkFollowType;
  showTotal?: boolean;
  onPageChange?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    pageNumber: number,
  ) => void;
  createUrl: (pageNumber: number) => string;
}
```

`LinkFollowType`は`rel`属性に対して付与するためのプロパティです。検索インデックスを積極的に持たせたい一覧では`all`を指定し、クローラに辿らせたくない動的一覧やアプリケーション内でのページングでは`none`を指定します。`firstPage`は1ページ目のみをインデックス対象にします。

## 実装例

書き出されるマークアップの一例です。

```html
<nav aria-label="ページネーション" class="spui-Pagination">
  <ul class="spui-Pagination-list">
    <li class="spui-Pagination-item">
      <a class="spui-Pagination-link" rel="nofollow" href="/detail/7.html" aria-label="7ページ目">7</a>
      <svg class="spui-Pagination-ellipsis" aria-hidden="true"></svg>
    </li>
    <!-- ... -->
    <li class="spui-Pagination-item">
      <a class="spui-Pagination-link" aria-current="page" href="#" aria-label="8ページ目">8</a>
    </li>
    <!-- ... -->
  </ul>
  <p class="spui-Pagination-total">8/20ページ</p>
</nav>
```

## アクセシビリティ

- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)
  - [ ] `nav` + `aria-label="ページネーション"` を付与している
- [意味のある順序でコンテンツを表現する](https://a11y-guidelines.ameba.design/1/3/2/)
  - [ ] DOM順が視覚順序と一致している
- [色だけで伝えない](https://a11y-guidelines.ameba.design/1/4/1/)
  - [ ] アクティブは `aria-current="page"` を併用して伝えている
- [テキストや文字画像のコントラストを確保する](https://a11y-guidelines.ameba.design/1/4/3/)
  - [ ] テーマのテキスト/境界色を適切に利用している
- [フォーカスを見えるようにする](https://a11y-guidelines.ameba.design/2/4/7/)
  - [ ] キーボード操作時にフォーカスリングが視認できる
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)
  - [ ] HTML仕様に準拠して実装されている

## テスト方針

### ユニットテスト (Testing Library)

- `nav[aria-label="ページネーション"]`が描画される
- ページ番号のリンクに `aria-current="page"`が付与される（現在ページ）
- 「前へ/次へ」「最初へ/最後へ」の表示/非表示が`total`に応じて切替わる
- `linkFollowType`の値に応じて`rel`が期待通りになる
- `onPageChange`にイベントとページ番号が渡される
- `showTotal`指定時、`{current}/{total}ページ`が表示される
- 360px以下相当で`showItemSize`が3に切替わる（表示数の検証）

### ヴィジュアルリグレッションテスト (Storybook)

- `total`が閾値未満（前／次ボタンあり）の各currentケース
- `total`が閾値以上（最初／最後ボタンあり）の代表ケース（先頭／中間／末尾）
- `linkFollowType`の3種
- `showTotal`の有無

## リンク集

特になし。
