import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tab } from '../design-system/components/Tab';

const meta = {
  title: 'Components/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#1a1a1a' }],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── 기본 탭 ─────────────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    items: [
      { label: 'Overview', value: 'overview' },
      { label: 'Details', value: 'details' },
      { label: 'Settings', value: 'settings' },
    ],
    defaultValue: 'overview',
  },
};

// ─── 첫 번째 탭이 Active ─────────────────────────────────────────────────────

export const FirstActive: Story = {
  args: {
    items: [
      { label: 'Value', value: 'value1' },
      { label: 'Value', value: 'value2' },
    ],
    defaultValue: 'value1',
  },
};

// ─── 두 번째 탭이 Active ─────────────────────────────────────────────────────

export const SecondActive: Story = {
  args: {
    items: [
      { label: 'Value', value: 'value1' },
      { label: 'Value', value: 'value2' },
    ],
    defaultValue: 'value2',
  },
};

// ─── 비활성 탭 포함 ───────────────────────────────────────────────────────────

export const WithDisabledTab: Story = {
  args: {
    items: [
      { label: 'Active', value: 'active' },
      { label: 'Disabled', value: 'disabled', disabled: true },
      { label: 'Normal', value: 'normal' },
    ],
    defaultValue: 'active',
  },
};

// ─── 여러 탭 ─────────────────────────────────────────────────────────────────

export const ManyTabs: Story = {
  args: {
    items: [
      { label: 'All', value: 'all' },
      { label: 'Frontend', value: 'frontend' },
      { label: 'Backend', value: 'backend' },
      { label: 'DevOps', value: 'devops' },
      { label: 'Design', value: 'design' },
    ],
    defaultValue: 'all',
  },
};

// ─── Controlled (제어 컴포넌트) ───────────────────────────────────────────────

export const Controlled: Story = {
  args: {
    items: [
      { label: 'Tab 1', value: 'tab1' },
      { label: 'Tab 2', value: 'tab2' },
      { label: 'Tab 3', value: 'tab3' },
    ],
  },
  render: () => {
    const [value, setValue] = useState('tab1');
    return (
      <div className="flex flex-col gap-4">
        <Tab
          items={[
            { label: 'Tab 1', value: 'tab1' },
            { label: 'Tab 2', value: 'tab2' },
            { label: 'Tab 3', value: 'tab3' },
          ]}
          value={value}
          onChange={setValue}
        />
        <p style={{ color: '#F7F7F8', fontSize: 14 }}>
          Active: <strong>{value}</strong>
        </p>
      </div>
    );
  },
};
