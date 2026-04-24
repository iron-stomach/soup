import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tab } from './Tab';

const meta: Meta<typeof Tab> = {
  title: 'Components/Tab',
  component: Tab,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Tab>;

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

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('tab1');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Tab
          items={[
            { label: 'Tab 1', value: 'tab1' },
            { label: 'Tab 2', value: 'tab2' },
            { label: 'Tab 3', value: 'tab3' },
          ]}
          value={value}
          onChange={setValue}
        />
        <p style={{ color: '#F7F7F8', fontSize: 14, margin: 0 }}>
          Active: <strong>{value}</strong>
        </p>
      </div>
    );
  },
};
