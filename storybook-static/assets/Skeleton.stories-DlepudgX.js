import"./chunk-DHx0Hwia.js";import{t as e}from"./react-DQOtSpIC.js";import{t}from"./jsx-runtime-CYNtxkAM.js";e();var n=t();function r({width:e,height:t,variant:r=`rectangular`,className:i=``,animate:a=!0}){let o={rectangular:`rounded-md`,circular:`rounded-full`,text:`rounded`}[r];return(0,n.jsx)(`span`,{role:`status`,"aria-label":`로딩 중`,style:{width:typeof e==`number`?`${e}px`:e,height:typeof t==`number`?`${t}px`:t},className:[`block bg-gray-200`,a&&`animate-pulse`,o,i].filter(Boolean).join(` `)})}function i({lines:e=3,spacing:t=2,lastLineWidth:i=`60%`,className:a=``}){return(0,n.jsx)(`div`,{className:[`flex flex-col`,`gap-${t}`,a].join(` `),children:Array.from({length:e}).map((t,a)=>(0,n.jsx)(r,{height:14,width:a===e-1?i:`100%`,variant:`text`},a))})}function a({className:e=``}){return(0,n.jsxs)(`div`,{className:[`rounded-xl border border-gray-100 p-4 space-y-3`,e].join(` `),children:[(0,n.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,n.jsx)(r,{variant:`circular`,width:40,height:40}),(0,n.jsxs)(`div`,{className:`flex-1 space-y-2`,children:[(0,n.jsx)(r,{height:14,width:`40%`,variant:`text`}),(0,n.jsx)(r,{height:12,width:`60%`,variant:`text`})]})]}),(0,n.jsx)(r,{height:120}),(0,n.jsx)(i,{lines:2,lastLineWidth:`75%`})]})}r.__docgenInfo={description:``,methods:[],displayName:`Skeleton`,props:{width:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``},height:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'rectangular' | 'circular' | 'text'`,elements:[{name:`literal`,value:`'rectangular'`},{name:`literal`,value:`'circular'`},{name:`literal`,value:`'text'`}]},description:``,defaultValue:{value:`'rectangular'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},animate:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}}}},i.__docgenInfo={description:``,methods:[],displayName:`SkeletonText`,props:{lines:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`3`,computed:!1}},spacing:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`2`,computed:!1}},lastLineWidth:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'60%'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}},a.__docgenInfo={description:``,methods:[],displayName:`SkeletonCard`,props:{className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}};var o={title:`Components/Skeleton`,component:r,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`rectangular`,`circular`,`text`]},animate:{control:`boolean`}}},s={args:{width:200,height:20}},c={render:()=>(0,n.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,n.jsx)(r,{width:200,height:16,variant:`text`}),(0,n.jsx)(r,{width:200,height:80,variant:`rectangular`}),(0,n.jsx)(r,{width:48,height:48,variant:`circular`})]})},l={render:()=>(0,n.jsx)(i,{lines:4,lastLineWidth:`60%`})},u={render:()=>(0,n.jsx)(`div`,{style:{maxWidth:360},children:(0,n.jsx)(a,{})})},d={render:()=>(0,n.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,maxWidth:360},children:[(0,n.jsx)(r,{variant:`circular`,width:40,height:40}),(0,n.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:8},children:[(0,n.jsx)(r,{height:14,width:`50%`,variant:`text`}),(0,n.jsx)(r,{height:12,width:`70%`,variant:`text`})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    width: 200,
    height: 20
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <Skeleton width={200} height={16} variant="text" />
      <Skeleton width={200} height={80} variant="rectangular" />
      <Skeleton width={48} height={48} variant="circular" />
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <SkeletonText lines={4} lastLineWidth="60%" />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 360
  }}>
      <SkeletonCard />
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    maxWidth: 360
  }}>
      <Skeleton variant="circular" width={40} height={40} />
      <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        <Skeleton height={14} width="50%" variant="text" />
        <Skeleton height={12} width="70%" variant="text" />
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};var f=[`Default`,`Variants`,`Text`,`Card`,`ProfileRow`];export{u as Card,s as Default,d as ProfileRow,l as Text,c as Variants,f as __namedExportsOrder,o as default};