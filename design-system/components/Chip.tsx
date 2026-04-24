import React from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

export type ChipVariant = 'outline' | 'filled';

export interface ChipProps {
  label?: string;
  variant?: ChipVariant;
  selected?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

// ─── Icon ─────────────────────────────────────────────────────────────────────

export function PlusIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 3.5v9M3.5 8h9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloseIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M11.5 4.5l-7 7M4.5 4.5l7 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────
// Figma 스펙:
//   Default  — border rgba(112,115,124,0.32), transparent bg, text #DCDCDC
//   Hover    — + overlay bg rgba(112,115,124,0.28)
//   Selected — bg #5A5C63, border rgba(112,115,124,0.32), text #F7F7F8
//   Filled   — bg rgba(194,196,200,0.88), no border, text #DCDCDC
//   Height   — 28px, px-3(12px), radius full, font Pretendard Regular 13px

export function Chip({
  label,
  variant = 'outline',
  selected = false,
  leftIcon,
  rightIcon,
  onClick,
  disabled = false,
  className = '',
}: ChipProps) {
  const stateStyles = selected
    ? 'bg-[#5A5C63] border border-[rgba(112,115,124,0.32)] border-solid text-[#F7F7F8]'
    : variant === 'filled'
    ? 'bg-[rgba(194,196,200,0.88)] text-[#DCDCDC]'
    : [
        'border border-[rgba(112,115,124,0.32)] border-solid text-[#DCDCDC]',
        'hover:bg-[rgba(112,115,124,0.28)]',
      ].join(' ');

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={[
        'inline-flex items-center justify-center h-7 px-3 rounded-full',
        'text-[13px] font-normal leading-[1.5] whitespace-nowrap',
        'transition-colors duration-150 cursor-pointer select-none',
        'focus-visible:outline-none',
        stateStyles,
        disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {leftIcon && (
        <span className="shrink-0 size-4 flex items-center justify-center">
          {leftIcon}
        </span>
      )}
      {label && <span className={leftIcon || rightIcon ? 'px-0.5' : ''}>{label}</span>}
      {rightIcon && (
        <span className="shrink-0 size-4 flex items-center justify-center">
          {rightIcon}
        </span>
      )}
    </button>
  );
}
