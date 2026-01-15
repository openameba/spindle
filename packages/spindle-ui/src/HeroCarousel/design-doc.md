# HeroCarousel

## 概要・背景

トップページなどでヒーロー領域に複数のコンテンツ（画像＋タイトル＋リンク）をスライド表示するためのカルーセルコンポーネントです。自動再生と前後移動、再生／停止のコントロールを備え、フォーカスやホバー時は自動再生を停止して内容の可読性と操作性を高めます。`prefers-reduced-motion` を尊重し、アニメーションを軽減します。

## 使用例

### DO

自動再生の有無を用途に応じて選択し、2件以上のアイテムを渡します。

```tsx
import { HeroCarousel } from '@openameba/spindle-ui';

const carouselList = [
  { title: '記事A', imageUrl: 'https://example.com/a.webp', link: 'https://example.com/a' },
  { title: '記事B', imageUrl: 'https://example.com/b.webp', link: 'https://example.com/b' },
  { title: '記事C', imageUrl: 'https://example.com/c.webp', link: 'https://example.com/c' },
];

<HeroCarousel carouselList={carouselList} autoplay={false} />;
```

### DO NOT

- 1件のみ、あるいは0件のリストで使用しない（1件のみはカルーセルの意図に合わず、0件は描画されません）
- 画像に意味のある代替テキストを付与しない（タイトルがリンクラベルとなるため、画像は `alt=""` で装飾扱い）
- 16文字以上のタイトルにしない（2行以上は省略表示されます）

## 要素

### Design Tokens

- `--color-border-low-emphasis`（アイテム枠線・セパレータ・コントロール境界線）
- `--color-focus-clarity`（フォーカスリング）
- `--color-text-low-emphasis`（コントロール内アイコン色）
- `--color-text-high-emphasis`（タイトル文字色）

### プロパティ

#### HeroCarousel

```ts
type Props = {
  carouselList: CarouselItem[];
  autoplay?: boolean;
};
```

#### CarouselItem

```ts
export type CarouselItem = {
  imageUrl: string;
  link: string;
  title: string;
};
```

## 実装例

書き出されるマークアップの一例です。

```html
<div>
  <div role="region" class="spui-HeroCarousel-container" aria-label="カルーセル">
    <ul aria-roledescription="カルーセル" class="spui-HeroCarousel-list">
      <li class="spui-HeroCarouselItem-listItem">
        <a class="js-auto-play-carousel-item-link spui-HeroCarouselItem-link" href="...">
          <span class="spui-HeroCarouselItem-imageBlock">
            <img alt="" class="spui-HeroCarouselItem-image" src="..." />
          </span>
          <div class="spui-HeroCarouselItem-titleContainer">
            <p class="spui-HeroCarouselItem-title">タイトル</p>
          </div>
        </a>
      </li>
      <!-- ... -->
    </ul>
  </div>

  <div class="spui-HeroCarousel-controls">
    <button type="button" aria-label="1つ前のアイテムに移動" class="spui-HeroCarousel-control spui-HeroCarousel-control--prev">
      <!-- 左アイコン -->
    </button>
    <button type="button" aria-label="スライドを停止" class="spui-HeroCarousel-control">
      <!-- 再生/一時停止アイコン -->
    </button>
    <button type="button" aria-label="1つ後ろのアイテムに移動" class="spui-HeroCarousel-control spui-HeroCarousel-control--next">
      <!-- 右アイコン -->
    </button>
  </div>
</div>
```

## アクセシビリティ

- [画像に代替テキストを提供する](https://a11y-guidelines.ameba.design/1/1/1/)
  - [ ] サムネイル画像は装飾のため `alt=""` とし、リンクテキスト（タイトル）で名称を提供する
- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)
  - [ ] 外枠には `role="region"` と `aria-label="カルーセル"` を付与し、内部リストには `aria-roledescription="カルーセル"` を付与している
- [意味のある順序でコンテンツを表現する](https://a11y-guidelines.ameba.design/1/3/2/)
  - [ ] DOM順と見た目の順序が一致している
- [色だけで伝えない](https://a11y-guidelines.ameba.design/1/4/1/)
  - [ ] ボタンの状態や意味はアイコンと `aria-label` で伝えている
- [テキストや文字画像のコントラストを確保する](https://a11y-guidelines.ameba.design/1/4/3/)
  - [ ] テキスト色はTheme Colorsを適切に使用している
- [テキストサイズを拡大縮小できる](https://a11y-guidelines.ameba.design/1/4/4/)
  - [ ] 200%拡大してもタイトルは切れず、省略記号で表示崩れがない
- [キーボード、タッチデバイスで操作できる](https://a11y-guidelines.ameba.design/2/1/1/)
  - [ ] Tabで各リンク・ボタンにフォーカスでき、Enter/Spaceで操作できる
  - [ ] フォーカス/ホバー時は自動再生が停止し、意図せぬ移動が起きない
- [適切なフォーカス順序にする](https://a11y-guidelines.ameba.design/2/4/3/)
  - [ ] フォーカス移動は視覚順序と一致している
- [フォーカスを見えるようにする](https://a11y-guidelines.ameba.design/2/4/7/)
  - [ ] フォーカスリングは背景色に対して3:1以上のコントラスト比を持つアウトラインで可視化されている
- [ターゲットのサイズを理解する](https://a11y-guidelines.ameba.design/2/5/5/)
  - [ ] コントロールのタップ領域は44×44px以上を確保している
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)
  - [ ] HTML仕様に準拠した構造とラベル付けになっている

## テスト方針

### ユニットテスト (Testing Library)

- `aria-label` / `aria-roledescription` の付与確認
- コントロールボタンの `aria-label` とクリック時の動作（前/次、再生/停止）
- 再生/停止ボタンのラベル切り替え（再生中は「スライドを停止」、停止中は「スライドを再生」）
- フォーカス/ホバーで自動再生が停止することのイベント検証
- `carouselList` が空配列のときにレンダーされないことの検証

### ヴィジュアルリグレッションテスト (Storybook)

- 通常
- タイトル長文（省略の確認）

## リンク集

- [Carousel (Slide Show or Image Rotator) Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/)
