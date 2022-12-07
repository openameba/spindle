import React, { useCallback, useEffect, useState, useRef } from 'react';
import MenuHorizontal from '../Icon/MenuHorizontal';

import PaginationItem from './PaginationItem';
import { useShowItem } from './hooks/useShowItem';

interface Props extends React.HTMLAttributes<HTMLElement> {
  current: number;
  total: number;
  showTotal?: boolean;
  onPageChange?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    pageNumber: number,
  ) => void;
  createUrl: (pageNumber: number) => string;
}

const BLOCK_NAME = 'spui-Pagination';

// ページ総数の閾値
const TOTAL_THRESHOLD = 100;

export const Pagination = (props: Props) => {
  const {
    current,
    total,
    showTotal = false,
    onPageChange,
    createUrl,
    className,
    ...rest
  } = props;

  const handleMatchMedia =
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(max-width: 360px)')
      : undefined;

  const isMobile = useRef(handleMatchMedia);
  const [matches, setMatches] = useState(() =>
    isMobile.current ? isMobile.current.matches : false,
  );

  const onOrientationchange = useCallback(() => {
    const isMobile = handleMatchMedia;
    setMatches(isMobile && isMobile.matches ? isMobile.matches : false);
  }, [handleMatchMedia]);

  useEffect(() => {
    window.addEventListener('orientationchange', onOrientationchange, false);
  }, [onOrientationchange]);

  const displayItem = useShowItem({
    current,
    total,
    showItemSize: matches ? 3 : 5,
    totalThreshold: TOTAL_THRESHOLD,
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
  const showPrevNext = total < TOTAL_THRESHOLD;
  const showFirstLast = total >= TOTAL_THRESHOLD;

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
          const hasRelAttribute = current === pageNumber + 1;

          // 数字が隣接していない場合に表示
          const showEllipsis =
            !!displayItem[index + 1] && displayItem[index + 1] - pageNumber > 1;

          return (
            <li
              className={`${BLOCK_NAME}-item`}
              key={`pagination-item-${pageNumber}`}
            >
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
              {showEllipsis && (
                <MenuHorizontal
                  aria-hidden="true"
                  className={`${BLOCK_NAME}-ellipsis`}
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
      {showTotal && (
        <p
          className={`${BLOCK_NAME}-total`}
          aria-label={`${total}ページ中の${current}ページ目`}
        >
          {current}/{total}ページ
        </p>
      )}
    </nav>
  );
};
