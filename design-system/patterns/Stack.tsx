import React from 'react';

// ─── Stack ────────────────────────────────────────────────────────────────────

type StackDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type AlignItems = 'start' | 'end' | 'center' | 'stretch' | 'baseline';
type JustifyContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';

interface StackProps {
  direction?: StackDirection;
  gap?: number | string;
  align?: AlignItems;
  justify?: JustifyContent;
  wrap?: boolean;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const directionMap: Record<StackDirection, string> = {
  row: 'flex-row',
  column: 'flex-col',
  'row-reverse': 'flex-row-reverse',
  'column-reverse': 'flex-col-reverse',
};

const alignMap: Record<AlignItems, string> = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
};

const justifyMap: Record<JustifyContent, string> = {
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

export function Stack({
  direction = 'column',
  gap = 4,
  align = 'stretch',
  justify = 'start',
  wrap = false,
  children,
  className = '',
  as: Component = 'div',
}: StackProps) {
  const gapClass = typeof gap === 'number' ? `gap-${gap}` : `gap-[${gap}]`;

  const classes = [
    'flex',
    directionMap[direction],
    gapClass,
    alignMap[align],
    justifyMap[justify],
    wrap && 'flex-wrap',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <Component className={classes}>{children}</Component>;
}

// ─── HStack ──────────────────────────────────────────────────────────────────

interface HStackProps extends Omit<StackProps, 'direction'> {}

export function HStack(props: HStackProps) {
  return <Stack direction="row" align="center" {...props} />;
}

// ─── VStack ──────────────────────────────────────────────────────────────────

interface VStackProps extends Omit<StackProps, 'direction'> {}

export function VStack(props: VStackProps) {
  return <Stack direction="column" {...props} />;
}

// ─── Grid ─────────────────────────────────────────────────────────────────────

interface GridProps {
  cols?: number | { sm?: number; md?: number; lg?: number; xl?: number };
  gap?: number;
  children: React.ReactNode;
  className?: string;
}

export function Grid({ cols = 1, gap = 4, children, className = '' }: GridProps) {
  let colClasses = '';

  if (typeof cols === 'number') {
    colClasses = `grid-cols-${cols}`;
  } else {
    colClasses = [
      cols.sm && `sm:grid-cols-${cols.sm}`,
      cols.md && `md:grid-cols-${cols.md}`,
      cols.lg && `lg:grid-cols-${cols.lg}`,
      cols.xl && `xl:grid-cols-${cols.xl}`,
    ]
      .filter(Boolean)
      .join(' ');
  }

  return (
    <div className={['grid', colClasses, `gap-${gap}`, className].join(' ')}>
      {children}
    </div>
  );
}

// ─── GridItem ─────────────────────────────────────────────────────────────────

interface GridItemProps {
  colSpan?: number;
  rowSpan?: number;
  children: React.ReactNode;
  className?: string;
}

export function GridItem({ colSpan, rowSpan, children, className = '' }: GridItemProps) {
  return (
    <div
      className={[
        colSpan && `col-span-${colSpan}`,
        rowSpan && `row-span-${rowSpan}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  );
}

// ─── Divider ─────────────────────────────────────────────────────────────────

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  label?: string;
}

export function Divider({ orientation = 'horizontal', className = '', label }: DividerProps) {
  if (label) {
    return (
      <div className={['flex items-center gap-3', className].join(' ')}>
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400 font-medium">{label}</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>
    );
  }

  if (orientation === 'vertical') {
    return <div className={['w-px h-full bg-gray-200', className].join(' ')} />;
  }

  return <div className={['w-full h-px bg-gray-200', className].join(' ')} />;
}

export type { StackProps, HStackProps, VStackProps, GridProps, GridItemProps, DividerProps };
