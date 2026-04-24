import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Chip, PlusIcon, CloseIcon } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'filled'],
    },
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    label: 'Label',
    variant: 'outline',
    selected: false,
  },
};

export const Selected: Story = {
  args: {
    label: 'Label',
    selected: true,
  },
};

export const Filled: Story = {
  args: {
    label: 'Label',
    variant: 'filled',
  },
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Chip label="Left Icon" leftIcon={<PlusIcon />} />
      <Chip label="Right Icon" rightIcon={<CloseIcon />} />
      <Chip label="Both Icons" leftIcon={<PlusIcon />} rightIcon={<CloseIcon />} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {[
        { label: 'Default', props: {} },
        { label: 'Selected', props: { selected: true } },
        { label: 'Filled', props: { variant: 'filled' as const } },
        { label: 'Disabled', props: { disabled: true } },
      ].map(({ label, props }) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ color: '#878A93', fontSize: 12, width: 64 }}>{label}</span>
          <Chip label="Label" leftIcon={<PlusIcon />} rightIcon={<CloseIcon />} {...props} />
        </div>
      ))}
    </div>
  ),
};

export const ToggleGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(['react']);
    const tags = ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Figma'];

    const toggle = (tag: string) => {
      const key = tag.toLowerCase();
      setSelected((prev) =>
        prev.includes(key) ? prev.filter((t) => t !== key) : [...prev, key]
      );
    };

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            selected={selected.includes(tag.toLowerCase())}
            onClick={() => toggle(tag)}
          />
        ))}
      </div>
    );
  },
};
