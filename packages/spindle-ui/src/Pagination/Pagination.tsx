import React, { useCallback, useEffect, useRef, useState } from 'react';
import MenuHorizontal from '../Icon/MenuHorizontal';
import { getLinkRelAttribute } from './helpers/getLinkRelAttribute';
import { useShowItem } from './hooks/useShowItem';
import PaginationItem from './PaginationItem';

export type LinkFollowType = 'all' | 'none' | 'firstPage';

interface Props extends React.HTMLAttributes<HTMLElement> {
  current: number;
  total: number;
  linkFollowType: LinkFollowType;
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

// ウィンドウリサイズ時の間引き処理時間
const RESIZE_DELAY_TIME = 800;

export const Pagination = (props: Props) => {
  const {
    current,
    total,
    linkFollowType,
    showTotal = false,
    onPageChange,
    createUrl,
    className,
    ...rest
  } = props;

  const handleMatchMedia = window?.matchMedia
    ? window.matchMedia('(max-width: 360px)')
    : undefined;

  const isMatchMedia = useRef(handleMatchMedia);
  const [matches, setMatches] = useState(() =>
    isMatchMedia.current ? isMatchMedia.current.matches : false,
  );

  const onChangeView = useCallback(() => {
    const isMatchMedia = handleMatchMedia;
    setMatches(isMatchMedia?.matches ? isMatchMedia.matches : false);
  }, [handleMatchMedia]);

  const onOrientationchange = useCallback(() => {
    onChangeView();
  }, [onChangeView]);

  useEffect(() => {
    window.addEventListener('orientationchange', onOrientationchange, false);
    return () =>
      window.removeEventListener('orientationchange', onOrientationchange);
  }, [onOrientationchange]);

  const onResizeView = useCallback(() => {
    setTimeout(() => {
      onChangeView();
    }, RESIZE_DELAY_TIME);
  }, [onChangeView]);

  useEffect(() => {
    window.addEventListener('resize', onResizeView, false);
    return () => window.removeEventListener('resize', onResizeView);
  }, [onResizeView]);

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
              linkFollowType={linkFollowType}
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
              linkFollowType={linkFollowType}
              total={total}
              onClick={handleClick}
              createUrl={createUrl}
            />
          </li>
        )}
        {displayItem.map((pageNumber, index) => {
          const isCurrent = current === pageNumber;

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
                rel={getLinkRelAttribute({ linkFollowType, pageNumber })}
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
              linkFollowType={linkFollowType}
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
              linkFollowType={linkFollowType}
              total={total}
              onClick={handleClick}
              createUrl={createUrl}
            />
          </li>
        )}
      </ul>
      {showTotal && (
        <p className={`${BLOCK_NAME}-total`}>
          {current}/{total}ページ
        </p>
      )}
    </nav>
  );
};
