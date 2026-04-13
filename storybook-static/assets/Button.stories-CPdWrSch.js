import{t as e}from"./jsx-runtime-CYNtxkAM.js";import{t}from"./Button-BAvSWzHD.js";import{a as n,i as r,r as i}from"./icons-CsIhEsby.js";var a=e(),o={title:`Components/Button`,component:t,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`solid`,`outline`,`ghost`,`link`]},color:{control:`select`,options:[`primary`,`secondary`,`danger`,`success`]},size:{control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`]},isLoading:{control:`boolean`},isDisabled:{control:`boolean`},fullWidth:{control:`boolean`}}},s={args:{children:`Button`,variant:`solid`,color:`primary`,size:`md`}},c={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,a.jsx)(t,{variant:`solid`,children:`Solid`}),(0,a.jsx)(t,{variant:`outline`,children:`Outline`}),(0,a.jsx)(t,{variant:`ghost`,children:`Ghost`}),(0,a.jsx)(t,{variant:`link`,children:`Link`})]})},l={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,a.jsx)(t,{color:`primary`,children:`Primary`}),(0,a.jsx)(t,{color:`secondary`,children:`Secondary`}),(0,a.jsx)(t,{color:`danger`,children:`Danger`}),(0,a.jsx)(t,{color:`success`,children:`Success`})]})},u={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`,flexWrap:`wrap`},children:[(0,a.jsx)(t,{size:`xs`,children:`XSmall`}),(0,a.jsx)(t,{size:`sm`,children:`Small`}),(0,a.jsx)(t,{size:`md`,children:`Medium`}),(0,a.jsx)(t,{size:`lg`,children:`Large`}),(0,a.jsx)(t,{size:`xl`,children:`XLarge`})]})},d={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,a.jsx)(t,{leftIcon:(0,a.jsx)(i,{size:16}),children:`추가`}),(0,a.jsx)(t,{rightIcon:(0,a.jsx)(r,{size:16}),variant:`outline`,children:`검색`}),(0,a.jsx)(t,{color:`danger`,leftIcon:(0,a.jsx)(n,{size:16}),variant:`outline`,children:`삭제`})]})},f={args:{children:`저장 중`,isLoading:!0}},p={args:{children:`비활성화`,isDisabled:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'solid',
    color: 'primary',
    size: 'md'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap'
  }}>
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap'
  }}>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="danger">Danger</Button>
      <Button color="success">Success</Button>
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <Button size="xs">XSmall</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">XLarge</Button>
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap'
  }}>
      <Button leftIcon={<PlusIcon size={16} />}>추가</Button>
      <Button rightIcon={<SearchIcon size={16} />} variant="outline">검색</Button>
      <Button color="danger" leftIcon={<TrashIcon size={16} />} variant="outline">삭제</Button>
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: '저장 중',
    isLoading: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: '비활성화',
    isDisabled: true
  }
}`,...p.parameters?.docs?.source}}};var m=[`Default`,`Variants`,`Colors`,`Sizes`,`WithIcons`,`Loading`,`Disabled`];export{l as Colors,s as Default,p as Disabled,f as Loading,u as Sizes,c as Variants,d as WithIcons,m as __namedExportsOrder,o as default};