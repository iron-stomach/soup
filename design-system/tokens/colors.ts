/**
 * Color Tokens
 * 디자인 시스템의 컬러 토큰 정의
 */

export const colors = {
  // ─── Primitive Colors ───────────────────────────────────────────
  primitive: {
    white: '#FFFFFF',
    black: '#0A0A0A',

    gray: {
      50: '#F9F9F9',
      100: '#F3F3F3',
      200: '#E8E8E8',
      300: '#D4D4D4',
      400: '#ABABAB',
      500: '#737373',
      600: '#525252',
      700: '#3B3B3B',
      800: '#262626',
      900: '#171717',
      950: '#0F0F0F',
    },

    blue: {
      50: '#EFF6FF',
      100: '#DBEAFE',
      200: '#BFDBFE',
      300: '#93C5FD',
      400: '#60A5FA',
      500: '#3B82F6',
      600: '#2563EB',
      700: '#1D4ED8',
      800: '#1E40AF',
      900: '#1E3A8A',
    },

    green: {
      50: '#F0FDF4',
      100: '#DCFCE7',
      200: '#BBF7D0',
      300: '#86EFAC',
      400: '#4ADE80',
      500: '#22C55E',
      600: '#16A34A',
      700: '#15803D',
      800: '#166534',
      900: '#14532D',
    },

    red: {
      50: '#FFF1F2',
      100: '#FFE4E6',
      200: '#FECDD3',
      300: '#FDA4AF',
      400: '#FB7185',
      500: '#F43F5E',
      600: '#E11D48',
      700: '#BE123C',
      800: '#9F1239',
      900: '#881337',
    },

    yellow: {
      50: '#FEFCE8',
      100: '#FEF9C3',
      200: '#FEF08A',
      300: '#FDE047',
      400: '#FACC15',
      500: '#EAB308',
      600: '#CA8A04',
      700: '#A16207',
      800: '#854D0E',
      900: '#713F12',
    },
  },

  // ─── Semantic Colors ─────────────────────────────────────────────
  semantic: {
    // Brand
    brand: {
      primary: '#3B82F6',
      primaryHover: '#2563EB',
      primaryActive: '#1D4ED8',
      primarySubtle: '#EFF6FF',
    },

    // Text
    text: {
      primary: '#0A0A0A',
      secondary: '#525252',
      tertiary: '#737373',
      disabled: '#ABABAB',
      inverse: '#FFFFFF',
      link: '#3B82F6',
      linkHover: '#2563EB',
    },

    // Background
    bg: {
      default: '#FFFFFF',
      subtle: '#F9F9F9',
      muted: '#F3F3F3',
      emphasis: '#0A0A0A',
      overlay: 'rgba(10, 10, 10, 0.5)',
    },

    // Border
    border: {
      default: '#E8E8E8',
      strong: '#D4D4D4',
      focus: '#3B82F6',
    },

    // Status
    status: {
      success: '#22C55E',
      successSubtle: '#F0FDF4',
      warning: '#EAB308',
      warningSubtle: '#FEFCE8',
      error: '#F43F5E',
      errorSubtle: '#FFF1F2',
      info: '#3B82F6',
      infoSubtle: '#EFF6FF',
    },
  },
} as const;

export type ColorTokens = typeof colors;
