# Breadcrumb

## 概要・背景
パンくずリストは、Webサイトのページ階層をリスト化して表示し、現在地を示すコンポーネントです。Webサイトを訪れたユーザーが、サイト内のどこのページを閲覧しているのか把握するために配置します。現在地を把握することでWebサイトの構造を理解しやすくなるため、アクセシビリティやSEOの観点でも効果的です。

## スクリーンショット

### Standard

<img width="681" alt="BreadcrumbList Standardのイメージ画像。シンプルなテキストとアイコンと下線で構成されている" src="https://github.com/openameba/spindle/assets/4669600/ae307457-664c-46bd-ae7f-134275a590c4">

### Standard(wrap)

<img width="672" alt="BreadcrumbList StandardのWrapオプションを適用しているイメージ画像。Standardのアイテムの3つ目が折り返して表示されている" src="https://github.com/openameba/spindle/assets/4669600/41244383-6afe-48e1-bd41-9364aeed7cad">

### Emphasized

<img width="675" alt="BreadcrumbList Emphasizedのイメージ画像。Standardのリストに角丸の背景色が適用され、強調されたデザインになっている" src="https://github.com/openameba/spindle/assets/4669600/06a667ea-d7f6-4d72-8f91-de5be5941264">


## 使用例

### DO
パンくずリストは、基本的には`BreadcrumbItem`と一緒に使うことを想定しています。ただしサイトによっては、リンク部分の要素が異なる可能性もあるので、子コンポーネントを受け取る形になっています。

```tsx
<BreadcrumbList>
  <BreadcrumbItem href="/top">Top</BreadcrumbItem>
  <BreadcrumbItem href="/team">Team</BreadcrumbItem>
  <BreadcrumbItem href="/about" current>Amebaとは</BreadcrumbItem>
</BreadcrumbList>
```

`<BreadcrumbItem>` を使わず、直接 `<a>` 要素も使用できます。各種フレームワークで定義された `<Link>` も同様に指定できます。その際には、現在地となる`a`要素に`aria-current`属性を付与してください。

```tsx
<BreadcrumbList variant="emphasized">
  {/* aでもLinkでもok */}
  <a href="/team">Team</a>
  {/* 現在地に `aria-current` 属性が必要 */}
  <a aria-current="page">Amebaとは</a>
</BreadcrumbList>
```

### DO NOT
`<BreadcrumbItem>` を使わない場合、現在地となる`a`要素に`aria-current`属性を付与せずに使ってはいけません。スクリーンリーダーなどの支援技術で現在地を識別できなくなります。

```tsx
<BreadcrumbList variant="emphasized">
  <a href="/top">Top</a>
  <a href="/team">Team</a>
  {/* 現在地をCSSクラスで視覚的にしか表現していない */}
  <a href="/about" className="is-active">Amebaとは</a>
</BreadcrumbList>
```

## 要素

### Design Tokens
- Surface Secondary (背景色)
- Text Accent Primary (リンク色)
- Text Low Emphasis (現在地テキスト色）
- Object Low Emphasis (矢印の色)
- Focus Clarity (フォーカスリングの色)

### プロパティ

#### BreadcrumbList
```typescript
type Props {
  children?: React.ReactNode;
  variant?: 'standard' | 'emphasized';
  wrap?: 'wrap';
}
```

##### Variant
BreadcrumbListの種類です。

- Standard（デフォルト）: シンプルなパンくずリスト。タップエリアを十分確保するため余白を指定しています
- Emphasized: 背景色のある、より強調されたパンくずリスト

##### Wrap
wrapオプションを `wrap` で指定すると、画面幅に入り切らなくなったタイミングで折り返して表示します。


#### BreadcrumbItem
```typescript
type Props {
  children?: React.ReactNode;
  current?: boolean;
}
```

## 実装例
マークアップはこんな感じで書き出されます。

```html
<nav aria-label="パンくずリスト" role="navigation">
  <ol>
    <li><a href="/top">Top</a><svg role="img" aria-hidden="true"></svg></li>
    <li><a href="/team">Team</a><svg role="img" aria-hidden="true"></svg></li>
    <li><a aria-current="page">Amebaの人と文化</a><svg role="img" aria-hidden="true"></svg></li>
  </ol>
</nav>
```

ファイル構成は異なりますが、大まかなReact実装はこんな感じです。

```tsx
import React, { forwardRef } from 'react';
import ChevronRightBold from "@openameba/spindle-ui/Icon/ChevronRightBold";

// classNameは受け取れる予定
interface ItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
}

export const BreadcrumbItem = forwardRef<HTMLAnchorElement, ItemProps>(
  function Item(
    {
      children,
      ...rest
    }: Props,
    ref,
  ) {
    if (href) {
      return <a ref={ref} {...rest}>{children}</a>;
    }
    return <a ref={ref} aria-curernt="page" {...rest}>{children}</a>;
  },
);


interface ListProps
  extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}


export const BreadcrumbList = (props: ListProps) => {
  const { children, ...rest } = props;
  return (
    <nav aria-label="パンくずリスト" role="navigation" {...rest}>
      <ol>
      {React.Children.map(children,
          child =>
          (<li key={child.key}>
           {child}<ChevronRightBold role="img" aria-hidden="true" />
           </li>)
          )}
      </ol>
    </nav>
  );
};
```

ListとItemは一緒に利用する可能性が高いので、`Breadcrumb.List`, `Breadcrumb.Item`でのexportを考えていましたが、List単体でも利用できる、かつ、利用側で`Breadcrumb.Item`をバンドルから外す方法も与えられなくなってしまうため、それぞれexportするようにしました。（参考: [Using Dot Notation for JSX Type - JSX In Depth – React](https://reactjs.org/docs/jsx-in-depth.html#using-dot-notation-for-jsx-type)）

厳密なスタイル定義もあまり意味のない、かつスタイルを書き換えられる可能性もあまりないコンポーネントなので、classNameは受け取れるようにしようかと考えています。

## アクセシビリティ
- [画像に代替テキストを提供する](https://a11y-guidelines.ameba.design/1/1/1/)[MUST]
  - [ ] アイコンは代替テキストが空になっている
- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)[MUST]
  - [ ] リストはnav要素、リンクはa要素で実装している
- [色だけで伝えない](https://a11y-guidelines.ameba.design/1/4/1/)[MUST]
  - [ ] 色だけで現在位置の区別をしていない
- [テキストや文字画像のコントラストを確保する](https://a11y-guidelines.ameba.design/1/4/3/)[MUST]
  - [ ] SpindleカラーパレットのTheme Colorsを適切に使い分けている
- [テキストサイズを拡大縮小できる](https://a11y-guidelines.ameba.design/1/4/4/)[MUST]
  - [ ] 画面を200%拡大・文字サイズを2倍に変更しても、下記のように情報が欠落しない
    - [ ] Wrapオプション指定時は、適切に文字が折り返される
    - [ ] その他は、横スクロールで全てのテキストを表示できる
- [リフローできる](https://a11y-guidelines.ameba.design/1/4/10/)[SHOULD]
  - [ ] 画面を400%まで拡大しても、画面幅に合わせて下記のようにテキストサイズが変動する
    - [ ] Wrapオプション指定時は、適切に文字が折り返される
    - [ ] その他は、横スクロールで全てのテキストを表示できる
- [キーボード、タッチデバイスで操作できる](https://a11y-guidelines.ameba.design/2/1/1/)[MUST]
  - [ ] リンクはTabキーでフォーカスでき、Enterキーで実行できる
- [適切なフォーカス順序にする](https://a11y-guidelines.ameba.design/2/4/3/)[MUST]
  - [ ] キーボード操作の順序が、見た目の順序と一致している
- [リンクの目的を理解できるようにする](https://a11y-guidelines.ameba.design/2/4/4/)[MUST]
  - [ ] リンクテキストがリンク先のページタイトルと一致している
- [フォーカスを見えるようにする](https://a11y-guidelines.ameba.design/2/4/7/)[MUST]
  - [ ] リンクは、フォーカスの状態が見える
- [現在位置を確認することができる](https://a11y-guidelines.ameba.design/2/4/8/)[SHOULD]
  - [ ] 現在位置は `aria-current="page"` を付与している
- [ターゲットのサイズを理解する](https://a11y-guidelines.ameba.design/2/5/5/)[SHOULD]
  - [ ] タップ領域は44px × 44px以上確保している
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)[MUST]
  - [ ] HTML仕様に準拠した実装をしている
- [HTMLの要素や属性を正しい役割で使用する](https://a11y-guidelines.ameba.design/4/1/2/)[MUST]
  - [ ] パンくずリストのnav要素に `aria-label="パンくずリスト"`、現在位置には `aria-current="page"` を付与している
  - [ ] スクリーンリーダーでも機能落ちがなく、読み上げが過不足なく行われている

## リンク集
- 導入されているページ
  - [Ameba流 長期間続けるためのシステム開発 - Ameba](https://about.ameba.jp/contents/czriiu_tv/)
