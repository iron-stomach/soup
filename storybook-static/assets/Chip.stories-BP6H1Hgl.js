import{r as e}from"./chunk-DHx0Hwia.js";import{t}from"./react-DQOtSpIC.js";import{t as n}from"./jsx-runtime-CYNtxkAM.js";import{n as r,r as i,t as a}from"./Chip-C39OYrBT.js";var o=e(t()),s=n(),c={title:`Components/Chip`,component:a,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`outline`,`filled`]},selected:{control:`boolean`},disabled:{control:`boolean`},onClick:{action:`clicked`}}},l={args:{label:`Label`,variant:`outline`,selected:!1}},u={args:{label:`Label`,selected:!0}},d={args:{label:`Label`,variant:`filled`}},f={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,s.jsx)(a,{label:`Left Icon`,leftIcon:(0,s.jsx)(i,{})}),(0,s.jsx)(a,{label:`Right Icon`,rightIcon:(0,s.jsx)(r,{})}),(0,s.jsx)(a,{label:`Both Icons`,leftIcon:(0,s.jsx)(i,{}),rightIcon:(0,s.jsx)(r,{})})]})},p={args:{label:`Disabled`,disabled:!0}},m={render:()=>(0,s.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[{label:`Default`,props:{}},{label:`Selected`,props:{selected:!0}},{label:`Filled`,props:{variant:`filled`}},{label:`Disabled`,props:{disabled:!0}}].map(({label:e,props:t})=>(0,s.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,s.jsx)(`span`,{style:{color:`#878A93`,fontSize:12,width:64},children:e}),(0,s.jsx)(a,{label:`Label`,leftIcon:(0,s.jsx)(i,{}),rightIcon:(0,s.jsx)(r,{}),...t})]},e))})},h={render:()=>{let[e,t]=(0,o.useState)([`react`]),n=[`React`,`TypeScript`,`Next.js`,`Tailwind`,`Figma`],r=e=>{let n=e.toLowerCase();t(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])};return(0,s.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:n.map(t=>(0,s.jsx)(a,{label:t,selected:e.includes(t.toLowerCase()),onClick:()=>r(t)},t))})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    variant: 'outline',
    selected: false
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    selected: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    variant: 'filled'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap'
  }}>
      <Chip label="Left Icon" leftIcon={<PlusIcon />} />
      <Chip label="Right Icon" rightIcon={<CloseIcon />} />
      <Chip label="Both Icons" leftIcon={<PlusIcon />} rightIcon={<CloseIcon />} />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    disabled: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      {[{
      label: 'Default',
      props: {}
    }, {
      label: 'Selected',
      props: {
        selected: true
      }
    }, {
      label: 'Filled',
      props: {
        variant: 'filled' as const
      }
    }, {
      label: 'Disabled',
      props: {
        disabled: true
      }
    }].map(({
      label,
      props
    }) => <div key={label} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }}>
          <span style={{
        color: '#878A93',
        fontSize: 12,
        width: 64
      }}>{label}</span>
          <Chip label="Label" leftIcon={<PlusIcon />} rightIcon={<CloseIcon />} {...props} />
        </div>)}
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string[]>(['react']);
    const tags = ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Figma'];
    const toggle = (tag: string) => {
      const key = tag.toLowerCase();
      setSelected(prev => prev.includes(key) ? prev.filter(t => t !== key) : [...prev, key]);
    };
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }}>
        {tags.map(tag => <Chip key={tag} label={tag} selected={selected.includes(tag.toLowerCase())} onClick={() => toggle(tag)} />)}
      </div>;
  }
}`,...h.parameters?.docs?.source}}};var g=[`Default`,`Selected`,`Filled`,`WithIcons`,`Disabled`,`AllStates`,`ToggleGroup`];export{m as AllStates,l as Default,p as Disabled,d as Filled,u as Selected,h as ToggleGroup,f as WithIcons,g as __namedExportsOrder,c as default};