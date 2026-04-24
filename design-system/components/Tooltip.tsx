'use client';

import React, { useState } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

export type TooltipPlacement =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-left'
  | 'top-right';

export interface TooltipProps {
  content: React.ReactNode;
  placement?: TooltipPlacement;
  children: React.ReactNode;
  className?: string;
  /** 항상 보이게 할 경우 (스토리북 등) */
  defaultVisible?: boolean;
}

// ─── Arrow ───────────────────────────────────────────────────────────────────
// Figma 스펙: 12×8px 삼각형, 색상 #005CE6 (primary400)

const ARROW_COLOR = '#005CE6';

type ArrowDirection = 'down' | 'up' | 'left' | 'right' | 'down-left' | 'down-right';

const clipPaths: Record<ArrowDirection, string> = {
  down:       'polygon(0% 0%, 100% 0%, 50% 100%)',
  up:         'polygon(50% 0%, 0% 100%, 100% 100%)',
  right:      'polygon(0% 0%, 100% 50%, 0% 100%)',
  left:       'polygon(100% 0%, 0% 50%, 100% 100%)',
  'down-left':  'polygon(0% 0%, 100% 0%, 0% 100%)',
  'down-right': 'polygon(0% 0%, 100% 0%, 100% 100%)',
};

function Arrow({ direction }: { direction: ArrowDirection }) {
  const isHorizontal = direction === 'left' || direction === 'right';
  const w = isHorizontal ? 8 : 12;
  const h = isHorizontal ? 12 : 8;
  return (
    <div
      style={{
        width: w,
        height: h,
        backgroundColor: ARROW_COLOR,
        clipPath: clipPaths[direction],
        flexShrink: 0,
      }}
    />
  );
}

// ─── Placement Config ────────────────────────────────────────────────────────
// placement → tooltip 위치 클래스 + 화살표 방향 + 화살표 위치 클래스

type PlacementConfig = {
  bubbleClass: string;   // absolute 위치
  arrowClass: string;    // absolute 위치
  arrowDir: ArrowDirection;
};

const placementConfig: Record<TooltipPlacement, PlacementConfig> = {
  // top: 툴팁이 트리거 위에 → 화살표는 버블 하단 중앙, 아래 방향
  top: {
    bubbleClass: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    arrowClass:  'top-full left-1/2 -translate-x-1/2',
    arrowDir:    'down',
  },
  // bottom: 툴팁이 트리거 아래에 → 화살표는 버블 상단 중앙, 위 방향
  bottom: {
    bubbleClass: 'top-full left-1/2 -translate-x-1/2 mt-2',
    arrowClass:  'bottom-full left-1/2 -translate-x-1/2',
    arrowDir:    'up',
  },
  // left: 툴팁이 트리거 왼쪽에 → 화살표는 버블 우측 중앙, 오른쪽 방향
  left: {
    bubbleClass: 'right-full top-1/2 -translate-y-1/2 mr-2',
    arrowClass:  'left-full top-1/2 -translate-y-1/2',
    arrowDir:    'right',
  },
  // right: 툴팁이 트리거 오른쪽에 → 화살표는 버블 좌측 중앙, 왼쪽 방향
  right: {
    bubbleClass: 'left-full top-1/2 -translate-y-1/2 ml-2',
    arrowClass:  'right-full top-1/2 -translate-y-1/2',
    arrowDir:    'left',
  },
  // top-left: 툴팁이 위쪽, 왼쪽 정렬 → 화살표는 버블 하단 좌측
  'top-left': {
    bubbleClass: 'bottom-full left-0 mb-2',
    arrowClass:  'top-full left-3',
    arrowDir:    'down-left',
  },
  // top-right: 툴팁이 위쪽, 오른쪽 정렬 → 화살표는 버블 하단 우측
  'top-right': {
    bubbleClass: 'bottom-full right-0 mb-2',
    arrowClass:  'top-full right-3',
    arrowDir:    'down-right',
  },
};

// ─── Tooltip Bubble ───────────────────────────────────────────────────────────

interface TooltipBubbleProps {
  content: React.ReactNode;
  placement: TooltipPlacement;
  visible: boolean;
}

function TooltipBubble({ content, placement, visible }: TooltipBubbleProps) {
  if (!visible) return null;
  const { bubbleClass, arrowClass, arrowDir } = placementConfig[placement];

  return (
    <div
      role="tooltip"
      className={[
        'absolute z-50 w-max',
        bubbleClass,
      ].join(' ')}
    >
      {/* 버블 본체 */}
      <div className="relative bg-[#005CE6] px-4 py-[6px] rounded-[8px]">
        <span className="text-[#F7F7F8] text-[13px] font-normal leading-[18px] tracking-[-0.026px] whitespace-nowrap">
          {content}
        </span>

        {/* 화살표 */}
        <div className={['absolute flex items-center justify-center', arrowClass].join(' ')}>
          <Arrow direction={arrowDir} />
        </div>
      </div>
    </div>
  );
}

// ─── Tooltip ─────────────────────────────────────────────────────────────────
// Figma 스펙:
//   bg     — #005CE6 (primary400)
//   text   — #F7F7F8, 13px Regular, line-height 18px, tracking -0.026px
//   padding — px-16px, py-6px
//   radius — 8px
//   arrow  — 12×8px 삼각형
//   positions — top, bottom, left, right, top-left, top-right

export function Tooltip({
  content,
  placement = 'top',
  children,
  defaultVisible = false,
  className = '',
}: TooltipProps) {
  const [visible, setVisible] = useState(defaultVisible);

  return (
    <div
      className={['relative inline-flex items-center justify-center', className].join(' ')}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      <TooltipBubble content={content} placement={placement} visible={visible} />
    </div>
  );
}
