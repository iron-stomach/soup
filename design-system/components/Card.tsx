import React from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

type CardVariant = 'elevated' | 'outline' | 'filled' | 'unstyled';
type CardSize = 'sm' | 'md' | 'lg';

interface CardProps {
  variant?: CardVariant;
  size?: CardSize;
  isHoverable?: boolean;
  isClickable?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
  actions?: React.ReactNode;
}

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
  divider?: boolean;
}

// ─── Style Maps ──────────────────────────────────────────────────────────────

const variantStyles: Record<CardVariant, string> = {
  elevated: 'bg-white shadow-md border border-gray-100',
  outline: 'bg-white border border-gray-200',
  filled: 'bg-gray-50 border border-transparent',
  unstyled: '',
};

const sizeStyles: Record<CardSize, string> = {
  sm: 'rounded-lg',
  md: 'rounded-xl',
  lg: 'rounded-2xl',
};

const paddingStyles: Record<CardSize, string> = {
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
};

// ─── Sub-components ──────────────────────────────────────────────────────────

export function CardHeader({ children, className = '', actions }: CardHeaderProps) {
  return (
    <div className={['flex items-start justify-between gap-4', className].join(' ')}>
      <div className="flex-1">{children}</div>
      {actions && <div className="shrink-0">{actions}</div>}
    </div>
  );
}

export function CardBody({ children, className = '' }: CardBodyProps) {
  return <div className={className}>{children}</div>;
}

export function CardFooter({ children, className = '', divider = false }: CardFooterProps) {
  return (
    <div
      className={[
        divider && 'border-t border-gray-100 pt-3',
        className,
      ].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────

export function Card({
  variant = 'elevated',
  size = 'md',
  isHoverable = false,
  isClickable = false,
  children,
  className = '',
  onClick,
}: CardProps) {
  const Tag = isClickable || onClick ? 'button' : 'div';
  const padding = paddingStyles[size];

  const classes = [
    'overflow-hidden transition-all duration-200',
    variantStyles[variant],
    sizeStyles[size],
    isHoverable && 'hover:shadow-lg hover:-translate-y-0.5',
    (isClickable || onClick) && 'cursor-pointer hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
    Tag === 'button' && 'w-full text-left',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Inject padding class into direct children based on their type
  const enhancedChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    const displayName = (child.type as { displayName?: string })?.displayName;
    const name = (child.type as Function)?.name;
    const componentName = displayName || name || '';
    if (['CardHeader', 'CardBody', 'CardFooter'].includes(componentName)) {
      return React.cloneElement(child as React.ReactElement<{ className?: string }>, {
        className: [padding, (child.props as { className?: string }).className].filter(Boolean).join(' '),
      });
    }
    return child;
  });

  return (
    <Tag className={classes} onClick={onClick}>
      <div className="flex flex-col gap-3">{enhancedChildren || children}</div>
    </Tag>
  );
}

export type { CardProps, CardHeaderProps, CardBodyProps, CardFooterProps };
