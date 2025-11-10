import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../../Button';
import { TextField } from '../TextField';
import { InvalidMessage as InvalidMessageComponent } from './InvalidMessage';

const meta: Meta<typeof InvalidMessageComponent> = {
  title: 'Form/InvalidMessage',
  component: InvalidMessageComponent,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    visible: true,
    children: 'ファイル形式が正しくありません',
  },
};

export const Hidden: Story = {
  args: {
    visible: false,
    children: 'ファイル形式が正しくありません',
  },
};

export const LongText: Story = {
  args: {
    visible: true,
    children:
      'このフィールドは必須項目です。また、入力された値が正しい形式であることを確認してください。具体的には、半角英数字とハイフンのみが使用可能です。さらに、文字数は10文字以上100文字以下である必要があります。これらの条件を満たさない場合、エラーメッセージが表示されます。画面幅が狭い場合や、テキストサイズを200%に拡大した場合でも、このテキストは適切に折り返されて表示されることを確認するためのストーリーです。',
  },
};

export const WithRoleAlert: Story = {
  render: () => {
    const [hasError, setHasError] = useState(false);
    return (
      <div>
        <TextField
          id="test-input"
          hasError={hasError}
          aria-invalid={hasError}
          aria-errormessage={hasError ? 'test-error' : undefined}
          variant="medium"
        />
        <InvalidMessageComponent
          id="test-error"
          visible={hasError}
          role="alert"
        >
          内容を入力してください
        </InvalidMessageComponent>
        <div style={{ marginTop: '16px' }}>
          <Button onClick={() => setHasError(!hasError)} size="medium">
            {hasError ? 'エラーを解除' : 'エラーを表示'}
          </Button>
        </div>
      </div>
    );
  },
};
