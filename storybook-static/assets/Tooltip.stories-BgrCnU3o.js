import{r as e}from"./chunk-DHx0Hwia.js";import{t}from"./react-DQOtSpIC.js";import{t as n}from"./jsx-runtime-CYNtxkAM.js";var r=e(t()),i=n(),a=`#005CE6`,o={down:`polygon(0% 0%, 100% 0%, 50% 100%)`,up:`polygon(50% 0%, 0% 100%, 100% 100%)`,right:`polygon(0% 0%, 100% 50%, 0% 100%)`,left:`polygon(100% 0%, 0% 50%, 100% 100%)`,"down-left":`polygon(0% 0%, 100% 0%, 0% 100%)`,"down-right":`polygon(0% 0%, 100% 0%, 100% 100%)`};function s({direction:e}){let t=e===`left`||e===`right`;return(0,i.jsx)(`div`,{style:{width:t?8:12,height:t?12:8,backgroundColor:a,clipPath:o[e],flexShrink:0}})}var c={top:{bubbleClass:`bottom-full left-1/2 -translate-x-1/2 mb-2`,arrowClass:`top-full left-1/2 -translate-x-1/2`,arrowDir:`down`},bottom:{bubbleClass:`top-full left-1/2 -translate-x-1/2 mt-2`,arrowClass:`bottom-full left-1/2 -translate-x-1/2`,arrowDir:`up`},left:{bubbleClass:`right-full top-1/2 -translate-y-1/2 mr-2`,arrowClass:`left-full top-1/2 -translate-y-1/2`,arrowDir:`right`},right:{bubbleClass:`left-full top-1/2 -translate-y-1/2 ml-2`,arrowClass:`right-full top-1/2 -translate-y-1/2`,arrowDir:`left`},"top-left":{bubbleClass:`bottom-full left-0 mb-2`,arrowClass:`top-full left-3`,arrowDir:`down-left`},"top-right":{bubbleClass:`bottom-full right-0 mb-2`,arrowClass:`top-full right-3`,arrowDir:`down-right`}};function l({content:e,placement:t,visible:n}){if(!n)return null;let{bubbleClass:r,arrowClass:a,arrowDir:o}=c[t];return(0,i.jsx)(`div`,{role:`tooltip`,className:[`absolute z-50 w-max`,r].join(` `),children:(0,i.jsxs)(`div`,{className:`relative bg-[#005CE6] px-4 py-[6px] rounded-[8px]`,children:[(0,i.jsx)(`span`,{className:`text-[#F7F7F8] text-[13px] font-normal leading-[18px] tracking-[-0.026px] whitespace-nowrap`,children:e}),(0,i.jsx)(`div`,{className:[`absolute flex items-center justify-center`,a].join(` `),children:(0,i.jsx)(s,{direction:o})})]})})}function u({content:e,placement:t=`top`,children:n,defaultVisible:a=!1,className:o=``}){let[s,c]=(0,r.useState)(a);return(0,i.jsxs)(`div`,{className:[`relative inline-flex items-center justify-center`,o].join(` `),onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),onFocus:()=>c(!0),onBlur:()=>c(!1),children:[n,(0,i.jsx)(l,{content:e,placement:t,visible:s})]})}u.__docgenInfo={description:``,methods:[],displayName:`Tooltip`,props:{content:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},placement:{required:!1,tsType:{name:`union`,raw:`| 'top'
| 'bottom'
| 'left'
| 'right'
| 'top-left'
| 'top-right'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`},{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`},{name:`literal`,value:`'top-left'`},{name:`literal`,value:`'top-right'`}]},description:``,defaultValue:{value:`'top'`,computed:!1}},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},defaultVisible:{required:!1,tsType:{name:`boolean`},description:`항상 보이게 할 경우 (스토리북 등)`,defaultValue:{value:`false`,computed:!1}}}};var d=()=>(0,i.jsx)(`button`,{style:{padding:`8px 16px`,borderRadius:6,background:`#2a2a2a`,border:`1px solid rgba(112,115,124,0.32)`,color:`#F7F7F8`,fontSize:14,cursor:`pointer`},children:`Hover me`}),f={title:`Components/Tooltip`,component:u,tags:[`autodocs`],argTypes:{placement:{control:`select`,options:[`top`,`bottom`,`left`,`right`,`top-left`,`top-right`]},children:{table:{disable:!0}}}},p={args:{content:`Tooltip text`,placement:`top`},render:e=>(0,i.jsx)(u,{...e,children:(0,i.jsx)(d,{})})},m={render:()=>(0,i.jsx)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`,alignItems:`center`},children:[`top`,`bottom`,`left`,`right`,`top-left`,`top-right`].map(e=>(0,i.jsx)(u,{content:`Text`,placement:e,defaultVisible:!0,children:(0,i.jsx)(`button`,{style:{padding:`6px 12px`,borderRadius:6,background:`#2a2a2a`,border:`1px solid rgba(112,115,124,0.32)`,color:`#F7F7F8`,fontSize:13,cursor:`pointer`,whiteSpace:`nowrap`},children:e})},e))})},h={args:{content:`더 자세한 안내 문구를 여기에 넣을 수 있습니다.`,placement:`top`},render:e=>(0,i.jsx)(u,{...e,children:(0,i.jsx)(d,{})})},g={render:()=>(0,i.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 140px)`,gap:`48px`,placeItems:`center`,padding:`80px`},children:[`top-left`,`top`,`top-right`,`left`,null,`right`,null,`bottom`,null].map((e,t)=>e?(0,i.jsx)(u,{content:`Text`,placement:e,defaultVisible:!0,children:(0,i.jsx)(`button`,{style:{padding:`6px 12px`,borderRadius:6,background:`#2a2a2a`,border:`1px solid rgba(112,115,124,0.32)`,color:`#F7F7F8`,fontSize:13,cursor:`pointer`,whiteSpace:`nowrap`},children:e})},t):(0,i.jsx)(`div`,{},t))})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip text',
    placement: 'top'
  },
  render: args => <Tooltip {...args}>
      <TriggerButton />
    </Tooltip>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    content: '더 자세한 안내 문구를 여기에 넣을 수 있습니다.',
    placement: 'top'
  },
  render: args => <Tooltip {...args}>
      <TriggerButton />
    </Tooltip>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};var _=[`Default`,`Placements`,`LongText`,`AllPlacements`];export{g as AllPlacements,p as Default,h as LongText,m as Placements,_ as __namedExportsOrder,f as default};