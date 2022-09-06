import React, { useEffect, useRef } from 'react';
import ChevronRightBold from '../Icon/ChevronRightBold';

interface Props extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

const BLOCK_NAME = 'spui-Breadcrumb';

export const BreadcrumbList = (props: Props) => {
  const { children, className, ...rest } = props;
  const currentRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    currentRef?.current?.scrollIntoView();
  }, []);

  return (
    <nav
      aria-label="パンくずリスト"
      className={[BLOCK_NAME, className].join(' ').trim()}
      {...rest}
    >
      <ol className={`${BLOCK_NAME}-list`}>
        {React.Children.map(children, (child) => {
          return React.isValidElement(child) ? (
            <li
              className={`${BLOCK_NAME}-item`}
              {...(child.props.current || child.props['aria-current']
                ? { ref: currentRef }
                : {})}
            >
              {child}
              <ChevronRightBold
                aria-hidden="true"
                className={`${BLOCK_NAME}-chevron`}
              />
            </li>
          ) : null;
        })}
      </ol>
    </nav>
  );
};
