import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Table } from './Table';

describe('<Table />', () => {
  test('renders table element', () => {
    render(
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Test Cell</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    );

    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByText('Test Cell')).toBeInTheDocument();
  });

  test('forward ref', () => {
    const ref = React.createRef<HTMLTableElement>();

    render(<Table ref={ref} />);

    expect(screen.getByRole('table')).toEqual(ref.current);
  });
});
