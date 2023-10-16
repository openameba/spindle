# BottomButton

## 概要・背景
モーダルやLPなどで、ボタンを画面下部にスクロールさせずに固定させておくためのComponentです。これにより、ユーザーがページのどの位置にスクロールしていてもアクセスを容易にします。

## スクリーンショット
<img width="334" alt="BottomButtonのイメージ画像。画面下部にボタンが固定されている" src="https://github.com/openameba/spindle/assets/44389443/2b75bbba-4f8c-4891-8e6f-36a44c5dfbe7">

## 使用例
基本的にSpindleの`Button`コンポーネントを渡して利用することを想定しています。 fixedで配置する場合とstickyで配置するパターンを想定しています。
なお、レスポンシブでの実装でPCサイズだけ画面下部に配置をしない場合は、mediaQuery等を利用しpositionを上書きする想定です。

### DO
```tsx
<BottomButton position="fixed"> {/* fixed or sticky */}
  <Button size="large" variant="contained" layout="fullWidth">新規登録</Button>
</BottomButton>
```

### DO NOT
ボタンが大きすぎたり複数のボタンを画面に固定すると、ウェブページの本文や重要な情報を覆い隠してしまう可能性があります。特にスマートフォンなどの画面の小さな端末で画面を横向きにした場合に縦幅が縮み隠れてしまう可能性があります。ボタンの数やサイズは適切に調整し、コンテンツが見えにくくなることを避けてください。

## 要素

### Design Tokens
- Surface Primary (背景色)

### プロパティ
```typescript
type Props = {
  children: React.ReactNode;
  className?: string;
  position?: 'fixed' | 'sticky';
};
```

##### Position
- `fixed`(デフォルト): 画面下部に固定されます。
- `sticky`: 親要素下部に固定されます。親要素がスクロールアウトすると一緒にスクロールアウトします。

## 実装例
書き出されるマークアップです。
```html
<div class="spui-BottomButton spui-BottomButton--fixed">
  <div class="spui-BottomButton-wrap">
    <button class="spui-Button spui-Button--fullWidth spui-Button--large spui-Button--contained">新規登録</button>
  </div>
</div>
```

React実装です。
```tsx
return (
  <BottomButton position="fixed">
    <Button size="large" variant="contained" layout="fullWidth">新規登録</Button>
  </BottomButton>
);
```

## アクセシビリティ
- [表示の向きを固定しない](https://a11y-guidelines.ameba.design/1/3/4/)[できれば]
  - [ ] 画面の向きに関わらず画面下部に表示されるように実装している
  - [ ] 端末を横向きにしてもコンポーネントでWebページの本文エリアが極端に小さくならないよう、コンポーネントの高さが設計されている
- [リフローできる](https://a11y-guidelines.ameba.design/1/4/10/)[できれば]
  - [ ] 画面を400%まで拡大しても、画面幅に合わせて横幅が変動する
- [適切なフォーカス順序にする](https://a11y-guidelines.ameba.design/2/4/3/)[基本必須]
  - [ ] BottomButton内に配置したボタンへのキーボード操作の順序が、見た目の順序と一致するように実装する
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)[基本必須]
  - [ ] HTML仕様に準拠した実装をしている

## リンク集
- デザインドキュメント
  - [Spindle UI (Community) – Figma](https://www.figma.com/file/Toaz94rO0kOURholZTn7an/Spindle-UI-(Community)?type=design&node-id=367-44279&mode=design&t=hHIm2kyWNI0yxejC-4)
