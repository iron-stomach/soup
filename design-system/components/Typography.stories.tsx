import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Styleguide/Typography',
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#171719' }],
    },
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

// ─── Type Scale Data ──────────────────────────────────────────────────────────

interface TypeSpec {
  name: string;
  fontSize: string;
  fontWeight: number;
  letterSpacing: string;
}

interface TypeCategory {
  category: string;
  specs: TypeSpec[];
}

const typeScale: TypeCategory[] = [
  {
    category: 'Display',
    specs: [
      { name: 'Display L', fontSize: '56px', fontWeight: 600, letterSpacing: '-1px' },
      { name: 'Display M', fontSize: '48px', fontWeight: 600, letterSpacing: '-1px' },
      { name: 'Display S', fontSize: '40px', fontWeight: 600, letterSpacing: '-0.01em' },
    ],
  },
  {
    category: 'Title',
    specs: [
      { name: 'Title L',  fontSize: '32px', fontWeight: 600, letterSpacing: '-0.2px' },
      { name: 'Title M',  fontSize: '28px', fontWeight: 600, letterSpacing: '-0.2px' },
      { name: 'Title S',  fontSize: '24px', fontWeight: 600, letterSpacing: '-0.002em' },
      { name: 'Title XS', fontSize: '18px', fontWeight: 600, letterSpacing: '-0.002em' },
    ],
  },
  {
    category: 'Heading',
    specs: [
      { name: 'Heading L',  fontSize: '24px', fontWeight: 500, letterSpacing: '0' },
      { name: 'Heading M',  fontSize: '20px', fontWeight: 500, letterSpacing: '0' },
      { name: 'Heading S',  fontSize: '18px', fontWeight: 500, letterSpacing: '0' },
      { name: 'Heading XS', fontSize: '15px', fontWeight: 500, letterSpacing: '-0.002em' },
    ],
  },
  {
    category: 'Body',
    specs: [
      { name: 'Body L', fontSize: '18px', fontWeight: 250, letterSpacing: '0' },
      { name: 'Body M', fontSize: '16px', fontWeight: 250, letterSpacing: '0' },
      { name: 'Body S', fontSize: '14px', fontWeight: 250, letterSpacing: '0' },
    ],
  },
  {
    category: 'Caption',
    specs: [
      { name: 'Caption L', fontSize: '13px', fontWeight: 400, letterSpacing: '-0.002em' },
      { name: 'Caption M', fontSize: '12px', fontWeight: 400, letterSpacing: '0.2px' },
      { name: 'Caption S', fontSize: '11px', fontWeight: 400, letterSpacing: '0.2px' },
    ],
  },
  {
    category: 'Label',
    specs: [
      { name: 'Label L', fontSize: '18px', fontWeight: 580, letterSpacing: '0.002em' },
      { name: 'Label M', fontSize: '16px', fontWeight: 580, letterSpacing: '0' },
      { name: 'Label S', fontSize: '14px', fontWeight: 580, letterSpacing: '-0.01em' },
    ],
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Display: '#7B61FF',
  Title:   '#4DABF7',
  Heading: '#69DB7C',
  Body:    '#FFA94D',
  Caption: '#F783AC',
  Label:   '#A9E34B',
};

const SAMPLE_TEXT = 'The quick brown fox jumps over the lazy dog';

// ─── Sub-components ───────────────────────────────────────────────────────────

function formatTracking(letterSpacing: string): string {
  return letterSpacing === '0' ? '—' : letterSpacing;
}

function TypeRow({ spec, accentColor }: { spec: TypeSpec; accentColor: string }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '160px 1fr 220px',
        alignItems: 'center',
        gap: '24px',
        padding: '18px 0',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Style name */}
      <span
        style={{
          fontFamily: 'Pretendard Variable, Pretendard, sans-serif',
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.06em',
          textTransform: 'uppercase' as const,
          color: accentColor,
        }}
      >
        {spec.name}
      </span>

      {/* Rendered preview */}
      <span
        style={{
          fontFamily: 'Pretendard Variable, Pretendard, sans-serif',
          fontSize: spec.fontSize,
          fontWeight: spec.fontWeight,
          letterSpacing: spec.letterSpacing,
          color: '#FFFFFF',
          lineHeight: 1.2,
          display: 'block',
          whiteSpace: 'nowrap' as const,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {SAMPLE_TEXT}
      </span>

      {/* Spec */}
      <span
        style={{
          fontFamily: 'Pretendard Variable, Pretendard, sans-serif',
          fontSize: '11px',
          fontWeight: 400,
          color: 'rgba(255,255,255,0.4)',
          letterSpacing: '0.02em',
          textAlign: 'right' as const,
        }}
      >
        {spec.fontSize} / {spec.fontWeight} / {formatTracking(spec.letterSpacing)}
      </span>
    </div>
  );
}

function TypeSection({ category, specs }: { category: string; specs: TypeSpec[] }) {
  const color = CATEGORY_COLORS[category] ?? '#FFFFFF';

  return (
    <section style={{ marginBottom: '52px' }}>
      {/* Section header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          paddingBottom: '12px',
          marginBottom: '4px',
          borderBottom: `2px solid ${color}`,
        }}
      >
        <div
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            backgroundColor: color,
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontFamily: 'Pretendard Variable, Pretendard, sans-serif',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase' as const,
            color,
          }}
        >
          {category}
        </span>

        {/* Column labels */}
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '24px' }}>
          <span
            style={{
              fontFamily: 'Pretendard Variable, Pretendard, sans-serif',
              fontSize: '10px',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.22)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase' as const,
            }}
          >
            Preview
          </span>
          <span
            style={{
              fontFamily: 'Pretendard Variable, Pretendard, sans-serif',
              fontSize: '10px',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.22)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase' as const,
            }}
          >
            Size / Weight / Tracking
          </span>
        </div>
      </div>

      {specs.map((spec) => (
        <TypeRow key={spec.name} spec={spec} accentColor={color} />
      ))}
    </section>
  );
}

function TypographyPage({ filter }: { filter?: string }) {
  const categories = filter
    ? typeScale.filter((c) => c.category === filter)
    : typeScale;

  return (
    <div
      style={{
        backgroundColor: '#171719',
        minHeight: '100vh',
        padding: '64px 48px',
        boxSizing: 'border-box' as const,
      }}
    >
      {/* Page header */}
      <div style={{ marginBottom: '56px' }}>
        <p
          style={{
            fontFamily: 'Pretendard Variable, Pretendard, sans-serif',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.14em',
            textTransform: 'uppercase' as const,
            color: 'rgba(255,255,255,0.28)',
            margin: '0 0 8px',
          }}
        >
          Styleguide
        </p>
        <h1
          style={{
            fontFamily: 'Pretendard Variable, Pretendard, sans-serif',
            fontSize: '32px',
            fontWeight: 600,
            letterSpacing: '-0.2px',
            color: '#FFFFFF',
            margin: '0 0 6px',
          }}
        >
          {filter ?? 'Typography'}
        </h1>
        <p
          style={{
            fontFamily: 'Pretendard Variable, Pretendard, sans-serif',
            fontSize: '14px',
            fontWeight: 250,
            color: 'rgba(255,255,255,0.38)',
            margin: 0,
          }}
        >
          Font family: Pretendard Variable
        </p>
      </div>

      {categories.map(({ category, specs }) => (
        <TypeSection key={category} category={category} specs={specs} />
      ))}
    </div>
  );
}

// ─── Stories ──────────────────────────────────────────────────────────────────

export const All: Story = {
  name: 'All',
  render: () => <TypographyPage />,
};

export const Display: Story = {
  name: 'Display',
  render: () => <TypographyPage filter="Display" />,
};

export const Title: Story = {
  name: 'Title',
  render: () => <TypographyPage filter="Title" />,
};

export const Heading: Story = {
  name: 'Heading',
  render: () => <TypographyPage filter="Heading" />,
};

export const Body: Story = {
  name: 'Body',
  render: () => <TypographyPage filter="Body" />,
};

export const Caption: Story = {
  name: 'Caption',
  render: () => <TypographyPage filter="Caption" />,
};

export const Label: Story = {
  name: 'Label',
  render: () => <TypographyPage filter="Label" />,
};
