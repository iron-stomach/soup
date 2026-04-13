import React from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

type AlertStatus = 'info' | 'success' | 'warning' | 'error';
type AlertVariant = 'subtle' | 'solid' | 'left-accent';

interface AlertProps {
  status?: AlertStatus;
  variant?: AlertVariant;
  title?: string;
  description?: string;
  onClose?: () => void;
  children?: React.ReactNode;
  className?: string;
}

// ─── Style Maps ──────────────────────────────────────────────────────────────

const statusConfig: Record<AlertStatus, {
  subtle: string;
  solid: string;
  'left-accent': string;
  icon: React.ReactNode;
}> = {
  info: {
    subtle: 'bg-blue-50 text-blue-800',
    solid: 'bg-blue-500 text-white',
    'left-accent': 'bg-blue-50 text-blue-800 border-l-4 border-blue-500',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
  },
  success: {
    subtle: 'bg-green-50 text-green-800',
    solid: 'bg-green-500 text-white',
    'left-accent': 'bg-green-50 text-green-800 border-l-4 border-green-500',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  warning: {
    subtle: 'bg-yellow-50 text-yellow-800',
    solid: 'bg-yellow-400 text-yellow-900',
    'left-accent': 'bg-yellow-50 text-yellow-800 border-l-4 border-yellow-400',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  error: {
    subtle: 'bg-rose-50 text-rose-800',
    solid: 'bg-rose-500 text-white',
    'left-accent': 'bg-rose-50 text-rose-800 border-l-4 border-rose-500',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    ),
  },
};

// ─── Component ───────────────────────────────────────────────────────────────

export function Alert({
  status = 'info',
  variant = 'subtle',
  title,
  description,
  onClose,
  children,
  className = '',
}: AlertProps) {
  const config = statusConfig[status];

  return (
    <div
      role="alert"
      className={[
        'flex items-start gap-3 p-4 rounded-lg text-sm',
        config[variant],
        className,
      ].join(' ')}
    >
      <span className="mt-0.5">{config.icon}</span>

      <div className="flex-1 min-w-0">
        {title && <p className="font-semibold mb-0.5">{title}</p>}
        {description && <p className="opacity-90">{description}</p>}
        {children}
      </div>

      {onClose && (
        <button
          onClick={onClose}
          aria-label="닫기"
          className="shrink-0 opacity-70 hover:opacity-100 transition-opacity mt-0.5 cursor-pointer"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
}

export type { AlertProps, AlertStatus, AlertVariant };
