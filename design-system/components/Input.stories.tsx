import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { SearchIcon, EyeIcon } from '../icons';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'filled', 'flushed'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    isInvalid: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isRequired: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: '이름',
    placeholder: '홍길동',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Input label="Outline" placeholder="기본 스타일" variant="outline" />
      <Input label="Filled" placeholder="배경 채움 스타일" variant="filled" />
      <Input label="Flushed" placeholder="밑줄 스타일" variant="flushed" />
    </div>
  ),
};

export const WithHelperText: Story = {
  args: {
    label: '이메일',
    placeholder: 'hello@example.com',
    helperText: '업무용 이메일을 입력해주세요',
  },
};

export const WithError: Story = {
  args: {
    label: '이메일',
    placeholder: 'hello@example.com',
    isInvalid: true,
    errorMessage: '올바른 이메일 형식이 아닙니다.',
  },
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Input label="검색" placeholder="검색어를 입력하세요" leftElement={<SearchIcon size={16} />} />
      <Input label="비밀번호" type="password" placeholder="비밀번호" rightElement={<EyeIcon size={16} />} />
    </div>
  ),
};

export const WithAddon: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Input label="웹사이트" leftAddon="https://" placeholder="example.com" />
      <Input label="가격" rightAddon="원" placeholder="10,000" />
    </div>
  ),
};

export const Required: Story = {
  args: {
    label: '필수 입력',
    placeholder: '필수 항목입니다',
    isRequired: true,
  },
};

export const Disabled: Story = {
  args: {
    label: '비활성화',
    placeholder: '입력 불가',
    isDisabled: true,
  },
};
