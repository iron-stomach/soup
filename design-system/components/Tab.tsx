'use client';

import React, { useState } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

export type TabItem = {
  label: string;
  value: string;
  disabled?: boolean;
};

export interface TabProps {
  items: TabItem[];
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

// ─── Component ───────────────────────────────────────────────────────────────
// Figma 스펙:
//   Default  — border-b 1px rgba(112,115,124,0.32), text rgba(174,176,182,0.61)
//   Active   — border-b 1.5px #F7F7F8, text #F7F7F8
//   Font     — Pretendard Variable Medium, 15px, line-height 18px, tracking -0.03px
//   Height   — 40px, padding pt-2 pb-1.5 px-6

export function Tab({
  items,
  defaultValue,
  value: controlledValue,
  onChange,
  className = '',
}: TabProps) {
  const [internalValue, setInternalValue] = useState(
    defaultValue ?? items[0]?.value ?? ''
  );

  const activeValue = controlledValue ?? internalValue;

  const handleClick = (itemValue: string, disabled?: boolean) => {
    if (disabled) return;
    if (controlledValue === undefined) setInternalValue(itemValue);
    onChange?.(itemValue);
  };

  return (
    <div role="tablist" className={`flex ${className}`}>
      {items.map((item) => {
        const isActive = activeValue === item.value;
        return (
          <button
            key={item.value}
            role="tab"
            aria-selected={isActive}
            disabled={item.disabled}
            onClick={() => handleClick(item.value, item.disabled)}
            className={[
              // 공통
              'relative h-10 px-6 pt-2 pb-1.5',
              'text-[15px] font-medium leading-[18px] tracking-[-0.03px] whitespace-nowrap',
              'transition-colors duration-150 cursor-pointer select-none',
              'focus-visible:outline-none',
              // 상태별 border & color
              isActive
                ? [
                    'text-[#F7F7F8]',
                    'border-b-[1.5px] border-[#F7F7F8] border-solid',
                  ].join(' ')
                : [
                    'text-[rgba(174,176,182,0.61)]',
                    'border-b border-[rgba(112,115,124,0.32)] border-solid',
                    'hover:text-[rgba(174,176,182,0.85)]',
                  ].join(' '),
              item.disabled && 'cursor-not-allowed opacity-40 pointer-events-none',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
