import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    variant: {
      control: 'select',
      options: ['subtle', 'solid', 'left-accent'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    status: 'info',
    title: '안내',
    description: '시스템 점검이 예정되어 있습니다.',
  },
};

export const Statuses: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Alert status="info" title="안내" description="시스템 점검이 예정되어 있습니다." />
      <Alert status="success" title="완료" description="변경사항이 성공적으로 저장되었습니다." />
      <Alert status="warning" title="주의" description="저장하지 않은 변경사항이 있습니다." />
      <Alert status="error" title="오류" description="요청을 처리하는 중 오류가 발생했습니다." />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Alert status="info" variant="subtle" title="Subtle" description="기본 스타일입니다." />
      <Alert status="info" variant="solid" title="Solid" description="배경색이 강조된 스타일입니다." />
      <Alert status="info" variant="left-accent" title="Left Accent" description="왼쪽 강조선 스타일입니다." />
    </div>
  ),
};

export const WithClose: Story = {
  args: {
    status: 'info',
    title: '닫기 버튼',
    description: '오른쪽 X 버튼으로 닫을 수 있습니다.',
    onClose: () => alert('닫기 클릭!'),
  },
};
