import React from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link';
type ButtonColor = 'primary' | 'secondary' | 'danger' | 'success';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  isLoading?: boolean;
  isDisabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  children: React.ReactNode;
}

// ─── Style Maps ──────────────────────────────────────────────────────────────

const sizeStyles: Record<ButtonSize, string> = {
  xs: 'h-7 px-2.5 text-xs gap-1 rounded',
  sm: 'h-8 px-3 text-sm gap-1.5 rounded-md',
  md: 'h-9 px-4 text-sm gap-2 rounded-md',
  lg: 'h-10 px-5 text-base gap-2 rounded-lg',
  xl: 'h-12 px-6 text-lg gap-2.5 rounded-lg',
};

const variantColorStyles: Record<ButtonColor, Record<ButtonVariant, string>> = {
  primary: {
    solid: 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 border border-transparent',
    outline: 'bg-transparent text-blue-600 border border-blue-500 hover:bg-blue-50 active:bg-blue-100',
    ghost: 'bg-transparent text-blue-600 border border-transparent hover:bg-blue-50 active:bg-blue-100',
    link: 'bg-transparent text-blue-600 border-none underline-offset-4 hover:underline p-0 h-auto',
  },
  secondary: {
    solid: 'bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-700 border border-transparent',
    outline: 'bg-transparent text-gray-900 border border-gray-300 hover:bg-gray-50 active:bg-gray-100',
    ghost: 'bg-transparent text-gray-700 border border-transparent hover:bg-gray-100 active:bg-gray-200',
    link: 'bg-transparent text-gray-700 border-none underline-offset-4 hover:underline p-0 h-auto',
  },
  danger: {
    solid: 'bg-rose-500 text-white hover:bg-rose-600 active:bg-rose-700 border border-transparent',
    outline: 'bg-transparent text-rose-600 border border-rose-500 hover:bg-rose-50 active:bg-rose-100',
    ghost: 'bg-transparent text-rose-600 border border-transparent hover:bg-rose-50 active:bg-rose-100',
    link: 'bg-transparent text-rose-600 border-none underline-offset-4 hover:underline p-0 h-auto',
  },
  success: {
    solid: 'bg-green-500 text-white hover:bg-green-600 active:bg-green-700 border border-transparent',
    outline: 'bg-transparent text-green-600 border border-green-500 hover:bg-green-50 active:bg-green-100',
    ghost: 'bg-transparent text-green-600 border border-transparent hover:bg-green-50 active:bg-green-100',
    link: 'bg-transparent text-green-600 border-none underline-offset-4 hover:underline p-0 h-auto',
  },
};

// ─── Spinner ─────────────────────────────────────────────────────────────────

function Spinner({ size }: { size: ButtonSize }) {
  const svgSize = { xs: 12, sm: 14, md: 16, lg: 18, xl: 20 }[size];
  return (
    <svg
      width={svgSize}
      height={svgSize}
      viewBox="0 0 24 24"
      fill="none"
      className="animate-spin"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
      <path
        d="M22 12a10 10 0 0 0-10-10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export function Button({
  variant = 'solid',
  color = 'primary',
  size = 'md',
  isLoading = false,
  isDisabled = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const disabled = isDisabled || isLoading;

  const baseStyles = [
    'inline-flex items-center justify-center font-medium',
    'transition-colors duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
    'select-none cursor-pointer',
    disabled && 'opacity-50 pointer-events-none cursor-not-allowed',
    fullWidth && 'w-full',
    sizeStyles[size],
    variantColorStyles[color][variant],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={baseStyles}
      disabled={disabled}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <Spinner size={size} />
      ) : (
        leftIcon && <span className="shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
}

export type { ButtonProps, ButtonVariant, ButtonColor, ButtonSize };
