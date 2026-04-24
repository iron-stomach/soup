import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipPlacement } from './Tooltip';

const TriggerButton = () => (
  <button
    style={{
      padding: '8px 16px',
      borderRadius: 6,
      background: '#2a2a2a',
      border: '1px solid rgba(112,115,124,0.32)',
      color: '#F7F7F8',
      fontSize: 14,
      cursor: 'pointer',
    }}
  >
    Hover me
  </button>
);

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right', 'top-left', 'top-right'],
    },
    children: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: 'Tooltip text',
    placement: 'top',
  },
  render: (args) => (
    <Tooltip {...args}>
      <TriggerButton />
    </Tooltip>
  ),
};

export const Placements: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      {(['top', 'bottom', 'left', 'right', 'top-left', 'top-right'] as TooltipPlacement[]).map(
        (placement) => (
          <Tooltip key={placement} content="Text" placement={placement} defaultVisible>
            <button
              style={{
                padding: '6px 12px',
                borderRadius: 6,
                background: '#2a2a2a',
                border: '1px solid rgba(112,115,124,0.32)',
                color: '#F7F7F8',
                fontSize: 13,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {placement}
            </button>
          </Tooltip>
        )
      )}
    </div>
  ),
};

export const LongText: Story = {
  args: {
    content: '더 자세한 안내 문구를 여기에 넣을 수 있습니다.',
    placement: 'top',
  },
  render: (args) => (
    <Tooltip {...args}>
      <TriggerButton />
    </Tooltip>
  ),
};

export const AllPlacements: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 140px)',
        gap: '48px',
        placeItems: 'center',
        padding: '80px',
      }}
    >
      {(
        [
          'top-left', 'top', 'top-right',
          'left',      null,  'right',
          null,        'bottom', null,
        ] as const
      ).map((placement, i) =>
        placement ? (
          <Tooltip key={i} content="Text" placement={placement} defaultVisible>
            <button
              style={{
                padding: '6px 12px',
                borderRadius: 6,
                background: '#2a2a2a',
                border: '1px solid rgba(112,115,124,0.32)',
                color: '#F7F7F8',
                fontSize: 13,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {placement}
            </button>
          </Tooltip>
        ) : (
          <div key={i} />
        )
      )}
    </div>
  ),
};
