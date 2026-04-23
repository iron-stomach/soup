import"./chunk-DHx0Hwia.js";import{t as e}from"./react-DQOtSpIC.js";import{t}from"./jsx-runtime-CYNtxkAM.js";e();var n=t(),r={gray:{solid:`bg-gray-800 text-white`,subtle:`bg-gray-100 text-gray-700`,outline:`border border-gray-300 text-gray-700 bg-transparent`},blue:{solid:`bg-blue-500 text-white`,subtle:`bg-blue-50 text-blue-700`,outline:`border border-blue-300 text-blue-700 bg-transparent`},green:{solid:`bg-green-500 text-white`,subtle:`bg-green-50 text-green-700`,outline:`border border-green-300 text-green-700 bg-transparent`},yellow:{solid:`bg-yellow-400 text-yellow-900`,subtle:`bg-yellow-50 text-yellow-700`,outline:`border border-yellow-300 text-yellow-700 bg-transparent`},red:{solid:`bg-rose-500 text-white`,subtle:`bg-rose-50 text-rose-700`,outline:`border border-rose-300 text-rose-700 bg-transparent`}},i={sm:`text-[10px] px-1.5 py-0.5 gap-1`,md:`text-xs px-2 py-0.5 gap-1.5`,lg:`text-sm px-2.5 py-1 gap-1.5`},a={gray:`bg-gray-400`,blue:`bg-blue-500`,green:`bg-green-500`,yellow:`bg-yellow-400`,red:`bg-rose-500`};function o({variant:e=`subtle`,color:t=`gray`,size:o=`md`,dot:s=!1,children:c,className:l=``}){return(0,n.jsxs)(`span`,{className:[`inline-flex items-center font-medium rounded-full`,r[t][e],i[o],l].join(` `),children:[s&&(0,n.jsx)(`span`,{className:[`rounded-full w-1.5 h-1.5 shrink-0`,a[t]].join(` `)}),c]})}function s({children:e,onRemove:t,color:i=`blue`,className:a=``}){return(0,n.jsxs)(`span`,{className:[`inline-flex items-center gap-1 text-sm px-2.5 py-1 rounded-md font-medium`,r[i].subtle,a].join(` `),children:[e,t&&(0,n.jsx)(`button`,{onClick:t,"aria-label":`Remove tag`,className:`ml-0.5 hover:opacity-70 transition-opacity cursor-pointer`,children:(0,n.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,n.jsx)(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),(0,n.jsx)(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]})})]})}o.__docgenInfo={description:``,methods:[],displayName:`Badge`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'solid' | 'subtle' | 'outline'`,elements:[{name:`literal`,value:`'solid'`},{name:`literal`,value:`'subtle'`},{name:`literal`,value:`'outline'`}]},description:``,defaultValue:{value:`'subtle'`,computed:!1}},color:{required:!1,tsType:{name:`union`,raw:`'gray' | 'blue' | 'green' | 'yellow' | 'red'`,elements:[{name:`literal`,value:`'gray'`},{name:`literal`,value:`'blue'`},{name:`literal`,value:`'green'`},{name:`literal`,value:`'yellow'`},{name:`literal`,value:`'red'`}]},description:``,defaultValue:{value:`'gray'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},dot:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}},s.__docgenInfo={description:``,methods:[],displayName:`Tag`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},onRemove:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},color:{required:!1,tsType:{name:`union`,raw:`'gray' | 'blue' | 'green' | 'yellow' | 'red'`,elements:[{name:`literal`,value:`'gray'`},{name:`literal`,value:`'blue'`},{name:`literal`,value:`'green'`},{name:`literal`,value:`'yellow'`},{name:`literal`,value:`'red'`}]},description:``,defaultValue:{value:`'blue'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}};var c={title:`Components/Badge`,component:o,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`solid`,`subtle`,`outline`]},color:{control:`select`,options:[`gray`,`blue`,`green`,`yellow`,`red`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},dot:{control:`boolean`}}},l={args:{children:`Badge`,variant:`subtle`,color:`blue`}},u={render:()=>(0,n.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,n.jsx)(o,{variant:`solid`,color:`blue`,children:`Solid`}),(0,n.jsx)(o,{variant:`subtle`,color:`blue`,children:`Subtle`}),(0,n.jsx)(o,{variant:`outline`,color:`blue`,children:`Outline`})]})},d={render:()=>(0,n.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,n.jsx)(o,{color:`gray`,children:`Gray`}),(0,n.jsx)(o,{color:`blue`,children:`Blue`}),(0,n.jsx)(o,{color:`green`,children:`Green`}),(0,n.jsx)(o,{color:`yellow`,children:`Yellow`}),(0,n.jsx)(o,{color:`red`,children:`Red`})]})},f={render:()=>(0,n.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,n.jsx)(o,{color:`green`,dot:!0,children:`Active`}),(0,n.jsx)(o,{color:`yellow`,dot:!0,children:`Pending`}),(0,n.jsx)(o,{color:`red`,dot:!0,children:`Error`}),(0,n.jsx)(o,{color:`gray`,dot:!0,children:`Inactive`})]})},p={render:()=>(0,n.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,n.jsx)(o,{size:`sm`,color:`blue`,children:`Small`}),(0,n.jsx)(o,{size:`md`,color:`blue`,children:`Medium`}),(0,n.jsx)(o,{size:`lg`,color:`blue`,children:`Large`})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Badge',
    variant: 'subtle',
    color: 'blue'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap'
  }}>
      <Badge variant="solid" color="blue">Solid</Badge>
      <Badge variant="subtle" color="blue">Subtle</Badge>
      <Badge variant="outline" color="blue">Outline</Badge>
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap'
  }}>
      <Badge color="gray">Gray</Badge>
      <Badge color="blue">Blue</Badge>
      <Badge color="green">Green</Badge>
      <Badge color="yellow">Yellow</Badge>
      <Badge color="red">Red</Badge>
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap'
  }}>
      <Badge color="green" dot>Active</Badge>
      <Badge color="yellow" dot>Pending</Badge>
      <Badge color="red" dot>Error</Badge>
      <Badge color="gray" dot>Inactive</Badge>
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center'
  }}>
      <Badge size="sm" color="blue">Small</Badge>
      <Badge size="md" color="blue">Medium</Badge>
      <Badge size="lg" color="blue">Large</Badge>
    </div>
}`,...p.parameters?.docs?.source}}};var m=[`Default`,`Variants`,`Colors`,`WithDot`,`Sizes`];export{d as Colors,l as Default,p as Sizes,u as Variants,f as WithDot,m as __namedExportsOrder,c as default};