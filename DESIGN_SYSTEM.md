# Design System

**Next.js 16 + TypeScript + Tailwind CSS v4** 기반 디자인 시스템

---

## 프로젝트 구조

```
design-system/          ← 디자인 시스템 루트
├── tokens/             ← 디자인 토큰
│   ├── colors.ts       ← 컬러 (Primitive / Semantic)
│   ├── typography.ts   ← 타이포그래피 (폰트, 크기, 굵기, 스타일)
│   ├── spacing.ts      ← 간격, 반경, 그림자, z-index, 전환
│   └── index.ts        ← 통합 export
├── components/         ← UI 컴포넌트
│   ├── Button.tsx      ← 버튼 (variant, color, size, icon, loading)
│   ├── Input.tsx       ← 인풋 (label, error, addon, element)
│   ├── Badge.tsx       ← 뱃지 & 태그
│   ├── Card.tsx        ← 카드 (Header, Body, Footer)
│   ├── Avatar.tsx      ← 아바타 & 아바타 그룹
│   ├── Alert.tsx       ← 알림 (info, success, warning, error)
│   ├── Skeleton.tsx    ← 스켈레톤 로딩 (Skeleton, SkeletonText, SkeletonCard)
│   └── index.ts        ← 통합 export
├── patterns/           ← 레이아웃 패턴
│   ├── Stack.tsx       ← Stack, HStack, VStack, Grid, GridItem, Divider
│   ├── Form.tsx        ← Form, FormControl, FormLabel, FormHelperText, FormErrorMessage
│   └── index.ts        ← 통합 export
├── icons/              ← 아이콘 컴포넌트
│   └── index.tsx       ← SVG 아이콘 (20개+)
└── index.ts            ← 전체 통합 export
```

---

## 시작하기

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 접속 시 컴포넌트 쇼케이스 페이지를 볼 수 있습니다.

---

## 사용법

### 전체 import

```tsx
import { Button, Badge, Card, Input } from '@/design-system'
import { colors, spacing } from '@/design-system/tokens'
import { HStack, VStack, Grid } from '@/design-system/patterns'
import { SearchIcon } from '@/design-system/icons'
```

---

## 토큰

### Colors

```ts
import { colors } from '@/design-system/tokens'

// Primitive
colors.primitive.blue[500]         // '#3B82F6'

// Semantic
colors.semantic.text.primary       // '#0A0A0A'
colors.semantic.status.success     // '#22C55E'
colors.semantic.bg.subtle          // '#F9F9F9'
```

### Typography

```ts
import { typography } from '@/design-system/tokens'

typography.textStyle.heading1.fontSize    // '2.25rem'
typography.fontWeight.semibold           // '600'
typography.lineHeight.normal             // '1.5'
```

### Spacing / Shadow / Radius

```ts
import { spacing, shadow, radius, zIndex } from '@/design-system/tokens'

spacing[4]        // '1rem'
shadow.md         // '0 4px 6px ...'
radius.xl         // '0.75rem'
zIndex.modal      // 40
```

---

## 컴포넌트

### Button

```tsx
<Button variant="solid" color="primary" size="md">클릭</Button>
<Button variant="outline" color="danger" leftIcon={<TrashIcon size={16} />}>삭제</Button>
<Button isLoading>저장 중</Button>
<Button isDisabled>비활성화</Button>
```

| Prop | Type | Default |
|------|------|---------|
| `variant` | `solid \| outline \| ghost \| link` | `solid` |
| `color` | `primary \| secondary \| danger \| success` | `primary` |
| `size` | `xs \| sm \| md \| lg \| xl` | `md` |
| `isLoading` | `boolean` | `false` |
| `isDisabled` | `boolean` | `false` |
| `leftIcon` | `ReactNode` | - |
| `rightIcon` | `ReactNode` | - |
| `fullWidth` | `boolean` | `false` |

### Input

```tsx
<Input label="이메일" placeholder="hello@example.com" helperText="업무용 이메일" />
<Input label="검색" leftElement={<SearchIcon size={16} />} variant="filled" />
<Input label="URL" leftAddon="https://" placeholder="example.com" />
<Input label="오류" isInvalid errorMessage="올바른 값을 입력하세요." />
```

### Badge

```tsx
<Badge variant="subtle" color="blue">신규</Badge>
<Badge variant="solid" color="green" dot>Active</Badge>
```

### Card

```tsx
<Card variant="elevated">
  <CardHeader actions={<EditIcon size={16} />}>
    <p className="font-semibold">제목</p>
  </CardHeader>
  <CardBody>
    <p>본문 내용</p>
  </CardBody>
  <CardFooter divider>
    <Button size="sm">확인</Button>
  </CardFooter>
</Card>
```

### Avatar

```tsx
<Avatar name="홍길동" size="md" />
<Avatar src="/photo.jpg" alt="프로필" />
<AvatarGroup avatars={[{ name: 'Alice' }, { name: 'Bob' }]} max={3} />
```

### Alert

```tsx
<Alert status="success" title="완료" description="저장되었습니다." />
<Alert status="error" variant="left-accent" title="오류" onClose={() => {}} />
```

### Skeleton

```tsx
<Skeleton width={200} height={20} />
<Skeleton variant="circular" width={40} height={40} />
<SkeletonText lines={3} lastLineWidth="60%" />
<SkeletonCard />
```

---

## 패턴

### Stack / HStack / VStack

```tsx
<VStack gap={4}>
  <p>위</p>
  <p>아래</p>
</VStack>

<HStack gap={2} align="center" justify="between">
  <span>왼쪽</span>
  <span>오른쪽</span>
</HStack>
```

### Grid

```tsx
<Grid cols={{ sm: 1, md: 2, lg: 3 }} gap={4}>
  <Card>...</Card>
  <Card>...</Card>
</Grid>
```

### Form

```tsx
<Form onSubmit={handleSubmit}>
  <FormControl id="email" isRequired isInvalid={!!error}>
    <FormLabel>이메일</FormLabel>
    <Input placeholder="hello@example.com" />
    <FormHelperText>업무용 이메일을 입력하세요</FormHelperText>
    <FormErrorMessage>이메일 형식이 올바르지 않습니다</FormErrorMessage>
  </FormControl>
</Form>
```

### Divider

```tsx
<Divider />
<Divider label="또는" />
<Divider orientation="vertical" />
```

---

## Tailwind CSS v4 테마 변수

`app/globals.css`에서 CSS 변수로 정의된 시맨틱 토큰을 사용할 수 있습니다.

```css
/* 예시 */
.my-element {
  color: var(--color-text-primary);
  background: var(--color-bg-subtle);
  border-color: var(--color-border-default);
}
```

---

## 아이콘

```tsx
import { SearchIcon, CheckIcon, PlusIcon, TrashIcon, EditIcon } from '@/design-system/icons'

<SearchIcon size={20} />
<CheckIcon size={16} color="#22C55E" strokeWidth={2.5} />
```

모든 아이콘은 `size`, `color`, `strokeWidth` props를 지원하며 `SVGProps`를 상속합니다.
