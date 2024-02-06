# NavigationTab/UnderlineTab

## 概要・背景
UnderlineTabはNavigationTabの3種(Underline/Capsule/Inline)の内の１つです。NavigationTabはアプリケーションのメインナビゲーションを提供します。ユーザーはこのコンポーネントを使ってアプリケーションの主要なページ間を移動、またはコンテンツの一部の表示切り替えができます。ユーザーは現在どのページにいるのか、どのコンテンツを表示しているのかをこのコンポーネントから理解できます。

### NavigationTabの種類
| | Underline Style | Capsule Style | Inline Style |
| --- | --- | --- | --- |
| 用途 | メインナビゲーション | メインもしくはサブナビゲーション | サブナビゲーション |
| 利用シーン | headerのように利用、コンテンツの内容が類推しやすい時 | 象徴的、目立たせる、Underlineと組み合わせる時 | Navigation Tabと並列に何らかの要素を配置したい時 |
| 数字バッジ | ○ | × | × |
| ボーダー | ○ | ○ | × |
| 横スクロール | ○ | ○ | × |

### 要件
#### Fixed, Scrollable
表示するタブアイテム数によってFixed, Scrollableの2パターンがあります。Fixedはタブアイテムが画面幅に収まる場合、Scrollableは収まらない場合にスクロール可能になり左右にボタンが配置されます。

Scrollableパターンで左右に見切れたタブアイテムがある場合には、操作用途のボタンが表示されます。ボタンが押されると、左または右側に150pxスクロールします。この値は「想定する最小画面幅より大きくならない適当な値」として指定されています。画面幅に従って動的に割合で算出するプランもありましたが、よりシンプルな方で進めることにしました。

## スクリーンショット
![UnderlineTabのイメージ。Fixed, Scrollableの2パターンの表示がある。Fixedはアイテムが全て表示されている。Scrollableは画面内に表示し切れないアイテムがあり、画面の左端または右端に「＜」または「＞」アイコンが表示されている。他に、Borderをつけるものや、Count Badgeをつけるタイプのものがある。](https://github.com/openameba/spindle/assets/44389443/c0ef6998-603c-473a-ab5c-a022fdb478d3)

## 使用例
### DO
基本的には`<UnderlineTabItem>`と一緒に使うことを想定しています。ただしサイトによっては、リンク部分の要素が異なる可能性もあるので、`<UnderlineTabItem>` を使わず、直接 `<a>` 要素や各種フレームワークで定義された `<Link>` も同様に指定できます。その場合、countBadgeを使うには自前で実装する必要があります。

#### UnderlineTabItemを使うパターン(リンクの場合)
linkUrlを指定するとリンクになります。
```tsx
<UnderlineTab
  defaultSelectedId="team"
  hasBorder
>
  <UnderlineTabItem label="top" id="top" linkUrl="/top" countBadge={99} />
  <UnderlineTabItem label="Team" id="team" linkUrl="/team" />
  <UnderlineTabItem label="Amebaとは" id="about" linkUrl="/about" />
</UnderlineTab>
```

#### UnderlineTabItemを使うパターン(ボタンの場合)
linkUrlを指定しない場合はボタンとなります。ボタンには指定したidに接尾辞として`-tabpanel`が付け加えられる形でaria-controls属性が付与されます。 (例：`${id}-tabpanel`) 表示されるコンテンツ側には、選択されているタブのaria-controlsと一致した`id`属性が必要です。
```tsx
<UnderlineTab
  defaultSelectedId="team"
  hasBorder
>
  <UnderlineTabItem label="Top" id="top" onClick={handleClick} />
  <UnderlineTabItem label="Team" id="team" countBadge={1} onClick={handleClick} />
  <UnderlineTabItem label="Amebaとは" id="about" onClick={handleClick} />
</UnderlineTab>
<div id="team-tabpanel" role="tabpanel">表示されるコンテンツ</div>
```

#### 直接aタグを使うパターン
`role`属性と、現在地には`aria-selected`属性と`aria-current`属性の指定が必要です。
```tsx
<UnderlineTab
  defaultSelectedId="team"
  hasBorder
>
  <a id="top" href="/top" role="tab" aria-selected={false} onClick={handleClick}>Top</a>
  <a id="team" href="/team" role="tab" aria-selected={true} aria-current="page" onClick={handleClick}>Team</a>
  <a id="about" href="/about" role="tab" aria-selected={false} onClick={handleClick}>Amebaとは</a>
</UnderlineTab>
```

### DO NOT
サイドバーなどの補助的なナビゲーションには使用しないでください。

## 要素
### Design Tokens
- Surface Primary (背景色)
- Text Accent Primary (現在地テキスト)
- Border Accent Primary (現在地下線)
- Text Low Emphasis (テキスト)
- Object Low Emphasis (矢印アイコン)
- Border Low Emphasis (下線)
- Text High Emphasis Inverse (数字バッジテキスト)
- Surface Accent Primary (数字バッジ背景)
- Animation Content Change (タブhover時, 左右移動ボタンhover時)
- Animation Appear In (タブ下線の出現時, 左右移動ボタンの出現時)

### プロパティ
#### UnderlineTab.tsx
```typescript
type Props = {
  children: React.ReactNode;
  defaultSelectedId: string; // アイテムのidを指定します。指定したidが初期表示時に選択されているタブとして下線が表示されます。該当のidが存在しない場合は、下線が表示されません。
  hasBorder?: boolean; // タブに区切りとしての下線を表示します。初期値は`false`です
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id) => void;
};
```

#### UnderlineTabItem.tsx
```typescript
type Props = {
  label: string; // タブに表示するテキストを指定します。ページタイトルやコンテンツ内容を表すテキストを指定します。
  id: string; // アイテムの識別子。ページ内で一意になるように設定します。buttonの場合は、`aria-controls`にこのidに接尾辞として`-tabpanel`が付与された形で設定されます。(例：`${id}-tabpanel`)
  linkUrl?: string; // 指定した場合は`<a>`、しない場合は`<button>`が適用されます。
  countBadge?: number; // バッジに表示する数値を指定します。
};
```

## 実装例
実装の大枠を記載しています。スタイルや各数値の調整は実装時に行います。

### UnderlineTab
```tsx
import React, { useState, useEffect, useCallback, useRef } from 'react';

const UnderlineTabContext = React.createContext<{
  selectedId: string;
  handleClick: (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    id: string,
  ) => void;
}>({
  selectedId: '',
  handleClick: () => {},
});

export const useUnderlineTabContextContext = () => {
  const context = React.useContext(UnderlineTabContext);
  if (context === null) {
    throw new Error(
      'useUnderlineTabContext must be used within a UnderlineTab',
    );
  }
  return context;
};

type Props = {
  children: React.ReactNode;
  defaultSelectedId: string;
  hasBorder?: boolean;
  onClick?: (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    id: string,
  ) => void;
};

const BLOCK_NAME = 'spui-UnderlineTab';

export const UnderlineTab: React.FC<Props> = ({
  children,
  defaultSelectedId,
  hasBorder = false,
  onClick,
}) => {
  const [selectedId, setSelectedId] = useState(defaultSelectedId);
  const tabRef = useRef<HTMLDivElement>(null);
  const [showScrollLeft, setShowScrollLeft] = useState(false);
  const [showScrollRight, setShowScrollRight] = useState(false);

  useEffect(() => {
    const tabElement = tabRef.current;
    if (!tabElement) return;

    const updateScrollButtons = () => {
      setShowScrollLeft(tabElement.scrollLeft > 0);
      setShowScrollRight(
        tabElement.scrollWidth > tabElement.clientWidth + tabElement.scrollLeft,
      );
    };

    updateScrollButtons();
    window.addEventListener('resize', updateScrollButtons);
    tabElement.addEventListener('scroll', updateScrollButtons);

    return () => {
      window.removeEventListener('resize', updateScrollButtons);
      tabElement.removeEventListener('scroll', updateScrollButtons);
    };
  }, []);

  const scrollLeft = () => {
    if (tabRef.current) {
      tabRef.current.scrollLeft -= 100;
    }
  };

  const scrollRight = () => {
    if (tabRef.current) {
      tabRef.current.scrollLeft += 100;
    }
  };

  const handleClick = useCallback(
    (
      e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
      id: string,
      isUpdateTab: boolean = true,
    ) => {
      setSelectedId(id);

      if (typeof onClick === 'function') {
        onClick(e, id);
      }
    },
    [onClick],
  );

  return (
    <UnderlineTabContext.Provider
      value={{ selectedId, handleClick }}
    >
      <div
        ref={tabRef}
        className={[`${BLOCK_NAME}`, hasBorder ? `${BLOCK_NAME}--border` : '']
          .filter(Boolean)
          .join(' ')}
        role="tablist"
      >
        {showScrollLeft && (
          <button type="button" onClick={scrollLeft}>
            Left
          </button>
        )}
        {React.Children.map(children, (child) => {
          return React.isValidElement(child) ? (
            <div
              className={[
                `${BLOCK_NAME}-item`,
                child.props.id === selectedId
                  ? `${BLOCK_NAME}-item--active`
                  : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {child}
            </div>
          ) : null;
        })}
        {/* 下線部分はタブ押下時にアニメーションさせる */}
        <div className={`${BLOCK_NAME}-bar`} />
        {showScrollRight && (
          <button type="button" onClick={scrollRight}>
            Right
          </button>
        )}
      </div>
    </UnderlineTabContext.Provider>
  );
};
```

### UnderlineTabItem
```tsx
import React, { forwardRef } from 'react';
import { useUnderlineTabContextContext } from './UnderlineTab';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  id: string;
  linkUrl?: string;
  countBadge?: number;
}

export const UnderlineTabItem = forwardRef<HTMLAnchorElement, Props>(
  function Item({ label, id, linkUrl, countBadge }: Props) {
    const {
      selectedId,
      handleClick,
    } = useUnderlineTabContextContext();

    const commonProps = {
      id,
      role: 'tab',
      'aria-selected': selectedId === id,
    };

    const countBadgeElement = countBadge && (
      <>
        {countBadge}
        <span className="visually-hidden">件</span>
      </>
    );

    if (linkUrl) {
      return (
        <a
          {...commonProps}
          href={linkUrl}
          aria-current={selectedId === id ? 'page' : false}
        >
          {label}
          {countBadgeElement}
        </a>
      );
    } else {
      return (
        <button
          {...commonProps}
          aria-controls={`${id}-tabpanel`}
          onClick={(e) => {
            handleClick(e, id);
          }}
        >
          {label}
          {countBadgeElement}
        </button>
      );
    }
  },
);
```

## 他の手段
### 各Styleを一つのコンポーネントとする
一つのコンポーネントで`Underline Style`/`Capsule Style`/`Inline Style`をvariantプロパティで切り替えられることも検討しました。しかしそれぞれ用途が異なり、必要なプロパティも変わってくるためNavigationTabディレクトリにUnderlineTab/CapsuleTab/InlineTabといったコンポーネント名で分けることにしています。

### 数字バッジ部分を単一コンポーネントとして切り出す
ユースケースによって利用方法が変わってきそうなため現段階では行なっていません。使用箇所が増え利用パターンが見通せるようになったタイミングで切り分ける方針です。

### タブのitemをchildrenではなくpropsで渡す
利用側の使い方をpropsとして制限でき、開発者の意図通りの利用を促せます。しかし管理するpropsの数が増え、条件によってはpropsの使用可否なども変化するため実装が複雑化したり利用側の扱いが難しくなる可能性があります。childrenで受け渡す方式では必要なprops数が比較的少なくなるため、実装・利用ともにシンプルになると考えました。

#### aタグの場合
```tsx
<UnderlineTab
  defaultSelectedId="team"
  items={[
    { id: 'top' , linkUrl: '/top', label: 'Top', countBadge: 1 },
    { id: 'team', linkUrl: '/team', label: 'Team' },
    { id: 'ameba', linkUrl: '/about', label: 'Amebaとは' },
  ]}
  hasBorder
/>
```

#### フレームワークで定義された`<Link>`の場合
```tsx
<UnderlineTab
  LinkComponent={Link}
  defaultSelectedId="team"
  items={[
    { id: 'top' , label: 'Top', countBadge: 1, linkComponentProps: { to: '/top' } },
    { id: 'team', label: 'Team', linkComponentProps: { to: '/team' } },
    { id: 'ameba', label: 'Amebaとは', linkComponentProps: { to: '/about' } },
  ]}
  hasBorder
  onClick={handleClick}
/>
```

#### ボタンの場合
```tsx
<UnderlineTab
  defaultSelectedId="team"
  items={[
    { id: 'top' , label: 'Top', countBadge: 1 },
    { id: 'team', label: 'Team' },
    { id: 'ameba', label: 'Amebaとは' },
  ]}
  hasBorder
  onClick={handleClick}
/>
```

## アクセシビリティ
- [情報や関係性を明確にする](https://a11y-guidelines.ameba.design/1/3/1/)[基本必須]
  - [ ] リスト、ボタンやリンクを適切な要素で実装する
- [色だけで伝えない](https://a11y-guidelines.ameba.design/1/4/1/)[基本必須]
  - [ ] 色だけで現在のタブを区別していない
- [テキストや文字画像のコントラストを確保する](https://a11y-guidelines.ameba.design/1/4/3/)[基本必須]
  - [ ] SpindleカラーパレットのTheme Colorsを適切に使い分けている
- [テキストサイズを拡大縮小できる](https://a11y-guidelines.ameba.design/1/4/4/)[基本必須]
  - [ ] 画面を200%拡大・文字サイズを2倍に変更しても、改行または横スクロールで全てのタブを確認できる
- [リフローできる](https://a11y-guidelines.ameba.design/1/4/10/)[できれば]
  - [ ] 画面を400%まで拡大しても、改行または横スクロールで全てのタブを表示できる
- [キーボード、タッチデバイスで操作できる](https://a11y-guidelines.ameba.design/2/1/1/)[基本必須]
  - [ ] リンクとボタンはTabキーまたは左右キーでフォーカスでき、Enterキーで実行できる
- [適切なフォーカス順序にする](https://a11y-guidelines.ameba.design/2/4/3/)[基本必須]
  - [ ] キーボード操作の順序が、見た目の順序と一致している
- [リンクの目的を理解できるようにする](https://a11y-guidelines.ameba.design/2/4/4/)[基本必須]
  - [ ] リンクテキストからリンク先のページの内容を推測できる
- [フォーカスを見えるようにする](https://a11y-guidelines.ameba.design/2/4/7/)[基本必須]
  - [ ] リンクとボタンは、フォーカスの状態が見える
- [現在位置を確認できる](https://a11y-guidelines.ameba.design/2/4/8/)[できれば]
  - [ ] 現在位置とそれ以外が区別できる状態になっている
  - [ ] 現在位置は `aria-selected="true"` を付与している。リンクの場合は、`aria-current="page"` を追加で付与している
- [ポインタジェスチャを必須としない](https://a11y-guidelines.ameba.design/2/5/1/)[基本必須]
  - [ ] スクロールできる場合はスクロールボタンを配置している
- [ターゲットのサイズを理解する](https://a11y-guidelines.ameba.design/2/5/5/)[できれば]
  - [ ] リンクやボタンのタップ領域は44px × 44px以上確保している
- [HTMLを正しく記述する](https://a11y-guidelines.ameba.design/4/1/1/)[基本必須]
  - [ ] HTML仕様に準拠した実装をしている
- [カスタムコントロールの操作性を担保する](https://a11y-guidelines.ameba.design/4/1/2/)[基本必須]
  - [ ] 全体のタブリストには `role="tablist"` を設定し、個々のタブには `role="tab"` を設定している。選択されたタブには `aria-selected="true` を設定している。ボタンの場合は `aria-controls` をボタンに付与し、表示コンテンツ側のidを指定している
  - [ ] スクリーンリーダーでも機能落ちがなく、読み上げが過不足なく行われている

## リンク集
特になし。
