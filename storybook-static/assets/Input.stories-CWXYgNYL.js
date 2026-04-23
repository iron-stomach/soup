import{r as e}from"./chunk-DHx0Hwia.js";import{t}from"./react-DQOtSpIC.js";import{t as n}from"./jsx-runtime-CYNtxkAM.js";import{n as r}from"./icons-BBU2qLch.js";var i=e(t()),a=n(),o=({size:e=20,color:t=`currentColor`})=>(0,a.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 20 20`,fill:`none`,"aria-hidden":!0,children:(0,a.jsx)(`path`,{d:`M4.167 10h11.666M10 4.167 15.833 10 10 15.833`,stroke:t,strokeWidth:1.5,strokeLinecap:`round`,strokeLinejoin:`round`})}),s=()=>(0,a.jsx)(`svg`,{width:16,height:16,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":!0,children:(0,a.jsx)(`rect`,{x:`2.5`,y:`2.5`,width:`11`,height:`11`,rx:`2.5`,fill:`rgba(174,176,182,0.5)`})});function c(e,t){let n=t===`expanded`?16:12;return e===`disable`?{border:`1px solid rgba(112, 115, 124, 0.32)`,backgroundColor:`#1c1c1c`,borderRadius:n}:{border:`1px solid transparent`,backgroundImage:`linear-gradient(#1b1c1e, #1b1c1e), linear-gradient(91deg, #2E8DD5 -0.72%, #2A9060 29.36%, #E0942D 59.43%, #E7664B 84.49%, #CF295D 99.52%)`,backgroundOrigin:`padding-box, border-box`,backgroundClip:`padding-box, border-box`,borderRadius:n}}function l({state:e=`default`,layout:t=`expanded`,value:n=``,placeholder:i=`무엇이든 물어보고 만들어보세요`,onChange:l,onSubmit:u,onAttach:d,className:f=``}){let p=t===`expanded`,m=e===`disable`,h=e===`enable`,g={display:`flex`,flexDirection:p?`column`:`row`,alignItems:p?`flex-start`:`center`,gap:12,paddingTop:p?16:12,paddingBottom:12,paddingLeft:16,paddingRight:16,boxSizing:`border-box`,maxWidth:p?780:360,minWidth:p?343:280,...c(e,t)},_={fontFamily:`Pretendard Variable, Pretendard, sans-serif`,fontSize:16,fontWeight:400,lineHeight:1.5,color:h?`#f7f7f8`:`rgba(174, 176, 182, 0.61)`,background:`transparent`,border:`none`,outline:`none`,width:`100%`,padding:0,caretColor:`#f7f7f8`},v={width:32,height:32,display:`flex`,alignItems:`center`,justifyContent:`center`,borderRadius:8,flexShrink:0,border:`none`,cursor:m?`not-allowed`:`pointer`,padding:0,backgroundColor:h?`#005CE6`:m?`rgba(174,176,182,0.28)`:`#333438`},y={width:32,height:32,display:`flex`,alignItems:`center`,justifyContent:`center`,borderRadius:8,border:`1px solid rgba(112, 115, 124, 0.32)`,cursor:m?`not-allowed`:`pointer`,flexShrink:0,background:`transparent`,padding:0},b=m?`rgba(174,176,182,0.4)`:`#f7f7f8`,x=()=>(0,a.jsx)(`button`,{style:v,disabled:m,onClick:m?void 0:u,"aria-label":m?`전송 불가`:`전송`,className:`transition-all duration-150 hover:brightness-110 disabled:opacity-40`,children:m?(0,a.jsx)(s,{}):(0,a.jsx)(o,{size:20,color:`#f7f7f8`})});return(0,a.jsxs)(`div`,{style:g,className:f,children:[(0,a.jsx)(`div`,{style:{flex:1,width:`100%`,overflow:`hidden`,minHeight:28},children:p?(0,a.jsx)(`textarea`,{value:n,placeholder:i,onChange:e=>l?.(e.target.value),disabled:m,rows:1,style:{..._,resize:`none`,minHeight:28,maxHeight:192},className:`placeholder:text-[rgba(174,176,182,0.61)] focus:outline-none`}):(0,a.jsx)(`input`,{type:`text`,value:n,placeholder:i,onChange:e=>l?.(e.target.value),disabled:m,style:_,className:`placeholder:text-[rgba(174,176,182,0.61)] focus:outline-none`})}),p?(0,a.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,width:`100%`,height:32,flexShrink:0},children:[(0,a.jsx)(`button`,{style:y,onClick:m?void 0:d,disabled:m,"aria-label":`파일 첨부`,className:`transition-all duration-150 hover:brightness-110 disabled:opacity-40`,children:(0,a.jsx)(r,{size:20,color:b,strokeWidth:1.5})}),(0,a.jsx)(x,{})]}):(0,a.jsx)(x,{})]})}l.__docgenInfo={description:``,methods:[],displayName:`Input`,props:{state:{required:!1,tsType:{name:`union`,raw:`'disable' | 'default' | 'enable'`,elements:[{name:`literal`,value:`'disable'`},{name:`literal`,value:`'default'`},{name:`literal`,value:`'enable'`}]},description:`인풋 상태`,defaultValue:{value:`'default'`,computed:!1}},layout:{required:!1,tsType:{name:`union`,raw:`'expanded' | 'compact'`,elements:[{name:`literal`,value:`'expanded'`},{name:`literal`,value:`'compact'`}]},description:`레이아웃 타입`,defaultValue:{value:`'expanded'`,computed:!1}},value:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'무엇이든 물어보고 만들어보세요'`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},onSubmit:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onAttach:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}};var u={title:`Components/Input`,component:l,tags:[`autodocs`],parameters:{backgrounds:{default:`dark`,values:[{name:`dark`,value:`#0f0f11`}]},layout:`centered`},argTypes:{state:{control:`select`,options:[`disable`,`default`,`enable`],description:`인풋 상태`},layout:{control:`select`,options:[`expanded`,`compact`],description:`레이아웃 타입`},placeholder:{control:`text`},value:{control:`text`}}},d={fontFamily:`Pretendard Variable, Pretendard, sans-serif`,fontSize:11,fontWeight:500,letterSpacing:`0.08em`,textTransform:`uppercase`,color:`rgba(255,255,255,0.3)`,marginBottom:12},f={args:{state:`default`,layout:`expanded`,placeholder:`무엇이든 물어보고 만들어보세요`}},p={name:`All Variants`,render:()=>(0,a.jsxs)(`div`,{style:{padding:40,display:`flex`,gap:48,alignItems:`flex-start`,minWidth:900},children:[(0,a.jsxs)(`div`,{style:{flex:1},children:[(0,a.jsx)(`p`,{style:d,children:`Expanded`}),(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,a.jsx)(l,{state:`disable`,layout:`expanded`}),(0,a.jsx)(l,{state:`default`,layout:`expanded`}),(0,a.jsx)(l,{state:`enable`,layout:`expanded`,value:`무엇이든 물어보고 만들어보세요`})]})]}),(0,a.jsxs)(`div`,{style:{flex:1},children:[(0,a.jsx)(`p`,{style:d,children:`Compact`}),(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,alignItems:`flex-start`},children:[(0,a.jsx)(l,{state:`disable`,layout:`compact`}),(0,a.jsx)(l,{state:`default`,layout:`compact`}),(0,a.jsx)(l,{state:`enable`,layout:`compact`,value:`무엇이든 물어보고 만들어보세요`})]})]})]})},m={name:`Expanded — All States`,render:()=>(0,a.jsxs)(`div`,{style:{padding:40,display:`flex`,flexDirection:`column`,gap:16,minWidth:820},children:[(0,a.jsx)(l,{state:`disable`,layout:`expanded`}),(0,a.jsx)(l,{state:`default`,layout:`expanded`}),(0,a.jsx)(l,{state:`enable`,layout:`expanded`,value:`무엇이든 물어보고 만들어보세요`})]})},h={name:`Compact — All States`,render:()=>(0,a.jsxs)(`div`,{style:{padding:40,display:`flex`,flexDirection:`column`,gap:16,alignItems:`flex-start`},children:[(0,a.jsx)(l,{state:`disable`,layout:`compact`}),(0,a.jsx)(l,{state:`default`,layout:`compact`}),(0,a.jsx)(l,{state:`enable`,layout:`compact`,value:`무엇이든 물어보고 만들어보세요`})]})},g={name:`Interactive (Expanded)`,render:()=>(0,a.jsx)(()=>{let[e,t]=i.useState(``);return(0,a.jsx)(`div`,{style:{padding:40,minWidth:820},children:(0,a.jsx)(l,{state:e.length>0?`enable`:`default`,layout:`expanded`,value:e,onChange:t,onSubmit:()=>t(``),onAttach:()=>{}})})},{})},_={name:`Interactive (Compact)`,render:()=>(0,a.jsx)(()=>{let[e,t]=i.useState(``);return(0,a.jsx)(`div`,{style:{padding:40},children:(0,a.jsx)(l,{state:e.length>0?`enable`:`default`,layout:`compact`,value:e,onChange:t,onSubmit:()=>t(``)})})},{})},v={args:{state:`disable`,layout:`expanded`}},y={args:{state:`enable`,layout:`expanded`,value:`무엇이든 물어보고 만들어보세요`}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'default',
    layout: 'expanded',
    placeholder: '무엇이든 물어보고 만들어보세요'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => <div style={{
    padding: 40,
    display: 'flex',
    gap: 48,
    alignItems: 'flex-start',
    minWidth: 900
  }}>
      {/* Expanded column */}
      <div style={{
      flex: 1
    }}>
        <p style={sectionLabel}>Expanded</p>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }}>
          <Input state="disable" layout="expanded" />
          <Input state="default" layout="expanded" />
          <Input state="enable" layout="expanded" value="무엇이든 물어보고 만들어보세요" />
        </div>
      </div>

      {/* Compact column */}
      <div style={{
      flex: 1
    }}>
        <p style={sectionLabel}>Compact</p>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        alignItems: 'flex-start'
      }}>
          <Input state="disable" layout="compact" />
          <Input state="default" layout="compact" />
          <Input state="enable" layout="compact" value="무엇이든 물어보고 만들어보세요" />
        </div>
      </div>
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Expanded — All States',
  render: () => <div style={{
    padding: 40,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    minWidth: 820
  }}>
      <Input state="disable" layout="expanded" />
      <Input state="default" layout="expanded" />
      <Input state="enable" layout="expanded" value="무엇이든 물어보고 만들어보세요" />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Compact — All States',
  render: () => <div style={{
    padding: 40,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    alignItems: 'flex-start'
  }}>
      <Input state="disable" layout="compact" />
      <Input state="default" layout="compact" />
      <Input state="enable" layout="compact" value="무엇이든 물어보고 만들어보세요" />
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Interactive (Expanded)',
  render: () => {
    const Demo = () => {
      const [value, setValue] = React.useState('');
      const state = value.length > 0 ? 'enable' : 'default';
      return <div style={{
        padding: 40,
        minWidth: 820
      }}>
          <Input state={state} layout="expanded" value={value} onChange={setValue} onSubmit={() => setValue('')} onAttach={() => {}} />
        </div>;
    };
    return <Demo />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Interactive (Compact)',
  render: () => {
    const Demo = () => {
      const [value, setValue] = React.useState('');
      const state = value.length > 0 ? 'enable' : 'default';
      return <div style={{
        padding: 40
      }}>
          <Input state={state} layout="compact" value={value} onChange={setValue} onSubmit={() => setValue('')} />
        </div>;
    };
    return <Demo />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'disable',
    layout: 'expanded'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'enable',
    layout: 'expanded',
    value: '무엇이든 물어보고 만들어보세요'
  }
}`,...y.parameters?.docs?.source}}};var b=[`Default`,`AllVariants`,`Expanded`,`Compact`,`Interactive`,`InteractiveCompact`,`Disable`,`Enable`];export{p as AllVariants,h as Compact,f as Default,v as Disable,y as Enable,m as Expanded,g as Interactive,_ as InteractiveCompact,b as __namedExportsOrder,u as default};