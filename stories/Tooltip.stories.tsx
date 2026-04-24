import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '../design-system/components/Tooltip';

// 트리거 버튼 헬퍼
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

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    // 스토리북 controls 패널에서 트리거로 사용할 기본 children
    children: <TriggerButton />,
  },
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right', 'top-left', 'top-right'],
    },
    children: { table: { disable: true } },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── 기본 (top) ───────────────────────────────────────────────────────────────

export const Top: Story = {
  args: { content: 'Text', placement: 'top' },
  render: (args) => <Tooltip {...args}><TriggerButton /></Tooltip>,
};

// ─── Bottom ───────────────────────────────────────────────────────────────────

export const Bottom: Story = {
  args: { content: 'Text', placement: 'bottom' },
  render: (args) => <Tooltip {...args}><TriggerButton /></Tooltip>,
};

// ─── Left ─────────────────────────────────────────────────────────────────────

export const Left: Story = {
  args: { content: 'Text', placement: 'left' },
  render: (args) => <Tooltip {...args}><TriggerButton /></Tooltip>,
};

// ─── Right ────────────────────────────────────────────────────────────────────

export const Right: Story = {
  args: { content: 'Text', placement: 'right' },
  render: (args) => <Tooltip {...args}><TriggerButton /></Tooltip>,
};

// ─── Top-Left ─────────────────────────────────────────────────────────────────

export const TopLeft: Story = {
  args: { content: 'Text', placement: 'top-left' },
  render: (args) => <Tooltip {...args}><TriggerButton /></Tooltip>,
};

// ─── Top-Right ────────────────────────────────────────────────────────────────

export const TopRight: Story = {
  args: { content: 'Text', placement: 'top-right' },
  render: (args) => <Tooltip {...args}><TriggerButton /></Tooltip>,
};

// ─── 긴 텍스트 ────────────────────────────────────────────────────────────────

export const LongText: Story = {
  args: { content: '더 자세한 안내 문구를 여기에 넣을 수 있습니다.', placement: 'top' },
  render: (args) => <Tooltip {...args}><TriggerButton /></Tooltip>,
};

// ─── 전체 방향 비교 ───────────────────────────────────────────────────────────

export const AllPlacements: Story = {
  args: { content: 'Text', children: <TriggerButton /> },
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
          'top-left',
          'top',
          'top-right',
          'left',
          null,
          'right',
          null,
          'bottom',
          null,
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
