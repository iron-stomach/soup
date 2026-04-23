import{t as e}from"./jsx-runtime-CYNtxkAM.js";import{t}from"./Tooltip-DoUzZA1F.js";var n=e(),r=()=>(0,n.jsx)(`button`,{style:{padding:`8px 16px`,borderRadius:6,background:`#2a2a2a`,border:`1px solid rgba(112,115,124,0.32)`,color:`#F7F7F8`,fontSize:14,cursor:`pointer`},children:`Hover me`}),i={title:`Components/Tooltip`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],args:{children:(0,n.jsx)(r,{})},argTypes:{placement:{control:`select`,options:[`top`,`bottom`,`left`,`right`,`top-left`,`top-right`]},children:{table:{disable:!0}}}},a={args:{content:`Text`,placement:`top`},render:e=>(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{})})},o={args:{content:`Text`,placement:`bottom`},render:e=>(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{})})},s={args:{content:`Text`,placement:`left`},render:e=>(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{})})},c={args:{content:`Text`,placement:`right`},render:e=>(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{})})},l={args:{content:`Text`,placement:`top-left`},render:e=>(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{})})},u={args:{content:`Text`,placement:`top-right`},render:e=>(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{})})},d={args:{content:`더 자세한 안내 문구를 여기에 넣을 수 있습니다.`,placement:`top`},render:e=>(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{})})},f={args:{content:`Text`,children:(0,n.jsx)(r,{})},render:()=>(0,n.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 140px)`,gap:`48px`,placeItems:`center`,padding:`80px`},children:[`top-left`,`top`,`top-right`,`left`,null,`right`,null,`bottom`,null].map((e,r)=>e?(0,n.jsx)(t,{content:`Text`,placement:e,defaultVisible:!0,children:(0,n.jsx)(`button`,{style:{padding:`6px 12px`,borderRadius:6,background:`#2a2a2a`,border:`1px solid rgba(112,115,124,0.32)`,color:`#F7F7F8`,fontSize:13,cursor:`pointer`,whiteSpace:`nowrap`},children:e})},r):(0,n.jsx)(`div`,{},r))})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Text',
    placement: 'top'
  },
  render: args => <Tooltip {...args}><TriggerButton /></Tooltip>
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Text',
    placement: 'bottom'
  },
  render: args => <Tooltip {...args}><TriggerButton /></Tooltip>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Text',
    placement: 'left'
  },
  render: args => <Tooltip {...args}><TriggerButton /></Tooltip>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Text',
    placement: 'right'
  },
  render: args => <Tooltip {...args}><TriggerButton /></Tooltip>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Text',
    placement: 'top-left'
  },
  render: args => <Tooltip {...args}><TriggerButton /></Tooltip>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Text',
    placement: 'top-right'
  },
  render: args => <Tooltip {...args}><TriggerButton /></Tooltip>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    content: '더 자세한 안내 문구를 여기에 넣을 수 있습니다.',
    placement: 'top'
  },
  render: args => <Tooltip {...args}><TriggerButton /></Tooltip>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Text',
    children: <TriggerButton />
  },
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
}`,...f.parameters?.docs?.source}}};var p=[`Top`,`Bottom`,`Left`,`Right`,`TopLeft`,`TopRight`,`LongText`,`AllPlacements`];export{f as AllPlacements,o as Bottom,s as Left,d as LongText,c as Right,a as Top,l as TopLeft,u as TopRight,p as __namedExportsOrder,i as default};