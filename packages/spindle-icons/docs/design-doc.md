## 前提 / Context
Amebaのデザインシステムである「Spindle」では、「Amebaらしさ」をあらわす要素の一つとして、アイコンを作成しています。アイコンは、Amebaブランドで使用されているAmeba Sansに着想を得て設計されています。

## 目指すこと / Goals
このリポジトリでは、様々な形式でアイコンを利用する前提として、SVGファイルを配信します。

## 目指さないこと / Non-goals
このリポジトリでは、SVGファイルを生成・配信することを目的としているため、以下のことを目指していません。

- 誰でも使えるような抽象化したライブラリ実装
- SVGファイル以外の加工 例) アイコンフォントの作成、コンポーネント配信

## 概要 / Overview
Figmaで管理されているアイコンを取得し、SVGファイルとして書き出します。大まかな処理の流れは以下のとおりです。

1. Figma APIを利用して、アイコンリストを取得する
2. アイコンリストからそれぞれのアイコンのIDを取得する
3. Figma APIとアイコンIDを利用して、それぞれのアイコンをSVGとして取得する
4. 取得してきたSVGファイルに対して最適化処理をかける
5. 最適化したSVGを利用して、SVG Sprite用のSVGを生成する

## どのようにやっていくか / Approach, Detailed design

### 事前準備
事前準備として、FigmaのURLからFile KeyとNode ID、[パーソナルアクセストークンを取得](https://www.figma.com/developers/api#access-tokens)します。

File KeyとNode IDはFigma上で対象要素を選択した時に、以下の形式でブラウザのURLバーに表示されます。

```
https://www.figma.com/file/${FILE_ID}/icon?node-id=${NODE_ID}
```

なお、セキュリティ上の問題から、Figmaファイルの閲覧権限が適切か確認してください。また、パーソナルアクセストークンは他人に漏らさないように扱ってください。

取得したFile KeyとNode IDは、`figma.json`という名前でファイルを作成し、保存します。Node IDが「0%3A1」のようにURLエンコードされている場合は、デコードした値を指定します。`dest`にはSVGを出力するディレクトリを指定します。特定のアイコンのみ取得したい場合には、`iconNames`に配列形式でアイコン名を指定します。`ALL`を指定するとすべてのアイコンを取得しますが、ファイル数が多い場合にはダウンロードに時間がかかります。なお、`figma.json`は、間違ってFigmaファイルが公開されないように、git管理されていません。

```json
{
  "fileKey": "${FILE_ID}",
  "nodeId": "${NODE_ID}",
  "dest": "dist",
  "iconNames": ["clock"]
}
```

### SVGの生成
SVGの生成をするには以下のコマンドを実行します。`${FIGMA_PERSONAL_ACCESS_TOKEN}`には、事前準備で取得したパーソナルアクセストークンを指定します。

```
FIGMA_TOKEN=${FIGMA_PERSONAL_ACCESS_TOKEN} yarn build
```

### 各コマンド
`yarn build`内部では、以下の処理をしており、それぞれ個別に実行できます。

#### アイコンの取得
Figmaからアイコンを取得し、SVGファイルとして保存します。Figma APIへのリクエストが多くなりすぎないように1アイコンずつゆっくりと取得するため、時間がかかります。
```
FIGMA_TOKEN=${FIGMA_PERSONAL_ACCESS_TOKEN} yarn icon:get
```

#### SVGの最適化
[svg/svgo](https://github.com/svg/svgo)を利用して、取得したSVGを最適化します。最適化する項目は`.svgo.yaml`に記述されています。

```
yarn icon:optimize
```

#### SVG Spriteの作成
[kphl/svg-sprite](https://github.com/jkphl/svg-sprite)を利用して、取得したSVGからSVG Spriteを作成します。SVG Spriteを生成する設定は`sprite.json`に、最適化する項目は`sprite.svgo.json`に記述されています。

```
yarn icon:sprite
```

## 関連リンク / Related link
- [Figma API](https://www.figma.com/developers/api)
- [svg/svgo](https://github.com/svg/svgo)
- [kphl/svg-sprite](https://github.com/jkphl/svg-sprite)
