import React from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  variant?: 'rectangular' | 'circular' | 'text';
  className?: string;
  animate?: boolean;
}

interface SkeletonTextProps {
  lines?: number;
  spacing?: number;
  lastLineWidth?: string;
  className?: string;
}

// ─── Skeleton ─────────────────────────────────────────────────────────────────

export function Skeleton({
  width,
  height,
  variant = 'rectangular',
  className = '',
  animate = true,
}: SkeletonProps) {
  const variantClass = {
    rectangular: 'rounded-md',
    circular: 'rounded-full',
    text: 'rounded',
  }[variant];

  const style: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  return (
    <span
      role="status"
      aria-label="로딩 중"
      style={style}
      className={[
        'block bg-gray-200',
        animate && 'animate-pulse',
        variantClass,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    />
  );
}

// ─── SkeletonText ─────────────────────────────────────────────────────────────

export function SkeletonText({
  lines = 3,
  spacing = 2,
  lastLineWidth = '60%',
  className = '',
}: SkeletonTextProps) {
  return (
    <div className={['flex flex-col', `gap-${spacing}`, className].join(' ')}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          height={14}
          width={i === lines - 1 ? lastLineWidth : '100%'}
          variant="text"
        />
      ))}
    </div>
  );
}

// ─── SkeletonCard ─────────────────────────────────────────────────────────────

export function SkeletonCard({ className = '' }: { className?: string }) {
  return (
    <div className={['rounded-xl border border-gray-100 p-4 space-y-3', className].join(' ')}>
      <div className="flex items-center gap-3">
        <Skeleton variant="circular" width={40} height={40} />
        <div className="flex-1 space-y-2">
          <Skeleton height={14} width="40%" variant="text" />
          <Skeleton height={12} width="60%" variant="text" />
        </div>
      </div>
      <Skeleton height={120} />
      <SkeletonText lines={2} lastLineWidth="75%" />
    </div>
  );
}

export type { SkeletonProps, SkeletonTextProps };
