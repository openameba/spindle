# Toast

## 概要・背景

Toastは、ユーザーの操作を邪魔しないよう非同期的にシステムやUIのフィードバックをユーザーへ通知するためのコンポーネントです。画面のレイアウトや状態に影響を与えないので、特にユーザーへの影響値を最小限にできます。

Toastは自動で消えてしまうため、見落とされても影響のない、「重要ではないお知らせ」に用います。完了タイミングに気づくための最低限のフィードバック（更新処理の成功など）を提供することを想定しており、1行のテキストで表示され、デフォルトでは4秒後に自動で消えます。

## 使用例

### 通知コンポーネントの使い分け

ユーザーに画面内で通知する手段として、Toast、SnackBar、InlineNotification、Dialogコンポーネントがあります。また、画面内で完結せず、遷移させるべき状況もあります。

| コンポーネント | 用途 | テキストの長さ | 追加のアクション | 自動で消える秒数 | 表示位置 |
|---|---|---|---|---|---|
| Toast | 完了タイミングに気づくための最低限のフィードバック（更新処理の成功など） | 1行 | なし | 4秒 | フローティング（画面上下の中央のみ） |
| SnackBar | ユーザーにとって読む価値があるもの。ユーザーが追加のアクションを実行しなくても完結するもの | 3行まで | あり | 10秒 | フローティング（画面上下の左・右・中央） |
| InlineNotification | ユーザーが追加のアクションを実行すると通知の役割を果たすもの（更新処理の失敗時など） | 制限なし | あり | 消えない | ページに埋め込む必要があり、レイアウトに影響を与える |
| Dialog | ユーザーのメインタスクを中断して確認してもらうべき重要な通知 | 制限なし | あり | 消えない | モーダル |
| 画面外へ遷移 | 一連の動作にゴールがある（登録時の完了画面など）。「元の画面に戻る」動作をさせたい時 | 制限なし | 制限なし | 消えない | 別ページ |

**注意:** ToastとSnackBarは自動で消えてしまうため、その通知内容を確認できる他の手段がある場合にのみ利用できます。「コンテンツの確実な伝達」ではなく「ユーザーの行動を中断することなく示唆する」ことを目的として用います。

### DO

Toastは、見落とされても影響のない「重要ではないお知らせ」に使用します。

代替手段での通知は必須ではありませんが、できる限りの実装を推奨します。

例：「URLをコピーしました」というToast表示に加えて、コピーボタンがチェックマーク付きアイコンに変化する。これによりToastを見逃しても操作完了を認識できます。

### DO NOT

自動的に消えてしまうため、ユーザーが見落とした場合に不利益が大きい通知（更新処理の失敗など）には使用しないでください。コンポーネントの使い分けに関しては「[通知コンポーネントの使い分け](#通知コンポーネントの使い分け)」を参考にしてください。

**重大なメッセージの表示に使わない例：**

以下のような重要な通知にはToastを使用せず、InlineNotificationやDialogを使用してください：

- **更新処理の失敗**: ユーザーが再度アクションを起こす必要があるため、見落としは許容できません
- **データの削除失敗**: リストアイテムの削除に失敗した場合、Toastの表示を見落とすと失敗に気づけません
- **エラーメッセージ**: ユーザーが対処する必要がある場合は、自動で消えない通知を使用してください
- **重要な警告**: セキュリティやデータ損失に関わる警告は、必ずユーザーが認識できる方法で通知してください

また、長いテキストは1行で切られてしまうため、複数行のテキストを表示する必要がある場合は、SnackBarやInlineNotificationの使用を検討してください。

## 要素

### Design Tokens

#### Information
- `--gray-80` (背景色) ※ TODO: `--color-surface-accent-neutral-high-emphasis`に置き換え予定
- `--color-text-high-emphasis-inverse` (テキスト色)
- `--color-object-high-emphasis-inverse` (アイコン色)
- `--white-20-alpha` (ホバー時・アクティブ時の背景色)

#### Confirmation
- `--color-surface-primary` (背景色)
- `--color-border-low-emphasis` (ボーダー色)
- `--color-text-accent-primary` (テキスト色)
- `--color-object-accent-primary` (アイコン色)
- `--gray-20-alpha` (ホバー時・アクティブ時の背景色)

#### Error
- `--color-surface-caution` (背景色)
- `--color-text-high-emphasis-inverse` (テキスト色)
- `--color-object-high-emphasis-inverse` (アイコン色)
- `--white-20-alpha` (ホバー時・アクティブ時の背景色)

### プロパティ

```ts
type Position = 'topCenter' | 'bottomCenter';
type Variant = 'information' | 'confirmation' | 'error';

type Props = {
  children?: React.ReactNode;
  active?: boolean;
  // milliseconds to hide
  duration?: number;
  onHide?: () => void;
  icon?: React.ReactNode;
  variant?: Variant;
  // StackNotificationManager関連のprops
  position?: Position;
  offset?: { top?: number; bottom?: number };
  stackPosition?: number;
  setContentHeight?: (height: number) => void;
};
```

### サイズ制約

Toastコンテンツには以下のサイズ制約があります：

- **max-width**: `360px`
- **min-height**: `48px`

テキストは1行で表示され、`overflow: hidden` と `white-space: nowrap` により長いテキストは切り取られます。

## 実装例

React実装の一例です。

```tsx
<Toast
  active={true}
  variant="information"
  icon={<Information />}
  onHide={() => console.log('hidden')}
>
  メッセージが届きました
</Toast>
```

上記の実装から書き出されるマークアップです。

```html
<div
  class="spui-Toast spui-Toast--top spui-Toast--slide spui-Toast-slide--in"
  aria-hidden="false"
>
  <div class="spui-Toast-content spui-Toast-content--information">
    <div class="spui-Toast-contentInfo">
      <svg><!-- icon --></svg>
    </div>
    <span class="spui-Toast-contentText">メッセージが届きました</span>
    <div class="spui-Toast-iconButton spui-Toast-iconButton--information">
      <button type="button" aria-label="閉じる">
        <svg><!-- close icon --></svg>
      </button>
    </div>
  </div>
</div>
```

## アクセシビリティ

自動で表示が消える性質上、アクセシビリティ上の懸念が発生しやすいコンポーネントです。

### このコンポーネントでやっていること

- reduced motionが指定された時に、トランジッションを短くします（`@media (prefers-reduced-motion: reduce)`）
- デバイスのorientationに追従して表示位置・サイズを変更します

### 利用時に注意してほしいこと

- Toastは自動で消えてしまうため、見落とされても影響のない、「重要ではないお知らせ」に用います
- このコンポーネントでは関与しませんが、ライブリージョンをアプリケーションで実装してください（参考：[実装方法 - 4.1.3 コンテンツの変更をユーザーに知らせる - Ameba Accessibility Guidelines](https://a11y-guidelines.ameba.design/4/1/3/#%E5%AE%9F%E8%A3%85%E6%96%B9%E6%B3%95)）

### チェックリスト

- [画像に代替テキストを提供する](https://a11y-guidelines.ameba.design/1/1/1/)[基本必須]
  - [ ] アイコンは適切な代替テキストまたはaria-labelを持っている
- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)[基本必須]
  - [ ] ライブリージョン（`aria-live="polite"`及び`role="status"`）を実装し、スクリーンリーダーでコンテンツが読み上げられる
- [表示の向きを固定しない](https://a11y-guidelines.ameba.design/1/3/4/)[できれば]
  - [ ] 端末を横向きにしても、適切に文字が折り返されレイアウトが変わり、コンテンツが見切れていない
- [色だけで伝えない](https://a11y-guidelines.ameba.design/1/4/1/)[基本必須]
  - [ ] 色だけでなく、アイコンやテキストで状態を伝えている
- [テキストや文字画像のコントラストを確保する](https://a11y-guidelines.ameba.design/1/4/3/)[基本必須]
  - [ ] SpindleカラーパレットのTheme Colorsを適切に使い分けている
- [テキストサイズを拡大縮小できる](https://a11y-guidelines.ameba.design/1/4/4/)[基本必須]
  - [ ] 画面を200%拡大・文字サイズを2倍に変更しても、適切に文字が折り返され、情報が欠落していない
- [リフローできる](https://a11y-guidelines.ameba.design/1/4/10/)[できれば]
  - [ ] 画面拡大時にもToast内の情報が見切れることがない
- [キーボード、タッチデバイスで操作できる](https://a11y-guidelines.ameba.design/2/1/1/)[基本必須]
  - [ ] 閉じるボタンがキーボードでフォーカスでき、EnterキーまたはSpaceキーで閉じることができる
- [フォーカスを見えるようにする](https://a11y-guidelines.ameba.design/2/4/7/)[基本必須]
  - [ ] 閉じるボタンは、フォーカスの状態が見える
- [ターゲットのサイズを理解する](https://a11y-guidelines.ameba.design/2/5/5/)[できれば]
  - [ ] タップ領域は44px x 44px以上確保している
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)[基本必須]
  - [ ] HTML仕様に準拠した実装をしている
- [コンテンツの変更をユーザーに知らせる](https://a11y-guidelines.ameba.design/4/1/3/)[基本必須]
  - [ ] ライブリージョンを実装し、Toastが表示されたときにスクリーンリーダーが自動でコンテンツを読み上げる

## テスト方針

### ユニットテスト（Testing Library）

- タイマーによる自動非表示の動作確認
- ホバー時・フォーカス時にタイマーがリセットされることの確認
- 閉じるボタンクリック時の動作確認
- `onHide`コールバックが適切に呼び出されることの確認

### ヴィジュアルリグレッションテスト（Storybook）

- 各variant（information、confirmation、error）の表示確認
- アイコンあり・なしの表示確認
- 位置（topCenter、bottomCenter）の表示確認
- 長いテキストの表示確認

## リンク集

- [StackNotificationManager のドキュメント](/docs/stacknotificationmanager--docs)
- [Material-UI Snackbars](https://material-ui.com/components/snackbars/)
- [4.1.3 コンテンツの変更をユーザーに知らせる - Ameba Accessibility Guidelines](https://a11y-guidelines.ameba.design/4/1/3/)
