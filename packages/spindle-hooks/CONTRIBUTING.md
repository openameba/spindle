# Contributing to Spindle UI

Spindleは、Amebaで利用するデザインシステムです。このリポジトリは、デザインシステムで定義された内容を実際に利用しやすいように実装に落とし込んだものです。

Amebaとして提供される成果物は、それらに則って開発されることを推奨しています。そのため、機能の要望や修正のPull RequestはAmebaに在籍するメンバーからのみとしています(ごめんなさい 🙇)。

ただし、リンク先のミス、誤字・脱字などのPull Request、Issue提起は大歓迎です。わかりづらい点や疑問に思う箇所がありましたら、お気軽にお知らせください！

## 新規 Hooks の作り方

新規Hooksを作る際には大まかに以下のフローを辿ります。

1. Hooksの命名・利用方法などのドキュメント化。通常これはSlackやGitHub Discussionsなどをきっかけに作業が開始され、まずFigmaにルールがまとまります。
2. Design Docの作成。SpindleではHooksごとにDesign Docを作成し、該当Hooksに関わる事柄を整理します。Hooks名・概要・使用するデザイントークン・アクセシビリティ対応項目などを記載します。Design Docの雛形はNotionにありますので確認してみてください。
3. Design Docのレビュー。ある程度Design DocができあがったらSpindleチームやWebチームでレビューをします。この段階でのDesign Docはレビュー用途で使用するので完璧に仕上げる必要はありません！
4. Hooks作成。実際にHooksを実装します。Storybookやテストの作成も忘れずお願いします！また、コンポーネント設計に困った場合には、すでに作成されているコンポーネントを見たり、[Spindle Hooks の Design Doc](/packages/spindle-hooks/docs/design-doc.md)を見たりしてみてください。
5. Pull Requestの作成。ここまでできたら後はGitHub上でやりとりし、リリースまで進めます。Pull Requestやリリースに関しては[Contributing to Spindle](/CONTRIBUTING.md)を参照してください。
