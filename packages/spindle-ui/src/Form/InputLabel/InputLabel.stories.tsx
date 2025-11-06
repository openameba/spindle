import type { Meta, StoryObj } from '@storybook/react';
import { InputLabel as InputLabelComponent } from './InputLabel';

const meta: Meta<typeof InputLabelComponent> = {
  title: 'Form/InputLabel',
  component: InputLabelComponent,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InputLabel: Story = {
  args: {
    id: 'comment',
    children: 'コメントを入力',
  },
};

export const LongText: Story = {
  args: {
    id: 'long-comment',
    children:
      'これはとても長いラベルテキストです。画面幅が狭い場合や、テキストサイズを200%に拡大した場合でも、このテキストは適切に折り返されて表示されることを確認するためのストーリーです。アクセシビリティガイドラインに準拠し、情報が欠落しないことを確認します。',
  },
};

export const EmptyChildren: Story = {
  args: {
    id: 'empty',
    children: '',
  },
};
