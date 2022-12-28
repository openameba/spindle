## 前提 / Context

Spindle UIではUIコンポーネントのみを公開していますが、実際の機能は同じで見た目を変えたいというユースケースもあります。

例えばカルーセルはspindle-uiで[HeroCarousel](https://ameba-spindle.web.app/?path=/story/herocarousel--normal)として提供されていますが、UIが固定されており要件によって自由にUIを変更することは難しいです。

そのため、カルーセルであればスライドのアニメーションや再生・停止といった機能のみを提供しUIについては使用側で自由に決められるようにしたいです。

## 目指すこと / Goals

汎用的で必要最低限の機能を実装し、サービス間で共通のロジックを使いまわせるようにします。

## 目指さないこと / Non-goals

一部のケースでしか使用できないような機能を追加すること。

## 概要 / Overview

Amebaの開発での利用実績を踏まえ、以下の点を考慮してライブラリを提供します。

- **React Hooks の提供**: Amebaで最も利用されているUIライブラリのReactで作られたミニマムなHooksを提供します
- **UI コンポーネントカタログ中心の開発**: 作られたコンポーネントはすぐにテストされ、表示を確認します
- **管理されたファイルサイズ**: 共通処理が集まるため、大きくなりがちなライブラリのファイルサイズが規定を超さないようにします

## どのようにやっていくか / Approach, Detailed design

### React Hooks の提供

各アプリケーション間で共通利用したいロジックをReact Hooksとして提供します。ただし、UIに依存したり命令的にDOMを処理することで副作用を含んだりしないように注意します。

React Hooksは以下のように利用します。

```js
import { useTimeDistance } from '@openameba/spindle-hooks';

function WakuWakuTime() {
  const publishedAt = '2022-02-22T22:22:22.222Z';
  const [dateString] = useTimeDistance(publishedAt);
  return <time datetime={publishedAt}>{dateString}</time>;
}
```

#### 他の手段

より多くのプロジェクトで利用するために、Vue.jsやWeb Componentsで作成する必要があるかもしれませんが、2022年6月現在では最も利用されているReactで作成しています。

Reactを使用せずJavaScriptでDOMを操作する方法もあります。この方法であればライブラリに依存せずロジックを共通化できる一方、メンテナンスコストがかかる、使いやすいインターフェイスを実現するのが難しいといった問題があります。

## UI コンポーネントカタログ中心の開発

Spindle Hooksは、様々なプロジェクトで利用される可能性があるため、多くの人にとって簡単に確認できるドキュメントが必要です。また、Spindleが目指している「Amebaらしさ」が満たされているかチェックできる仕組みも求められます。

Spindle Hooksは開発中、公開後どちらもStorybookで作られたカタログを中心に確認されます。そこでは、見た目、ソースコードの確認やアクセシビリティ、パフォーマンス、などがテストされます。

またSpindle Hooksは多くのロジックを含むためReact Testing Libraryを用いたユニットテストを書き、誰もがメンテナンスしやすく、使いやすい状態を目指します。

## 管理されたファイルサイズ

ライブラリは、共通処理が集約されたり、様々なバリエーションの実装が求められたりするため、ファイルサイズが増えがちです。それらを検知するために、ファイルサイズを機械的にチェックしています。

各Hooksが指定されたサイズ以上にならないように管理されています。

```JSON
// bundlesize.config.json
{
  "files": [
    {
      "path": "./dist/**/*.mjs",
      "maxSize": "1.5 kB"
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
- [Vue.js](https://vuejs.org/)
- [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [postcss/postcss-import](https://github.com/postcss/postcss-import)
- [Storybook](https://storybook.js.org/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [siddharthkp/bundlesize](https://github.com/siddharthkp/bundlesize)
