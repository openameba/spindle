# Spindle Icons (In development)

SVG and PDF Icons with Spindle (Ameba Design System)

> Spindle Iconsは試験開発中のため、大幅に変更される可能性があります。安定版リリースまでの間はバージョン番号は0となり、バージョンに関わらずbreaking changeが行われることがありますので、利用時には注意してください。変更内容は、[CHANGELOG](CHANGELOG.md)に記載されています。

![See licence in readme.md](https://img.shields.io/npm/l/@openameba/spindle-icons) ![npm](https://img.shields.io/npm/v/@openameba/spindle-icons)

## インストール
```
npm install @openameba/spindle-icons
```

```
yarn add @openameba/spindle-icons
```

## 利用方法
Spindle Iconsで生成されたSVGアイコンは、以下の方法で利用できます。利用できるアイコンは[アイコンリスト](docs/icons.md)を参照してください。

### img要素
最も簡単な利用方法は、img要素としてSVGファイルを読み込むことです。いくつかのスクリーンリーダーでは、SVG読み込みするimg要素の`alt`属性のテキストを省略するため、`role="img"`を付与します。

ただし、この方法ではアイコンの表示色を指定できないため、要件を満たせない場合があります。

```html
<button>
  <img alt="時間設定" height="50" role="img" src="https://unpkg.com/@openameba/spindle-icons/dist/svg/clock.svg" width="50">
</button>
```

## Inline SVG

SVGをHTMLに埋め込みます。

SVGを埋め込むには、HTMLファイルにSVG文字列をそのまま埋め込むか、テンプレートエンジンやバンドラなどでビルドします。

```pug
//- Pugの例

button(aria-label="時間設定")
  include 'node_modules/@opanameba/spindle-icons/dist/svg/clock.svg'
```

アイコンは様々なコンテキストで利用される可能性があるため、Spindle Iconsで生成するSVG自体にタイトルは設定されていません。利用時には、都度テキストを挿入する必要があります。

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

アプリケーションでは、一般的に複数のアイコンが利用されるため、SVG Spriteも有効な手段です。Spindle Iconsではすべてのアイコンで作られた[sprite.svg](dist/svg/sprite.svg)を配布しています。ただしファイル容量も大きいので、[svg-sprite](https://github.com/jkphl/svg-sprite)などを利用して、必要なアイコンのみでSVG Spriteを生成することを推奨します。

```sh
# 必要なアイコンのみでSVG Spriteを生成する例
# 各オプションはそれぞれのプロジェクトに合わせて設定します

npx svg-sprite --symbol --symbol-dest=. --symbol-sprite=sprite.svg  --shape-transform-svgo sprite.svgo.json --dest=＄PATH_TO_SVG 'node_modules/@openameba/spindle-icons/dist/+(check|exclamationmark).svg'

# sprite.svgo.jsonの例
# SVG各ファイルに付与されている無駄なfillを消したい場合に設定します
{
  "plugins": [
    {
      "removeAttrs":
        {
          "attrs": "fill"
        }
    }
  ]
}
```

アイコンを利用する際には、ラベリングを忘れないようにしてください。テキストはsvg要素内の`title`属性で指定し、svg要素の`aria-labelledby`属性から参照します。Inline SVGと同様に、`.visually-hidden`要素や `aria-label`でテキストを指定します。装飾用途ではタイトルを省略できます。

```html
<button>
  <svg aria-labelledby="clock-icon-title" role="img">
    <title id="clock-icon-title">時間設定</title>
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="sprite.svg#clock"></use>
  </svg>
</button>
```

### React
Spindle IconsはReactコンポーネントとして利用できます。利用する際には、[Inline SVG](#inline-svg)と同様に、適切なラベリングを忘れないように注意してください。

```JavaScript
import { Clock } from '@openameba/spindle-ui/Icon';

export function SomeButton() {
  return <button aria-label="時間設定" type="button"><Clock /></button>
}
```



## ライセンス
Spindle Iconsは以下2つのライセンスで公開されています。

- SVGファイルは、Creative Commons BY-NC-ND 4.0
- ソースコードは、MIT License

## 関連ドキュメント
- [アイコンリスト](docs/icons.md)
- [Design Doc](docs/design-doc.md)
