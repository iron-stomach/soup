import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'subtle', 'outline'],
    },
    color: {
      control: 'select',
      options: ['gray', 'blue', 'green', 'yellow', 'red'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    dot: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'subtle',
    color: 'blue',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Badge variant="solid" color="blue">Solid</Badge>
      <Badge variant="subtle" color="blue">Subtle</Badge>
      <Badge variant="outline" color="blue">Outline</Badge>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Badge color="gray">Gray</Badge>
      <Badge color="blue">Blue</Badge>
      <Badge color="green">Green</Badge>
      <Badge color="yellow">Yellow</Badge>
      <Badge color="red">Red</Badge>
    </div>
  ),
};

export const WithDot: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Badge color="green" dot>Active</Badge>
      <Badge color="yellow" dot>Pending</Badge>
      <Badge color="red" dot>Error</Badge>
      <Badge color="gray" dot>Inactive</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Badge size="sm" color="blue">Small</Badge>
      <Badge size="md" color="blue">Medium</Badge>
      <Badge size="lg" color="blue">Large</Badge>
    </div>
  ),
};
