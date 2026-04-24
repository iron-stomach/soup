import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0f0f11' }],
    },
    layout: 'centered',
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['disable', 'default', 'enable'],
      description: '인풋 상태',
    },
    layout: {
      control: 'select',
      options: ['expanded', 'compact'],
      description: '레이아웃 타입',
    },
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// ─── Label helper ─────────────────────────────────────────────────────────────

const sectionLabel: React.CSSProperties = {
  fontFamily: 'Pretendard Variable, Pretendard, sans-serif',
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.3)',
  marginBottom: 12,
};

// ─── Stories ─────────────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    state: 'default',
    layout: 'expanded',
    placeholder: '무엇이든 물어보고 만들어보세요',
  },
};

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div
      style={{
        padding: 40,
        display: 'flex',
        gap: 48,
        alignItems: 'flex-start',
        minWidth: 900,
      }}
    >
      {/* Expanded column */}
      <div style={{ flex: 1 }}>
        <p style={sectionLabel}>Expanded</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Input state="disable" layout="expanded" />
          <Input state="default" layout="expanded" />
          <Input state="enable" layout="expanded" value="무엇이든 물어보고 만들어보세요" />
        </div>
      </div>

      {/* Compact column */}
      <div style={{ flex: 1 }}>
        <p style={sectionLabel}>Compact</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
          <Input state="disable" layout="compact" />
          <Input state="default" layout="compact" />
          <Input state="enable" layout="compact" value="무엇이든 물어보고 만들어보세요" />
        </div>
      </div>
    </div>
  ),
};

export const Expanded: Story = {
  name: 'Expanded — All States',
  render: () => (
    <div style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 16, minWidth: 820 }}>
      <Input state="disable" layout="expanded" />
      <Input state="default" layout="expanded" />
      <Input state="enable" layout="expanded" value="무엇이든 물어보고 만들어보세요" />
    </div>
  ),
};

export const Compact: Story = {
  name: 'Compact — All States',
  render: () => (
    <div style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
      <Input state="disable" layout="compact" />
      <Input state="default" layout="compact" />
      <Input state="enable" layout="compact" value="무엇이든 물어보고 만들어보세요" />
    </div>
  ),
};

export const Interactive: Story = {
  name: 'Interactive (Expanded)',
  render: () => {
    const Demo = () => {
      const [value, setValue] = React.useState('');
      const state = value.length > 0 ? 'enable' : 'default';

      return (
        <div style={{ padding: 40, minWidth: 820 }}>
          <Input
            state={state}
            layout="expanded"
            value={value}
            onChange={setValue}
            onSubmit={() => setValue('')}
            onAttach={() => {}}
          />
        </div>
      );
    };
    return <Demo />;
  },
};

export const InteractiveCompact: Story = {
  name: 'Interactive (Compact)',
  render: () => {
    const Demo = () => {
      const [value, setValue] = React.useState('');
      const state = value.length > 0 ? 'enable' : 'default';

      return (
        <div style={{ padding: 40 }}>
          <Input
            state={state}
            layout="compact"
            value={value}
            onChange={setValue}
            onSubmit={() => setValue('')}
          />
        </div>
      );
    };
    return <Demo />;
  },
};

export const Disable: Story = {
  args: {
    state: 'disable',
    layout: 'expanded',
  },
};

export const Enable: Story = {
  args: {
    state: 'enable',
    layout: 'expanded',
    value: '무엇이든 물어보고 만들어보세요',
  },
};
