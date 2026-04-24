import React from 'react';
import { PlusIcon } from '../icons';

// ─── Inline icons ─────────────────────────────────────────────────────────────

const ArrowRightIcon = ({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden>
    <path
      d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DisabledIcon = () => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" aria-hidden>
    <rect x="2.5" y="2.5" width="11" height="11" rx="2.5" fill="rgba(174,176,182,0.5)" />
  </svg>
);

// ─── Types ────────────────────────────────────────────────────────────────────

type PromptState = 'disable' | 'default' | 'enable';
type PromptLayout = 'expanded' | 'compact';

interface InputProps {
  /** 인풋 상태 */
  state?: PromptState;
  /** 레이아웃 타입 */
  layout?: PromptLayout;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onSubmit?: () => void;
  onAttach?: () => void;
  className?: string;
}

// ─── Border / background helpers ─────────────────────────────────────────────

function getContainerStyle(state: PromptState, layout: PromptLayout): React.CSSProperties {
  const borderRadius = layout === 'expanded' ? 16 : 12;

  if (state === 'disable') {
    return {
      border: '1px solid rgba(112, 115, 124, 0.32)',
      backgroundColor: '#1c1c1c',
      borderRadius,
    };
  }

  if (state === 'enable') {
    return {
      border: '1px solid transparent',
      backgroundImage:
        'linear-gradient(#1b1c1e, #1b1c1e), linear-gradient(91deg, #2E8DD5 -0.72%, #2A9060 29.36%, #E0942D 59.43%, #E7664B 84.49%, #CF295D 99.52%)',
      backgroundOrigin: 'padding-box, border-box' as React.CSSProperties['backgroundOrigin'],
      backgroundClip: 'padding-box, border-box' as React.CSSProperties['backgroundClip'],
      borderRadius,
    };
  }

  // default: gradient border using background-clip technique
  return {
    border: '1px solid transparent',
    backgroundImage:
      'linear-gradient(#1b1c1e, #1b1c1e), linear-gradient(91deg, #2E8DD5 -0.72%, #2A9060 29.36%, #E0942D 59.43%, #E7664B 84.49%, #CF295D 99.52%)',
    backgroundOrigin: 'padding-box, border-box' as React.CSSProperties['backgroundOrigin'],
    backgroundClip: 'padding-box, border-box' as React.CSSProperties['backgroundClip'],
    borderRadius,
  };
}

// ─── Component ────────────────────────────────────────────────────────────────

export function Input({
  state = 'default',
  layout = 'expanded',
  value = '',
  placeholder = '무엇이든 물어보고 만들어보세요',
  onChange,
  onSubmit,
  onAttach,
  className = '',
}: InputProps) {
  const isExpanded = layout === 'expanded';
  const isDisable = state === 'disable';
  const isEnable = state === 'enable';

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: isExpanded ? 'column' : 'row',
    alignItems: isExpanded ? 'flex-start' : 'center',
    gap: 12,
    paddingTop: isExpanded ? 16 : 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    boxSizing: 'border-box',
    maxWidth: isExpanded ? 780 : 360,
    minWidth: isExpanded ? 343 : 280,
    ...getContainerStyle(state, layout),
  };

  const textStyle: React.CSSProperties = {
    fontFamily: 'Pretendard Variable, Pretendard, sans-serif',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.5,
    color: isEnable ? '#f7f7f8' : 'rgba(174, 176, 182, 0.61)',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    width: '100%',
    padding: 0,
    caretColor: '#f7f7f8',
  };

  const sendBtnStyle: React.CSSProperties = {
    width: 32,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    flexShrink: 0,
    border: 'none',
    cursor: isDisable ? 'not-allowed' : 'pointer',
    padding: 0,
    backgroundColor: isEnable
      ? '#005CE6'
      : isDisable
      ? 'rgba(174,176,182,0.28)'
      : '#333438',
  };

  const plusBtnStyle: React.CSSProperties = {
    width: 32,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    border: '1px solid rgba(112, 115, 124, 0.32)',
    cursor: isDisable ? 'not-allowed' : 'pointer',
    flexShrink: 0,
    background: 'transparent',
    padding: 0,
  };

  const iconColor = isDisable ? 'rgba(174,176,182,0.4)' : '#f7f7f8';

  // Shared send / disabled button
  const ActionButton = () => (
    <button
      style={sendBtnStyle}
      disabled={isDisable}
      onClick={!isDisable ? onSubmit : undefined}
      aria-label={isDisable ? '전송 불가' : '전송'}
      className="transition-all duration-150 hover:brightness-110 disabled:opacity-40"
    >
      {isDisable ? <DisabledIcon /> : <ArrowRightIcon size={20} color="#f7f7f8" />}
    </button>
  );

  return (
    <div style={containerStyle} className={className}>
      {/* Text area */}
      <div style={{ flex: 1, width: '100%', overflow: 'hidden', minHeight: 28 }}>
        {isExpanded ? (
          <textarea
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange?.(e.target.value)}
            disabled={isDisable}
            rows={1}
            style={{ ...textStyle, resize: 'none', minHeight: 28, maxHeight: 192 }}
            className="placeholder:text-[rgba(174,176,182,0.61)] focus:outline-none"
          />
        ) : (
          <input
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange?.(e.target.value)}
            disabled={isDisable}
            style={textStyle}
            className="placeholder:text-[rgba(174,176,182,0.61)] focus:outline-none"
          />
        )}
      </div>

      {/* Buttons */}
      {isExpanded ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height: 32,
            flexShrink: 0,
          }}
        >
          {/* Attach / Plus button */}
          <button
            style={plusBtnStyle}
            onClick={!isDisable ? onAttach : undefined}
            disabled={isDisable}
            aria-label="파일 첨부"
            className="transition-all duration-150 hover:brightness-110 disabled:opacity-40"
          >
            <PlusIcon size={20} color={iconColor} strokeWidth={1.5} />
          </button>

          {/* Send button */}
          <ActionButton />
        </div>
      ) : (
        /* Compact: send button only */
        <ActionButton />
      )}
    </div>
  );
}

export type { InputProps, PromptState, PromptLayout };
