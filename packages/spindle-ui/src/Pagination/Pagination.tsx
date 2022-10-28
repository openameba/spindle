import React, { useCallback } from 'react';
import MenuHorizontal from '../Icon/MenuHorizontal';

import PaginationItem from './PaginationItem';
import { useShowItem } from './hooks/useShowItem';

interface Props extends React.HTMLAttributes<HTMLElement> {
  current: number;
  total: number;
  showCount?: boolean;
  showPrevNext?: boolean;
  showFirstLast?: boolean;
  onPageChange: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    pageNumber: number,
  ) => void;
  createUrl: (pageNumber: number) => string;
}

const BLOCK_NAME = 'spui-Pagination';

export const Pagination = (props: Props) => {
  const {
    current,
    total,
    showCount = false,
    showPrevNext = true,
    showFirstLast = false,
    onPageChange,
    createUrl,
    className,
    ...rest
  } = props;

  const {
    displayItem,
    showPrevHorizontal,
    showNextHorizontal,
    hideDisplayItem,
  } = useShowItem({
    current,
    total,
  });

  const handleClick = useCallback(
    (
      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
      pageNumber: number,
    ) => {
      onPageChange?.(event, pageNumber);
    },
    [onPageChange],
  );

  return (
    <nav
      aria-label="ページネーション"
      className={[BLOCK_NAME, className].filter(Boolean).join(' ').trim()}
      {...rest}
    >
      <ul className={`${BLOCK_NAME}-list`}>
        {showFirstLast && (
          <li className={`${BLOCK_NAME}-item ${BLOCK_NAME}-item--first`}>
            <PaginationItem
              type="first"
              current={current}
              total={total}
              onClick={handleClick}
              createUrl={createUrl}
            />
          </li>
        )}
        {showPrevNext && (
          <li className={`${BLOCK_NAME}-item ${BLOCK_NAME}-item--prev`}>
            <PaginationItem
              type="prev"
              current={current}
              total={total}
              onClick={handleClick}
              createUrl={createUrl}
            />
          </li>
        )}
        {displayItem.map((pageNumber, index) => {
          const isCurrent = current === pageNumber;
          const isHiddenPrevItem =
            showPrevNext &&
            hideDisplayItem &&
            current - 1 === pageNumber &&
            current !== 3;
          const isHiddenNextItem =
            showPrevNext &&
            hideDisplayItem &&
            current + 1 === pageNumber &&
            current !== 1 &&
            current !== 2;
          const hasRelAttribute = current === pageNumber + 1;
          const showPrevMenuHorizontal = index === 0 && showPrevHorizontal;
          const showNextMenuHorizontal =
            index === displayItem.length - 1 && showNextHorizontal;

          return (
            <li
              className={[
                `${BLOCK_NAME}-item`,
                (isHiddenPrevItem || isHiddenNextItem) &&
                  `${BLOCK_NAME}-item--hidden`,
              ]
                .filter(Boolean)
                .join(' ')}
              key={`pagination-item-${pageNumber}`}
            >
              {showNextMenuHorizontal && (
                <MenuHorizontal
                  aria-hidden="true"
                  className={`${BLOCK_NAME}-horizontal`}
                />
              )}
              <a
                className={`${BLOCK_NAME}-link`}
                rel={hasRelAttribute ? undefined : 'nofollow'}
                href={isCurrent ? undefined : createUrl(pageNumber)}
                aria-current={isCurrent ? 'page' : undefined}
                aria-disabled={isCurrent ? true : undefined}
                onClick={
                  isCurrent
                    ? undefined
                    : (e) => {
                        handleClick(e, pageNumber);
                      }
                }
                aria-label={`${pageNumber}ページ目`}
              >
                {pageNumber}
              </a>
              {showPrevMenuHorizontal && (
                <MenuHorizontal
                  aria-hidden="true"
                  className={`${BLOCK_NAME}-horizontal`}
                />
              )}
            </li>
          );
        })}
        {showPrevNext && (
          <li className={`${BLOCK_NAME}-item ${BLOCK_NAME}-item--next`}>
            <PaginationItem
              type="next"
              current={current}
              total={total}
              onClick={handleClick}
              createUrl={createUrl}
            />
          </li>
        )}
        {showFirstLast && (
          <li className={`${BLOCK_NAME}-item ${BLOCK_NAME}-item--last`}>
            <PaginationItem
              type="last"
              current={current}
              total={total}
              onClick={handleClick}
              createUrl={createUrl}
            />
          </li>
        )}
      </ul>
      {showCount && (
        <p
          className={`${BLOCK_NAME}-count`}
          aria-label={`${total}ページ中の${current}ページ目`}
        >
          {current}/{total}ページ
        </p>
      )}
    </nav>
  );
};
