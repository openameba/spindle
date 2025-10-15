# AppealModal 複数トピックス対応 Design Docs

## 概要

AppealModalコンポーネントに複数トピックス（最大2つ）を表示できる機能を追加します。後方互換性を完全に維持し、breaking changeを発生させずに新機能を提供します。

## 背景と目的

### 現状
現在のAppealModalは1つのトピックスのみを表示する設計です。

### 新しい要件
- 最大2つのトピックスを表示できるようにする
- 広い端末（768px以上）：2カラムのグリッド表示
- 狭い端末（768px未満）：横スクロール可能なカルーセル表示
- 既存の利用者のコードに影響を与えない（後方互換性の維持）

### デザイン仕様

#### PC版（768px以上）
- Figma: https://www.figma.com/design/tYAPN33bWQ8wb0kNBQYof1/Rewrite-Suggest-Pj?node-id=9116-54191
- モーダル幅: 840px
- レイアウト: 2カラムグリッド
- ナビゲーション矢印: 非表示

#### モバイル版（768px未満）
- Figma（1枚目）: https://www.figma.com/design/tYAPN33bWQ8wb0kNBQYof1/Rewrite-Suggest-Pj?node-id=9116-52818
- Figma（2枚目）: https://www.figma.com/design/tYAPN33bWQ8wb0kNBQYof1/Rewrite-Suggest-Pj?node-id=9116-53674
- モーダル幅: 327px（画面幅に応じて可変）
- レイアウト: 横スクロール可能なカルーセル
- ページインジケーター（ドット）: Topic数に応じて自動表示
- ナビゲーション矢印:
  - 左矢印: 2枚目以降で表示（1枚目では非表示）
  - 右矢印: 最終枚以外で表示（最終枚では非表示）

## 現状の実装

### コンポーネント構造
```tsx
export const AppealModal = {
  Frame,        // モーダルのコンテナ
  StyleOnly,    // スタイルのみ版
  Title,        // タイトル
  Image,        // 画像
  Body,         // 本文
  ButtonGroup,  // ボタングループ
};
```

### 現在のDOM構造
```
AppealModal.Frame
├── AppealModal.Image
├── AppealModal.Title
├── AppealModal.Body
└── AppealModal.ButtonGroup
```

## 新しい要件のDOM構造

```
AppealModal.Frame
├── AppealModal.Caption (オプション: キャプション)
├── AppealModal.Title (全体のタイトル)
├── AppealModal.Topics
│   ├── AppealModal.Topic
│   │   ├── AppealModal.Image
│   │   ├── AppealModal.Title (トピックのタイトル)
│   │   └── AppealModal.Body
│   └── AppealModal.Topic
│       ├── AppealModal.Image
│       ├── AppealModal.Title (トピックのタイトル)
│       └── AppealModal.Body
├── AppealModal.PageIndicator (モバイルのみ、自動表示)
├── AppealModal.SubtleLink (オプション)
└── AppealModal.ButtonGroup (全体で共通)
```

## 設計方針

### 後方互換性の維持

**完全な後方互換性を保ちながら対応可能**

#### 戦略
1. 既存のコンポーネントとAPIは一切変更しない
2. 新しいコンポーネントを追加して新機能を提供
3. CSSで両方のパターンをサポート
4. 既存のコードは引き続き動作し続ける

#### 新規追加コンポーネント

```tsx
AppealModal.Caption        // キャプション（アイコン + テキスト）
AppealModal.Topics         // 複数トピックスのコンテナ
AppealModal.Topic          // 個別のトピックス
AppealModal.PageIndicator  // ページインジケーター（自動表示）
AppealModal.TopicNavigation // ナビゲーション矢印（左右）
AppealModal.SubtleLink     // Subtle Link
```

## API設計

### パターン1: 1つのトピックス（既存 - 変更なし）

```tsx
<AppealModal.Frame size="medium" open={open} onClose={handleClose}>
  <AppealModal.Image>
    <img src="..." />
  </AppealModal.Image>
  <AppealModal.Title>About Ameba</AppealModal.Title>
  <AppealModal.Body>
    AmebaはAmebaブログをはじめ...
  </AppealModal.Body>
  <AppealModal.ButtonGroup>
    <LinkButton href="...">サイトを見る</LinkButton>
  </AppealModal.ButtonGroup>
</AppealModal.Frame>
```

### パターン2: 2つのトピックス（新規）

```tsx
<AppealModal.Frame size="large" open={open} onClose={handleClose}>
  <AppealModal.Caption icon={<Megaphone />}>
    新機能の紹介
  </AppealModal.Caption>
  <AppealModal.Title>
    代替テキスト(alt)を自動で追加できるようになりました
  </AppealModal.Title>

  <AppealModal.Topics>
    <AppealModal.Topic>
      <AppealModal.Image>
        <img src="..." />
      </AppealModal.Image>
      <AppealModal.Title>一行のトピック</AppealModal.Title>
      <AppealModal.Body>
        長めの説明文の場合はこのくらい...
      </AppealModal.Body>
    </AppealModal.Topic>

    <AppealModal.Topic>
      <AppealModal.Image>
        <img src="..." />
      </AppealModal.Image>
      <AppealModal.Title>二行のトピック二行のトピック</AppealModal.Title>
      <AppealModal.Body>
        長めの説明文の場合はこのくらい...
      </AppealModal.Body>
    </AppealModal.Topic>
  </AppealModal.Topics>

  {/* PageIndicatorは自動表示されるため省略可能 */}
  {/* TopicNavigationも自動表示されるため省略可能 */}

  <AppealModal.SubtleLink icon={<CheckCircleFill />} href="#">
    Subtle Link
  </AppealModal.SubtleLink>

  <AppealModal.ButtonGroup>
    <Button variant="contained">次へ</Button>
  </AppealModal.ButtonGroup>
</AppealModal.Frame>
```

## 実装の詳細

### 新規追加コンポーネント

#### Caption
- キャプション（アイコン + テキスト）を表示
- Props: `icon?: React.ReactNode`, `children`, その他div属性

#### Topics
- 複数トピックスのコンテナ
- モバイル: 横スクロール可能
- PC: 2カラムグリッド
- Props: `children`, その他div属性

#### Topic
- 個別のトピックス
- Props: `children`, その他div属性

#### PageIndicator
- **Topics内のTopic数に応じて自動表示**
- モバイルのみ表示（PC版では非表示）
- 内部でTopics contextまたはchildren countを利用
- `aria-label`で全体の現在位置を示す（例: "2件中1件目"）
- 各ドットには`aria-hidden="true"`を設定
- Props: `current: number`, `total: number`

#### TopicNavigation
- **現在表示中のTopicに応じて左右の矢印を自動表示/非表示**
- 左矢印: 2枚目以降で表示
- 右矢印: 最終枚以外で表示
- モバイルのみ表示（PC版では非表示）
- **IconButtonコンポーネントを使用**（`variant="neutral"`, `size="small"`）
- ChevronLeftとChevronRightアイコンを使用
- Props: `currentIndex: number`, `totalTopics: number`, `onNavigate: (index: number) => void`

#### SubtleLink
- オプションのリンク
- **TextLinkコンポーネントのsubtle variantを使用**
- `iconPosition="start"`でアイコンを先頭に配置
- Props: `icon?: React.ReactNode`, `href`, `children`, その他TextLinkのprops

### CSS実装の要点

#### 依存コンポーネントのインポート
- `@import '../../IconButton/IconButton.css'`: TopicNavigationで使用
- `@import '../../TextLink/TextLink.css'`: SubtleLinkで使用

#### モバイル版（768px未満）
- Topicsは横スクロール可能なコンテナ（`scroll-snap-type: x mandatory`）
- スクロールバー非表示
- PageIndicatorは自動的にTopic数を反映
- TopicNavigationはIconButtonをラップして絶対配置

#### PC版（768px以上）
- Topicsは2カラムのグリッドレイアウト
- PageIndicatorとTopicNavigationは非表示
- SubtleLinkも非表示
- 各Topicは同じ幅で並列表示

## 後方互換性の保証

| 項目 | 説明 |
|------|------|
| 既存のコンポーネント | 一切変更なし |
| 既存のProps | 一切変更なし |
| 既存のCSSセレクタ | 全て保持 |
| 既存の使用方法 | 引き続き動作 |
| 新しいコンポーネント | 追加のみ |
| Breaking Change | **なし** |

## マイグレーションガイド

### 既存ユーザー
**アクション不要** - 既存のコードはそのまま動作します。

### 新機能を使いたいユーザー
1. `AppealModal.Topics`でトピックスをラップ
2. 各トピックスを`AppealModal.Topic`でラップ
3. PageIndicatorとTopicNavigationは自動表示されるため記述不要
4. オプションで`Caption`や`SubtleLink`を追加

## アクセシビリティ要件

以下のSpindleアクセシビリティガイドラインに準拠します：

### 基本必須項目

#### 画像と代替テキスト
- **装飾ではない画像やアイコンは、代替テキストで説明している**
  - ナビゲーション矢印アイコンに適切な`aria-label`を設定（例: "前のトピック", "次のトピック"）
  - 参照: https://a11y-guidelines.ameba.design/1/1/1/

#### 情報と関係性
- **マシンリーダブルに実装している**
  - 適切なHTML要素とWAI-ARIA属性を使用
  - 参照: https://a11y-guidelines.ameba.design/1/3/1/

#### キーボード操作
- **すべての機能がキーボードで操作できる**
  - ナビゲーション矢印ボタンはキーボードで操作可能
  - 左右矢印キーでのスクロール操作をサポート
  - 参照: https://a11y-guidelines.ameba.design/2/1/1/

#### キーボードトラップ
- **モーダルから、TabキーまたはEscキーだけでキーボードフォーカスを移動できる**
  - 既存のAppealModal.Frameの動作を維持
  - 参照: https://a11y-guidelines.ameba.design/2/1/2/

#### フォーカス順序
- **キーボード操作の順序が、見た目の順序と一致している**
  - Topic内の要素の順序を適切に保持
  - 参照: https://a11y-guidelines.ameba.design/2/4/3/

#### フォーカス表示
- **操作可能なUIは、フォーカスの状態が見える**
  - ナビゲーション矢印ボタンのフォーカススタイルを明確に表示
  - 参照: https://a11y-guidelines.ameba.design/2/4/7/

#### ポインタ操作のキャンセル
- **ボタンやリンクなどにmousedownやtouchstartしても、別の場所で離せばキャンセルできる**
  - ナビゲーション矢印ボタンの標準的な動作を維持
  - 参照: https://a11y-guidelines.ameba.design/2/5/2/

### できれば対応項目

#### ジェスチャー操作
- **ジェスチャーだけでしか操作できない機能がない**
  - スワイプ操作に加えて、ナビゲーション矢印ボタンを提供
  - 参照: https://a11y-guidelines.ameba.design/2/5/1/

#### ターゲットサイズ
- **タップエリアは44px × 44px以上確保している**
  - ナビゲーション矢印ボタンのタップエリアを確保
  - 参照: https://a11y-guidelines.ameba.design/2/5/5/

### カスタムコントロール

#### WAI-ARIA属性
- **カスタムコントロールのAccessibilityNameとrole、WAI-ARIA属性を適切に設定**
  - Topicsコンテナに`role="region"`と`aria-label="トピック一覧"`を設定
  - PageIndicatorに`aria-label="2件中1件目"`のような現在位置を設定
  - 各ドットには`aria-hidden="true"`を設定
  - スクロール時の現在位置変更を`aria-live="polite"`で通知
  - 参照: https://a11y-guidelines.ameba.design/4/1/2/

#### スクリーンリーダー対応
- **カスタムコントロールは、スクリーンリーダーでも機能落ちがなく、読み上げが過不足なく行われている**
  - Topic切り替え時に現在位置を通知
  - ナビゲーション矢印の状態を適切に通知
  - 参照: https://a11y-guidelines.ameba.design/4/1/2/

## リスクと軽減策

| リスク | 影響度 | 軽減策 |
|--------|--------|--------|
| スクロール動作のブラウザ差異 | 中 | クロスブラウザテスト実施 |
| アクセシビリティの課題 | 中 | 上記ガイドラインに準拠、スクリーンリーダーテスト実施 |
| パフォーマンス | 低 | CSSのみで実装、JSは最小限 |
| モバイルでのスワイプ操作性 | 中 | タッチテスト実施、scroll-snap使用 |

## 実装計画

### Phase 1: TypeScriptコンポーネントの実装
- Caption, Topics, Topic, PageIndicator, TopicNavigation, SubtleLinkコンポーネント追加
- TopicNavigationはIconButtonを使用（ChevronLeft/ChevronRightアイコン）
- SubtleLinkはTextLinkのsubtle variantを使用
- 型定義の追加
- PageIndicatorとTopicNavigationの自動表示ロジック実装
- 適切なWAI-ARIA属性の実装

### Phase 2: CSSの実装
- IconButton, TextLinkのCSSインポート
- モバイル版: 横スクロール、TopicNavigationの配置（IconButtonを絶対配置）
- PC版: 2カラムグリッド、PageIndicator/TopicNavigation/SubtleLinkを非表示
- 既存スタイルとの統合確認

### Phase 3: テストとドキュメント
- Storybookのストーリー追加
- 既存の動作が壊れていないことを確認
- クロスブラウザテスト
- アクセシビリティテスト（キーボード操作、スクリーンリーダー）
- `.mdx`ドキュメント更新

### Phase 4: リリース
- CHANGELOGエントリー作成
- Minor versionとしてリリース（breaking changeなし）
- リリースノート作成

## 結論

**完全な後方互換性を保ちながら、2つのトピックス表示に対応できます。**

新しいコンポーネントを追加することで、既存ユーザーに一切影響を与えることなく、新機能を提供できます。PageIndicatorとTopicNavigationは自動表示されるため、開発者の実装負担を軽減します。

また、TopicNavigationではIconButton、SubtleLinkではTextLinkといった既存のSpindleコンポーネントを活用することで、一貫性のあるUIと保守性を確保しています。

この設計はbreaking changeを発生させず、spindle-uiの外部公開ライブラリとしての品質を維持します。

リリースバージョンは**Minor version**（例: 1.2.0）として、新機能の追加として扱います。
