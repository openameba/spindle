# Spindle MCP Server (In Development)

AmebaデザインシステムSpindleに関するデータを[Model Context Protocol(MCP)](https://modelcontextprotocol.io/introduction)を通じて提供します。

## MCPサーバーの設定

SpindleのMCPサーバーを利用するには、まず、`@openameba/spindle` リポジトリをクローンします。

```
git clone git@github.com:openameba/spindle.git
```

次に、MCPクライアントの設定をします。以下は[Cursor](https://www.cursor.com/)での設定例です。SpindleのMCPサーバーを利用するにローカル環境にあらかじめ[nodejs](https://nodejs.org/)がインストールされている必要があります。

```json
{
  "mcpServers": {
    "ameba-spindle": {
      "command": "node",
      "args": [
        "/PATH_TO_PACKAGE/spindle/packages/spindle-mcp-server/dist/index.js"
      ]
    }
  }
}
```

※ `/PATH_TO_PACKAGE` は実際のパスに置き換えてください。

## 機能

SpindleのMCPサーバーでは以下の機能が提供されています。

### Tool

- `get_components`: 利用可能なコンポーネントの一覧を取得します
- `get_component_info`: 指定されたコンポーネントの詳細情報を取得します。コンポーネントを利用する際にはこのツールが呼び出される必要があります。LLMが自動的に呼び出さない場合は、明示的に呼び出してください
- `get_design_tokens`: 定義されたデザイントークン(CSS)一覧を取得します。
- `get_design_token`: 指定した種類のデザイントークン(CSS)を取得します。
- `get_icons`: アイコンの一覧を取得します。
- `get_icon_info`: 指定したアイコンの詳細情報を取得します。アイコンを利用する際にはこのツールが呼び出される必要があります。LLMが自動的に呼び出さない場合は、明示的に呼び出してください

### ユースケース

SpindleのMCPサーバーは以下のような利用法が想定されています。

- 「Ameba Spindleで使えるコンポーネントを教えて」
- 「Spindleで、Dialogコンポーネントは実装されていますか」
- 「デザイントークンにはどんな種類がありますか」
- 「この実装をSpindleに書き換えて」
- 「(Figmaやスクリーンショットを添えて)できる限りAmeba Spindleを使って実装して」

## 利用にあたる注意点

本MCPサーバーは、詳細な調整を行わずに情報を提供しているため、コンテキストウィンドウに大きな影響を及ぼす可能性があります。ご利用の際は注意が必要です。今後、調整を行っていく予定です。

## 開発方法

SpindleのMCPサーバーの開発には以下の手順が必要です。

1. 依存パッケージのインストール

```bash
yarn
```

2. 開発用サーバーの起動

```bash
yarn dev
```

開発用サーバーを起動すると、ファイルの変更を監視し、自動的にビルドが実行されます。

3. テスト

```bash
yarn test
```

4. ビルド

```bash
yarn build
```


ビルドすると、`dist` ディレクトリに実行可能なファイルが生成されます。

※ nodejsで実行できるよう、ビルド後の生成ファイルをgit管理に含めてください
