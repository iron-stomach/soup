import {
  Button,
  Badge,
  Card, CardHeader, CardBody, CardFooter,
  Input,
  Avatar, AvatarGroup,
  Alert,
  Skeleton, SkeletonText,
} from '@/design-system/components';
import { HStack, VStack, Grid, Divider } from '@/design-system/patterns';
import {
  SearchIcon, CheckIcon, PlusIcon, TrashIcon, EditIcon,
  AlertCircleIcon, CheckCircleIcon, EyeIcon,
} from '@/design-system/icons';

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-16">
        <div>
          <Badge color="blue" size="sm" className="mb-3">v1.0.0</Badge>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Design System</h1>
          <p className="mt-2 text-gray-500 text-lg">Next.js 16 · TypeScript · Tailwind CSS v4</p>
        </div>

        <Section title="Button">
          <SubSection label="Variants">
            <VStack gap={3}>
              {(['solid', 'outline', 'ghost'] as const).map((variant) => (
                <HStack key={variant} gap={2} wrap>
                  {(['primary', 'secondary', 'danger', 'success'] as const).map((color) => (
                    <Button key={color} variant={variant} color={color} size="md">{color}</Button>
                  ))}
                </HStack>
              ))}
            </VStack>
          </SubSection>
          <SubSection label="Sizes">
            <HStack gap={2} align="center" wrap>
              {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((s) => (
                <Button key={s} size={s}>{s}</Button>
              ))}
            </HStack>
          </SubSection>
          <SubSection label="States">
            <HStack gap={2} wrap>
              <Button leftIcon={<PlusIcon size={16} />}>추가</Button>
              <Button rightIcon={<SearchIcon size={16} />} variant="outline">검색</Button>
              <Button isLoading>저장 중</Button>
              <Button isDisabled>비활성화</Button>
              <Button color="danger" leftIcon={<TrashIcon size={16} />} variant="outline">삭제</Button>
            </HStack>
          </SubSection>
        </Section>

        <Section title="Badge">
          <SubSection label="Variants">
            <VStack gap={3}>
              {(['solid', 'subtle', 'outline'] as const).map((variant) => (
                <HStack key={variant} gap={2} align="center" wrap>
                  {(['gray', 'blue', 'green', 'yellow', 'red'] as const).map((color) => (
                    <Badge key={color} variant={variant} color={color}>{color}</Badge>
                  ))}
                </HStack>
              ))}
            </VStack>
          </SubSection>
          <SubSection label="With Dot">
            <HStack gap={2}>
              <Badge color="green" dot>Active</Badge>
              <Badge color="yellow" dot>Pending</Badge>
              <Badge color="red" dot>Error</Badge>
              <Badge color="gray" dot>Inactive</Badge>
            </HStack>
          </SubSection>
        </Section>

        <Section title="Input">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Input state="disable" layout="expanded" />
            <Input state="default" layout="expanded" />
            <Input state="enable" layout="expanded" value="무엇이든 물어보고 만들어보세요" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
              <Input state="disable" layout="compact" />
              <Input state="default" layout="compact" />
              <Input state="enable" layout="compact" value="무엇이든 물어보고 만들어보세요" />
            </div>
          </div>
        </Section>

        <Section title="Card">
          <Grid cols={{ sm: 1, md: 3 }} gap={4}>
            <Card variant="elevated">
              <CardHeader actions={<EditIcon size={16} className="text-gray-400" />}>
                <p className="font-semibold text-gray-900">Elevated</p>
                <p className="text-sm text-gray-500">기본 카드 스타일</p>
              </CardHeader>
              <CardBody><p className="text-sm text-gray-600">카드 본문 영역입니다.</p></CardBody>
              <CardFooter divider>
                <HStack gap={2} justify="end">
                  <Button size="sm" variant="ghost" color="secondary">취소</Button>
                  <Button size="sm">확인</Button>
                </HStack>
              </CardFooter>
            </Card>
            <Card variant="outline">
              <CardHeader><p className="font-semibold text-gray-900">Outline</p></CardHeader>
              <CardBody><p className="text-sm text-gray-600">테두리 카드 스타일입니다.</p></CardBody>
            </Card>
            <Card variant="filled">
              <CardHeader><p className="font-semibold text-gray-900">Filled</p></CardHeader>
              <CardBody><p className="text-sm text-gray-600">배경색이 있는 카드입니다.</p></CardBody>
            </Card>
          </Grid>
        </Section>

        <Section title="Avatar">
          <SubSection label="Sizes">
            <HStack gap={3} align="center">
              {(['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map((s) => (
                <Avatar key={s} size={s} name="홍길동" />
              ))}
            </HStack>
          </SubSection>
          <SubSection label="Group">
            <AvatarGroup
              avatars={[{name:'Alice K'},{name:'Bob L'},{name:'Carol P'},{name:'David C'},{name:'Eve J'},{name:'Frank O'}]}
              max={4}
            />
          </SubSection>
        </Section>

        <Section title="Alert">
          <VStack gap={3}>
            <Alert status="info" title="안내" description="시스템 점검이 예정되어 있습니다." onClose={() => {}} />
            <Alert status="success" title="완료" description="변경사항이 성공적으로 저장되었습니다." />
            <Alert status="warning" title="주의" description="저장하지 않은 변경사항이 있습니다." variant="left-accent" />
            <Alert status="error" title="오류" description="요청 처리 중 오류가 발생했습니다." variant="left-accent" />
          </VStack>
        </Section>

        <Section title="Skeleton">
          <Grid cols={{ sm: 1, md: 2 }} gap={4}>
            <div className="space-y-3 p-4 bg-white rounded-xl border border-gray-100">
              <HStack gap={3} align="center">
                <Skeleton variant="circular" width={40} height={40} />
                <VStack gap={2} className="flex-1">
                  <Skeleton height={14} width="50%" />
                  <Skeleton height={12} width="70%" />
                </VStack>
              </HStack>
              <Skeleton height={100} />
              <SkeletonText lines={3} lastLineWidth="65%" />
            </div>
            <div className="space-y-3 p-4 bg-white rounded-xl border border-gray-100">
              <Skeleton height={160} />
              <SkeletonText lines={4} />
            </div>
          </Grid>
        </Section>

        <Section title="Icons">
          <HStack gap={2} wrap>
            {[SearchIcon, CheckIcon, PlusIcon, TrashIcon, EditIcon, AlertCircleIcon, CheckCircleIcon, EyeIcon].map((Icon, i) => (
              <div key={i} className="p-3 rounded-lg hover:bg-gray-100 transition-colors">
                <Icon size={22} className="text-gray-700" />
              </div>
            ))}
          </HStack>
        </Section>

        <Section title="Divider">
          <VStack gap={4}>
            <Divider />
            <Divider label="또는" />
          </VStack>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <div className="mt-1 h-0.5 w-10 bg-blue-500 rounded-full" />
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-6">{children}</div>
    </section>
  );
}

function SubSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">{label}</p>
      {children}
    </div>
  );
}
