import React, { useCallback, useEffect, useRef } from 'react';
import { SnackBar } from '../SnackBar';
import { useStackNotificationManager } from '.';
import {
  StackNotificationManagerProvider,
  StackPosition,
} from './StackNotificationManager';
import { Button } from '../Button';
import Information from '../Icon/Information';
import { useRepeatedStackItem } from './hooks';

const usePoliteAnnouncer = (active: boolean, message: string) => {
  const announcer = useRef<HTMLElement | null>(null);
  useEffect(() => {
    announcer.current = document.getElementById('polite-announcer');
    return () => {
      announcer.current = null;
    };
  }, []);
  useEffect(() => {
    const announcerContent = announcer.current;
    if (message && announcerContent && active) {
      announcerContent.textContent = message;
    }
    return () => {
      if (announcerContent && active) {
        announcerContent.textContent = '';
      }
    };
  }, [message, active]);
};

const SnackBarExample: React.FC<
  Omit<React.ComponentProps<typeof SnackBar.Frame>, 'onHide'> & {
    id: string;
    position: StackPosition;
    text: string;
    icon?: React.ReactElement;
    onHide: (id: string) => void;
  }
> = ({ id, position, icon, text, variant, onHide, ...rest }) => {
  const { stackProps } = useStackNotificationManager({
    id,
    position,
  });

  const handleOnHide = useCallback(() => {
    onHide(id);
  }, [id, onHide]);

  usePoliteAnnouncer(!!stackProps.active, text);

  return (
    <>
      <SnackBar.Frame
        variant={variant}
        onHide={handleOnHide}
        {...rest}
        {...stackProps}
      >
        <>
          {icon && <SnackBar.Icon>{icon}</SnackBar.Icon>}
          <SnackBar.Text>{text}</SnackBar.Text>
          <SnackBar.TextButton>取り消し</SnackBar.TextButton>
        </>
      </SnackBar.Frame>
    </>
  );
};

const SnackBarWithButtonExample: React.FC<
  React.ComponentProps<typeof SnackBar.Frame> & {
    id: string;
    position: StackPosition;
    text: string;
    icon?: React.ReactElement;
  }
> = ({ id, position, text, variant, ...rest }) => {
  const { idList, append, onHide } = useRepeatedStackItem({ id, position });

  return (
    <>
      <Button size="medium" variant="outlined" onClick={append}>
        メッセージを送信する
      </Button>
      {idList.map((id) => (
        <SnackBarExample
          key={id}
          id={id}
          variant={variant}
          position={position}
          text={text}
          onHide={onHide}
          {...rest}
        />
      ))}
    </>
  );
};

const StackNotificationManagerExamplePresenter = () => (
  <div>
    <SnackBarWithButtonExample
      id="toast-topCenter"
      position="topCenter"
      text="メッセージを送信しました"
      variant="information"
      icon={<Information />}
    />
  </div>
);

export const StackNotificationManagerExample = () => (
  <StackNotificationManagerProvider>
    <StackNotificationManagerExamplePresenter />
  </StackNotificationManagerProvider>
);
