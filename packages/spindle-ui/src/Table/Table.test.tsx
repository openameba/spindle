import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Table } from './Table';

describe('<Table />', () => {
  describe('Table.Frame', () => {
    test('renders table element', () => {
      render(
        <Table.Frame>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Test Cell</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Frame>,
      );

      expect(screen.getByRole('table')).toBeInTheDocument();
      expect(screen.getByText('Test Cell')).toBeInTheDocument();
    });

    test('applies border type classes', () => {
      const { container } = render(
        <Table.Frame borderTypes={['horizontal', 'vertical', 'outlined']}>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Test</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Frame>,
      );

      const table = container.querySelector('table');
      expect(table).toHaveClass('spui-Table--horizontal');
      expect(table).toHaveClass('spui-Table--vertical');
      expect(table).toHaveClass('spui-Table--outlined');
    });

    test('applies rounded class', () => {
      const { container } = render(
        <Table.Frame rounded>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Test</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Frame>,
      );

      const table = container.querySelector('table');
      expect(table).toHaveClass('spui-Table--rounded');
    });

    test('applies striped class', () => {
      const { container } = render(
        <Table.Frame striped>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Test</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Frame>,
      );

      const table = container.querySelector('table');
      expect(table).toHaveClass('spui-Table--striped');
    });

    test('applies fixed layout class', () => {
      const { container } = render(
        <Table.Frame layout="fixed">
          <Table.Body>
            <Table.Row>
              <Table.Cell>Test</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Frame>,
      );

      const table = container.querySelector('table');
      expect(table).toHaveClass('spui-Table--fixed');
    });

    test('wraps table in container for scrollable layout', () => {
      const { container } = render(
        <Table.Frame layout="scrollable">
          <Table.Body>
            <Table.Row>
              <Table.Cell>Test</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Frame>,
      );

      const wrapper = container.querySelector('.spui-Table-frame--scrollable');
      expect(wrapper).toBeInTheDocument();

      const table = wrapper?.querySelector('table');
      expect(table).toHaveClass('spui-Table--scrollable');
    });

    test('forward ref', () => {
      const ref = React.createRef<HTMLTableElement>();

      render(<Table.Frame ref={ref} />);

      expect(screen.getByRole('table')).toEqual(ref.current);
    });
  });

  describe('Table.Caption', () => {
    test('renders caption element', () => {
      render(
        <Table.Frame>
          <Table.Caption>Test Caption</Table.Caption>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Test</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Frame>,
      );

      expect(screen.getByText('Test Caption')).toBeInTheDocument();
    });

    test('forward ref', () => {
      const ref = React.createRef<HTMLTableCaptionElement>();

      render(
        <Table.Frame>
          <Table.Caption ref={ref}>Caption</Table.Caption>
        </Table.Frame>,
      );

      expect(screen.getByText('Caption')).toEqual(ref.current);
    });
  });

  describe('Table.Header', () => {
    test('renders thead element', () => {
      const { container } = render(
        <Table.Frame>
          <Table.Header>
            <Table.Row>
              <Table.Head>Header</Table.Head>
            </Table.Row>
          </Table.Header>
        </Table.Frame>,
      );

      const thead = container.querySelector('thead');
      expect(thead).toBeInTheDocument();
      expect(thead).toHaveClass('spui-Table-header');
    });

    test('forward ref', () => {
      const ref = React.createRef<HTMLTableSectionElement>();
      const { container } = render(
        <Table.Frame>
          <Table.Header ref={ref}>
            <Table.Row>
              <Table.Head>Header</Table.Head>
            </Table.Row>
          </Table.Header>
        </Table.Frame>,
      );

      const thead = container.querySelector('thead');
      expect(thead).toEqual(ref.current);
    });
  });

  describe('Table.Body', () => {
    test('renders tbody element', () => {
      const { container } = render(
        <Table.Frame>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Frame>,
      );

      const tbody = container.querySelector('tbody');
      expect(tbody).toBeInTheDocument();
      expect(tbody).toHaveClass('spui-Table-body');
    });

    test('forward ref', () => {
      const ref = React.createRef<HTMLTableSectionElement>();
      const { container } = render(
        <Table.Frame>
          <Table.Body ref={ref}>
            <Table.Row>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Frame>,
      );

      const tbody = container.querySelector('tbody');
      expect(tbody).toEqual(ref.current);
    });
  });

  describe('Table.Footer', () => {
    test('renders tfoot element', () => {
      const { container } = render(
        <Table.Frame>
          <Table.Footer>
            <Table.Row>
              <Table.Cell>Footer</Table.Cell>
            </Table.Row>
          </Table.Footer>
        </Table.Frame>,
      );

      const tfoot = container.querySelector('tfoot');
      expect(tfoot).toBeInTheDocument();
      expect(tfoot).toHaveClass('spui-Table-footer');
    });

    test('forward ref', () => {
      const ref = React.createRef<HTMLTableSectionElement>();
      const { container } = render(
        <Table.Frame>
          <Table.Footer ref={ref}>
            <Table.Row>
              <Table.Cell>Footer</Table.Cell>
            </Table.Row>
          </Table.Footer>
        </Table.Frame>,
      );

      const tfoot = container.querySelector('tfoot');
      expect(tfoot).toEqual(ref.current);
    });
  });

  describe('Table.Row', () => {
    test('renders tr element', () => {
      const { container } = render(
        <Table.Frame>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Frame>,
      );

      const tr = container.querySelector('tr');
      expect(tr).toBeInTheDocument();
      expect(tr).toHaveClass('spui-Table-row');
    });

    test('forward ref', () => {
      const ref = React.createRef<HTMLTableRowElement>();
      const { container } = render(
        <Table.Frame>
          <Table.Body>
            <Table.Row ref={ref}>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Frame>,
      );

      const tr = container.querySelector('tr');
      expect(tr).toEqual(ref.current);
    });
  });

  describe('Table.Head', () => {
    test('renders th element', () => {
      const { container } = render(
        <Table.Frame>
          <Table.Header>
            <Table.Row>
              <Table.Head>Header Cell</Table.Head>
            </Table.Row>
          </Table.Header>
        </Table.Frame>,
      );

      const th = container.querySelector('th');
      expect(th).toBeInTheDocument();
      expect(th).toHaveClass('spui-Table-head');
      expect(screen.getByText('Header Cell')).toBeInTheDocument();
    });

    test('applies align classes', () => {
      const { container } = render(
        <Table.Frame>
          <Table.Header>
            <Table.Row>
              <Table.Head align="left">Left</Table.Head>
              <Table.Head align="center">Center</Table.Head>
              <Table.Head align="right">Right</Table.Head>
            </Table.Row>
          </Table.Header>
        </Table.Frame>,
      );

      const ths = container.querySelectorAll('th');
      expect(ths[0]).toHaveClass('spui-Table-head--alignLeft');
      expect(ths[1]).toHaveClass('spui-Table-head--alignCenter');
      expect(ths[2]).toHaveClass('spui-Table-head--alignRight');
    });

    test('applies width style', () => {
      const { container } = render(
        <Table.Frame>
          <Table.Header>
            <Table.Row>
              <Table.Head width="100px">Fixed Width</Table.Head>
              <Table.Head width="50%">Percentage Width</Table.Head>
            </Table.Row>
          </Table.Header>
        </Table.Frame>,
      );

      const ths = container.querySelectorAll('th');
      expect(ths[0]).toHaveStyle({ width: '100px' });
      expect(ths[1]).toHaveStyle({ width: '50%' });
    });

    test('forward ref', () => {
      const ref = React.createRef<HTMLTableCellElement>();
      const { container } = render(
        <Table.Frame>
          <Table.Header>
            <Table.Row>
              <Table.Head ref={ref}>Header</Table.Head>
            </Table.Row>
          </Table.Header>
        </Table.Frame>,
      );

      const th = container.querySelector('th');
      expect(th).toEqual(ref.current);
    });
  });

  describe('Table.Cell', () => {
    test('renders td element', () => {
      const { container } = render(
        <Table.Frame>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Cell Content</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Frame>,
      );

      const td = container.querySelector('td');
      expect(td).toBeInTheDocument();
      expect(td).toHaveClass('spui-Table-cell');
      expect(screen.getByText('Cell Content')).toBeInTheDocument();
    });

    test('applies align classes', () => {
      const { container } = render(
        <Table.Frame>
          <Table.Body>
            <Table.Row>
              <Table.Cell align="left">Left</Table.Cell>
              <Table.Cell align="center">Center</Table.Cell>
              <Table.Cell align="right">Right</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Frame>,
      );

      const tds = container.querySelectorAll('td');
      expect(tds[0]).toHaveClass('spui-Table-cell--alignLeft');
      expect(tds[1]).toHaveClass('spui-Table-cell--alignCenter');
      expect(tds[2]).toHaveClass('spui-Table-cell--alignRight');
    });

    test('forward ref', () => {
      const ref = React.createRef<HTMLTableCellElement>();
      const { container } = render(
        <Table.Frame>
          <Table.Body>
            <Table.Row>
              <Table.Cell ref={ref}>Cell</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Frame>,
      );

      const td = container.querySelector('td');
      expect(td).toEqual(ref.current);
    });
  });

  describe('Complete table structure', () => {
    test('renders all components together', () => {
      render(
        <Table.Frame borderTypes={['horizontal']} striped rounded>
          <Table.Caption>Sales Data</Table.Caption>
          <Table.Header>
            <Table.Row>
              <Table.Head>Product</Table.Head>
              <Table.Head align="right">Sales</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Head scope="row">Product A</Table.Head>
              <Table.Cell align="right">1,000</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Head scope="row">Product B</Table.Head>
              <Table.Cell align="right">2,000</Table.Cell>
            </Table.Row>
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.Head>Total</Table.Head>
              <Table.Cell align="right">3,000</Table.Cell>
            </Table.Row>
          </Table.Footer>
        </Table.Frame>,
      );

      // Check structure
      expect(screen.getByRole('table')).toBeInTheDocument();
      expect(screen.getByText('Sales Data')).toBeInTheDocument();
      expect(screen.getByText('Product')).toBeInTheDocument();
      expect(screen.getByText('Sales')).toBeInTheDocument();
      expect(screen.getByText('Product A')).toBeInTheDocument();
      expect(screen.getByText('Product B')).toBeInTheDocument();
      expect(screen.getByText('Total')).toBeInTheDocument();
      expect(screen.getByText('1,000')).toBeInTheDocument();
      expect(screen.getByText('2,000')).toBeInTheDocument();
      expect(screen.getByText('3,000')).toBeInTheDocument();
    });
  });
});
