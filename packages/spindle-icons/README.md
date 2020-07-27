# Spindle Icons (In development)

- [アイコンリスト](icons.md)
- [Design Doc](design-doc.md)

## 利用方法
Spindle Iconsで生成されたSVGアイコンは、以下の方法で利用できます。

### img要素
最も簡単な利用方法は、img要素としてSVGファイルを読み込むことです。いくつかのスクリーンリーダーでは、SVG読み込みするimg要素の`alt`属性のテキストを省略するため、`role="img"`を付与します。

ただし、この方法ではアイコンの表示色を指定できないため、多くの要件を満たせないでしょう。

```html
<button>
  <img alt="時間設定" height="50" role="img" src="clock.svg" width="50">
</button>
```

## Inline SVG

SVGをHTMLに埋め込みます。アイコンは様々なコンテキストで利用される可能性があるため、Spindle Iconsで生成するSVG自体にタイトルは設定されていません。利用時には、都度テキストを挿入する必要があります。

一つの方法として、テキストをspan要素などを使って、非表示のテキストとして指定します。

```html
<style>
.visually-hidden {
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
}
</style>

<button>
  <svg>...</svg>
  <span class="visually-hidden">時間設定</span>
</button>
```

また、button要素の`aria-label`属性で、テキストを指定できます。

```html
<button aria-label="時間設定">
  <svg>...</svg>
</button>
```

SVGを装飾として利用する場合には、テキストと同時に利用することで、アイコンのテキストは省略できる場合があります。

```html
<button>
  <svg>...</svg>
  時間設定
</button>
```

### SVG Sprite

アプリケーションでは、一般的に複数のアイコンが利用されるため、SVG Spriteも有効な手段です。

テキストはsvg要素内の`title`属性で指定し、svg要素の`aria-labelledby`属性から参照します。Inline SVGと同様に、`.visually-hidden`要素や `aria-label`でテキストを指定します。装飾用途ではタイトルを省略できます。

```html
<button>
  <svg aria-labelledby="clock-icon-title" role="img">
    <title id="clock-icon-title">時間設定</title>
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="sprite.svg#clock"></use>
  </svg>
</button>
```

### React

[SVGR](https://github.com/gregberge/svgr)などを利用して、Reactコンポーネントとして書き出すことも可能です。

SVGRで変換する際には、[titleオプション](https://react-svgr.com/docs/options/#title)を有効にして、テキストを必須にできます。ただし、React要素は複数箇所で利用される場合が多く、id要素の重複で有効でないHTMLになってしまうかもしれません。利用方法に応じて書き出しオプションを設定してください。

```TypeScript
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgClock({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10zm0-18c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm6 8c0-.6-.4-1-1-1h-4V7c0-.6-.4-1-1-1s-1 .4-1 1v4c0 1.1.9 2 2 2h4c.6 0 1-.4 1-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgClock;
```

## ライセンス
Spindle Iconsは以下2つのライセンスで公開されています。

- SVGファイルは、Creative Commons BY-NC-ND 4.0
- ソースコードは、MIT License
