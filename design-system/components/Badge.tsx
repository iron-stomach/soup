import React from 'react';

// ─── Badge ────────────────────────────────────────────────────────────────────

type BadgeVariant = 'solid' | 'subtle' | 'outline';
type BadgeColor = 'gray' | 'blue' | 'green' | 'yellow' | 'red';
type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps {
  variant?: BadgeVariant;
  color?: BadgeColor;
  size?: BadgeSize;
  dot?: boolean;
  children: React.ReactNode;
  className?: string;
}

const badgeColorMap: Record<BadgeColor, Record<BadgeVariant, string>> = {
  gray: {
    solid: 'bg-gray-800 text-white',
    subtle: 'bg-gray-100 text-gray-700',
    outline: 'border border-gray-300 text-gray-700 bg-transparent',
  },
  blue: {
    solid: 'bg-blue-500 text-white',
    subtle: 'bg-blue-50 text-blue-700',
    outline: 'border border-blue-300 text-blue-700 bg-transparent',
  },
  green: {
    solid: 'bg-green-500 text-white',
    subtle: 'bg-green-50 text-green-700',
    outline: 'border border-green-300 text-green-700 bg-transparent',
  },
  yellow: {
    solid: 'bg-yellow-400 text-yellow-900',
    subtle: 'bg-yellow-50 text-yellow-700',
    outline: 'border border-yellow-300 text-yellow-700 bg-transparent',
  },
  red: {
    solid: 'bg-rose-500 text-white',
    subtle: 'bg-rose-50 text-rose-700',
    outline: 'border border-rose-300 text-rose-700 bg-transparent',
  },
};

const badgeSizeMap: Record<BadgeSize, string> = {
  sm: 'text-[10px] px-1.5 py-0.5 gap-1',
  md: 'text-xs px-2 py-0.5 gap-1.5',
  lg: 'text-sm px-2.5 py-1 gap-1.5',
};

const dotColorMap: Record<BadgeColor, string> = {
  gray: 'bg-gray-400',
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  yellow: 'bg-yellow-400',
  red: 'bg-rose-500',
};

export function Badge({
  variant = 'subtle',
  color = 'gray',
  size = 'md',
  dot = false,
  children,
  className = '',
}: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center font-medium rounded-full',
        badgeColorMap[color][variant],
        badgeSizeMap[size],
        className,
      ].join(' ')}
    >
      {dot && (
        <span className={['rounded-full w-1.5 h-1.5 shrink-0', dotColorMap[color]].join(' ')} />
      )}
      {children}
    </span>
  );
}

// ─── Tag ─────────────────────────────────────────────────────────────────────

interface TagProps {
  children: React.ReactNode;
  onRemove?: () => void;
  color?: BadgeColor;
  className?: string;
}

export function Tag({ children, onRemove, color = 'blue', className = '' }: TagProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1 text-sm px-2.5 py-1 rounded-md font-medium',
        badgeColorMap[color].subtle,
        className,
      ].join(' ')}
    >
      {children}
      {onRemove && (
        <button
          onClick={onRemove}
          aria-label="Remove tag"
          className="ml-0.5 hover:opacity-70 transition-opacity cursor-pointer"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </span>
  );
}

export type { BadgeProps, TagProps, BadgeVariant, BadgeColor, BadgeSize };
