import{t as e}from"./jsx-runtime-CYNtxkAM.js";import{t}from"./Tooltip-DoUzZA1F.js";var n=e(),r=()=>(0,n.jsx)(`button`,{style:{padding:`8px 16px`,borderRadius:6,background:`#2a2a2a`,border:`1px solid rgba(112,115,124,0.32)`,color:`#F7F7F8`,fontSize:14,cursor:`pointer`},children:`Hover me`}),i={title:`Components/Tooltip`,component:t,tags:[`autodocs`],argTypes:{placement:{control:`select`,options:[`top`,`bottom`,`left`,`right`,`top-left`,`top-right`]},children:{table:{disable:!0}}}},a={args:{content:`Tooltip text`,placement:`top`},render:e=>(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{})})},o={render:()=>(0,n.jsx)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`,alignItems:`center`},children:[`top`,`bottom`,`left`,`right`,`top-left`,`top-right`].map(e=>(0,n.jsx)(t,{content:`Text`,placement:e,defaultVisible:!0,children:(0,n.jsx)(`button`,{style:{padding:`6px 12px`,borderRadius:6,background:`#2a2a2a`,border:`1px solid rgba(112,115,124,0.32)`,color:`#F7F7F8`,fontSize:13,cursor:`pointer`,whiteSpace:`nowrap`},children:e})},e))})},s={args:{content:`더 자세한 안내 문구를 여기에 넣을 수 있습니다.`,placement:`top`},render:e=>(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{})})},c={render:()=>(0,n.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 140px)`,gap:`48px`,placeItems:`center`,padding:`80px`},children:[`top-left`,`top`,`top-right`,`left`,null,`right`,null,`bottom`,null].map((e,r)=>e?(0,n.jsx)(t,{content:`Text`,placement:e,defaultVisible:!0,children:(0,n.jsx)(`button`,{style:{padding:`6px 12px`,borderRadius:6,background:`#2a2a2a`,border:`1px solid rgba(112,115,124,0.32)`,color:`#F7F7F8`,fontSize:13,cursor:`pointer`,whiteSpace:`nowrap`},children:e})},r):(0,n.jsx)(`div`,{},r))})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip text',
    placement: 'top'
  },
  render: args => <Tooltip {...args}>
      <TriggerButton />
    </Tooltip>
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      {(['top', 'bottom', 'left', 'right', 'top-left', 'top-right'] as TooltipPlacement[]).map(placement => <Tooltip key={placement} content="Text" placement={placement} defaultVisible>
            <button style={{
        padding: '6px 12px',
        borderRadius: 6,
        background: '#2a2a2a',
        border: '1px solid rgba(112,115,124,0.32)',
        color: '#F7F7F8',
        fontSize: 13,
        cursor: 'pointer',
        whiteSpace: 'nowrap'
      }}>
              {placement}
            </button>
          </Tooltip>)}
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    content: '더 자세한 안내 문구를 여기에 넣을 수 있습니다.',
    placement: 'top'
  },
  render: args => <Tooltip {...args}>
      <TriggerButton />
    </Tooltip>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 140px)',
    gap: '48px',
    placeItems: 'center',
    padding: '80px'
  }}>
      {(['top-left', 'top', 'top-right', 'left', null, 'right', null, 'bottom', null] as const).map((placement, i) => placement ? <Tooltip key={i} content="Text" placement={placement} defaultVisible>
            <button style={{
        padding: '6px 12px',
        borderRadius: 6,
        background: '#2a2a2a',
        border: '1px solid rgba(112,115,124,0.32)',
        color: '#F7F7F8',
        fontSize: 13,
        cursor: 'pointer',
        whiteSpace: 'nowrap'
      }}>
              {placement}
            </button>
          </Tooltip> : <div key={i} />)}
    </div>
}`,...c.parameters?.docs?.source}}};var l=[`Default`,`Placements`,`LongText`,`AllPlacements`];export{c as AllPlacements,a as Default,s as LongText,o as Placements,l as __namedExportsOrder,i as default};