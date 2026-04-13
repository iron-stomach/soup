/**
 * Typography Tokens
 * 디자인 시스템의 타이포그래피 토큰 정의
 */

export const typography = {
  // ─── Font Family ─────────────────────────────────────────────────
  fontFamily: {
    sans: ['Pretendard', 'Noto Sans KR', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
    mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
  },

  // ─── Font Size ───────────────────────────────────────────────────
  fontSize: {
    '2xs': '0.625rem',   // 10px
    xs: '0.75rem',       // 12px
    sm: '0.875rem',      // 14px
    md: '1rem',          // 16px
    lg: '1.125rem',      // 18px
    xl: '1.25rem',       // 20px
    '2xl': '1.5rem',     // 24px
    '3xl': '1.875rem',   // 30px
    '4xl': '2.25rem',    // 36px
    '5xl': '3rem',       // 48px
    '6xl': '3.75rem',    // 60px
  },

  // ─── Font Weight ─────────────────────────────────────────────────
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },

  // ─── Line Height ─────────────────────────────────────────────────
  lineHeight: {
    tight: '1.2',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  // ─── Letter Spacing ──────────────────────────────────────────────
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },

  // ─── Semantic Text Styles ─────────────────────────────────────────
  textStyle: {
    display1: {
      fontSize: '3.75rem',
      fontWeight: '700',
      lineHeight: '1.2',
      letterSpacing: '-0.025em',
    },
    display2: {
      fontSize: '3rem',
      fontWeight: '700',
      lineHeight: '1.2',
      letterSpacing: '-0.025em',
    },
    heading1: {
      fontSize: '2.25rem',
      fontWeight: '700',
      lineHeight: '1.2',
      letterSpacing: '-0.025em',
    },
    heading2: {
      fontSize: '1.875rem',
      fontWeight: '600',
      lineHeight: '1.375',
      letterSpacing: '-0.025em',
    },
    heading3: {
      fontSize: '1.5rem',
      fontWeight: '600',
      lineHeight: '1.375',
    },
    heading4: {
      fontSize: '1.25rem',
      fontWeight: '600',
      lineHeight: '1.5',
    },
    heading5: {
      fontSize: '1.125rem',
      fontWeight: '600',
      lineHeight: '1.5',
    },
    bodyLg: {
      fontSize: '1.125rem',
      fontWeight: '400',
      lineHeight: '1.625',
    },
    bodyMd: {
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '1.5',
    },
    bodySm: {
      fontSize: '0.875rem',
      fontWeight: '400',
      lineHeight: '1.5',
    },
    labelLg: {
      fontSize: '1rem',
      fontWeight: '500',
      lineHeight: '1.5',
    },
    labelMd: {
      fontSize: '0.875rem',
      fontWeight: '500',
      lineHeight: '1.5',
    },
    labelSm: {
      fontSize: '0.75rem',
      fontWeight: '500',
      lineHeight: '1.5',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: '400',
      lineHeight: '1.5',
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: '600',
      lineHeight: '1.5',
      letterSpacing: '0.1em',
      textTransform: 'uppercase' as const,
    },
    code: {
      fontSize: '0.875rem',
      fontWeight: '400',
      lineHeight: '1.625',
      fontFamily: 'JetBrains Mono, Fira Code, monospace',
    },
  },
} as const;

export type TypographyTokens = typeof typography;
