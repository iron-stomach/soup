import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Chip, PlusIcon, CloseIcon } from '../design-system/components/Chip';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#1a1a1a' }],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'filled'],
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Default (outline, 텍스트만) ──────────────────────────────────────────────

export const Default: Story = {
  args: {
    label: 'Label',
    variant: 'outline',
    selected: false,
  },
};

// ─── 아이콘 포함 ──────────────────────────────────────────────────────────────

export const WithIcons: Story = {
  args: {
    label: 'Label',
    leftIcon: <PlusIcon />,
    rightIcon: <PlusIcon />,
  },
};

// ─── Selected (Active) ────────────────────────────────────────────────────────

export const Selected: Story = {
  args: {
    label: 'Label',
    selected: true,
    leftIcon: <PlusIcon />,
    rightIcon: <PlusIcon />,
  },
};

// ─── Filled ───────────────────────────────────────────────────────────────────

export const Filled: Story = {
  args: {
    label: 'Label',
    variant: 'filled',
    leftIcon: <PlusIcon />,
    rightIcon: <PlusIcon />,
  },
};

// ─── Close 아이콘 ─────────────────────────────────────────────────────────────

export const WithClose: Story = {
  args: {
    label: 'React',
    rightIcon: <CloseIcon />,
  },
};

// ─── 전체 상태 비교 ───────────────────────────────────────────────────────────

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span style={{ color: '#878A93', fontSize: 12, width: 64 }}>Default</span>
        <Chip label="Label" leftIcon={<PlusIcon />} rightIcon={<PlusIcon />} />
      </div>
      <div className="flex items-center gap-3">
        <span style={{ color: '#878A93', fontSize: 12, width: 64 }}>Selected</span>
        <Chip label="Label" selected leftIcon={<PlusIcon />} rightIcon={<PlusIcon />} />
      </div>
      <div className="flex items-center gap-3">
        <span style={{ color: '#878A93', fontSize: 12, width: 64 }}>Filled</span>
        <Chip label="Label" variant="filled" leftIcon={<PlusIcon />} rightIcon={<PlusIcon />} />
      </div>
      <div className="flex items-center gap-3">
        <span style={{ color: '#878A93', fontSize: 12, width: 64 }}>Disabled</span>
        <Chip label="Label" disabled leftIcon={<PlusIcon />} rightIcon={<PlusIcon />} />
      </div>
    </div>
  ),
};

// ─── Toggle 예시 (선택/해제) ──────────────────────────────────────────────────

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
      <div className="flex flex-wrap gap-2">
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
