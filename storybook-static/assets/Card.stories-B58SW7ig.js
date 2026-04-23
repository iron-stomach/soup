import{r as e}from"./chunk-DHx0Hwia.js";import{t}from"./react-DQOtSpIC.js";import{t as n}from"./jsx-runtime-CYNtxkAM.js";import{t as r}from"./Button-DvCY12Hs.js";import{t as i}from"./icons-BBU2qLch.js";var a=e(t()),o=n(),s={elevated:`bg-white shadow-md border border-gray-100`,outline:`bg-white border border-gray-200`,filled:`bg-gray-50 border border-transparent`,unstyled:``},c={sm:`rounded-lg`,md:`rounded-xl`,lg:`rounded-2xl`},l={sm:`p-3`,md:`p-4`,lg:`p-6`};function u({children:e,className:t=``,actions:n}){return(0,o.jsxs)(`div`,{className:[`flex items-start justify-between gap-4`,t].join(` `),children:[(0,o.jsx)(`div`,{className:`flex-1`,children:e}),n&&(0,o.jsx)(`div`,{className:`shrink-0`,children:n})]})}function d({children:e,className:t=``}){return(0,o.jsx)(`div`,{className:t,children:e})}function f({children:e,className:t=``,divider:n=!1}){return(0,o.jsx)(`div`,{className:[n&&`border-t border-gray-100 pt-3`,t].filter(Boolean).join(` `),children:e})}function p({variant:e=`elevated`,size:t=`md`,isHoverable:n=!1,isClickable:r=!1,children:i,className:u=``,onClick:d}){let f=r||d?`button`:`div`,p=l[t];return(0,o.jsx)(f,{className:[`overflow-hidden transition-all duration-200`,s[e],c[t],n&&`hover:shadow-lg hover:-translate-y-0.5`,(r||d)&&`cursor-pointer hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`,f===`button`&&`w-full text-left`,u].filter(Boolean).join(` `),onClick:d,children:(0,o.jsx)(`div`,{className:`flex flex-col gap-3`,children:a.Children.map(i,e=>{if(!a.isValidElement(e))return e;let t=e.type?.displayName,n=e.type?.name,r=t||n||``;return[`CardHeader`,`CardBody`,`CardFooter`].includes(r)?a.cloneElement(e,{className:[p,e.props.className].filter(Boolean).join(` `)}):e})||i})})}u.__docgenInfo={description:``,methods:[],displayName:`CardHeader`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},actions:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}},d.__docgenInfo={description:``,methods:[],displayName:`CardBody`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}},f.__docgenInfo={description:``,methods:[],displayName:`CardFooter`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},divider:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}},p.__docgenInfo={description:``,methods:[],displayName:`Card`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'elevated' | 'outline' | 'filled' | 'unstyled'`,elements:[{name:`literal`,value:`'elevated'`},{name:`literal`,value:`'outline'`},{name:`literal`,value:`'filled'`},{name:`literal`,value:`'unstyled'`}]},description:``,defaultValue:{value:`'elevated'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},isHoverable:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},isClickable:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}};var m={title:`Components/Card`,component:p,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`elevated`,`outline`,`filled`,`unstyled`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},isHoverable:{control:`boolean`}}},h={render:()=>(0,o.jsxs)(p,{style:{maxWidth:360},children:[(0,o.jsxs)(u,{children:[(0,o.jsx)(`p`,{style:{fontWeight:600},children:`카드 제목`}),(0,o.jsx)(`p`,{style:{fontSize:14,color:`#737373`},children:`카드 부제목`})]}),(0,o.jsx)(d,{children:(0,o.jsx)(`p`,{style:{fontSize:14,color:`#525252`},children:`카드 본문 영역입니다. 자유롭게 콘텐츠를 배치할 수 있습니다.`})}),(0,o.jsx)(f,{divider:!0,children:(0,o.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:8},children:[(0,o.jsx)(r,{size:`sm`,variant:`ghost`,color:`secondary`,children:`취소`}),(0,o.jsx)(r,{size:`sm`,children:`확인`})]})})]})},g={render:()=>(0,o.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 1fr)`,gap:16},children:[(0,o.jsx)(p,{variant:`elevated`,children:(0,o.jsx)(d,{children:(0,o.jsx)(`p`,{style:{fontSize:14},children:`Elevated`})})}),(0,o.jsx)(p,{variant:`outline`,children:(0,o.jsx)(d,{children:(0,o.jsx)(`p`,{style:{fontSize:14},children:`Outline`})})}),(0,o.jsx)(p,{variant:`filled`,children:(0,o.jsx)(d,{children:(0,o.jsx)(`p`,{style:{fontSize:14},children:`Filled`})})})]})},_={render:()=>(0,o.jsxs)(p,{isHoverable:!0,style:{maxWidth:300},children:[(0,o.jsx)(u,{children:(0,o.jsx)(`p`,{style:{fontWeight:600},children:`호버 효과`})}),(0,o.jsx)(d,{children:(0,o.jsx)(`p`,{style:{fontSize:14,color:`#525252`},children:`마우스를 올려보세요.`})})]})},v={render:()=>(0,o.jsxs)(p,{style:{maxWidth:360},children:[(0,o.jsxs)(u,{actions:(0,o.jsx)(i,{size:16,style:{color:`#ABABAB`}}),children:[(0,o.jsx)(`p`,{style:{fontWeight:600},children:`액션 버튼`}),(0,o.jsx)(`p`,{style:{fontSize:14,color:`#737373`},children:`헤더 우측에 액션 배치`})]}),(0,o.jsx)(d,{children:(0,o.jsx)(`p`,{style:{fontSize:14,color:`#525252`},children:`actions prop으로 헤더 우측에 버튼을 배치할 수 있습니다.`})})]})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Card style={{
    maxWidth: 360
  }}>
      <CardHeader>
        <p style={{
        fontWeight: 600
      }}>카드 제목</p>
        <p style={{
        fontSize: 14,
        color: '#737373'
      }}>카드 부제목</p>
      </CardHeader>
      <CardBody>
        <p style={{
        fontSize: 14,
        color: '#525252'
      }}>카드 본문 영역입니다. 자유롭게 콘텐츠를 배치할 수 있습니다.</p>
      </CardBody>
      <CardFooter divider>
        <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        gap: 8
      }}>
          <Button size="sm" variant="ghost" color="secondary">취소</Button>
          <Button size="sm">확인</Button>
        </div>
      </CardFooter>
    </Card>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 16
  }}>
      <Card variant="elevated">
        <CardBody><p style={{
          fontSize: 14
        }}>Elevated</p></CardBody>
      </Card>
      <Card variant="outline">
        <CardBody><p style={{
          fontSize: 14
        }}>Outline</p></CardBody>
      </Card>
      <Card variant="filled">
        <CardBody><p style={{
          fontSize: 14
        }}>Filled</p></CardBody>
      </Card>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Card isHoverable style={{
    maxWidth: 300
  }}>
      <CardHeader>
        <p style={{
        fontWeight: 600
      }}>호버 효과</p>
      </CardHeader>
      <CardBody>
        <p style={{
        fontSize: 14,
        color: '#525252'
      }}>마우스를 올려보세요.</p>
      </CardBody>
    </Card>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Card style={{
    maxWidth: 360
  }}>
      <CardHeader actions={<EditIcon size={16} style={{
      color: '#ABABAB'
    }} />}>
        <p style={{
        fontWeight: 600
      }}>액션 버튼</p>
        <p style={{
        fontSize: 14,
        color: '#737373'
      }}>헤더 우측에 액션 배치</p>
      </CardHeader>
      <CardBody>
        <p style={{
        fontSize: 14,
        color: '#525252'
      }}>actions prop으로 헤더 우측에 버튼을 배치할 수 있습니다.</p>
      </CardBody>
    </Card>
}`,...v.parameters?.docs?.source}}};var y=[`Default`,`Variants`,`Hoverable`,`WithActions`];export{h as Default,_ as Hoverable,g as Variants,v as WithActions,y as __namedExportsOrder,m as default};