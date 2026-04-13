'use client';

import React from 'react';

// ─── FormControl ─────────────────────────────────────────────────────────────

interface FormControlProps {
  id?: string;
  isRequired?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

const FormControlContext = React.createContext<{
  id?: string;
  isRequired?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
}>({});

export function FormControl({
  id,
  isRequired,
  isInvalid,
  isDisabled,
  children,
  className = '',
}: FormControlProps) {
  return (
    <FormControlContext.Provider value={{ id, isRequired, isInvalid, isDisabled }}>
      <div role="group" className={['flex flex-col gap-1.5', className].join(' ')}>
        {children}
      </div>
    </FormControlContext.Provider>
  );
}

// ─── FormLabel ───────────────────────────────────────────────────────────────

interface FormLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function FormLabel({ children, className = '' }: FormLabelProps) {
  const { id, isRequired } = React.useContext(FormControlContext);
  return (
    <label
      htmlFor={id}
      className={['block text-sm font-medium text-gray-700', className].join(' ')}
    >
      {children}
      {isRequired && (
        <span className="ml-1 text-rose-500" aria-hidden="true">*</span>
      )}
    </label>
  );
}

// ─── FormHelperText ──────────────────────────────────────────────────────────

interface FormHelperTextProps {
  children: React.ReactNode;
  className?: string;
}

export function FormHelperText({ children, className = '' }: FormHelperTextProps) {
  const { id } = React.useContext(FormControlContext);
  return (
    <p id={id ? `${id}-helper` : undefined} className={['text-xs text-gray-500', className].join(' ')}>
      {children}
    </p>
  );
}

// ─── FormErrorMessage ────────────────────────────────────────────────────────

interface FormErrorMessageProps {
  children: React.ReactNode;
  className?: string;
}

export function FormErrorMessage({ children, className = '' }: FormErrorMessageProps) {
  const { id, isInvalid } = React.useContext(FormControlContext);
  if (!isInvalid) return null;
  return (
    <p
      id={id ? `${id}-error` : undefined}
      role="alert"
      className={['text-xs text-rose-500', className].join(' ')}
    >
      {children}
    </p>
  );
}

// ─── Form ────────────────────────────────────────────────────────────────────

interface FormProps {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
  gap?: number;
  className?: string;
}

export function Form({ onSubmit, children, gap = 5, className = '' }: FormProps) {
  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={['flex flex-col', `gap-${gap}`, className].join(' ')}
    >
      {children}
    </form>
  );
}

export type { FormControlProps, FormLabelProps, FormHelperTextProps, FormErrorMessageProps, FormProps };
