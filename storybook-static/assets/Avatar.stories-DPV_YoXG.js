import"./chunk-DHx0Hwia.js";import{t as e}from"./react-DQOtSpIC.js";import{t}from"./jsx-runtime-CYNtxkAM.js";e();var n=t(),r={xs:{container:`w-6 h-6`,text:`text-[10px]`},sm:{container:`w-8 h-8`,text:`text-xs`},md:{container:`w-10 h-10`,text:`text-sm`},lg:{container:`w-12 h-12`,text:`text-base`},xl:{container:`w-16 h-16`,text:`text-lg`},"2xl":{container:`w-20 h-20`,text:`text-xl`}},i={circle:`rounded-full`,square:`rounded-lg`};function a(e){return e.split(` `).map(e=>e[0]).slice(0,2).join(``).toUpperCase()}var o=[`bg-blue-100 text-blue-700`,`bg-green-100 text-green-700`,`bg-yellow-100 text-yellow-700`,`bg-purple-100 text-purple-700`,`bg-rose-100 text-rose-700`,`bg-orange-100 text-orange-700`,`bg-teal-100 text-teal-700`,`bg-indigo-100 text-indigo-700`];function s(e){return o[e.charCodeAt(0)%o.length]}function c({src:e,alt:t=``,name:o,size:c=`md`,variant:l=`circle`,className:u=``}){let{container:d,text:f}=r[c],p=i[l],m=o?s(o):`bg-gray-100 text-gray-500`,h=[`inline-flex items-center justify-center overflow-hidden shrink-0 font-medium select-none`,d,p,u].join(` `);return e?(0,n.jsx)(`img`,{src:e,alt:t,className:[h,`object-cover`].join(` `)}):o?(0,n.jsx)(`span`,{className:[h,m].join(` `),children:(0,n.jsx)(`span`,{className:f,children:a(o)})}):(0,n.jsx)(`span`,{className:[h,`bg-gray-100 text-gray-400`].join(` `),children:(0,n.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,className:`w-3/5 h-3/5`,"aria-hidden":`true`,children:(0,n.jsx)(`path`,{d:`M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z`})})})}function l({avatars:e,max:t=4,size:a=`md`,variant:o=`circle`,className:s=``}){let l=e.slice(0,t),u=e.length-t,{container:d,text:f}=r[a],p=i[o];return(0,n.jsxs)(`div`,{className:[`flex -space-x-2`,s].join(` `),children:[l.map((e,t)=>(0,n.jsx)(`div`,{className:`ring-2 ring-white rounded-full`,style:{zIndex:l.length-t},children:(0,n.jsx)(c,{...e,size:a,variant:o})},t)),u>0&&(0,n.jsxs)(`span`,{className:[`inline-flex items-center justify-center ring-2 ring-white bg-gray-100 text-gray-600 font-medium`,d,p,f].join(` `),children:[`+`,u]})]})}c.__docgenInfo={description:``,methods:[],displayName:`Avatar`,props:{src:{required:!1,tsType:{name:`string`},description:``},alt:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},name:{required:!1,tsType:{name:`string`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'`,elements:[{name:`literal`,value:`'xs'`},{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`},{name:`literal`,value:`'xl'`},{name:`literal`,value:`'2xl'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'circle' | 'square'`,elements:[{name:`literal`,value:`'circle'`},{name:`literal`,value:`'square'`}]},description:``,defaultValue:{value:`'circle'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}},l.__docgenInfo={description:``,methods:[],displayName:`AvatarGroup`,props:{avatars:{required:!0,tsType:{name:`Array`,elements:[{name:`AvatarProps`}],raw:`AvatarProps[]`},description:``},max:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`4`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'`,elements:[{name:`literal`,value:`'xs'`},{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`},{name:`literal`,value:`'xl'`},{name:`literal`,value:`'2xl'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'circle' | 'square'`,elements:[{name:`literal`,value:`'circle'`},{name:`literal`,value:`'square'`}]},description:``,defaultValue:{value:`'circle'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}};var u={title:`Components/Avatar`,component:c,tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`]},variant:{control:`select`,options:[`circle`,`square`]}}},d={args:{name:`홍길동`,size:`md`}},f={render:()=>(0,n.jsx)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`].map(e=>(0,n.jsx)(c,{size:e,name:`홍길동`},e))})},p={render:()=>(0,n.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,n.jsx)(c,{name:`홍길동`,variant:`circle`}),(0,n.jsx)(c,{name:`홍길동`,variant:`square`})]})},m={render:()=>(0,n.jsx)(`div`,{style:{display:`flex`,gap:8},children:[`Alice Kim`,`Bob Lee`,`Carol Park`,`David Choi`,`Eve Jung`].map(e=>(0,n.jsx)(c,{name:e},e))})},h={render:()=>(0,n.jsx)(l,{avatars:[{name:`Alice Kim`},{name:`Bob Lee`},{name:`Carol Park`},{name:`David Choi`},{name:`Eve Jung`},{name:`Frank Oh`}],max:4})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: '홍길동',
    size: 'md'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>
      {(['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map(size => <Avatar key={size} size={size} name="홍길동" />)}
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12
  }}>
      <Avatar name="홍길동" variant="circle" />
      <Avatar name="홍길동" variant="square" />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8
  }}>
      {['Alice Kim', 'Bob Lee', 'Carol Park', 'David Choi', 'Eve Jung'].map(name => <Avatar key={name} name={name} />)}
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarGroup avatars={[{
    name: 'Alice Kim'
  }, {
    name: 'Bob Lee'
  }, {
    name: 'Carol Park'
  }, {
    name: 'David Choi'
  }, {
    name: 'Eve Jung'
  }, {
    name: 'Frank Oh'
  }]} max={4} />
}`,...h.parameters?.docs?.source}}};var g=[`Default`,`Sizes`,`Variants`,`Colors`,`Group`];export{m as Colors,d as Default,h as Group,f as Sizes,p as Variants,g as __namedExportsOrder,u as default};