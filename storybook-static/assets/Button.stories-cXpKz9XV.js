import{t as e}from"./jsx-runtime-CYNtxkAM.js";import{t}from"./Button-DvCY12Hs.js";var n=e(),r=()=>(0,n.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:(0,n.jsx)(`path`,{d:`M3 8h10M9 4l4 4-4 4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),i=()=>(0,n.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:(0,n.jsx)(`path`,{d:`M8 3.5v9M3.5 8h9`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})}),a={title:`Components/Button`,component:t,parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#121212`}]}},tags:[`autodocs`],args:{children:`Button`},argTypes:{variant:{control:`select`,options:[`solid`,`outline`,`ghost`,`link`]},color:{control:`select`,options:[`primary`,`secondary`,`danger`,`success`]},size:{control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`]},isLoading:{control:`boolean`},isDisabled:{control:`boolean`},fullWidth:{control:`boolean`},children:{table:{disable:!0}}}},o={name:`Solid / Default`,args:{variant:`solid`,color:`primary`,size:`md`,children:`Button`}},s={args:{},name:`Solid / All Sizes`,render:()=>(0,n.jsx)(`div`,{className:`flex items-center gap-4`,children:[`sm`,`md`,`lg`].map(e=>(0,n.jsx)(t,{variant:`solid`,color:`primary`,size:e,children:`Button`},e))})},c={args:{},name:`Solid / With Icon`,render:()=>(0,n.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,n.jsx)(t,{variant:`solid`,color:`primary`,size:`sm`,rightIcon:(0,n.jsx)(r,{}),children:`Button`}),(0,n.jsx)(t,{variant:`solid`,color:`primary`,size:`md`,rightIcon:(0,n.jsx)(r,{}),children:`Button`}),(0,n.jsx)(t,{variant:`solid`,color:`primary`,size:`lg`,rightIcon:(0,n.jsx)(r,{}),children:`Button`})]})},l={name:`Solid / Disabled`,args:{variant:`solid`,color:`primary`,size:`md`,children:`Button`,isDisabled:!0}},u={name:`Solid / Loading`,args:{variant:`solid`,color:`primary`,size:`md`,children:`Saving...`,isLoading:!0}},d={name:`Ghost / Default`,args:{variant:`ghost`,color:`primary`,size:`md`,children:`Button`}},f={args:{},name:`Ghost / All States`,render:()=>(0,n.jsx)(`div`,{className:`flex flex-col gap-6`,children:[{label:`Default`,disabled:!1},{label:`Disabled`,disabled:!0}].map(({label:e,disabled:r})=>(0,n.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,n.jsx)(`span`,{style:{color:`rgba(174,176,182,0.61)`,fontSize:12,width:72},children:e}),(0,n.jsx)(`div`,{className:`flex items-center gap-3`,children:[`sm`,`md`,`lg`].map(e=>(0,n.jsx)(t,{variant:`ghost`,color:`primary`,size:e,isDisabled:r,children:`Button`},e))})]},e))})},p={args:{},name:`Ghost / All Sizes`,render:()=>(0,n.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,n.jsx)(t,{variant:`ghost`,color:`primary`,size:`sm`,children:`Button`}),(0,n.jsx)(t,{variant:`ghost`,color:`primary`,size:`md`,children:`Button`}),(0,n.jsx)(t,{variant:`ghost`,color:`primary`,size:`lg`,children:`Button`})]})},m={args:{},name:`Ghost / Text + Icon`,render:()=>(0,n.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,n.jsx)(t,{variant:`ghost`,color:`primary`,size:`sm`,rightIcon:(0,n.jsx)(r,{}),children:`Button`}),(0,n.jsx)(t,{variant:`ghost`,color:`primary`,size:`md`,rightIcon:(0,n.jsx)(r,{}),children:`Button`}),(0,n.jsx)(t,{variant:`ghost`,color:`primary`,size:`lg`,rightIcon:(0,n.jsx)(r,{}),children:`Button`})]})},h={args:{},name:`Ghost / Icon + Text`,render:()=>(0,n.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,n.jsx)(t,{variant:`ghost`,color:`primary`,size:`sm`,leftIcon:(0,n.jsx)(i,{}),children:`Button`}),(0,n.jsx)(t,{variant:`ghost`,color:`primary`,size:`md`,leftIcon:(0,n.jsx)(i,{}),children:`Button`}),(0,n.jsx)(t,{variant:`ghost`,color:`primary`,size:`lg`,leftIcon:(0,n.jsx)(i,{}),children:`Button`})]})},g={args:{},name:`Ghost / Disabled`,render:()=>(0,n.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,n.jsx)(t,{variant:`ghost`,color:`primary`,size:`sm`,isDisabled:!0,children:`Button`}),(0,n.jsx)(t,{variant:`ghost`,color:`primary`,size:`md`,isDisabled:!0,children:`Button`}),(0,n.jsx)(t,{variant:`ghost`,color:`primary`,size:`lg`,isDisabled:!0,children:`Button`})]})},_={args:{},name:`Ghost / sm vs solid padding 비교`,render:()=>(0,n.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,n.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,n.jsx)(`span`,{style:{color:`rgba(174,176,182,0.61)`,fontSize:12,width:80},children:`Ghost sm`}),(0,n.jsx)(t,{variant:`ghost`,color:`primary`,size:`sm`,children:`Button`}),(0,n.jsx)(t,{variant:`ghost`,color:`primary`,size:`sm`,rightIcon:(0,n.jsx)(r,{}),children:`Button`})]}),(0,n.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,n.jsx)(`span`,{style:{color:`rgba(174,176,182,0.61)`,fontSize:12,width:80},children:`Solid sm`}),(0,n.jsx)(t,{variant:`solid`,color:`primary`,size:`sm`,children:`Button`}),(0,n.jsx)(t,{variant:`solid`,color:`primary`,size:`sm`,rightIcon:(0,n.jsx)(r,{}),children:`Button`})]})]})},v={name:`Outline / Default`,args:{variant:`outline`,color:`primary`,size:`md`,children:`Button`}},y={args:{},name:`All / Variants × Colors`,render:()=>(0,n.jsx)(`div`,{className:`flex flex-col gap-5`,children:[`solid`,`outline`,`ghost`].map(e=>(0,n.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,n.jsx)(`span`,{style:{color:`rgba(174,176,182,0.61)`,fontSize:12,width:56},children:e}),[`primary`,`secondary`,`danger`,`success`].map(r=>(0,n.jsx)(t,{variant:e,color:r,size:`md`,children:r},r))]},e))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Solid / Default',
  args: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
    children: 'Button'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {},
  name: 'Solid / All Sizes',
  render: () => <div className="flex items-center gap-4">
      {(['sm', 'md', 'lg'] as const).map(size => <Button key={size} variant="solid" color="primary" size={size}>
          Button
        </Button>)}
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  name: 'Solid / With Icon',
  render: () => <div className="flex items-center gap-4">
      <Button variant="solid" color="primary" size="sm" rightIcon={<ArrowRightIcon />}>Button</Button>
      <Button variant="solid" color="primary" size="md" rightIcon={<ArrowRightIcon />}>Button</Button>
      <Button variant="solid" color="primary" size="lg" rightIcon={<ArrowRightIcon />}>Button</Button>
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Solid / Disabled',
  args: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
    children: 'Button',
    isDisabled: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Solid / Loading',
  args: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
    children: 'Saving...',
    isLoading: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Ghost / Default',
  args: {
    variant: 'ghost',
    color: 'primary',
    size: 'md',
    children: 'Button'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {},
  name: 'Ghost / All States',
  render: () => <div className="flex flex-col gap-6">
      {/* 상태 레이블 */}
      {([{
      label: 'Default',
      disabled: false
    }, {
      label: 'Disabled',
      disabled: true
    }] as const).map(({
      label,
      disabled
    }) => <div key={label} className="flex items-center gap-2">
          <span style={{
        color: 'rgba(174,176,182,0.61)',
        fontSize: 12,
        width: 72
      }}>{label}</span>
          <div className="flex items-center gap-3">
            {(['sm', 'md', 'lg'] as const).map(size => <Button key={size} variant="ghost" color="primary" size={size} isDisabled={disabled}>
                Button
              </Button>)}
          </div>
        </div>)}
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {},
  name: 'Ghost / All Sizes',
  render: () => <div className="flex items-center gap-4">
      <Button variant="ghost" color="primary" size="sm">Button</Button>
      <Button variant="ghost" color="primary" size="md">Button</Button>
      <Button variant="ghost" color="primary" size="lg">Button</Button>
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {},
  name: 'Ghost / Text + Icon',
  render: () => <div className="flex items-center gap-4">
      <Button variant="ghost" color="primary" size="sm" rightIcon={<ArrowRightIcon />}>Button</Button>
      <Button variant="ghost" color="primary" size="md" rightIcon={<ArrowRightIcon />}>Button</Button>
      <Button variant="ghost" color="primary" size="lg" rightIcon={<ArrowRightIcon />}>Button</Button>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {},
  name: 'Ghost / Icon + Text',
  render: () => <div className="flex items-center gap-4">
      <Button variant="ghost" color="primary" size="sm" leftIcon={<PlusIcon />}>Button</Button>
      <Button variant="ghost" color="primary" size="md" leftIcon={<PlusIcon />}>Button</Button>
      <Button variant="ghost" color="primary" size="lg" leftIcon={<PlusIcon />}>Button</Button>
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {},
  name: 'Ghost / Disabled',
  render: () => <div className="flex items-center gap-4">
      <Button variant="ghost" color="primary" size="sm" isDisabled>Button</Button>
      <Button variant="ghost" color="primary" size="md" isDisabled>Button</Button>
      <Button variant="ghost" color="primary" size="lg" isDisabled>Button</Button>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {},
  name: 'Ghost / sm vs solid padding 비교',
  render: () => <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span style={{
        color: 'rgba(174,176,182,0.61)',
        fontSize: 12,
        width: 80
      }}>Ghost sm</span>
        <Button variant="ghost" color="primary" size="sm">Button</Button>
        <Button variant="ghost" color="primary" size="sm" rightIcon={<ArrowRightIcon />}>Button</Button>
      </div>
      <div className="flex items-center gap-3">
        <span style={{
        color: 'rgba(174,176,182,0.61)',
        fontSize: 12,
        width: 80
      }}>Solid sm</span>
        <Button variant="solid" color="primary" size="sm">Button</Button>
        <Button variant="solid" color="primary" size="sm" rightIcon={<ArrowRightIcon />}>Button</Button>
      </div>
    </div>
}`,..._.parameters?.docs?.source},description:{story:`Figma 스펙 비교: Default(sm) ghost는 수평 패딩 6px`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Outline / Default',
  args: {
    variant: 'outline',
    color: 'primary',
    size: 'md',
    children: 'Button'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {},
  name: 'All / Variants × Colors',
  render: () => <div className="flex flex-col gap-5">
      {(['solid', 'outline', 'ghost'] as const).map(variant => <div key={variant} className="flex items-center gap-4">
          <span style={{
        color: 'rgba(174,176,182,0.61)',
        fontSize: 12,
        width: 56
      }}>{variant}</span>
          {(['primary', 'secondary', 'danger', 'success'] as const).map(color => <Button key={color} variant={variant} color={color} size="md">
              {color}
            </Button>)}
        </div>)}
    </div>
}`,...y.parameters?.docs?.source}}};var b=[`SolidDefault`,`SolidSizes`,`SolidWithIcon`,`SolidDisabled`,`SolidLoading`,`GhostDefault`,`GhostAllStates`,`GhostSizes`,`GhostWithRightIcon`,`GhostWithLeftIcon`,`GhostDisabled`,`GhostSmPadding`,`OutlineDefault`,`AllVariants`];export{y as AllVariants,f as GhostAllStates,d as GhostDefault,g as GhostDisabled,p as GhostSizes,_ as GhostSmPadding,h as GhostWithLeftIcon,m as GhostWithRightIcon,v as OutlineDefault,o as SolidDefault,l as SolidDisabled,u as SolidLoading,s as SolidSizes,c as SolidWithIcon,b as __namedExportsOrder,a as default};