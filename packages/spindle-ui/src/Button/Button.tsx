import React, { forwardRef } from 'react';

type Layout = 'intrinsic' | 'fullWidth';

type Size = 'large' | 'medium' | 'small';

type Variant = 'contained' | 'outlined' | 'lighted' | 'neutral' | 'danger';

interface Props
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  children?: React.ReactNode;
  /** ボタンの横幅。fullWidth で親要素いっぱいに広がる */
  layout?: Layout;
  /** ボタンの大きさ */
  size?: Size;
  /** ボタンの見た目。アクションの重要度に応じて使い分ける */
  variant?: Variant;
  /** ボタンテキストの前後に表示するアイコン */
  icon?: React.ReactNode;
  /** アイコンの表示位置 */
  iconPosition?: 'start' | 'end';
}

const BLOCK_NAME = 'spui-Button';

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  {
    children,
    layout = 'intrinsic',
    size = 'large',
    variant = 'contained',
    icon,
    iconPosition = 'start',
    ...rest
  }: Props,
  ref,
) {
  return (
    <button
      className={[
        BLOCK_NAME,
        `${BLOCK_NAME}--${layout}`,
        `${BLOCK_NAME}--${size}`,
        `${BLOCK_NAME}--${variant}`,
        icon && `${BLOCK_NAME}--icon${iconPosition}`,
      ]
        .filter(Boolean)
        .join(' ')}
      ref={ref}
      {...rest}
    >
      {icon ? (
        <>
          <span className={`${BLOCK_NAME}-icon ${BLOCK_NAME}-icon--${size}`}>
            {icon}
          </span>
          {children}
        </>
      ) : (
        children
      )}
    </button>
  );
});
