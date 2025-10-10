import React, {
  forwardRef,
  ReactNode,
  CSSProperties,
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useCallback,
} from 'react';

type BorderType = 'horizontal' | 'vertical' | 'outlined';

type Layout = 'auto' | 'fixed' | 'scrollable';

type Align = 'left' | 'center' | 'right';

// Table.Frame
type TableFrameProps = {
  borderTypes?: Array<BorderType>;
  rounded?: boolean;
  striped?: boolean;
  layout?: Layout;
  stickyLeftColumns?: number;
  stickyRightColumns?: number;
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

// Context for sticky columns
const TableContext = React.createContext<{
  stickyLeftColumns: number;
  stickyRightColumns: number;
}>({ stickyLeftColumns: 0, stickyRightColumns: 0 });

// Main Table component
const Frame = forwardRef<HTMLDivElement, TableFrameProps>(function TableFrame(
  {
    borderTypes = [],
    rounded = false,
    striped = false,
    layout = 'auto',
    stickyLeftColumns = 0,
    stickyRightColumns = 0,
    children,
    className,
    ...rest
  },
  ref,
) {
  const hasSticky = stickyLeftColumns > 0 || stickyRightColumns > 0;
  const tableRef = useRef<HTMLTableElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  // Calculate and set sticky column positions
  const updateStickyPositions = useCallback(() => {
    if (!tableRef.current || !hasSticky) return;

    const firstRow = tableRef.current.querySelector('.spui-Table-row');
    if (!firstRow) return;

    const cells = firstRow.querySelectorAll(
      '.spui-Table-head, .spui-Table-cell',
    );
    const frameElement = frameRef.current;
    if (!frameElement) return;

    // Calculate left sticky positions
    let leftOffset = 0;
    for (let i = 0; i < stickyLeftColumns && i < cells.length; i++) {
      if (i > 0) {
        frameElement.style.setProperty(`--sticky-left-${i}`, `${leftOffset}px`);
      }
      leftOffset += (cells[i] as HTMLElement).offsetWidth;
    }

    // Calculate right sticky positions
    let rightOffset = 0;
    for (
      let i = cells.length - 1;
      i >= cells.length - stickyRightColumns && i >= 0;
      i--
    ) {
      const rightIndex = cells.length - i - 1;
      if (rightIndex > 0) {
        frameElement.style.setProperty(
          `--sticky-right-${rightIndex}`,
          `${rightOffset}px`,
        );
      }
      rightOffset += (cells[i] as HTMLElement).offsetWidth;
    }
  }, [hasSticky, stickyLeftColumns, stickyRightColumns]);

  useEffect(() => {
    updateStickyPositions();

    // Update on resize
    const resizeObserver = new ResizeObserver(updateStickyPositions);
    if (tableRef.current) {
      resizeObserver.observe(tableRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [updateStickyPositions]);

  const classes = [
    BLOCK_NAME,
    ...getBorderClassNames(borderTypes),
    rounded && `${BLOCK_NAME}--rounded`,
    striped && `${BLOCK_NAME}--striped`,
    layout === 'fixed' && `${BLOCK_NAME}--fixed`,
    layout === 'scrollable' && `${BLOCK_NAME}--scrollable`,
    hasSticky && `${BLOCK_NAME}--sticky`,
  ]
    .filter(Boolean)
    .join(' ')
    .trim();

  const wrapperClasses = [
    `${BLOCK_NAME}-frame`,
    (layout === 'scrollable' || hasSticky) && `${BLOCK_NAME}-frame--scrollable`,
    className,
  ]
    .filter(Boolean)
    .join(' ')
    .trim();

  return (
    <TableContext.Provider value={{ stickyLeftColumns, stickyRightColumns }}>
      <div ref={ref || frameRef} className={wrapperClasses}>
        <table ref={tableRef} className={classes} {...rest}>
          {children}
        </table>
      </div>
    </TableContext.Provider>
  );
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
  const { stickyLeftColumns, stickyRightColumns } =
    React.useContext(TableContext);

  // Add sticky classes and styles to cells
  const enhancedChildren = Children.map(children, (child, index) => {
    if (!isValidElement(child)) return child;

    const childCount = Children.count(children);
    const isLeftSticky = index < stickyLeftColumns;
    const isRightSticky = index >= childCount - stickyRightColumns;
    const isLeftEdge = index === stickyLeftColumns - 1;
    const isRightEdge = index === childCount - stickyRightColumns;

    // Calculate positions for multiple sticky columns
    let leftPosition = '0';
    let rightPosition = '0';

    if (isLeftSticky && index > 0) {
      // For left sticky columns, each column needs its previous columns' widths
      leftPosition = `var(--sticky-left-${index}, 0px)`;
    }

    if (isRightSticky && index < childCount - 1) {
      // For right sticky columns, calculate from the right
      const rightIndex = childCount - index - 1;
      if (rightIndex > 0) {
        rightPosition = `var(--sticky-right-${rightIndex}, 0px)`;
      }
    }

    const stickyClasses = [
      isLeftSticky && `${BLOCK_NAME}-sticky-left`,
      isRightSticky && `${BLOCK_NAME}-sticky-right`,
      isLeftEdge && `${BLOCK_NAME}-sticky-left-edge`,
      isRightEdge && `${BLOCK_NAME}-sticky-right-edge`,
      isLeftSticky && index > 0 && `${BLOCK_NAME}-sticky-left-${index}`,
      isRightSticky &&
        childCount - index - 1 > 0 &&
        `${BLOCK_NAME}-sticky-right-${childCount - index - 1}`,
    ]
      .filter(Boolean)
      .join(' ');

    const stickyStyle: React.CSSProperties = {};
    if (isLeftSticky) {
      stickyStyle.left = leftPosition;
    }
    if (isRightSticky) {
      stickyStyle.right = rightPosition;
    }

    if (stickyClasses || Object.keys(stickyStyle).length > 0) {
      return cloneElement(
        child as React.ReactElement<{
          className?: string;
          style?: React.CSSProperties;
        }>,
        {
          className: [
            (child.props as { className?: string }).className,
            stickyClasses,
          ]
            .filter(Boolean)
            .join(' '),
          style: {
            ...(child.props as { style?: React.CSSProperties }).style,
            ...stickyStyle,
          },
        },
      );
    }

    return child;
  });

  return (
    <tr
      ref={ref}
      className={[`${BLOCK_NAME}-row`, className]
        .filter(Boolean)
        .join(' ')
        .trim()}
      {...rest}
    >
      {enhancedChildren}
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
