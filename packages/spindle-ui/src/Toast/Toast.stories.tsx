import React, { useState, useEffect, useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';
import { Button } from '../Button';
import {
  Information,
  CheckCircleFill,
  ExclamationmarkCircleFill,
} from '../Icon';

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
  variant?: 'information' | 'confirmation' | 'error';
  icon?: React.ReactNode;
  position?: 'topCenter' | 'bottomCenter';
}

const ActivateButton: React.FC<ActivateButtonProps> = ({
  message: _message,
  variant = 'information',
  icon,
  position = 'topCenter',
}) => {
  const [message, setMessage] = useState('');
  usePoliteAnnouncer(message);
  return (
    <div>
      <Button
        size="medium"
        variant={variant === 'error' ? 'danger' : 'outlined'}
        onClick={() => setMessage(_message || 'メッセージが届きました')}
      >
        送信する
      </Button>
      <Toast
        active={!!message}
        variant={variant}
        icon={icon}
        position={position}
        onHide={() => setMessage('')}
      >
        {message}
      </Toast>
    </div>
  );
};

interface MultiActivateButtonProps {
  offset?: { top?: number; bottom?: number };
  icon?: React.ReactNode;
  position?: 'topCenter' | 'bottomCenter';
}

const MultiActivateButton: React.FC<MultiActivateButtonProps> = ({
  offset,
  icon,
  position = 'topCenter',
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
          setMessage1('最初のメッセージです');
          setMessage2('2番目のメッセージです');
        }}
      >
        送信する
      </Button>
      <Toast
        active={!!message1}
        offset={offset}
        setContentHeight={setStackPosition}
        position={position}
        icon={icon}
        onHide={() => setMessage1('')}
      >
        {message1}
      </Toast>
      <Toast
        active={!!message2}
        offset={offset}
        stackPosition={message1 ? stackPosition : 0}
        position={position}
        icon={icon}
        onHide={() => setMessage2('')}
      >
        {message2}
      </Toast>
    </div>
  );
};

const meta: Meta<typeof Toast> = {
  title: 'Toast',
  component: Toast,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InformationToast: Story = {
  render: () => <ActivateButton variant="information" icon={<Information />} />,
};

export const InformationWithoutInfoIconToast: Story = {
  render: () => <ActivateButton variant="information" />,
};

export const ConfirmationToast: Story = {
  render: () => (
    <ActivateButton variant="confirmation" icon={<CheckCircleFill />} />
  ),
};

export const ErrorToast: Story = {
  render: () => (
    <ActivateButton variant="error" icon={<ExclamationmarkCircleFill />} />
  ),
};

export const PositionBottom: Story = {
  render: () => (
    <ActivateButton
      icon={<Information />}
      position="bottomCenter"
      message="下部に表示されます"
    />
  ),
};

export const LongContentToast: Story = {
  render: () => (
    <ActivateButton
      icon={<Information />}
      message="長いコンテンツは1行で切られるので注意が必要です。"
    />
  ),
};

export const MultipleToast: Story = {
  render: () => (
    <MultiActivateButton offset={{ top: 30 }} icon={<Information />} />
  ),
};

export const MultipleBottomToast: Story = {
  render: () => (
    <MultiActivateButton
      offset={{ bottom: 30 }}
      position="bottomCenter"
      icon={<Information />}
    />
  ),
};
