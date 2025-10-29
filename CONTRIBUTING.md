# Contributing to Spindle

Spindleは、Amebaで利用するデザインシステムです。このリポジトリは、デザインシステムで定義された内容を実際に利用しやすいように実装に落とし込んだものです。

Amebaとして提供される成果物は、それらに則って開発されることを推奨しています。そのため、機能の要望や修正のPull RequestはAmebaに在籍するメンバーからのみとしています(ごめんなさい🙇)。

ただし、リンク先のミス、誤字・脱字などのPull Request、Issue提起は大歓迎です。わかりづらい点や疑問に思う箇所がありましたら、お気軽にお知らせください！

## Pull Requestの作り方
1. `openameba/spindle`をCloneもしくはForkします
2. 作業ブランチを作成し、変更内容を反映します
3. コミットメッセージは[Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/)に準拠します
    - コミットタイプを適切に設定します
    - スコープは`spindle-icons`や`spindle-ui`など該当する[パッケージ名](https://github.com/openameba/spindle/tree/main/packages)があれば付与します
    - 破壊的変更がある場合は、`BREAKING CHANGE`を明記します
4. Pull Requestを作成します
5. changesetを作成します
    - **AI使用時**: AIエージェントを使っている場合、push前やPR作成時にchangesetの必要性を判断して自動作成します
    - **手動で作成したい場合**: `/create-changeset` コマンドを実行、または `yarn changeset` で対話形式で作成
    - PR作成後、changesets-botがコメントで案内するので、それに従って追加することもできます
    - **changesetが不要な場合**: ドキュメント更新、README修正、CI/CD設定変更など、パッケージのリリースが不要な変更の場合は、changesetを追加せずにマージして構いません

## リリースのやり方 (Ameba在籍メンバー向け)
1. Pull Requestを`main`ブランチにマージします
2. mainにマージされると、GitHub Actionsが自動的に「chore: publish」というタイトルのPull Requestを作成します
    - このPRには各パッケージの`package.json`のバージョン更新と`CHANGELOG.md`の更新が含まれます
    - **majorリリースの場合**、対象パッケージ以外の変更が含まれていないか確認してください
3. バージョン更新PRの内容を確認し、`main`ブランチにマージします
4. マージすると自動的に以下が実行されます：
    - npmへのパッケージ公開
    - GitHub Releaseの作成
5. 開発メンバーに周知します
