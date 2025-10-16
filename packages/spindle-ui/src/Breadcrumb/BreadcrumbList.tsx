import React, { useEffect, useRef } from 'react';
import ChevronRight from '../Icon/ChevronRight';
import ChevronRightBold from '../Icon/ChevronRightBold';

type Variant = 'standard' | 'emphasized';
type Wrap = 'wrap';

interface Props extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  variant?: Variant;
  wrap?: Wrap;
}

const BLOCK_NAME = 'spui-Breadcrumb';

export const BreadcrumbList = (props: Props) => {
  const { children, className, variant = 'standard', wrap, ...rest } = props;
  const navRef = useRef<HTMLElement>(null);
  const currentRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    navRef.current?.scrollTo({
      left: currentRef.current?.offsetLeft,
    });
  }, []);

  return (
    <nav
      aria-label="パンくずリスト"
      className={[
        BLOCK_NAME,
        `${BLOCK_NAME}--${variant}`,
        wrap && `${BLOCK_NAME}--${wrap}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')
        .trim()}
      {...rest}
      ref={navRef}
    >
      <ol className={`${BLOCK_NAME}-list`}>
        {React.Children.map(children, (child) => {
          return React.isValidElement<{
            current?: boolean;
            'aria-current'?: string;
          }>(child) ? (
            <li
              className={`${BLOCK_NAME}-item`}
              {...(child.props.current || child.props['aria-current']
                ? { ref: currentRef }
                : {})}
            >
              {child}
              {variant === 'standard' ? (
                <ChevronRight
                  aria-hidden="true"
                  className={`${BLOCK_NAME}-chevron`}
                />
              ) : (
                <ChevronRightBold
                  aria-hidden="true"
                  className={`${BLOCK_NAME}-chevron`}
                />
              )}
            </li>
          ) : null;
        })}
      </ol>
    </nav>
  );
};
