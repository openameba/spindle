import React, { type FC } from 'react';
import ChevronLeftBold from '../Icon/ChevronLeftBold';
import ChevronRightBold from '../Icon/ChevronRightBold';
import TriangleendLeftBold from '../Icon/TriangleendLeftBold';
import TriangleendRightBold from '../Icon/TriangleendRightBold';
import { getLinkRelAttribute } from './helpers/getLinkRelAttribute';
import { useItemPageNumber } from './hooks/useItemPageNumber';
import type { LinkFollowType } from './Pagination';

type Props = {
  type: 'first' | 'last' | 'next' | 'prev';
  current: number;
  total: number;
  linkFollowType: LinkFollowType;
  onClick: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    pageNumber: number,
  ) => void;
  createUrl: (pageNumber: number) => string;
};

const BLOCK_NAME = 'spui-PaginationItem';

export const PaginationItem: FC<Props> = React.memo(
  function PaginationItem({
    type,
    current,
    total,
    linkFollowType,
    onClick,
    createUrl,
  }) {
    const isDisabled =
      type === 'first' || type === 'prev' ? current === 1 : current === total;
    const isShowLabel = type === 'prev' || type === 'next';
    const { pageNumber } = useItemPageNumber({
      type,
      isDisabled,
      current,
      total,
    });

    const itemPropMap = {
      first: {
        label: '最初へ',
        icon: function iconElement() {
          return (
            <TriangleendLeftBold
              aria-hidden="true"
              className={`${BLOCK_NAME}-icon`}
            />
          );
        },
      },
      prev: {
        label: '前へ',
        icon: function iconElement() {
          return (
            <ChevronLeftBold
              aria-hidden="true"
              className={`${BLOCK_NAME}-icon`}
            />
          );
        },
      },
      next: {
        label: '次へ',
        icon: function iconElement() {
          return (
            <ChevronRightBold
              aria-hidden="true"
              className={`${BLOCK_NAME}-icon`}
            />
          );
        },
      },
      last: {
        label: '最後へ',
        icon: function iconElement() {
          return (
            <TriangleendRightBold
              aria-hidden="true"
              className={`${BLOCK_NAME}-icon`}
            />
          );
        },
      },
    };

    return (
      <a
        className={`${BLOCK_NAME}-link ${BLOCK_NAME}-link--${type}`}
        rel={getLinkRelAttribute({ linkFollowType, pageNumber })}
        aria-label={itemPropMap[type].label}
        href={isDisabled ? undefined : createUrl(pageNumber)}
        aria-disabled={isDisabled ? true : undefined}
        onClick={
          isDisabled
            ? undefined
            : (e) => {
                onClick(e, pageNumber);
              }
        }
      >
        {isShowLabel && (
          <span className={`${BLOCK_NAME}-label`}>
            {itemPropMap[type].label}
          </span>
        )}
        {itemPropMap[type].icon()}
      </a>
    );
  },
  (prevProps, nextProps) =>
    prevProps.type === nextProps.type &&
    prevProps.current === nextProps.current &&
    prevProps.total === nextProps.total,
);

export default PaginationItem;
