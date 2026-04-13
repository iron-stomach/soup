import React from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

type InputSize = 'sm' | 'md' | 'lg';
type InputVariant = 'outline' | 'filled' | 'flushed';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  size?: InputSize;
  variant?: InputVariant;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
}

// ─── Style Maps ──────────────────────────────────────────────────────────────

const sizeStyles: Record<InputSize, string> = {
  sm: 'h-8 text-sm px-3',
  md: 'h-10 text-sm px-3',
  lg: 'h-11 text-base px-4',
};

const variantStyles: Record<InputVariant, { base: string; error: string }> = {
  outline: {
    base: 'border border-gray-300 rounded-md bg-white hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20',
    error: 'border-rose-500 hover:border-rose-500 focus:border-rose-500 focus:ring-rose-500/20',
  },
  filled: {
    base: 'border border-transparent rounded-md bg-gray-100 hover:bg-gray-200 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20',
    error: 'border-rose-500 bg-rose-50 hover:bg-rose-50 focus:bg-white focus:border-rose-500 focus:ring-rose-500/20',
  },
  flushed: {
    base: 'border-0 border-b border-gray-300 rounded-none px-0 hover:border-gray-400 focus:border-blue-500 focus:ring-0 focus:ring-offset-0',
    error: 'border-rose-500 hover:border-rose-500 focus:border-rose-500',
  },
};

// ─── Component ───────────────────────────────────────────────────────────────

export function Input({
  label,
  helperText,
  errorMessage,
  isInvalid = false,
  isDisabled = false,
  isRequired = false,
  size = 'md',
  variant = 'outline',
  leftAddon,
  rightAddon,
  leftElement,
  rightElement,
  id,
  className = '',
  ...props
}: InputProps) {
  const inputId = id || `input-${Math.random().toString(36).slice(2, 7)}`;
  const hasError = isInvalid || Boolean(errorMessage);
  const styles = variantStyles[variant];

  const inputClasses = [
    'w-full outline-none transition-colors duration-150',
    'placeholder:text-gray-400',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    sizeStyles[size],
    hasError ? styles.error : styles.base,
    leftElement && 'pl-9',
    rightElement && 'pr-9',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-gray-700"
        >
          {label}
          {isRequired && (
            <span className="ml-1 text-rose-500" aria-hidden="true">*</span>
          )}
        </label>
      )}

      <div className="flex">
        {/* Left Addon */}
        {leftAddon && (
          <div className="flex items-center px-3 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 text-sm text-gray-500">
            {leftAddon}
          </div>
        )}

        {/* Input Wrapper */}
        <div className="relative flex-1">
          {leftElement && (
            <div className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              {leftElement}
            </div>
          )}
          <input
            id={inputId}
            disabled={isDisabled}
            aria-invalid={hasError}
            aria-describedby={
              [
                helperText && `${inputId}-helper`,
                (hasError && errorMessage) && `${inputId}-error`,
              ].filter(Boolean).join(' ') || undefined
            }
            aria-required={isRequired}
            className={inputClasses}
            {...props}
          />
          {rightElement && (
            <div className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400">
              {rightElement}
            </div>
          )}
        </div>

        {/* Right Addon */}
        {rightAddon && (
          <div className="flex items-center px-3 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-sm text-gray-500">
            {rightAddon}
          </div>
        )}
      </div>

      {/* Helper / Error */}
      {helperText && !hasError && (
        <p id={`${inputId}-helper`} className="text-xs text-gray-500">
          {helperText}
        </p>
      )}
      {hasError && errorMessage && (
        <p id={`${inputId}-error`} className="text-xs text-rose-500" role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
}

export type { InputProps, InputSize, InputVariant };
