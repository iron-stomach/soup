import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton, SkeletonText, SkeletonCard } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['rectangular', 'circular', 'text'],
    },
    animate: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    width: 200,
    height: 20,
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Skeleton width={200} height={16} variant="text" />
      <Skeleton width={200} height={80} variant="rectangular" />
      <Skeleton width={48} height={48} variant="circular" />
    </div>
  ),
};

export const Text: Story = {
  render: () => (
    <SkeletonText lines={4} lastLineWidth="60%" />
  ),
};

export const Card: Story = {
  render: () => (
    <div style={{ maxWidth: 360 }}>
      <SkeletonCard />
    </div>
  ),
};

export const ProfileRow: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, maxWidth: 360 }}>
      <Skeleton variant="circular" width={40} height={40} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Skeleton height={14} width="50%" variant="text" />
        <Skeleton height={12} width="70%" variant="text" />
      </div>
    </div>
  ),
};
