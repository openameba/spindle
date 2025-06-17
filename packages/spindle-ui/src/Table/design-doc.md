# Table

## 概要・背景
構造化されたデータを表形式で表示するためのコンポーネントです。Web標準の`<table>`要素をベースとし、Spindleデザインシステムに準拠したスタイリング、アクセシビリティ対応、レスポンシブ対応を提供します。CSS Variablesによるテーマ管理と、classNameによる柔軟なカスタマイズが可能な設計となっています。

## 使用例
基本的には`Table.Container`でラップし、`Table.Frame`内に`Table.Header`、`Table.Body`、必要に応じて`Table.Footer`と`Table.Caption`を配置します。
セルの種類に応じて`Table.Head`（見出しセル）、`Table.Cell`（データセル）を使い分けます。行見出しが必要な場合は`Table.Head scope="row"`を使用します。

### DO

**適切な構造を使用する**
テーブルの適切な構造要素（Header、Body、Footer、Caption）を使い、セマンティックな意味を持たせる。

**行見出しを適切に設定する**
データテーブルでは行を識別するセルに`Table.Head scope="row"`を使用し、スクリーンリーダーが表構造を理解できるようにする。

**CSS Variablesでプロダクトテーマを統一する**
プロダクト単位でのテーマカスタマイズはCSS Variablesで行い、個別のスタイルプロパティは避ける。セル単位での詳細なカスタマイズが必要な場合のみclassNameを使用する。

**適切なvariantを選択する**
データの性質と表示目的に応じて適切なvariantを選択し、一貫性のあるテーブル表示を実現する。

```tsx
<Table.Container>
  <Table.Frame borders="outlined" striped rounded>
    <Table.Caption>社員一覧</Table.Caption>
    <Table.Header>
      <Table.Row>
        <Table.Head>名前</Table.Head>
        <Table.Head align="center">年齢</Table.Head>
        <Table.Head align="right">職業</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Head scope="row">山田 太郎</Table.Head>
        <Table.Cell align="center">28</Table.Cell>
        <Table.Cell align="right">エンジニア</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Head scope="row">佐藤 花子</Table.Head>
        <Table.Cell align="center">34</Table.Cell>
        <Table.Cell align="right">デザイナー</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table.Frame>
</Table.Container>
```

### DO NOT

**レイアウト目的での使用を避ける**
テーブルは表形式データの表示のみに使用し、ページレイアウトやデザイン配置には使用しない。

**適切なカスタマイズレベルを選択する**
- **プロダクトレベル**：CSS Variablesでテーマを統一
- **構造レベル**：`variant`、`rounded`、`striped`プロパティで制御
- **セルレベル**：classNameによる詳細なカスタマイズ

直接的な`style`属性での装飾は一貫性を損なうため避ける。

**アクセシビリティ要素の省略**
行見出しが必要な場合は必ず`Table.Head scope="row"`を使用し、テーブルの内容説明には`Table.Caption`を適切に配置する。

## 要素

### Design Tokens
- Surface Primary (テーブル背景)
- Surface Secondary (ストライプ行背景)
- Surface Tertiary (ヘッダー背景)
- Text High Emphasis (セルテキスト)
- Text Medium Emphasis (ボディテキスト)
- Border Low Emphasis (セル間罫線)
- Border Medium Emphasis (外枠)
- Border Strong Emphasis (アウトライン)

### CSS Variables
プロダクト単位でのテーマカスタマイズをCSS Variablesで行い、コンポーネントとしての一貫性を保ちます。セルレベルの詳細なカスタマイズが必要な場合のみ、classNameでの上書きを推奨します。

| 変数名 | 用途 |
|:--|:--|
| --Table-backgroundColor | テーブル全体の背景色 |
| --Table-outlineColor | アウトライン色 |
| --Table-borderRadius | 外枠の角丸 |
| --Table-verticalBorder | 縦罫線 |
| --Table-head-backgroundColor | ヘッダー背景色 |
| --Table-head-color | ヘッダーテキスト色 |
| --Table-head-fontWeight | ヘッダーフォント太さ |
| --Table-head-fontSize | ヘッダーフォントサイズ |
| --Table-head-lineHeight | ヘッダー行間 |
| --Table-head-padding | ヘッダーパディング |
| --Table-head-borderColor | ヘッダー罫線色 |
| --Table-cell-backgroundColor | セル背景色 |
| --Table-cell-color | セルテキスト色 |
| --Table-cell-fontSize | セルフォントサイズ |
| --Table-cell-lineHeight | セル行間 |
| --Table-cell-padding | セルパディング |
| --Table-cell-borderColor | セル罫線色 |
| --Table-row-striped-backgroundColor | ストライプ行背景色 |
| --Table-sticky-shadow | 固定列の影 |

### プロパティ

#### Table.Container
```typescript
interface TableContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  fillContainer?: boolean;        // 親要素の幅に合わせる
  scrollThreshold?: string | number; // 指定した幅を超えたら横スクロール表示
}
```

#### Table.Frame
```typescript
interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  borders?: 'horizontal' | 'outlined' | 'all' | 'vertical-header'; // ボーダーパターン
  rounded?: boolean;                     // 角丸表示（--Table-borderRadiusの値を適用）
  striped?: boolean;                     // ストライプ行
  stickyColumns?: {                      // 固定列設定
    left?: number;                       // 左から何列固定
    right?: number;                      // 右から何列固定
  };
}
```

**borders設計思想**:
テーブルのボーダーパターンを直感的に管理し、様々なプロダクトでの利用パターンに対応します。すべてのパターンで縦線は表示されます。
- `horizontal`（デフォルト）: 水平線と縦線 - 一般的なテーブル表示
- `outlined`: 外枠付き、内部も水平線と縦線 - カード状の表示
- `all`: 全セルにボーダー - データ比較や詳細表示
- `vertical-header`: ヘッダーのみ縦ボーダー、ボディは横線のみ - セル結合を含む複雑な表構造

**その他設計思想**:
- `rounded`プロパティは他のSpindleコンポーネントと一貫性を保つためbooleanに統一
- `align`プロパティは一般的なレイアウト要求に応えるため残し、詳細なスタイリングはclassNameで対応

#### Table.Head
```typescript
interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  align?: 'left' | 'center' | 'right';  // テキスト配置（レイアウト目的）
  width?: string | number;              // 列幅指定（例: '200px', '30%', 'auto', 200）
  minWidth?: string | number;            // 最小幅
  maxWidth?: string | number;            // 最大幅
}
```

#### Table.Cell
```typescript
interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  align?: 'left' | 'center' | 'right';  // テキスト配置（レイアウト目的）
}
```

**align propについて**: 数値や日付のような構造的な配置要求に対応するため残しています。詳細なスタイリングは`className`での上書きを推奨します。

## 実装例
書き出されるマークアップです。
```html
<div class="spui-Table-container">
  <table class="spui-Table spui-Table--borders-outlined spui-Table--striped">
    <caption class="spui-Table-caption">社員一覧</caption>
    <thead class="spui-Table-header">
      <tr class="spui-Table-row">
        <th class="spui-Table-head">名前</th>
        <th class="spui-Table-head spui-Table-head--align-center">年齢</th>
        <th class="spui-Table-head spui-Table-head--align-right">職業</th>
      </tr>
    </thead>
    <tbody class="spui-Table-body">
      <tr class="spui-Table-row">
        <th class="spui-Table-head" scope="row">山田 太郎</th>
        <td class="spui-Table-cell spui-Table-cell--align-center">28</td>
        <td class="spui-Table-cell spui-Table-cell--align-right">エンジニア</td>
      </tr>
    </tbody>
  </table>
</div>
```

React実装です。
```tsx
return (
  <Table.Container>
    <Table.Frame borders="outlined" striped rounded>
      <Table.Caption>社員一覧</Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.Head>名前</Table.Head>
          <Table.Head align="center">年齢</Table.Head>
          <Table.Head align="right">職業</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Head scope="row">山田 太郎</Table.Head>
          <Table.Cell align="center">28</Table.Cell>
          <Table.Cell align="right">エンジニア</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Frame>
  </Table.Container>
);
```

## アクセシビリティ
- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)[基本必須]
  - [ ] thead/tbody/tfoot/caption要素を適切に使用している
  - [ ] 列見出しは`<Table.Head>`要素（デフォルトで`scope="col"`）、行見出しは`<Table.Head scope="row">`で実装している
- [色だけで伝えない](https://a11y-guidelines.ameba.design/1/4/1/)[基本必須]
  - [ ] 重要な情報を色だけでなく、テキストや太字でも伝達している
- [テキストや文字画像のコントラストを確保する](https://a11y-guidelines.ameba.design/1/4/3/)[基本必須]
  - [ ] テキストと背景のコントラスト比が4.5:1以上を確保している
- [テキストサイズを拡大縮小できる](https://a11y-guidelines.ameba.design/1/4/4/)[基本必須]
  - [ ] 200%まで拡大しても情報が欠落しない
- [リフローできる](https://a11y-guidelines.ameba.design/1/4/10/)[できれば]
  - [ ] 横スクロールで全内容を表示可能
- [キーボード、タッチデバイスで操作できる](https://a11y-guidelines.ameba.design/2/1/1/)[基本必須]
  - [ ] インタラクティブ要素はキーボード操作に対応している
- [適切なフォーカス順序にする](https://a11y-guidelines.ameba.design/2/4/3/)[基本必須]
  - [ ] Tab順序が論理的な順序と一致している
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)[基本必須]
  - [ ] HTML仕様に準拠した実装をしている
