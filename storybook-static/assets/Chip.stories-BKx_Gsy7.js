import{r as e}from"./chunk-DHx0Hwia.js";import{t}from"./react-DQOtSpIC.js";import{t as n}from"./jsx-runtime-CYNtxkAM.js";var r=e(t()),i=n();function a({size:e=16}){return(0,i.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:(0,i.jsx)(`path`,{d:`M8 3.5v9M3.5 8h9`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})})}function o({size:e=16}){return(0,i.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:(0,i.jsx)(`path`,{d:`M11.5 4.5l-7 7M4.5 4.5l7 7`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})})}function s({label:e,variant:t=`outline`,selected:n=!1,leftIcon:r,rightIcon:a,onClick:o,disabled:s=!1,className:c=``}){return(0,i.jsxs)(`button`,{type:`button`,onClick:o,disabled:s,className:[`inline-flex items-center justify-center h-7 px-3 rounded-full`,`text-[13px] font-normal leading-[1.5] whitespace-nowrap`,`transition-colors duration-150 cursor-pointer select-none`,`focus-visible:outline-none`,n?`bg-[#5A5C63] border border-[rgba(112,115,124,0.32)] border-solid text-[#F7F7F8]`:t===`filled`?`bg-[rgba(194,196,200,0.88)] text-[#DCDCDC]`:[`border border-[rgba(112,115,124,0.32)] border-solid text-[#DCDCDC]`,`hover:bg-[rgba(112,115,124,0.28)]`].join(` `),s&&`opacity-50 cursor-not-allowed pointer-events-none`,c].filter(Boolean).join(` `),children:[r&&(0,i.jsx)(`span`,{className:`shrink-0 size-4 flex items-center justify-center`,children:r}),e&&(0,i.jsx)(`span`,{className:r||a?`px-0.5`:``,children:e}),a&&(0,i.jsx)(`span`,{className:`shrink-0 size-4 flex items-center justify-center`,children:a})]})}a.__docgenInfo={description:``,methods:[],displayName:`PlusIcon`,props:{size:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`16`,computed:!1}}}},o.__docgenInfo={description:``,methods:[],displayName:`CloseIcon`,props:{size:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`16`,computed:!1}}}},s.__docgenInfo={description:``,methods:[],displayName:`Chip`,props:{label:{required:!1,tsType:{name:`string`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'outline' | 'filled'`,elements:[{name:`literal`,value:`'outline'`},{name:`literal`,value:`'filled'`}]},description:``,defaultValue:{value:`'outline'`,computed:!1}},selected:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},leftIcon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},rightIcon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}};var c={title:`Components/Chip`,component:s,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`outline`,`filled`]},selected:{control:`boolean`},disabled:{control:`boolean`},onClick:{action:`clicked`}}},l={args:{label:`Label`,variant:`outline`,selected:!1}},u={args:{label:`Label`,selected:!0}},d={args:{label:`Label`,variant:`filled`}},f={render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,i.jsx)(s,{label:`Left Icon`,leftIcon:(0,i.jsx)(a,{})}),(0,i.jsx)(s,{label:`Right Icon`,rightIcon:(0,i.jsx)(o,{})}),(0,i.jsx)(s,{label:`Both Icons`,leftIcon:(0,i.jsx)(a,{}),rightIcon:(0,i.jsx)(o,{})})]})},p={args:{label:`Disabled`,disabled:!0}},m={render:()=>(0,i.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[{label:`Default`,props:{}},{label:`Selected`,props:{selected:!0}},{label:`Filled`,props:{variant:`filled`}},{label:`Disabled`,props:{disabled:!0}}].map(({label:e,props:t})=>(0,i.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,i.jsx)(`span`,{style:{color:`#878A93`,fontSize:12,width:64},children:e}),(0,i.jsx)(s,{label:`Label`,leftIcon:(0,i.jsx)(a,{}),rightIcon:(0,i.jsx)(o,{}),...t})]},e))})},h={render:()=>{let[e,t]=(0,r.useState)([`react`]),n=[`React`,`TypeScript`,`Next.js`,`Tailwind`,`Figma`],a=e=>{let n=e.toLowerCase();t(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])};return(0,i.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:n.map(t=>(0,i.jsx)(s,{label:t,selected:e.includes(t.toLowerCase()),onClick:()=>a(t)},t))})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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