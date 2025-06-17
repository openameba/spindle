import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Table',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Table striped>
      <Table.Header>
        <Table.Row>
          <Table.Head>商品名</Table.Head>
          <Table.Head>売上（円）</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>商品A</Table.Cell>
          <Table.Cell>1,200,000</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>商品B</Table.Cell>
          <Table.Cell>980,000</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>商品C</Table.Cell>
          <Table.Cell>750,000</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>商品D</Table.Cell>
          <Table.Cell>650,000</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>商品E</Table.Cell>
          <Table.Cell>850,000</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const NoHeaders: Story = {
  render: () => (
    <Table borderTypes={['horizontal', 'outlined']} rounded>
      <Table.Body>
        <Table.Row>
          <Table.Cell>商品A</Table.Cell>
          <Table.Cell>1,200,000</Table.Cell>
          <Table.Cell>+12%</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>商品B</Table.Cell>
          <Table.Cell>980,000</Table.Cell>
          <Table.Cell>-3%</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>商品C</Table.Cell>
          <Table.Cell>750,000</Table.Cell>
          <Table.Cell>+5%</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const ColumnHeaders: Story = {
  render: () => (
    <Table borderTypes={['horizontal', 'outlined']} rounded>
      <Table.Header>
        <Table.Row>
          <Table.Head>商品名</Table.Head>
          <Table.Head>売上（円）</Table.Head>
          <Table.Head>前年比</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>商品A</Table.Cell>
          <Table.Cell>1,200,000</Table.Cell>
          <Table.Cell>+12%</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>商品B</Table.Cell>
          <Table.Cell>980,000</Table.Cell>
          <Table.Cell>-3%</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const RowHeaders: Story = {
  render: () => (
    <Table borderTypes={['horizontal', 'outlined']} rounded>
      <Table.Body>
        <Table.Row>
          <Table.Head scope="row">商品A</Table.Head>
          <Table.Cell>1,200,000</Table.Cell>
          <Table.Cell>+12%</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Head scope="row">商品B</Table.Head>
          <Table.Cell>980,000</Table.Cell>
          <Table.Cell>-3%</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Head scope="row">商品C</Table.Head>
          <Table.Cell>750,000</Table.Cell>
          <Table.Cell>+5%</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const BothHeaders: Story = {
  render: () => (
    <Table borderTypes={['horizontal', 'outlined']} rounded>
      <Table.Header>
        <Table.Row>
          <Table.Head>商品名</Table.Head>
          <Table.Head>売上（円）</Table.Head>
          <Table.Head>前年比</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Head scope="row">商品A</Table.Head>
          <Table.Cell>1,200,000</Table.Cell>
          <Table.Cell>+12%</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Head scope="row">商品B</Table.Head>
          <Table.Cell>980,000</Table.Cell>
          <Table.Cell>-3%</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const HorizontalBorders: Story = {
  render: () => (
    <Table borderTypes={['horizontal']}>
      <Table.Header>
        <Table.Row>
          <Table.Head>商品名</Table.Head>
          <Table.Head align="right">売上（円）</Table.Head>
          <Table.Head align="center">前年比</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Head scope="row">商品A</Table.Head>
          <Table.Cell align="right">1,200,000</Table.Cell>
          <Table.Cell align="center">+12%</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Head scope="row">商品B</Table.Head>
          <Table.Cell align="right">980,000</Table.Cell>
          <Table.Cell align="center">-3%</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const VerticalBorders: Story = {
  render: () => (
    <Table borderTypes={['vertical']}>
      <Table.Header>
        <Table.Row>
          <Table.Head>商品名</Table.Head>
          <Table.Head>売上</Table.Head>
          <Table.Head>前年比</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>商品A</Table.Cell>
          <Table.Cell>1,200,000</Table.Cell>
          <Table.Cell>+12%</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>商品B</Table.Cell>
          <Table.Cell>980,000</Table.Cell>
          <Table.Cell>-3%</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const OutlineBorders: Story = {
  render: () => (
    <Table borderTypes={['outlined']}>
      <Table.Header>
        <Table.Row>
          <Table.Head>商品名</Table.Head>
          <Table.Head>売上</Table.Head>
          <Table.Head>前年比</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Head scope="row">商品A</Table.Head>
          <Table.Cell>1,200,000</Table.Cell>
          <Table.Cell>+12%</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Head scope="row">商品B</Table.Head>
          <Table.Cell>980,000</Table.Cell>
          <Table.Cell>-3%</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const GridBorders: Story = {
  render: () => (
    <Table borderTypes={['horizontal', 'vertical']}>
      <Table.Header>
        <Table.Row>
          <Table.Head>商品名</Table.Head>
          <Table.Head>売上</Table.Head>
          <Table.Head>前年比</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Head scope="row">商品A</Table.Head>
          <Table.Cell>1,200,000</Table.Cell>
          <Table.Cell>+12%</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Head scope="row">商品B</Table.Head>
          <Table.Cell>980,000</Table.Cell>
          <Table.Cell>-3%</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const AllBorders: Story = {
  render: () => (
    <Table borderTypes={['horizontal', 'vertical', 'outlined']}>
      <Table.Header>
        <Table.Row>
          <Table.Head>商品名</Table.Head>
          <Table.Head>売上</Table.Head>
          <Table.Head>前年比</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Head scope="row">商品A</Table.Head>
          <Table.Cell>1,200,000</Table.Cell>
          <Table.Cell>+12%</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Head scope="row">商品B</Table.Head>
          <Table.Cell>980,000</Table.Cell>
          <Table.Cell>-3%</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const FixedLayout: Story = {
  render: () => (
    <Table borderTypes={['horizontal']} layout="fixed">
      <Table.Header>
        <Table.Row>
          <Table.Head width="30%">商品名</Table.Head>
          <Table.Head width="50%">説明</Table.Head>
          <Table.Head width="20%">価格</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Head scope="row">商品A</Table.Head>
          <Table.Cell>
            高品質な商品Aの詳細説明文です。長いテキストも固定幅で表示されます。
          </Table.Cell>
          <Table.Cell>¥1,200,000</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Head scope="row">商品B</Table.Head>
          <Table.Cell>商品Bの説明文</Table.Cell>
          <Table.Cell>¥980,000</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const TextAlignment: Story = {
  render: () => (
    <Table borderTypes={['horizontal', 'vertical']}>
      <Table.Header>
        <Table.Row>
          <Table.Head>商品名</Table.Head>
          <Table.Head align="center">ステータス</Table.Head>
          <Table.Head align="right">価格</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Head scope="row">商品A</Table.Head>
          <Table.Cell align="center">販売中</Table.Cell>
          <Table.Cell align="right">¥1,200,000</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Head scope="row">商品B</Table.Head>
          <Table.Cell align="center">準備中</Table.Cell>
          <Table.Cell align="right">¥980,000</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Head scope="row">商品C</Table.Head>
          <Table.Cell align="center">完売</Table.Cell>
          <Table.Cell align="right">¥1,500</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const Scrollable: Story = {
  render: () => (
    <Table borderTypes={['horizontal', 'vertical']} layout="scrollable">
      <Table.Header>
        <Table.Row>
          <Table.Head width="150px">商品名</Table.Head>
          <Table.Head>Q1売上</Table.Head>
          <Table.Head>Q2売上</Table.Head>
          <Table.Head>Q3売上</Table.Head>
          <Table.Head>Q4売上</Table.Head>
          <Table.Head>年間合計</Table.Head>
          <Table.Head>前年比</Table.Head>
          <Table.Head>カテゴリ</Table.Head>
          <Table.Head>備考</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Head scope="row">スマートフォン</Table.Head>
          <Table.Cell>3,000,000</Table.Cell>
          <Table.Cell>3,500,000</Table.Cell>
          <Table.Cell>3,200,000</Table.Cell>
          <Table.Cell>4,000,000</Table.Cell>
          <Table.Cell>13,700,000</Table.Cell>
          <Table.Cell>+12%</Table.Cell>
          <Table.Cell>電子機器</Table.Cell>
          <Table.Cell>好調</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Head scope="row">タブレット</Table.Head>
          <Table.Cell>2,800,000</Table.Cell>
          <Table.Cell>3,100,000</Table.Cell>
          <Table.Cell>2,900,000</Table.Cell>
          <Table.Cell>3,500,000</Table.Cell>
          <Table.Cell>12,300,000</Table.Cell>
          <Table.Cell>-3%</Table.Cell>
          <Table.Cell>電子機器</Table.Cell>
          <Table.Cell>やや減少</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const Striped: Story = {
  render: () => (
    <Table borderTypes={['horizontal']} striped>
      <Table.Header>
        <Table.Row>
          <Table.Head>商品名</Table.Head>
          <Table.Head>売上</Table.Head>
          <Table.Head>前年比</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Head scope="row">商品A</Table.Head>
          <Table.Cell>1,200,000</Table.Cell>
          <Table.Cell>+12%</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Head scope="row">商品B</Table.Head>
          <Table.Cell>980,000</Table.Cell>
          <Table.Cell>-3%</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Head scope="row">商品C</Table.Head>
          <Table.Cell>750,000</Table.Cell>
          <Table.Cell>+5%</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Head scope="row">商品D</Table.Head>
          <Table.Cell>650,000</Table.Cell>
          <Table.Cell>-8%</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Head scope="row">商品E</Table.Head>
          <Table.Cell>850,000</Table.Cell>
          <Table.Cell>+15%</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const Rounded: Story = {
  render: () => (
    <Table borderTypes={['outlined']} rounded>
      <Table.Header>
        <Table.Row>
          <Table.Head>商品名</Table.Head>
          <Table.Head>売上</Table.Head>
          <Table.Head>前年比</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Head scope="row">商品A</Table.Head>
          <Table.Cell>1,200,000</Table.Cell>
          <Table.Cell>+12%</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Head scope="row">商品B</Table.Head>
          <Table.Cell>980,000</Table.Cell>
          <Table.Cell>-3%</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const ColumnSpan: Story = {
  render: () => (
    <Table borderTypes={['horizontal', 'vertical', 'outlined']}>
      <Table.Header>
        <Table.Row>
          <Table.Head colSpan={2}>上半期</Table.Head>
          <Table.Head colSpan={2}>下半期</Table.Head>
        </Table.Row>
        <Table.Row>
          <Table.Head>Q1</Table.Head>
          <Table.Head>Q2</Table.Head>
          <Table.Head>Q3</Table.Head>
          <Table.Head>Q4</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>300</Table.Cell>
          <Table.Cell>350</Table.Cell>
          <Table.Cell>320</Table.Cell>
          <Table.Cell>400</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>280</Table.Cell>
          <Table.Cell>310</Table.Cell>
          <Table.Cell>290</Table.Cell>
          <Table.Cell>350</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const RowSpan: Story = {
  render: () => (
    <Table borderTypes={['horizontal', 'vertical', 'outlined']}>
      <Table.Header>
        <Table.Row>
          <Table.Head>カテゴリ</Table.Head>
          <Table.Head>商品名</Table.Head>
          <Table.Head>売上</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Head scope="row" rowSpan={2}>
            電子機器
          </Table.Head>
          <Table.Cell>スマートフォン</Table.Cell>
          <Table.Cell>1,200,000</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>タブレット</Table.Cell>
          <Table.Cell>980,000</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Head scope="row" rowSpan={2}>
            家電
          </Table.Head>
          <Table.Cell>冷蔵庫</Table.Cell>
          <Table.Cell>750,000</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>洗濯機</Table.Cell>
          <Table.Cell>650,000</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const WithCaption: Story = {
  render: () => (
    <Table borderTypes={['horizontal']}>
      <Table.Caption>売上データ（2023年第4四半期）</Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.Head>商品名</Table.Head>
          <Table.Head align="right">売上（円）</Table.Head>
          <Table.Head align="center">前年比</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Head scope="row">商品A</Table.Head>
          <Table.Cell align="right">1,200,000</Table.Cell>
          <Table.Cell align="center">+12%</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Head scope="row">商品B</Table.Head>
          <Table.Cell align="right">980,000</Table.Cell>
          <Table.Cell align="center">-3%</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Table borderTypes={['horizontal']}>
      <Table.Header>
        <Table.Row>
          <Table.Head>商品名</Table.Head>
          <Table.Head align="right">売上（円）</Table.Head>
          <Table.Head align="center">前年比</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Head scope="row">商品A</Table.Head>
          <Table.Cell align="right">1,200,000</Table.Cell>
          <Table.Cell align="center">+12%</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Head scope="row">商品B</Table.Head>
          <Table.Cell align="right">980,000</Table.Cell>
          <Table.Cell align="center">-3%</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Head scope="row">商品C</Table.Head>
          <Table.Cell align="right">750,000</Table.Cell>
          <Table.Cell align="center">+5%</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Head>合計</Table.Head>
          <Table.Cell align="right">2,930,000</Table.Cell>
          <Table.Cell align="center">+4.7%</Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table>
  ),
};

export const CustomTheme: Story = {
  render: () => (
    <div
      style={
        {
          '--Table-head-backgroundColor': 'var(--color-surface-accent-primary)',
          '--Table-head-color': 'var(--color-text-high-emphasis-inverse)',
          '--Table-cell-borderColor': 'var(--color-border-accent-primary)',
        } as React.CSSProperties
      }
    >
      <Table borderTypes={['outlined']} rounded>
        <Table.Header>
          <Table.Row>
            <Table.Head>商品名</Table.Head>
            <Table.Head>売上</Table.Head>
            <Table.Head>前年比</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Head scope="row">商品A</Table.Head>
            <Table.Cell>1,200,000</Table.Cell>
            <Table.Cell>+12%</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Head scope="row">商品B</Table.Head>
            <Table.Cell>980,000</Table.Cell>
            <Table.Cell>-3%</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  ),
};
