import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardBody, CardFooter } from './Card';
import { Button } from './Button';
import { EditIcon } from '../icons';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outline', 'filled', 'unstyled'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    isHoverable: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card style={{ maxWidth: 360 }}>
      <CardHeader>
        <p style={{ fontWeight: 600 }}>카드 제목</p>
        <p style={{ fontSize: 14, color: '#737373' }}>카드 부제목</p>
      </CardHeader>
      <CardBody>
        <p style={{ fontSize: 14, color: '#525252' }}>카드 본문 영역입니다. 자유롭게 콘텐츠를 배치할 수 있습니다.</p>
      </CardBody>
      <CardFooter divider>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
          <Button size="sm" variant="ghost" color="secondary">취소</Button>
          <Button size="sm">확인</Button>
        </div>
      </CardFooter>
    </Card>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
      <Card variant="elevated">
        <CardBody><p style={{ fontSize: 14 }}>Elevated</p></CardBody>
      </Card>
      <Card variant="outline">
        <CardBody><p style={{ fontSize: 14 }}>Outline</p></CardBody>
      </Card>
      <Card variant="filled">
        <CardBody><p style={{ fontSize: 14 }}>Filled</p></CardBody>
      </Card>
    </div>
  ),
};

export const Hoverable: Story = {
  render: () => (
    <Card isHoverable style={{ maxWidth: 300 }}>
      <CardHeader>
        <p style={{ fontWeight: 600 }}>호버 효과</p>
      </CardHeader>
      <CardBody>
        <p style={{ fontSize: 14, color: '#525252' }}>마우스를 올려보세요.</p>
      </CardBody>
    </Card>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Card style={{ maxWidth: 360 }}>
      <CardHeader actions={<EditIcon size={16} style={{ color: '#ABABAB' }} />}>
        <p style={{ fontWeight: 600 }}>액션 버튼</p>
        <p style={{ fontSize: 14, color: '#737373' }}>헤더 우측에 액션 배치</p>
      </CardHeader>
      <CardBody>
        <p style={{ fontSize: 14, color: '#525252' }}>actions prop으로 헤더 우측에 버튼을 배치할 수 있습니다.</p>
      </CardBody>
    </Card>
  ),
};
