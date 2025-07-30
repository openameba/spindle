import React, { forwardRef, ReactNode, CSSProperties } from 'react';

type BorderType = 'horizontal' | 'vertical' | 'outlined';

type Layout = 'auto' | 'fixed' | 'scrollable';

type Align = 'left' | 'center' | 'right';

// Table.Frame
type TableFrameProps = {
  borderTypes?: Array<BorderType>;
  rounded?: boolean;
  striped?: boolean;
  layout?: Layout;
  children?: ReactNode;
  className?: string;
} & Omit<React.TableHTMLAttributes<HTMLTableElement>, 'style' | 'className'>;

// Table.Caption
interface TableCaptionProps
  extends Omit<
    React.HTMLAttributes<HTMLTableCaptionElement>,
    'style' | 'className'
  > {
  children?: ReactNode;
  className?: string;
}

// Table.Header
interface TableHeaderProps
  extends Omit<
    React.HTMLAttributes<HTMLTableSectionElement>,
    'style' | 'className'
  > {
  children?: ReactNode;
  className?: string;
}

// Table.Body
interface TableBodyProps
  extends Omit<
    React.HTMLAttributes<HTMLTableSectionElement>,
    'style' | 'className'
  > {
  children?: ReactNode;
  className?: string;
}

// Table.Footer
interface TableFooterProps
  extends Omit<
    React.HTMLAttributes<HTMLTableSectionElement>,
    'style' | 'className'
  > {
  children?: ReactNode;
  className?: string;
}

// Table.Row
interface TableRowProps
  extends Omit<
    React.HTMLAttributes<HTMLTableRowElement>,
    'style' | 'className'
  > {
  children?: ReactNode;
  className?: string;
}

// Table.Head
interface TableHeadProps
  extends Omit<
    React.ThHTMLAttributes<HTMLTableCellElement>,
    'style' | 'className'
  > {
  align?: Align;
  width?: CSSProperties['width'];
  minWidth?: CSSProperties['minWidth'];
  children?: ReactNode;
  className?: string;
}

// Table.Cell
interface TableCellProps
  extends Omit<
    React.TdHTMLAttributes<HTMLTableCellElement>,
    'style' | 'className'
  > {
  align?: Align;
  children?: ReactNode;
  className?: string;
}

const BLOCK_NAME = 'spui-Table';

const getAlignClassName = (align: Align, elementType: 'head' | 'cell') => {
  switch (align) {
    case 'left':
      return `${BLOCK_NAME}-${elementType}--alignLeft`;
    case 'center':
      return `${BLOCK_NAME}-${elementType}--alignCenter`;
    case 'right':
      return `${BLOCK_NAME}-${elementType}--alignRight`;
    default:
      return null;
  }
};

const getBorderClassNames = (borderTypes: Array<BorderType>) => {
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

// Main Table component
const Frame = forwardRef<HTMLTableElement, TableFrameProps>(function TableFrame(
  {
    borderTypes = [],
    rounded = false,
    striped = false,
    layout = 'auto',
    children,
    className,
    ...rest
  },
  ref,
) {
  const classes = [
    BLOCK_NAME,
    ...getBorderClassNames(borderTypes),
    rounded && `${BLOCK_NAME}--rounded`,
    striped && `${BLOCK_NAME}--striped`,
    layout === 'fixed' && `${BLOCK_NAME}--fixed`,
    layout === 'scrollable' && `${BLOCK_NAME}--scrollable`,
    className,
  ]
    .filter(Boolean)
    .join(' ')
    .trim();

  const frameClasses = [
    `${BLOCK_NAME}-frame`,
    layout === 'scrollable' && `${BLOCK_NAME}-frame--scrollable`,
  ]
    .filter(Boolean)
    .join(' ')
    .trim();

  const tableElement = (
    <table ref={ref} className={classes} {...rest}>
      {children}
    </table>
  );

  // Wrap in container if layout is scrollable
  if (layout === 'scrollable') {
    return <div className={frameClasses}>{tableElement}</div>;
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
          .join(' ')
          .trim()}
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
          .join(' ')
          .trim()}
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
          .join(' ')
          .trim()}
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
      className={[`${BLOCK_NAME}-row`, className]
        .filter(Boolean)
        .join(' ')
        .trim()}
      {...rest}
    >
      {children}
    </tr>
  );
});

// Table.Head
const Head = forwardRef<HTMLTableCellElement, TableHeadProps>(
  function TableHead(
    { children, align, width, minWidth, className, ...rest },
    ref,
  ) {
    const classes = [
      `${BLOCK_NAME}-head`,
      align && getAlignClassName(align, 'head'),
      className,
    ]
      .filter(Boolean)
      .join(' ')
      .trim();

    const headStyle: React.CSSProperties | undefined =
      width || minWidth
        ? {
            ...(width && { width }),
            ...(minWidth && { minWidth }),
          }
        : undefined;

    return (
      <th ref={ref} className={classes} style={headStyle} {...rest}>
        {children}
      </th>
    );
  },
);

// Table.Cell
const Cell = forwardRef<HTMLTableCellElement, TableCellProps>(
  function TableCell({ children, align, className, ...rest }, ref) {
    const classes = [
      `${BLOCK_NAME}-cell`,
      align && getAlignClassName(align, 'cell'),
      className,
    ]
      .filter(Boolean)
      .join(' ')
      .trim();

    return (
      <td ref={ref} className={classes} {...rest}>
        {children}
      </td>
    );
  },
);

export const Table = {
  Frame,
  Caption,
  Header,
  Body,
  Footer,
  Row,
  Head,
  Cell,
};
