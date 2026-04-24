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

// ─── Size Styles ─────────────────────────────────────────────────────────────
// Small  → sm  : h-8  (32px), px-4, 14px Regular, radius-[6px]
// Medium → md  : h-10 (40px), px-4, 14px Medium,  radius-[6px]
// Large  → lg/xl: h-12 (48px), px-4, 18px Medium,  radius-[8px]

const sizeStyles: Record<ButtonSize, string> = {
  xs: 'h-7 px-2.5 text-xs font-medium gap-1 rounded',
  sm: 'h-8 px-4 text-sm font-normal leading-[22px] gap-1 rounded-[6px]',
  md: 'h-10 px-4 text-sm font-medium leading-[19px] tracking-[-0.01em] gap-1 rounded-[6px]',
  lg: 'h-12 px-4 text-lg font-medium leading-5 tracking-[0.002em] gap-1 rounded-[8px]',
  xl: 'h-12 px-6 text-lg font-medium leading-5 tracking-[0.002em] gap-1 rounded-[8px]',
};

// ─── Variant × Color Styles ───────────────────────────────────────────────────

const variantColorStyles: Record<ButtonColor, Record<ButtonVariant, string>> = {
  primary: {
    solid: [
      // Default
      'bg-[#005CE6] text-[#F7F7F8] border border-transparent',
      // Hover
      'hover:bg-[#004FCC] hover:text-[#DCDCDC]',
      // Active – same bg as default, ring border
      'active:bg-[#005CE6] active:text-[#F7F7F8] active:border-[#EFF3F7]',
      // Disabled – specific token colors, not opacity
      'disabled:bg-[#46474C] disabled:text-[#878A93] disabled:border-transparent',
    ].join(' '),
    outline: [
      'bg-transparent text-[#005CE6] border border-[#005CE6]',
      'hover:bg-[#EFF3F7]',
      'active:bg-blue-100',
      'disabled:opacity-40',
    ].join(' '),
    ghost: [
      // Figma 스펙: Button - Ghost Button
      // Default  — 투명 bg, label/neutral text (#C2C4C8 at 88%)
      'bg-transparent text-[rgba(194,196,200,0.88)] border-none',
      // Hover    — cool-neutral/17 bg overlay, text 유지
      'hover:bg-[#212225]',
      // Active   — label/normal (#F7F7F8) 으로 텍스트 강조
      'active:bg-transparent active:text-[#F7F7F8]',
      // Disabled — label/alternative 로 dim
      'disabled:bg-transparent disabled:text-[rgba(174,176,182,0.61)]',
    ].join(' '),
    link: [
      'bg-transparent text-[#005CE6] border-none underline-offset-4',
      'hover:underline',
      'disabled:opacity-40',
      'p-0 h-auto',
    ].join(' '),
  },

  secondary: {
    solid: [
      'bg-gray-900 text-white border border-transparent',
      'hover:bg-gray-800',
      'active:bg-gray-700',
      'disabled:bg-gray-400 disabled:text-gray-200',
    ].join(' '),
    outline: [
      'bg-transparent text-gray-900 border border-gray-300',
      'hover:bg-gray-50',
      'active:bg-gray-100',
      'disabled:opacity-40',
    ].join(' '),
    ghost: [
      'bg-transparent text-gray-700 border border-transparent',
      'hover:bg-gray-100',
      'active:bg-gray-200',
      'disabled:opacity-40',
    ].join(' '),
    link: [
      'bg-transparent text-gray-700 border-none underline-offset-4',
      'hover:underline',
      'disabled:opacity-40',
      'p-0 h-auto',
    ].join(' '),
  },

  danger: {
    solid: [
      'bg-rose-500 text-white border border-transparent',
      'hover:bg-rose-600',
      'active:bg-rose-700',
      'disabled:bg-rose-200 disabled:text-rose-400',
    ].join(' '),
    outline: [
      'bg-transparent text-rose-600 border border-rose-500',
      'hover:bg-rose-50',
      'active:bg-rose-100',
      'disabled:opacity-40',
    ].join(' '),
    ghost: [
      'bg-transparent text-rose-600 border border-transparent',
      'hover:bg-rose-50',
      'active:bg-rose-100',
      'disabled:opacity-40',
    ].join(' '),
    link: [
      'bg-transparent text-rose-600 border-none underline-offset-4',
      'hover:underline',
      'disabled:opacity-40',
      'p-0 h-auto',
    ].join(' '),
  },

  success: {
    solid: [
      'bg-green-500 text-white border border-transparent',
      'hover:bg-green-600',
      'active:bg-green-700',
      'disabled:bg-green-200 disabled:text-green-400',
    ].join(' '),
    outline: [
      'bg-transparent text-green-600 border border-green-500',
      'hover:bg-green-50',
      'active:bg-green-100',
      'disabled:opacity-40',
    ].join(' '),
    ghost: [
      'bg-transparent text-green-600 border border-transparent',
      'hover:bg-green-50',
      'active:bg-green-100',
      'disabled:opacity-40',
    ].join(' '),
    link: [
      'bg-transparent text-green-600 border-none underline-offset-4',
      'hover:underline',
      'disabled:opacity-40',
      'p-0 h-auto',
    ].join(' '),
  },
};

// ─── Spinner ─────────────────────────────────────────────────────────────────

function Spinner({ size }: { size: ButtonSize }) {
  const svgSize = { xs: 12, sm: 14, md: 16, lg: 18, xl: 18 }[size];
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

  // Figma 스펙: ghost sm 은 수평 패딩 6px (solid/outline sm은 16px)
  // Tailwind 클래스 우선순위 충돌을 피하기 위해 인라인 스타일 사용
  const ghostSmPaddingStyle =
    variant === 'ghost' && size === 'sm'
      ? { paddingLeft: '6px', paddingRight: '6px' }
      : {};

  const baseStyles = [
    'inline-flex items-center justify-center overflow-hidden',
    'transition-colors duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#005CE6] focus-visible:ring-offset-2',
    'select-none cursor-pointer disabled:cursor-not-allowed',
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
      style={ghostSmPaddingStyle}
      disabled={disabled}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <Spinner size={size} />
      ) : (
        leftIcon && <span className="shrink-0 size-4 flex items-center justify-center">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && (
        <span className="shrink-0 size-4 flex items-center justify-center">{rightIcon}</span>
      )}
    </button>
  );
}

export type { ButtonProps, ButtonVariant, ButtonColor, ButtonSize };
