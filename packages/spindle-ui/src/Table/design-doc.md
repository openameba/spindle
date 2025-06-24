# Table

## 概要・背景

構造化されたデータを表形式で表示するためのコンポーネントです。Web標準の`<table>`要素をベースとしたwrapperコンポーネントとして設計されており、Spindleデザインシステムに準拠した基本スタイリングを提供しつつ、高い拡張性を持つことが特徴です。

他のSpindleコンポーネントと異なり、CSS VariablesによるスタイルオーバーライドやclassNameでのカスタマイズが可能で、プロダクト固有の要件に柔軟に対応できます。

また、Storybookを通じて豊富な実装例を提供し、セマンティックでアクセシブルなTable実装をサポートします。

将来的には、ソート、もっと見るなどのTable特有の機能の提供を予定しています。

## スクリーンショット
<img width="803" alt="Striped Tableのイメージ画像" src="https://github.com/user-attachments/assets/74355f94-d2ec-4613-9ff6-37d0cb74162b" />


## 使用例

### 基本的な使用方法

```tsx
<Table borderPattern="horizontal" striped>
  <Table.Caption>売上データ（2023年第4四半期）</Table.Caption>
  <Table.Header>
    <Table.Row>
      <Table.Head>商品名</Table.Head>
      <Table.Head align="right">売上（円）</Table.Head>
      <Table.Head align="center">前年比</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Head scope="row">商品A</Table.Head>
      <Table.Cell align="right">1,200,000</Table.Cell>
      <Table.Cell align="center">+12%</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Head scope="row">商品B</Table.Head>
      <Table.Cell align="right">980,000</Table.Cell>
      <Table.Cell align="center">-3%</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
```

### 横スクロール対応テーブル

```tsx
<Table
  borderPattern="inner"
  scrollable={true}
  minCellWidth="100px"
>
  <Table.Header>
    <Table.Row>
      <Table.Head width="150px">商品名</Table.Head>
      <Table.Head>Q1</Table.Head>
      <Table.Head>Q2</Table.Head>
      <Table.Head>Q3</Table.Head>
      <Table.Head>Q4</Table.Head>
      <Table.Head width="100px">合計</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Head scope="row">商品A</Table.Head>
      <Table.Cell>300</Table.Cell>
      <Table.Cell>350</Table.Cell>
      <Table.Cell>320</Table.Cell>
      <Table.Cell>400</Table.Cell>
      <Table.Cell>1,370</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
```

### CSS Variablesによるスタイルのカスタマイズ

```tsx
<div style={{
  '--Table-head-backgroundColor': 'var(--color-surface-accent-primary)',
  '--Table-head-color': 'var(--color-text-high-emphasis-inverse)',
  '--Table-cell-borderColor': 'var(--color-border-accent-primary)'
}}>
  <Table borderPattern="outer" rounded>
    ...
  </Table>
</div>
```

### DO

**適切な構造とセマンティクスを使用する**
```tsx
// ✅ Good: 明確な構造と適切なセマンティクス
<Table.Header>
  <Table.Row>
    <Table.Head>名前</Table.Head>
    <Table.Head align="right">年齢</Table.Head>
  </Table.Row>
</Table.Header>
<Table.Body>
  <Table.Row>
    <Table.Head scope="row">田中太郎</Table.Head>
    <Table.Cell align="right">28</Table.Cell>
  </Table.Row>
</Table.Body>
```

**CSS Variablesでテーマ統一する**
```tsx
// ✅ Good: :rootでプロダクト全体の一貫性を保つ
// styles.css
:root {
  --Table-head-backgroundColor: var(--color-surface-accent-primary);
  --Table-head-color: var(--color-text-high-emphasis-inverse);
}

// Component
<Table borderPattern="horizontal">
  ...
</Table>
```

### DO NOT

**レイアウト目的での使用を避ける**
```tsx
// ❌ Bad: フォームレイアウトでのテーブル使用
<Table>
  <Table.Body>
    <Table.Row>
      <Table.Cell>ラベル:</Table.Cell>
      <Table.Cell><input /></Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>

// ✅ Good: 適切なフォームレイアウト
<div className="form-field">
  <label>ラベル:</label>
  <input />
</div>
```

**個別セルでのボーダー指定**
```tsx
// ❌ Bad: 通常のテーブルで個別セルにボーダーを指定
<Table>
  <Table.Body>
    <Table.Row>
      <Table.Cell style={{ border: '1px solid red' }}>データ</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>

// ✅ Good: borderPattern propを使用
<Table borderPattern="horizontal">
  <Table.Body>
    <Table.Row>
      <Table.Cell>データ</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>

// ✅ Good: セル結合時は個別調整も可能
<Table borderPattern="inner">
  <Table.Body>
    <Table.Row>
      <Table.Cell colSpan={2} className="merged-cell">結合セル</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
```

**アクセシビリティ要素の省略**
```tsx
// ❌ Bad: 行見出しの未指定
<Table.Cell>商品名</Table.Cell>

// ✅ Good: 適切な行見出し
<Table.Head scope="row">商品名</Table.Head>
```

## 要素

### Design Tokens
- Surface Primary (背景色)
- Surface Tertiary (ヘッダー背景色)
- Text High Emphasis (テキスト・見出し）
- Border Low Emphasis (罫線）

### プロパティ

#### Table
```typescript
type TableProps = {
  borderPattern?: 'none' | 'horizontal' | 'vertical' | 'inner' | 'outer' | 'all';
  rounded?: boolean;
  striped?: boolean;
  layout?: 'auto' | 'fixed';
  children?: ReactNode;
} & React.TableHTMLAttributes<HTMLTableElement> & (
  | {
      scrollable?: true;
      minCellWidth?: string;
    }
  | {
      scrollable: false;
      minCellWidth?: never;
    }
);
```

##### scrollable
- `true`: 横スクロール許可（列数が多い場合に有効）
- `false`: セル縮小してコンテナ幅に収める（デフォルト）

##### minCellWidth
`scrollable=true`時のみ指定可能。セルの最小幅を制御します。

##### layout
- `auto`: 内容に基づいて列幅を自動計算（デフォルト）
- `fixed`: 最初の行の指定に基づいて列幅を固定

**layoutとscrollableの組み合わせ**:
- `layout='fixed'` + `scrollable=true`: 固定列幅で横スクロール
- `layout='auto'` + `scrollable=false`: 内容に基づく自動縮小

#### Table.Head
```typescript
interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  align?: 'left' | 'center' | 'right';
  width?: string;
  minWidth?: string;
  children?: ReactNode;
}
```

**使用パターン**:
- **列見出し**: `<Table.Head>名前</Table.Head>`
- **行見出し**: `<Table.Head scope="row">商品A</Table.Head>`

**alignプロパティの提供理由**

スタイリング用途で`align`プロパティのみを提供している理由：
- **使用頻度の高さ**: テキスト配置は最も頻繁に必要とされるスタイル調整

### Table.Cell（データセル）
`<td>`要素として出力。テーブルのデータ内容を格納。

#### Table.Cell
```typescript
interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  align?: 'left' | 'center' | 'right';
  children?: ReactNode;
}
```

## 実装例
上記のプロパティを使って生成されるマークアップです。

```html
<div class="spui-Table-container spui-Table-container--scrollable">
  <table
    class="spui-Table spui-Table--borderPattern-horizontal spui-Table--striped"
    style="--Table-min-cell-width: 80px;"
  >
    <caption class="spui-Table-caption">売上データ（2023年第4四半期）</caption>
    <thead class="spui-Table-header">
      <tr class="spui-Table-row">
        <th class="spui-Table-head">商品名</th>
        <th class="spui-Table-head spui-Table-head--align-right">売上（円）</th>
        <th class="spui-Table-head spui-Table-head--align-center">前年比</th>
      </tr>
    </thead>
    <tbody class="spui-Table-body">
      <tr class="spui-Table-row">
        <th class="spui-Table-head" scope="row">商品A</th>
        <td class="spui-Table-cell spui-Table-cell--align-right">1,200,000</td>
        <td class="spui-Table-cell spui-Table-cell--align-center">+12%</td>
      </tr>
      <tr class="spui-Table-row">
        <th class="spui-Table-head" scope="row">商品B</th>
        <td class="spui-Table-cell spui-Table-cell--align-right">980,000</td>
        <td class="spui-Table-cell spui-Table-cell--align-center">-3%</td>
      </tr>
    </tbody>
  </table>
</div>
```

## スタイリング

### スタイルの上書き

Tableコンポーネントは基本的なスタイルを提供しますが、プロダクト固有の要件がある場合は以下の方法でカスタマイズできます。

**プロダクト全体での統一**
```css
/* styles.css - プロダクト全体に適用 */
:root {
  --Table-head-backgroundColor: var(--color-surface-accent-primary);
  --Table-head-color: var(--color-text-high-emphasis-inverse);
  --Table-cell-borderColor: var(--color-border-accent-primary);
}
```

**個別カスタマイズ**
```css
.custom-table {
  --Table-head-backgroundColor: var(--color-surface-tertiary);
  --Table-head-fontSize: 14px;
  --Table-cell-padding: 16px 12px;
}
```

```tsx
<div className="custom-table">
  <Table borderPattern="outer" rounded>
    {/* テーブル内容 */}
  </Table>
</div>
```

### セルのclassName拡張

各セルには`className`を指定でき、個別のスタイル調整が可能です。

```tsx
<Table.Head className="accent-header">商品名</Table.Head>
<Table.Cell className="highlight-cell">重要データ</Table.Cell>
```

```css
.accent-header {
  --Table-head-backgroundColor: var(--color-surface-accent-primary);
  --Table-head-color: var(--color-text-high-emphasis-inverse);
}

.highlight-cell {
  --Table-cell-backgroundColor: var(--color-surface-accent-secondary-light);
  --Table-cell-color: var(--color-text-accent-secondary);
}
```

### CSS Variables（デフォルト値）

**Surface・背景関連**
| 変数名                              | デフォルト値                  | 用途                 |
| :---------------------------------- | :---------------------------- | :------------------- |
| --Table-backgroundColor             | var(--color-surface-primary)  | テーブル全体の背景色 |
| --Table-head-backgroundColor        | var(--color-surface-tertiary) | ヘッダー背景色       |
| --Table-cell-backgroundColor        | var(--color-surface-primary)  | セル背景色           |
| --Table-row-striped-backgroundColor | var(--color-background)       | ストライプ行背景色   |
| --Table-row-hover-backgroundColor   | var(--color-surface-secondary) | 行ホバー時背景色     |

**Text・テキスト関連**
| 変数名                  | デフォルト値                    | 用途                   |
| :---------------------- | :------------------------------ | :--------------------- |
| --Table-head-color      | var(--color-text-high-emphasis) | ヘッダーテキスト色     |
| --Table-cell-color      | var(--color-text-high-emphasis) | セルテキスト色         |
| --Table-head-fontWeight | bold                            | ヘッダーフォント太さ   |
| --Table-head-fontSize   | 13px                            | ヘッダーフォントサイズ |
| --Table-cell-fontSize   | 13px                            | セルフォントサイズ     |
| --Table-head-lineHeight | 1.4                             | ヘッダー行間           |
| --Table-cell-lineHeight | 1.4                             | セル行間               |

**Border・ボーダー関連**
| 変数名                   | デフォルト値                        | 用途           |
| :----------------------- | :---------------------------------- | :------------- |
| --Table-outlineColor     | var(--color-border-strong-emphasis) | アウトライン色 |
| --Table-head-borderColor | var(--color-border-low-emphasis)    | ヘッダー罫線色 |
| --Table-cell-borderColor | var(--color-border-low-emphasis)    | セル罫線色     |
| --Table-borderRadius     | 16px                                | 外枠の角丸     |

**Layout・レイアウト関連**
| 変数名                 | デフォルト値                 | 用途               |
| :--------------------- | :--------------------------- | :----------------- |
| --Table-head-padding   | 8px 12px                     | ヘッダーパディング |
| --Table-cell-padding   | 8px 12px                     | セルパディング     |
| --Table-sticky-shadow  | var(--box-shadow-lv2-normal) | 固定列の影         |
| --Table-sticky-z-index | 1                            | 固定列のz-index    |

## 設計判断

### HTML属性の継承方針

他の多くのSpindleコンポーネントではpropに`className`を許可していませんが、Tableでは標準HTML属性をそのまま継承しています。

**継承理由**:
- **セル結合時の調整**: `colSpan`、`rowSpan`などの標準属性が必要
- **アクセシビリティ**: `scope`、`headers`、`id`などの属性が重要
- **柔軟なスタイリング**: セル結合時のボーダー調整など、`className`での対応が必要

**方針**:
- 標準HTML属性を制限せず、Web標準に準拠した使用を推奨
- ただし、コンポーネントの基本動作を壊さない範囲での使用を想定

### CSS Variables中心の設計

他のSpindleコンポーネントと異なり、Tableは多様なスタイリング要求があるため、CSS Variablesを中心とした設計を採用しています。

**採用理由**:
- TextLinkコンポーネントと同じ設計方針
- プロダクト全体でのテーブルスタイル統一が容易
- 個別要件への柔軟な対応が可能

**検討した他の選択肢**:
- **個別プロパティ（fontSize、color等）**: プロパティ数が膨大になり、複雑化

### セル結合への対応方針

セル結合時のボーダー調整は利用側で対応してください。コンポーネント側では全ての結合パターンに対して適切なボーダーを提供することが技術的に困難なためです。

**技術的困難な理由**:
- セル結合の組み合わせが無数に存在する
- `borderPattern`との相互作用が複雑になる

**検討した専用プロパティ**:
- **`hasCellMerge`プロパティ**: セル結合の有無を事前に宣言
  - **不採用理由**: 実装時の制約が多く、柔軟性に欠ける
- **`verticalHeader`プロパティ**: 縦見出しの専用制御
  - **不採用理由**: 実装時の制約が多く、柔軟性に欠ける。また特別なユースケースのためにpatternを提供したくない。

**推奨する対応方法**:
```tsx
// 標準HTML属性でセル結合
<Table.Cell colSpan={2} className="merged-cell">
  結合セル
</Table.Cell>

// 利用側でボーダー調整
.merged-cell {
  border-right: 1px solid var(--Table-cell-borderColor);
}
```

この方針により、HTML標準に準拠しつつ、各プロダクトの要件に応じた柔軟な調整が可能です。

## アクセシビリティ
- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)[基本必須]
  - [ ] `<table>`, `<thead>`, `<tbody>`, `<caption>`要素を適切に使用している
  - [ ] 列見出しは`<th>`、行見出しは`<th scope="row">`で実装している
  - [ ] 複雑な表では`id`と`headers`属性で関連性を明示している
- [テキストや文字画像のコントラストを確保する](https://a11y-guidelines.ameba.design/1/4/3/)[基本必須]
  - [ ] SpindleのカラーパレットのTheme Colorsを適切に使い分け、コントラスト比を確保している（Text 4.5:1, Object 3:1）
- [テキストサイズを拡大縮小できる](https://a11y-guidelines.ameba.design/1/4/4/)[基本必須]
  - [ ] 画面を200%拡大・文字サイズを2倍に変更しても、横スクロールで全情報にアクセスできる
- [リフローできる](https://a11y-guidelines.ameba.design/1/4/10/)[できれば]
  - [ ] 画面を400%まで拡大しても、横スクロールで全内容を表示できる
- [キーボード、タッチデバイスで操作できる](https://a11y-guidelines.ameba.design/2/1/1/)[基本必須]
  - [ ] 横スクロールがキーボード（左右キー）でも操作可能である
  - [ ] セル内にフォーカス可能な要素がある場合、適切にTab移動できる
- [適切なフォーカス順序にする](https://a11y-guidelines.ameba.design/2/4/3/)[基本必須]
  - [ ] キーボード操作の順序が、見た目の順序と一致している（左→右、上→下）
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)[基本必須]
  - [ ] HTML5仕様に準拠したtable要素の実装をしている
