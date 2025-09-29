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

## リリースのやり方 (Ameba在籍メンバー向け)
1. 作業が終わったらコミットをまとめて、該当ブランチを`main`ブランチにマージします
    - コミットはCHANGELOGに反映されるため、適切な単位でまとめてください
    - コミット名については`Pull Requestの作り方`欄を参考にしてください
2. リリースされるパッケージ名はGitHub Actionsの「Check changed packages」ワークフローで確認できます
   - 依存モジュールの更新等でソースコードに変更のないパッケージも表示されることがありますが問題ありません
   - **majorリリースの場合**、GitHub Actionsの「Check changed packages」ワークフローを手動実行し、**対象パッケージ以外の変更が含まれていないか確認してください**。対象外パッケージに変更があると、他のパッケージもメジャーリリースになってしまうためです（されても致命的な問題ではありませんが）
3. 変更内容に合わせてリリースブランチを作成します。選択できる名前は[release.yml](/.github/workflows/release.yml#L6-L12)を参照してください
4. ブランチがプッシュされるとCHANGELOG作成・npmパブリッシュ・Pull Request作成が自動的に行われます
5. 4で作成されたPull Requestの内容を確認し、`main`ブランチにマージします
6. 開発メンバーに周知します
