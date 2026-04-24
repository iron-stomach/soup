import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../design-system/components/Button';

// ─── 아이콘 (스토리용 인라인 SVG) ─────────────────────────────────────────────

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 3.5v9M3.5 8h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#121212' }],
    },
  },
  tags: ['autodocs'],
  args: {
    children: 'Button',
  },
  argTypes: {
    variant: { control: 'select', options: ['solid', 'outline', 'ghost', 'link'] },
    color:   { control: 'select', options: ['primary', 'secondary', 'danger', 'success'] },
    size:    { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    isLoading:  { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    fullWidth:  { control: 'boolean' },
    children: { table: { disable: true } },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// ══════════════════════════════════════════════════════════════════════════════
// Solid (Primary)
// ══════════════════════════════════════════════════════════════════════════════

export const SolidDefault: Story = {
  name: 'Solid / Default',
  args: { variant: 'solid', color: 'primary', size: 'md', children: 'Button' },
};

export const SolidSizes: Story = {
  args: {},
  name: 'Solid / All Sizes',
  render: () => (
    <div className="flex items-center gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Button key={size} variant="solid" color="primary" size={size}>
          Button
        </Button>
      ))}
    </div>
  ),
};

export const SolidWithIcon: Story = {
  args: {},
  name: 'Solid / With Icon',
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="solid" color="primary" size="sm" rightIcon={<ArrowRightIcon />}>Button</Button>
      <Button variant="solid" color="primary" size="md" rightIcon={<ArrowRightIcon />}>Button</Button>
      <Button variant="solid" color="primary" size="lg" rightIcon={<ArrowRightIcon />}>Button</Button>
    </div>
  ),
};

export const SolidDisabled: Story = {
  name: 'Solid / Disabled',
  args: { variant: 'solid', color: 'primary', size: 'md', children: 'Button', isDisabled: true },
};

export const SolidLoading: Story = {
  name: 'Solid / Loading',
  args: { variant: 'solid', color: 'primary', size: 'md', children: 'Saving...', isLoading: true },
};

// ══════════════════════════════════════════════════════════════════════════════
// Ghost (Figma: Button - Ghost Button)
// ══════════════════════════════════════════════════════════════════════════════

export const GhostDefault: Story = {
  name: 'Ghost / Default',
  args: { variant: 'ghost', color: 'primary', size: 'md', children: 'Button' },
};

export const GhostAllStates: Story = {
  args: {},
  name: 'Ghost / All States',
  render: () => (
    <div className="flex flex-col gap-6">
      {/* 상태 레이블 */}
      {(
        [
          { label: 'Default', disabled: false },
          { label: 'Disabled', disabled: true },
        ] as const
      ).map(({ label, disabled }) => (
        <div key={label} className="flex items-center gap-2">
          <span style={{ color: 'rgba(174,176,182,0.61)', fontSize: 12, width: 72 }}>{label}</span>
          <div className="flex items-center gap-3">
            {(['sm', 'md', 'lg'] as const).map((size) => (
              <Button
                key={size}
                variant="ghost"
                color="primary"
                size={size}
                isDisabled={disabled}
              >
                Button
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const GhostSizes: Story = {
  args: {},
  name: 'Ghost / All Sizes',
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="ghost" color="primary" size="sm">Button</Button>
      <Button variant="ghost" color="primary" size="md">Button</Button>
      <Button variant="ghost" color="primary" size="lg">Button</Button>
    </div>
  ),
};

export const GhostWithRightIcon: Story = {
  args: {},
  name: 'Ghost / Text + Icon',
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="ghost" color="primary" size="sm" rightIcon={<ArrowRightIcon />}>Button</Button>
      <Button variant="ghost" color="primary" size="md" rightIcon={<ArrowRightIcon />}>Button</Button>
      <Button variant="ghost" color="primary" size="lg" rightIcon={<ArrowRightIcon />}>Button</Button>
    </div>
  ),
};

export const GhostWithLeftIcon: Story = {
  args: {},
  name: 'Ghost / Icon + Text',
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="ghost" color="primary" size="sm" leftIcon={<PlusIcon />}>Button</Button>
      <Button variant="ghost" color="primary" size="md" leftIcon={<PlusIcon />}>Button</Button>
      <Button variant="ghost" color="primary" size="lg" leftIcon={<PlusIcon />}>Button</Button>
    </div>
  ),
};

export const GhostDisabled: Story = {
  args: {},
  name: 'Ghost / Disabled',
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="ghost" color="primary" size="sm" isDisabled>Button</Button>
      <Button variant="ghost" color="primary" size="md" isDisabled>Button</Button>
      <Button variant="ghost" color="primary" size="lg" isDisabled>Button</Button>
    </div>
  ),
};

/** Figma 스펙 비교: Default(sm) ghost는 수평 패딩 6px */
export const GhostSmPadding: Story = {
  args: {},
  name: 'Ghost / sm vs solid padding 비교',
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span style={{ color: 'rgba(174,176,182,0.61)', fontSize: 12, width: 80 }}>Ghost sm</span>
        <Button variant="ghost" color="primary" size="sm">Button</Button>
        <Button variant="ghost" color="primary" size="sm" rightIcon={<ArrowRightIcon />}>Button</Button>
      </div>
      <div className="flex items-center gap-3">
        <span style={{ color: 'rgba(174,176,182,0.61)', fontSize: 12, width: 80 }}>Solid sm</span>
        <Button variant="solid" color="primary" size="sm">Button</Button>
        <Button variant="solid" color="primary" size="sm" rightIcon={<ArrowRightIcon />}>Button</Button>
      </div>
    </div>
  ),
};

// ══════════════════════════════════════════════════════════════════════════════
// Outline
// ══════════════════════════════════════════════════════════════════════════════

export const OutlineDefault: Story = {
  name: 'Outline / Default',
  args: { variant: 'outline', color: 'primary', size: 'md', children: 'Button' },
};

// ══════════════════════════════════════════════════════════════════════════════
// 전체 Variant × Color 비교
// ══════════════════════════════════════════════════════════════════════════════

export const AllVariants: Story = {
  args: {},
  name: 'All / Variants × Colors',
  render: () => (
    <div className="flex flex-col gap-5">
      {(['solid', 'outline', 'ghost'] as const).map((variant) => (
        <div key={variant} className="flex items-center gap-4">
          <span style={{ color: 'rgba(174,176,182,0.61)', fontSize: 12, width: 56 }}>{variant}</span>
          {(['primary', 'secondary', 'danger', 'success'] as const).map((color) => (
            <Button key={color} variant={variant} color={color} size="md">
              {color}
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
};
