import React, { forwardRef, ReactNode } from 'react';

import { CSSProperties } from 'react';

// Main Table component
type TableProps = {
  borderType?: Array<'horizontal' | 'vertical' | 'outlined'>;
  rounded?: boolean;
  striped?: boolean;
  layout?: 'auto' | 'fixed' | 'scroll';
  minCellWidth?: CSSProperties['minWidth'];
  children?: ReactNode;
} & React.TableHTMLAttributes<HTMLTableElement>;

// Table.Caption
interface TableCaptionProps
  extends React.HTMLAttributes<HTMLTableCaptionElement> {
  children?: ReactNode;
}

// Table.Header
interface TableHeaderProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  children?: ReactNode;
}

// Table.Body
interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children?: ReactNode;
}

// Table.Footer
interface TableFooterProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  children?: ReactNode;
}

// Table.Row
interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children?: ReactNode;
}

// Table.Head
interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  align?: 'left' | 'center' | 'right';
  width?: CSSProperties['width'];
  minWidth?: CSSProperties['minWidth'];
  children?: ReactNode;
}

// Table.Cell
interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  align?: 'left' | 'center' | 'right';
  children?: ReactNode;
}

const BLOCK_NAME = 'spui-Table';

// Main Table component
const Table = forwardRef<HTMLTableElement, TableProps>(function Table(
  {
    borderType = [],
    rounded = false,
    striped = false,
    layout = 'auto',
    minCellWidth,
    children,
    className,
    style,
    ...rest
  },
  ref,
) {
  const getBorderClassNames = (
    borderTypes: Array<'horizontal' | 'vertical' | 'outlined'>,
  ) => {
    return borderTypes
      .map((type) => {
        switch (type) {
          case 'horizontal':
            return `${BLOCK_NAME}--horizontal`;
          case 'vertical':
            return `${BLOCK_NAME}--vertical`;
          case 'outlined':
            return `${BLOCK_NAME}--outlined`;
          default:
            return null;
        }
      })
      .filter(Boolean);
  };

  const classes = [
    BLOCK_NAME,
    ...getBorderClassNames(borderType),
    rounded && `${BLOCK_NAME}--rounded`,
    striped && `${BLOCK_NAME}--striped`,
    layout === 'fixed' && `${BLOCK_NAME}--fixed`,
    layout === 'scroll' && `${BLOCK_NAME}--scrollable`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const containerClasses = [
    `${BLOCK_NAME}-container`,
    layout === 'scroll' && `${BLOCK_NAME}-container--scrollable`,
  ]
    .filter(Boolean)
    .join(' ');

  const tableStyle: React.CSSProperties = {
    ...(minCellWidth &&
      ({ '--Table-min-cell-width': minCellWidth } as React.CSSProperties)),
    ...style,
  };

  const tableElement = (
    <table ref={ref} className={classes} style={tableStyle} {...rest}>
      {children}
    </table>
  );

  // Wrap in container if layout is scroll
  if (layout === 'scroll') {
    return <div className={containerClasses}>{tableElement}</div>;
  }

  return tableElement;
});

// Table.Caption
const Caption = forwardRef<HTMLTableCaptionElement, TableCaptionProps>(
  function TableCaption({ children, className, ...rest }, ref) {
    return (
      <caption
        ref={ref}
        className={[`${BLOCK_NAME}-caption`, className]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {children}
      </caption>
    );
  },
);

// Table.Header
const Header = forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  function TableHeader({ children, className, ...rest }, ref) {
    return (
      <thead
        ref={ref}
        className={[`${BLOCK_NAME}-header`, className]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {children}
      </thead>
    );
  },
);

// Table.Body
const Body = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  function TableBody({ children, className, ...rest }, ref) {
    return (
      <tbody
        ref={ref}
        className={[`${BLOCK_NAME}-body`, className].filter(Boolean).join(' ')}
        {...rest}
      >
        {children}
      </tbody>
    );
  },
);

// Table.Footer
const Footer = forwardRef<HTMLTableSectionElement, TableFooterProps>(
  function TableFooter({ children, className, ...rest }, ref) {
    return (
      <tfoot
        ref={ref}
        className={[`${BLOCK_NAME}-footer`, className]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {children}
      </tfoot>
    );
  },
);

// Table.Row
const Row = forwardRef<HTMLTableRowElement, TableRowProps>(function TableRow(
  { children, className, ...rest },
  ref,
) {
  return (
    <tr
      ref={ref}
      className={[`${BLOCK_NAME}-row`, className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </tr>
  );
});

// Table.Head
const Head = forwardRef<HTMLTableCellElement, TableHeadProps>(
  function TableHead(
    { children, align, width, minWidth, className, style, ...rest },
    ref,
  ) {
    const getAlignClassName = (align: string) => {
      switch (align) {
        case 'left':
          return `${BLOCK_NAME}-head--alignLeft`;
        case 'center':
          return `${BLOCK_NAME}-head--alignCenter`;
        case 'right':
          return `${BLOCK_NAME}-head--alignRight`;
        default:
          return null;
      }
    };

    const classes = [
      `${BLOCK_NAME}-head`,
      align && getAlignClassName(align),
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const headStyle: React.CSSProperties = {
      ...(width && { width }),
      ...(minWidth && { minWidth }),
      ...style,
    };

    return (
      <th ref={ref} className={classes} style={headStyle} {...rest}>
        {children}
      </th>
    );
  },
);

// Table.Cell
const Cell = forwardRef<HTMLTableCellElement, TableCellProps>(
  function TableCell({ children, align, className, style, ...rest }, ref) {
    const getAlignClassName = (align: string) => {
      switch (align) {
        case 'left':
          return `${BLOCK_NAME}-cell--alignLeft`;
        case 'center':
          return `${BLOCK_NAME}-cell--alignCenter`;
        case 'right':
          return `${BLOCK_NAME}-cell--alignRight`;
        default:
          return null;
      }
    };

    const classes = [
      `${BLOCK_NAME}-cell`,
      align && getAlignClassName(align),
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <td ref={ref} className={classes} style={style} {...rest}>
        {children}
      </td>
    );
  },
);

const TableWithSubComponents = Object.assign(Table, {
  Caption,
  Header,
  Body,
  Footer,
  Row,
  Head,
  Cell,
});

export { TableWithSubComponents as Table };
export type {
  TableProps,
  TableCaptionProps,
  TableHeaderProps,
  TableBodyProps,
  TableFooterProps,
  TableRowProps,
  TableHeadProps,
  TableCellProps,
};
