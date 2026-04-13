import"./chunk-DHx0Hwia.js";import{t as e}from"./react-DQOtSpIC.js";import{t}from"./jsx-runtime-CYNtxkAM.js";import{i as n,n as r}from"./icons-CsIhEsby.js";e();var i=t(),a={sm:`h-8 text-sm px-3`,md:`h-10 text-sm px-3`,lg:`h-11 text-base px-4`},o={outline:{base:`border border-gray-300 rounded-md bg-white hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20`,error:`border-rose-500 hover:border-rose-500 focus:border-rose-500 focus:ring-rose-500/20`},filled:{base:`border border-transparent rounded-md bg-gray-100 hover:bg-gray-200 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20`,error:`border-rose-500 bg-rose-50 hover:bg-rose-50 focus:bg-white focus:border-rose-500 focus:ring-rose-500/20`},flushed:{base:`border-0 border-b border-gray-300 rounded-none px-0 hover:border-gray-400 focus:border-blue-500 focus:ring-0 focus:ring-offset-0`,error:`border-rose-500 hover:border-rose-500 focus:border-rose-500`}};function s({label:e,helperText:t,errorMessage:n,isInvalid:r=!1,isDisabled:s=!1,isRequired:c=!1,size:l=`md`,variant:u=`outline`,leftAddon:d,rightAddon:f,leftElement:p,rightElement:m,id:h,className:g=``,..._}){let v=h||`input-${Math.random().toString(36).slice(2,7)}`,y=r||!!n,b=o[u],x=[`w-full outline-none transition-colors duration-150`,`placeholder:text-gray-400`,`disabled:opacity-50 disabled:cursor-not-allowed`,a[l],y?b.error:b.base,p&&`pl-9`,m&&`pr-9`,g].filter(Boolean).join(` `);return(0,i.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[e&&(0,i.jsxs)(`label`,{htmlFor:v,className:`text-sm font-medium text-gray-700`,children:[e,c&&(0,i.jsx)(`span`,{className:`ml-1 text-rose-500`,"aria-hidden":`true`,children:`*`})]}),(0,i.jsxs)(`div`,{className:`flex`,children:[d&&(0,i.jsx)(`div`,{className:`flex items-center px-3 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 text-sm text-gray-500`,children:d}),(0,i.jsxs)(`div`,{className:`relative flex-1`,children:[p&&(0,i.jsx)(`div`,{className:`absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none`,children:p}),(0,i.jsx)(`input`,{id:v,disabled:s,"aria-invalid":y,"aria-describedby":[t&&`${v}-helper`,y&&n&&`${v}-error`].filter(Boolean).join(` `)||void 0,"aria-required":c,className:x,..._}),m&&(0,i.jsx)(`div`,{className:`absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400`,children:m})]}),f&&(0,i.jsx)(`div`,{className:`flex items-center px-3 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-sm text-gray-500`,children:f})]}),t&&!y&&(0,i.jsx)(`p`,{id:`${v}-helper`,className:`text-xs text-gray-500`,children:t}),y&&n&&(0,i.jsx)(`p`,{id:`${v}-error`,className:`text-xs text-rose-500`,role:`alert`,children:n})]})}s.__docgenInfo={description:``,methods:[],displayName:`Input`,props:{label:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`string`},description:``},errorMessage:{required:!1,tsType:{name:`string`},description:``},isInvalid:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},isDisabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},isRequired:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'outline' | 'filled' | 'flushed'`,elements:[{name:`literal`,value:`'outline'`},{name:`literal`,value:`'filled'`},{name:`literal`,value:`'flushed'`}]},description:``,defaultValue:{value:`'outline'`,computed:!1}},leftAddon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},rightAddon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},leftElement:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},rightElement:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{defaultValue:{value:`''`,computed:!1},required:!1}},composes:[`Omit`]};var c={title:`Components/Input`,component:s,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`outline`,`filled`,`flushed`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},isInvalid:{control:`boolean`},isDisabled:{control:`boolean`},isRequired:{control:`boolean`}}},l={args:{label:`이름`,placeholder:`홍길동`}},u={render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,i.jsx)(s,{label:`Outline`,placeholder:`기본 스타일`,variant:`outline`}),(0,i.jsx)(s,{label:`Filled`,placeholder:`배경 채움 스타일`,variant:`filled`}),(0,i.jsx)(s,{label:`Flushed`,placeholder:`밑줄 스타일`,variant:`flushed`})]})},d={args:{label:`이메일`,placeholder:`hello@example.com`,helperText:`업무용 이메일을 입력해주세요`}},f={args:{label:`이메일`,placeholder:`hello@example.com`,isInvalid:!0,errorMessage:`올바른 이메일 형식이 아닙니다.`}},p={render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,i.jsx)(s,{label:`검색`,placeholder:`검색어를 입력하세요`,leftElement:(0,i.jsx)(n,{size:16})}),(0,i.jsx)(s,{label:`비밀번호`,type:`password`,placeholder:`비밀번호`,rightElement:(0,i.jsx)(r,{size:16})})]})},m={render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,i.jsx)(s,{label:`웹사이트`,leftAddon:`https://`,placeholder:`example.com`}),(0,i.jsx)(s,{label:`가격`,rightAddon:`원`,placeholder:`10,000`})]})},h={args:{label:`필수 입력`,placeholder:`필수 항목입니다`,isRequired:!0}},g={args:{label:`비활성화`,placeholder:`입력 불가`,isDisabled:!0}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: '이름',
    placeholder: '홍길동'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <Input label="Outline" placeholder="기본 스타일" variant="outline" />
      <Input label="Filled" placeholder="배경 채움 스타일" variant="filled" />
      <Input label="Flushed" placeholder="밑줄 스타일" variant="flushed" />
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: '이메일',
    placeholder: 'hello@example.com',
    helperText: '업무용 이메일을 입력해주세요'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: '이메일',
    placeholder: 'hello@example.com',
    isInvalid: true,
    errorMessage: '올바른 이메일 형식이 아닙니다.'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <Input label="검색" placeholder="검색어를 입력하세요" leftElement={<SearchIcon size={16} />} />
      <Input label="비밀번호" type="password" placeholder="비밀번호" rightElement={<EyeIcon size={16} />} />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <Input label="웹사이트" leftAddon="https://" placeholder="example.com" />
      <Input label="가격" rightAddon="원" placeholder="10,000" />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: '필수 입력',
    placeholder: '필수 항목입니다',
    isRequired: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: '비활성화',
    placeholder: '입력 불가',
    isDisabled: true
  }
}`,...g.parameters?.docs?.source}}};var _=[`Default`,`Variants`,`WithHelperText`,`WithError`,`WithIcons`,`WithAddon`,`Required`,`Disabled`];export{l as Default,g as Disabled,h as Required,u as Variants,m as WithAddon,f as WithError,d as WithHelperText,p as WithIcons,_ as __namedExportsOrder,c as default};