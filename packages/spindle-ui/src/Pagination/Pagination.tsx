import React, { useCallback } from 'react';
import MenuHorizontal from '../Icon/MenuHorizontal';

import PaginationItem from './PaginationItem';
import { useShowItem } from './hooks/useShowItem';

interface Props extends React.HTMLAttributes<HTMLElement> {
  current: number;
  total: number;
  showCount?: boolean;
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
    onPageChange,
    createUrl,
    className,
    ...rest
  } = props;

  const {
    displayItem,
    hideDisplayItemLevel1,
    hideDisplayItemLevel2,
    hideDisplayItemLevel3,
    showHorizontal,
    showPrevNext,
    showFirstLast,
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

  const setHiddenItem = useCallback(
    (
      pageNumber: number,
      index: number,
      hideDisplayItemLevel1: boolean,
      hideDisplayItemLevel2: boolean,
      hideDisplayItemLevel3: boolean,
    ) => {
      if (hideDisplayItemLevel1 || hideDisplayItemLevel3) {
        return index === 0 || index === 4;
      } else if (hideDisplayItemLevel2) {
        return current - 1 === pageNumber || current + 1 === pageNumber;
      } else {
        return false;
      }
    },
    [],
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
          const isHidden = setHiddenItem(
            pageNumber,
            index,
            hideDisplayItemLevel1,
            hideDisplayItemLevel2,
            hideDisplayItemLevel3,
          );
          const isCurrent = current === pageNumber;
          const hasRelAttribute = current === pageNumber + 1;

          return (
            <li
              className={[
                `${BLOCK_NAME}-item`,
                isHidden && `${BLOCK_NAME}-item--hidden`,
              ]
                .filter(Boolean)
                .join(' ')}
              key={`pagination-item-${pageNumber}`}
            >
              {showHorizontal && index === displayItem.length - 1 && (
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
              {showHorizontal && index === 0 && (
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
