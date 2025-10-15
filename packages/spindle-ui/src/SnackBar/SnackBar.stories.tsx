import type { Meta, StoryObj } from '@storybook/react';
import React, { useEffect, useRef, useState } from 'react';
import { action } from 'storybook/actions';
import { Button } from '../Button';
import {
  CheckCircleFill,
  ExclamationmarkCircleFill,
  Information,
  Openblank,
} from '../Icon';
import { SnackBar } from './SnackBar';

const usePoliteAnnouncer = (message: string) => {
  const announcer = useRef<HTMLElement | null>(null);
  useEffect(() => {
    announcer.current = document.getElementById('polite-announcer');
    return () => {
      announcer.current = null;
    };
  }, []);
  useEffect(() => {
    const announcerContent = announcer.current;
    if (announcerContent && message) {
      announcerContent.textContent = message;
    }
    return () => {
      if (message && announcerContent) {
        announcerContent.textContent = '';
      }
    };
  }, [message]);
};

interface ActivateButtonProps {
  message?: string;
  label?: string;
  isLink?: boolean;
  variant?: 'information' | 'confirmation' | 'error';
  icon?: React.ReactNode;
  position?:
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight'
    | 'bottomCenter';
  buttonIcon?: React.ReactNode;
}

const ActivateButton: React.FC<ActivateButtonProps> = ({
  message: _message,
  label,
  isLink,
  variant = 'information',
  icon,
  position,
  buttonIcon,
}) => {
  const [message, setMessage] = useState('');
  usePoliteAnnouncer(message);
  return (
    <div>
      <Button
        size="medium"
        variant={variant === 'error' ? 'danger' : 'outlined'}
        onClick={() =>
          setMessage(
            _message ||
              '「今日のランチは道玄坂で」の記事に新しいコメントが3件あります。',
          )
        }
      >
        送信する
      </Button>
      <SnackBar.Frame
        active={!!message}
        variant={variant}
        position={position}
        onHide={() => setMessage('')}
      >
        {icon && <SnackBar.Icon>{icon}</SnackBar.Icon>}
        <SnackBar.Text>{message}</SnackBar.Text>
        {label &&
          (!isLink ? (
            <SnackBar.TextButton icon={buttonIcon} onClick={action('onClick')}>
              {label}
            </SnackBar.TextButton>
          ) : (
            <SnackBar.TextLink
              icon={buttonIcon}
              href="https://example.com/"
              onClick={action('onClick')}
            >
              {label}
            </SnackBar.TextLink>
          ))}
      </SnackBar.Frame>
    </div>
  );
};

interface MultiActivateButtonProps {
  offset?: { top?: number; bottom?: number };
  icon?: React.ReactNode;
  position?:
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight'
    | 'bottomCenter';
}

const MultiActivateButton: React.FC<MultiActivateButtonProps> = ({
  offset,
  icon,
  position,
}) => {
  const [message1, setMessage1] = useState('');
  const [message2, setMessage2] = useState('');
  const [stackPosition, setStackPosition] = useState(0);
  usePoliteAnnouncer(message1);
  return (
    <div>
      <Button
        size="medium"
        variant={'outlined'}
        onClick={() => {
          setMessage1(
            'SnackBarには複数行にわたる長いメッセージも表示できます。それがどのように表示されるか、このサンプルで確認してください。',
          );
          setMessage2('メッセージが届きました');
        }}
      >
        送信する
      </Button>
      <SnackBar.Frame
        active={!!message1}
        offset={offset}
        setContentHeight={setStackPosition}
        position={position}
        onHide={() => setMessage1('')}
      >
        {icon && <SnackBar.Icon>{icon}</SnackBar.Icon>}
        <SnackBar.Text>{message1}</SnackBar.Text>
      </SnackBar.Frame>
      <SnackBar.Frame
        active={!!message2}
        offset={offset}
        stackPosition={message1 ? stackPosition : 0}
        position={position}
        onHide={() => setMessage2('')}
      >
        {icon && <SnackBar.Icon>{icon}</SnackBar.Icon>}
        <SnackBar.Text>{message2}</SnackBar.Text>
      </SnackBar.Frame>
    </div>
  );
};

const meta: Meta<typeof SnackBar.Frame> = {
  title: 'SnackBar',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InformationSnackBar: Story = {
  render: () => (
    <ActivateButton
      variant="information"
      icon={<Information />}
      label="取り消し"
    />
  ),
};

export const InformationWithoutInfoIconSnackBar: Story = {
  render: () => <ActivateButton variant="information" />,
};

export const ConfirmationSnackBar: Story = {
  render: () => (
    <ActivateButton
      variant="confirmation"
      icon={<CheckCircleFill />}
      label="取り消し"
    />
  ),
};

export const ErrorSnackBar: Story = {
  render: () => (
    <ActivateButton
      variant="error"
      icon={<ExclamationmarkCircleFill />}
      label="取り消し"
    />
  ),
};

export const PositionTopLeft: Story = {
  render: () => <ActivateButton icon={<Information />} position="topLeft" />,
};

export const PositionTopRight: Story = {
  render: () => <ActivateButton icon={<Information />} position="topRight" />,
};

export const PositionBottomLeft: Story = {
  render: () => <ActivateButton icon={<Information />} position="bottomLeft" />,
};

export const PositionBottomRight: Story = {
  render: () => (
    <ActivateButton icon={<Information />} position="bottomRight" />
  ),
};

export const PositionBottomCenter: Story = {
  render: () => (
    <ActivateButton icon={<Information />} position="bottomCenter" />
  ),
};

export const LongContentSnackBar: Story = {
  render: () => (
    <ActivateButton
      message="長いメッセージが入る長いメッセージが入る長いメッセージが入る長いメッセージが入る長いメッセージが入る長いメッセージが入る長いメッセージ"
      icon={<Information />}
      label="取り消し"
    />
  ),
};

export const MultipleSnackBar: Story = {
  render: () => (
    <MultiActivateButton offset={{ top: 30 }} icon={<Information />} />
  ),
};

export const MultipleBottomSnackBar: Story = {
  render: () => (
    <MultiActivateButton
      offset={{ bottom: 30 }}
      position="bottomCenter"
      icon={<Information />}
    />
  ),
};

export const CustomButtonWithIcon: Story = {
  render: () => (
    <ActivateButton
      icon={<Information />}
      buttonIcon={<Openblank />}
      message="メッセージが届きました"
      label="取り消し"
    />
  ),
};

export const CustomLinkWithInformation: Story = {
  render: () => (
    <ActivateButton
      icon={<Information />}
      message="メッセージが届きました"
      label="取り消し"
      isLink
    />
  ),
};

export const CustomLinkWithConfirmation: Story = {
  render: () => (
    <ActivateButton
      icon={<CheckCircleFill />}
      message="メッセージが届きました"
      label="取り消し"
      variant="confirmation"
      isLink
    />
  ),
};

export const CustomLinkWithError: Story = {
  render: () => (
    <ActivateButton
      icon={<ExclamationmarkCircleFill />}
      message="メッセージが届きました"
      label="取り消し"
      variant="error"
      isLink
    />
  ),
};
