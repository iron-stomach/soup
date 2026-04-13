import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarGroup } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    variant: {
      control: 'select',
      options: ['circle', 'square'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    name: '홍길동',
    size: 'md',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      {(['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map((size) => (
        <Avatar key={size} size={size} name="홍길동" />
      ))}
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <Avatar name="홍길동" variant="circle" />
      <Avatar name="홍길동" variant="square" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      {['Alice Kim', 'Bob Lee', 'Carol Park', 'David Choi', 'Eve Jung'].map((name) => (
        <Avatar key={name} name={name} />
      ))}
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <AvatarGroup
      avatars={[
        { name: 'Alice Kim' },
        { name: 'Bob Lee' },
        { name: 'Carol Park' },
        { name: 'David Choi' },
        { name: 'Eve Jung' },
        { name: 'Frank Oh' },
      ]}
      max={4}
    />
  ),
};
