# Contributing to Spindle UI

Spindle は、Ameba で利用するデザインシステムです。このリポジトリは、デザインシステムで定義された内容を実際に利用しやすいように実装に落とし込んだものです。

Ameba として提供される成果物は、それらに則って開発されることを推奨しています。そのため、機能の要望や修正の Pull Request は Ameba に在籍するメンバーからのみとしています(ごめんなさい 🙇)。

ただし、リンク先のミス、誤字・脱字などの Pull Request、Issue 提起は大歓迎です。わかりづらい点や疑問に思う箇所がありましたら、お気軽にお知らせください！

## 新規 Hooks の作り方

新規 Hooks を作る際には大まかに以下のフローを辿ります。

1. Hooks の命名・利用方法などのドキュメント化。通常これは Slack や GitHub Discussions などをきっかけに作業が開始され、まず Figma にルールがまとまります。
2. Design Doc の作成。Spindle では Hooks ごとに Design Doc を作成し、該当 Hooks に関わる事柄を整理します。Hooks 名・概要・使用するデザイントークン・アクセシビリティ対応項目などを記載します。Design Doc の雛形は Notion にありますので確認してみてください。
3. Design Doc のレビュー。ある程度 Design Doc ができあがったら Spindle チームや Web チームでレビューをします。この段階での Design Doc はレビュー用途で使用するので完璧に仕上げる必要はありません！
4. Hooks 作成。実際に Hooks を実装します。Storybook やテストの作成も忘れずお願いします！また、コンポーネント設計に困った場合には、すでに作成されているコンポーネントを見たり、[Spindle Hooks の Design Doc](/packages/spindle-hooks/docs/design-doc.md)を見たりしてみてください。
5. コンポーネント Stability の決定。Spindle Hooks ではコンポーネントごとに Stability を決め、どうゆう利用が想定されているか明記しています。[定められた Stability](/packages/spindle-hooks#Hooks%20%E4%B8%80%E8%A6%A7)の中から選択肢、Storybook の冒頭に記載します。
6. Pull Request の作成。ここまでできたら後は GitHub 上でやりとりし、リリースまで進めます。Pull Request やリリースに関しては[Contributing to Spindle](/CONTRIBUTING.md)を参照してください。
