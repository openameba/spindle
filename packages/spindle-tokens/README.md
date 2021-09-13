# Spindle Tokens (In development)

Spindle TokensはAmebaのデザインシステム「Spindle」て定義されたデザイントークンを管理します。定義されたデザイントークンは各アプリケーションで利用する形式に変換されます。

## 開発方法

```sh
# Figmaで定義されたデザイントークンをJSON形式のファイルに変換し、保存します。
FIGMA_TOKEN=*** FIGMA_COLOR_PRIMITIVE_FILE_ID=*** FIGMA_COLOR_THEME_FILE_ID=*** FIGMA_COLOR_THEME_DARK_FILE_ID=*** FIGMA_DROP_SHADOW_FILE_ID=*** yarn export

# JSONファイルを元に各プラットフォームで利用する形式に変換します
yarn build
```

## ライセンス
Spindle TokensはMITライセンスで公開されています。
