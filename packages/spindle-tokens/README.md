# Spindle Tokens (In development)

Spindle (Ameba Design System) Design Tokens

<p align="center">
  <img alt="Spindle TokensはFigmaのAPIを経由してStyle Dictionary形式のJSONを作成し、各アプリケーションに適した形式に変換します" src="./spindle-tokens.png" width="1200">
</p>

Spindle TokensはAmebaのデザインシステム「Spindle」で定義されたデザイントークンを管理します。デザイントークンは[Style Dictionary](https://github.com/amzn/style-dictionary)で使えるJSON形式で管理され、各アプリケーション向けの形式に変換されます。

## 開発方法

```sh
# Figmaで定義されたデザイントークンをJSON形式のファイルに変換し、保存します
FIGMA_TOKEN=*** FIGMA_COLOR_PRIMITIVE_FILE_ID=*** FIGMA_COLOR_THEME_FILE_ID=*** FIGMA_COLOR_THEME_DARK_FILE_ID=*** FIGMA_DROP_SHADOW_FILE_ID=*** yarn export

# JSONファイルを元に各プラットフォームで利用する形式に変換します
yarn build
```

## ライセンス
Spindle TokensはMITライセンスで公開されています。
