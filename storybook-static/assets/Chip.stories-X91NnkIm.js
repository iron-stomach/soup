import{r as e}from"./chunk-DHx0Hwia.js";import{t}from"./react-DQOtSpIC.js";import{t as n}from"./jsx-runtime-CYNtxkAM.js";import{n as r,r as i,t as a}from"./Chip-C39OYrBT.js";var o=e(t()),s=n(),c={title:`Components/Chip`,component:a,parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1a1a1a`}]}},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`outline`,`filled`]},onClick:{action:`clicked`}}},l={args:{label:`Label`,variant:`outline`,selected:!1}},u={args:{label:`Label`,leftIcon:(0,s.jsx)(i,{}),rightIcon:(0,s.jsx)(i,{})}},d={args:{label:`Label`,selected:!0,leftIcon:(0,s.jsx)(i,{}),rightIcon:(0,s.jsx)(i,{})}},f={args:{label:`Label`,variant:`filled`,leftIcon:(0,s.jsx)(i,{}),rightIcon:(0,s.jsx)(i,{})}},p={args:{label:`React`,rightIcon:(0,s.jsx)(r,{})}},m={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,s.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,s.jsx)(`span`,{style:{color:`#878A93`,fontSize:12,width:64},children:`Default`}),(0,s.jsx)(a,{label:`Label`,leftIcon:(0,s.jsx)(i,{}),rightIcon:(0,s.jsx)(i,{})})]}),(0,s.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,s.jsx)(`span`,{style:{color:`#878A93`,fontSize:12,width:64},children:`Selected`}),(0,s.jsx)(a,{label:`Label`,selected:!0,leftIcon:(0,s.jsx)(i,{}),rightIcon:(0,s.jsx)(i,{})})]}),(0,s.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,s.jsx)(`span`,{style:{color:`#878A93`,fontSize:12,width:64},children:`Filled`}),(0,s.jsx)(a,{label:`Label`,variant:`filled`,leftIcon:(0,s.jsx)(i,{}),rightIcon:(0,s.jsx)(i,{})})]}),(0,s.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,s.jsx)(`span`,{style:{color:`#878A93`,fontSize:12,width:64},children:`Disabled`}),(0,s.jsx)(a,{label:`Label`,disabled:!0,leftIcon:(0,s.jsx)(i,{}),rightIcon:(0,s.jsx)(i,{})})]})]})},h={render:()=>{let[e,t]=(0,o.useState)([`react`]),n=[`React`,`TypeScript`,`Next.js`,`Tailwind`,`Figma`],r=e=>{let n=e.toLowerCase();t(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])};return(0,s.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:n.map(t=>(0,s.jsx)(a,{label:t,selected:e.includes(t.toLowerCase()),onClick:()=>r(t)},t))})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    variant: 'outline',
    selected: false
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    leftIcon: <PlusIcon />,
    rightIcon: <PlusIcon />
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    selected: true,
    leftIcon: <PlusIcon />,
    rightIcon: <PlusIcon />
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    variant: 'filled',
    leftIcon: <PlusIcon />,
    rightIcon: <PlusIcon />
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'React',
    rightIcon: <CloseIcon />
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span style={{
        color: '#878A93',
        fontSize: 12,
        width: 64
      }}>Default</span>
        <Chip label="Label" leftIcon={<PlusIcon />} rightIcon={<PlusIcon />} />
      </div>
      <div className="flex items-center gap-3">
        <span style={{
        color: '#878A93',
        fontSize: 12,
        width: 64
      }}>Selected</span>
        <Chip label="Label" selected leftIcon={<PlusIcon />} rightIcon={<PlusIcon />} />
      </div>
      <div className="flex items-center gap-3">
        <span style={{
        color: '#878A93',
        fontSize: 12,
        width: 64
      }}>Filled</span>
        <Chip label="Label" variant="filled" leftIcon={<PlusIcon />} rightIcon={<PlusIcon />} />
      </div>
      <div className="flex items-center gap-3">
        <span style={{
        color: '#878A93',
        fontSize: 12,
        width: 64
      }}>Disabled</span>
        <Chip label="Label" disabled leftIcon={<PlusIcon />} rightIcon={<PlusIcon />} />
      </div>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string[]>(['react']);
    const tags = ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Figma'];
    const toggle = (tag: string) => {
      const key = tag.toLowerCase();
      setSelected(prev => prev.includes(key) ? prev.filter(t => t !== key) : [...prev, key]);
    };
    return <div className="flex flex-wrap gap-2">
        {tags.map(tag => <Chip key={tag} label={tag} selected={selected.includes(tag.toLowerCase())} onClick={() => toggle(tag)} />)}
      </div>;
  }
}`,...h.parameters?.docs?.source}}};var g=[`Default`,`WithIcons`,`Selected`,`Filled`,`WithClose`,`AllStates`,`ToggleGroup`];export{m as AllStates,l as Default,f as Filled,d as Selected,h as ToggleGroup,p as WithClose,u as WithIcons,g as __namedExportsOrder,c as default};