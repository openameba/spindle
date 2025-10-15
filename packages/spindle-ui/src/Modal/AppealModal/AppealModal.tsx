import React, { forwardRef, useEffect, useRef } from 'react';
import { useMergeRefs } from 'use-callback-ref';
import { ButtonGroup as Group } from '../../ButtonGroup';
import CrossBold from '../../Icon/CrossBold';
import ChevronLeft from '../../Icon/ChevronLeft';
import ChevronRight from '../../Icon/ChevronRight';
import Megaphone from '../../Icon/Megaphone';
import { IconButton } from '../../IconButton';
import { SubtleButton } from '../../SubtleButton';
import { TextLink } from '../../TextLink';

type Size = 'large' | 'medium' | 'small';

interface AppealModalProps extends React.DialogHTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  size?: Size;
  onCancel?: (event: React.BaseSyntheticEvent) => void;
  onClose?: (event: React.BaseSyntheticEvent) => void;
}

const BLOCK_NAME = 'spui-AppealModal';

const Frame = forwardRef<HTMLDialogElement, AppealModalProps>(
  function AppealModal(
    { children, className, open, size = 'large', onClose, ...rest },
    ref,
  ) {
    const dialogEl = useRef<HTMLDialogElement>(null);

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault(); // To be closed with the open prop
      onClose && onClose(event);
    };

    const handleDialogClick = (event: React.MouseEvent<HTMLDialogElement>) => {
      // Detect backdrop click
      if (event.target === dialogEl.current) {
        onClose && onClose(event);
      }
    };

    const handleDialogClose = (
      event: React.SyntheticEvent<HTMLDialogElement>,
    ) => {
      // Detect escape key type
      if (event.target === dialogEl.current) {
        onClose && onClose(event);
      }
    };

    useEffect(() => {
      const dialog = dialogEl.current;
      if (!dialog) {
        return;
      }

      if (open) {
        !dialog.open && dialog.showModal?.();
      } else {
        dialog?.close?.();
      }
    }, [open, dialogEl]);

    return (
      <dialog
        className={[BLOCK_NAME, `${BLOCK_NAME}--${size}`, className]
          .filter(Boolean)
          .join(' ')
          .trim()}
        ref={useMergeRefs([dialogEl, ref])}
        onClick={handleDialogClick}
        onClose={handleDialogClose}
        {...rest}
      >
        <form
          className={`${BLOCK_NAME}-frame`}
          method="dialog"
          onSubmit={handleFormSubmit}
        >
          <div className={`${BLOCK_NAME}-closeIconButton`}>
            <IconButton aria-label="とじる" variant="neutral">
              <CrossBold aria-hidden="true" />
            </IconButton>
          </div>
          {children}
          <div className={`${BLOCK_NAME}-closeTextButton`}>
            <SubtleButton>とじる</SubtleButton>
          </div>
        </form>
      </dialog>
    );
  },
);

const StyleOnly = ({
  className,
  children,
  size = 'large',
  ...rest
}: React.ComponentProps<'div'> & { size?: Size }) => {
  return (
    <div
      className={[
        BLOCK_NAME,
        `${BLOCK_NAME}--styleOnly`,
        `${BLOCK_NAME}--${size}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')
        .trim()}
      {...rest}
    >
      <div className={`${BLOCK_NAME}-frame`}>
        <div className={`${BLOCK_NAME}-closeIconButton`}>
          <IconButton aria-label="閉じる" variant="neutral">
            <CrossBold aria-hidden="true" />
          </IconButton>
        </div>
        {children}
        <div className={`${BLOCK_NAME}-closeTextButton`}>
          <SubtleButton>とじる</SubtleButton>
        </div>
      </div>
    </div>
  );
};

const Title = ({ children, ...rest }: React.ComponentProps<'p'>) => {
  return (
    <p className={`${BLOCK_NAME}-title`} {...rest}>
      {children}
    </p>
  );
};

const Image = ({ children, ...rest }: React.ComponentProps<'div'>) => {
  return (
    <div className={`${BLOCK_NAME}-image`} {...rest}>
      {children}
    </div>
  );
};

const Body = ({ children, ...rest }: React.ComponentProps<'p'>) => {
  return (
    <p className={`${BLOCK_NAME}-body`} {...rest}>
      {children}
    </p>
  );
};

const ButtonGroup: typeof Group = ({ children, ...rest }) => {
  return (
    <Group
      className={`${BLOCK_NAME}-buttonGroup`}
      size="medium"
      direction="column"
      {...rest}
    >
      {children}
    </Group>
  );
};

const Caption = ({
  children,
  className,
  ...rest
}: React.ComponentProps<'div'>) => {
  return (
    <div
      className={[`${BLOCK_NAME}-caption`, className]
        .filter(Boolean)
        .join(' ')
        .trim()}
      {...rest}
    >
      <span className={`${BLOCK_NAME}-caption-icon`}>
        <Megaphone aria-hidden="true" />
      </span>
      <span className={`${BLOCK_NAME}-caption-text`}>{children}</span>
    </div>
  );
};

const Topics = ({
  className,
  children,
  ...rest
}: React.ComponentProps<'div'>) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const childrenArray = React.Children.toArray(children);
  const totalTopics = childrenArray.length;

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const width = scrollRef.current.clientWidth;
    const newIndex = Math.round(scrollLeft / width);
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    scrollElement.addEventListener('scroll', handleScroll);
    return () => scrollElement.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={scrollRef}
      className={[`${BLOCK_NAME}-topics`, className]
        .filter(Boolean)
        .join(' ')
        .trim()}
      role="region"
      aria-label="トピック一覧"
      {...rest}
    >
      {children}
      {totalTopics > 1 && (
        <>
          <div
            className={`${BLOCK_NAME}-pageIndicator`}
            aria-label={`${totalTopics}件中${currentIndex + 1}件目`}
          >
            {childrenArray.map((_, i) => (
              <span
                key={i}
                className={`${BLOCK_NAME}-pageIndicator-dot ${
                  i === currentIndex
                    ? `${BLOCK_NAME}-pageIndicator-dot--active`
                    : ''
                }`}
                aria-hidden="true"
              />
            ))}
          </div>
          <TopicNavigation
            currentIndex={currentIndex}
            totalTopics={totalTopics}
            onNavigate={(index) => {
              if (!scrollRef.current) return;
              const width = scrollRef.current.clientWidth;
              scrollRef.current.scrollTo({
                left: width * index,
                behavior: 'smooth',
              });
            }}
          />
        </>
      )}
    </div>
  );
};

const Topic = ({
  className,
  children,
  ...rest
}: React.ComponentProps<'div'>) => {
  return (
    <div
      className={[`${BLOCK_NAME}-topic`, className]
        .filter(Boolean)
        .join(' ')
        .trim()}
      {...rest}
    >
      {children}
    </div>
  );
};

const PageIndicator = ({
  current,
  total,
  className,
  ...rest
}: React.ComponentProps<'div'> & { current: number; total: number }) => {
  return (
    <div
      className={[`${BLOCK_NAME}-pageIndicator`, className]
        .filter(Boolean)
        .join(' ')
        .trim()}
      aria-label={`${total}件中${current + 1}件目`}
      {...rest}
    >
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={`${BLOCK_NAME}-pageIndicator-dot ${
            i === current ? `${BLOCK_NAME}-pageIndicator-dot--active` : ''
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

const TopicNavigation = ({
  currentIndex,
  totalTopics,
  onNavigate,
}: {
  currentIndex: number;
  totalTopics: number;
  onNavigate: (index: number) => void;
}) => {
  const showPrev = currentIndex > 0;
  const showNext = currentIndex < totalTopics - 1;

  return (
    <>
      {showPrev && (
        <div
          className={`${BLOCK_NAME}-topicNavigation ${BLOCK_NAME}-topicNavigation--prev`}
        >
          <IconButton
            aria-label="前のトピック"
            variant="neutral"
            size="small"
            onClick={() => onNavigate(currentIndex - 1)}
          >
            <ChevronLeft aria-hidden="true" />
          </IconButton>
        </div>
      )}
      {showNext && (
        <div
          className={`${BLOCK_NAME}-topicNavigation ${BLOCK_NAME}-topicNavigation--next`}
        >
          <IconButton
            aria-label="次のトピック"
            variant="neutral"
            size="small"
            onClick={() => onNavigate(currentIndex + 1)}
          >
            <ChevronRight aria-hidden="true" />
          </IconButton>
        </div>
      )}
    </>
  );
};

const SubtleLink = ({
  icon,
  children,
  ...rest
}: Omit<React.ComponentProps<typeof TextLink>, 'variant'> & {
  icon?: React.ReactNode;
}) => {
  return (
    <div className={`${BLOCK_NAME}-subtleLink`}>
      <TextLink variant="subtle" icon={icon} iconPosition="start" {...rest}>
        {children}
      </TextLink>
    </div>
  );
};

export const AppealModal = {
  Frame,
  StyleOnly,
  Caption,
  Topics,
  Topic,
  PageIndicator,
  TopicNavigation,
  SubtleLink,
  Title,
  Image,
  Body,
  ButtonGroup,
};
