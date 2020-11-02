## 前提 / Context
Spindle(スピンドル)は「Amebaらしさ」を一貫してユーザーに届けるための仕組みです。Spindle UIはその手段の一つとして、開発者と利用者をつなぐための、Web UIライブラリです。

## 目指すこと / Goals
このリポジトリでは、各Webアプリケーションで再作成する必要のない小さな単位のコンポーネントを作成し、ライブラリとして配信することを目指します。

## 目指さないこと / Non-goals
このリポジトリでは、このコンポーネントだけでWebアプリケーションを作れるような、大きなライブラリを提供することを目指していません。

## 概要 / Overview
Amebaの開発での利用実績を踏まえ、以下の点を考慮してライブラリを提供します。

- **Reactコンポーネントの提供**: Amebaで最も利用されているUIライブラリのReactで作られたミニマムなコンポーネントを提供します
- **スタイルが定義されたCSSの提供**: UIライブラリを使用しないLPなどのプロジェクトにCSSで表現できる範囲の振る舞いを提供します
- **UIコンポーネントカタログ中心の開発**: 作られたコンポーネントはすぐにテストされ、表示を確認します
- **管理されたファイルサイズ**: 共通処理が集まるため、大きくなりがちなUIライブラリのファイルサイズが規定を超さないようにします

## どのようにやっていくか / Approach, Detailed design

### Reactコンポーネントの提供
各アプリケーションで再作成する必要のない、ミニマムな要素をReactコンポーネントとして提供します。ただし、このコンポーネントに責務が集約されないようできる限り振る舞いに徹し、処理を含まないようにします。

非常に小さなコンポーネントとして作成されるので、プロジェクトで読み込まず、サンプルコードとして利用してもよいでしょう。また、[preact/compatを通じて](https://preactjs.com/guide/v10/switching-to-preact)Preactプロジェクトでも利用できます。

Reactコンポーネントは以下のように、利用します。

```JavaScript
import { Button } from '@openameba/spindle-ui';

export const WakuwakuForm = () => {
  return (
    <form>
      <Button size="large" type="submit" variant="primary">Yoshi!</Button>
    </form>
  );
}
```

スタイルはCSSファイルとして提供されているため、[PostCSS](https://github.com/postcss/postcss-import)や[Sass](https://sass-lang.com/documentation/at-rules/import#importing-css)などでインポートします。

```CSS
@import "spindle-ui/dist/Button.css";
```

#### 他の手段 / Alternative approach
より多くのプロジェクトで利用するために、Vue.jsやWeb Componentsで作成する必要があるかもしれませんが、2020年8月現在では最も利用されているReactで作成しています。Web ComponentsはSpindleで提供するコンポーネントの粒度ではちょうどよさそうですが、Amebaで使い慣れていないのと、Server-side Renderingに強くないため後回しします([lit-ssr](https://github.com/PolymerLabs/lit-ssr)期待か)。

また、スタイルの記述方法はより代替手段が考えられます。[CSS-in-JS](https://speakerdeck.com/vjeux/react-css-in-js)は、コンポーネント作成により適したテクニックかもしれません。本プロジェクトでは以下の条件を満たすため、CSSで記述しています。

- HTMLで使うため、セレクタ名が機械的に生成される前提でなく、そのままCSSファイルに出力できる
- Spindle自体と取り込むプロジェクト両方で、ビルドシステムにできるだけ干渉しない
- [ameba-color-palette.css](https://github.com/openameba/ameba-color-palette.css)を利用する可能性が高いため、CSS Custom propertiesが使いやすい

### スタイルが定義されたCSSの提供
UIライブラリを使用しないLPなどのプロジェクトでも、「Amebaらしさ」を表現した見た目・振る舞いをするために、独立したCSSファイルを提供します。ただし、現時点ではJavaScriptを利用した動的な動作は提供されていないため、自作する必要があります。

```HTML
<!-- CDNから読み込む -->
<link rel="stylesheet" href="https://path-of-CDN/spindle-ui/dist/index.css">

<form>
  <button class="spui-Button spui-Button--primary spui-Button--large" type="submit">Submit</button>
</form>
```

or

```CSS
/* PostCSSやSassを利用する */
/* Import all components */
@import "spindle-ui";
```

ファイルサイズをできる限り小さくしたい場合は、必要なコンポーネントのスタイルのみを読み込みます。

```HTML
<!-- CDNから読み込む -->
<link rel="stylesheet" href="https://path-of-CDN/spindle-ui/dist/Button.css">

<form>
  <button class="spui-Button spui-Button--primary spui-Button--large" type="submit">Submit</button>
</form>
```

or

```CSS
/* PostCSSやSassを利用する */
/* Import specific component */
@import "spindle-ui/dist/Button.css";
```

## UIコンポーネントカタログ中心の開発
UIライブラリは、様々なプロジェクトで利用される可能性があるため、多くの人にとって簡単に確認できるドキュメントが必要です。また、Spindleが目指している「Amebaらしさ」が満たされているかチェックできる仕組みも求められます。

Spindle UIのコンポーネントは開発中、公開後どちらもStorybookで作られたカタログを中心に確認されます。そこでは、見た目、ソースコードの確認やアクセシビリティ、パフォーマンス、リグレッションなどがテストされます。

### 管理されたファイルサイズ
UIライブラリは、共通処理が集約されたり、様々なバリエーションの実装が求められたりするため、ファイルサイズが増えがちです。それらを検知するために、ファイルサイズを機械的にチェックしています。

各コンポーネントやCSSファイルが指定されたサイズ以上にならないように管理されています。

```JSON
// bundlesize.config.json
{
  "files": [
    {
      "path": "./dist/**/*.js",
      "maxSize": "1 kB"
    },
    {
      "path": "./dist/index.css",
      "maxSize": "3 kB"
    }
  ]
}
```

## 想定される問題 / Drawback, Risk
UIライブラリを運営していくうえで、以下の問題が想定されます。これらを回避するために、できるだけ短期間に小さく運営を始めるとよいでしょう。

- 運用が大変で適切に更新されない
- 要望が増えすぎて対応しきれない
- 技術要素の利用条件が変化し、作り直さなければならない

## 関連リンク / Related link
- [React](https://reactjs.org/)
- [Preact](https://preactjs.com/)
- [Vue.js](https://vuejs.org/)
- [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [CSS in JS techniques comparison](https://github.com/MicheleBertoli/css-in-js)
- [postcss/postcss-import](https://github.com/postcss/postcss-import)
- [Sass: Importing CSS](https://sass-lang.com/documentation/at-rules/import#importing-css)
- [Storybook](https://storybook.js.org/)
- [siddharthkp/bundlesize](https://github.com/siddharthkp/bundlesize)
