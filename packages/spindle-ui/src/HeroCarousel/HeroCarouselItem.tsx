import React, { useCallback, FC } from 'react';

export type CarouselItem = {
  imageUrl: string;
  link: string;
  title: string;
};

type Props = {
  carouselItem: CarouselItem;
  isLinkClicked: boolean;
  itemLinkClassName: string;
};

const BLOCK_NAME = 'spui-HeroCarouselItem';

export const HeroCarouselItem: FC<Props> = React.memo(
  function HeroCarouselItem({
    carouselItem,
    isLinkClicked,
    itemLinkClassName,
  }) {
    const handleLinkClick = useCallback(
      (e: React.KeyboardEvent | React.MouseEvent) => {
        if (!isLinkClicked) {
          e.preventDefault();
        }
      },
      [isLinkClicked],
    );

    return (
      <li className={`${BLOCK_NAME}-listItem`}>
        <a
          className={`${itemLinkClassName} ${BLOCK_NAME}-link`}
          href={carouselItem.link}
          onClick={handleLinkClick}
        >
          <span className={`${BLOCK_NAME}-imageBlock`}>
            <img
              alt=""
              className={`${BLOCK_NAME}-image`}
              src={carouselItem.imageUrl}
            />
          </span>
          <div className={`${BLOCK_NAME}-titleContainer`}>
            <p className={`${BLOCK_NAME}-title`}>{carouselItem.title}</p>
          </div>
        </a>
      </li>
    );
  },
  (prevProps, nextProps) =>
    prevProps.isLinkClicked === nextProps.isLinkClicked &&
    prevProps.itemLinkClassName === nextProps.itemLinkClassName &&
    prevProps.carouselItem.title === nextProps.carouselItem.title &&
    prevProps.carouselItem.link === nextProps.carouselItem.link &&
    prevProps.carouselItem.imageUrl === nextProps.carouselItem.imageUrl,
);

export default HeroCarouselItem;
