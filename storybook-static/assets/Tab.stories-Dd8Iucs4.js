import{r as e}from"./chunk-DHx0Hwia.js";import{t}from"./react-DQOtSpIC.js";import{t as n}from"./jsx-runtime-CYNtxkAM.js";var r=e(t()),i=n();function a({items:e,defaultValue:t,value:n,onChange:a,className:o=``}){let[s,c]=(0,r.useState)(t??e[0]?.value??``),l=n??s,u=(e,t)=>{t||(n===void 0&&c(e),a?.(e))};return(0,i.jsx)(`div`,{role:`tablist`,className:`flex ${o}`,children:e.map(e=>{let t=l===e.value;return(0,i.jsx)(`button`,{role:`tab`,"aria-selected":t,disabled:e.disabled,onClick:()=>u(e.value,e.disabled),className:[`relative h-10 px-6 pt-2 pb-1.5`,`text-[15px] font-medium leading-[18px] tracking-[-0.03px] whitespace-nowrap`,`transition-colors duration-150 cursor-pointer select-none`,`focus-visible:outline-none`,t?[`text-[#F7F7F8]`,`border-b-[1.5px] border-[#F7F7F8] border-solid`].join(` `):[`text-[rgba(174,176,182,0.61)]`,`border-b border-[rgba(112,115,124,0.32)] border-solid`,`hover:text-[rgba(174,176,182,0.85)]`].join(` `),e.disabled&&`cursor-not-allowed opacity-40 pointer-events-none`].filter(Boolean).join(` `),children:e.label},e.value)})})}a.__docgenInfo={description:``,methods:[],displayName:`Tab`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  label: string;
  value: string;
  disabled?: boolean;
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`value`,value:{name:`string`,required:!0}},{key:`disabled`,value:{name:`boolean`,required:!1}}]}}],raw:`TabItem[]`},description:``},defaultValue:{required:!1,tsType:{name:`string`},description:``},value:{required:!1,tsType:{name:`string`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}};var o={title:`Components/Tab`,component:a,tags:[`autodocs`],argTypes:{onChange:{action:`changed`}}},s={args:{items:[{label:`Overview`,value:`overview`},{label:`Details`,value:`details`},{label:`Settings`,value:`settings`}],defaultValue:`overview`}},c={args:{items:[{label:`Active`,value:`active`},{label:`Disabled`,value:`disabled`,disabled:!0},{label:`Normal`,value:`normal`}],defaultValue:`active`}},l={args:{items:[{label:`All`,value:`all`},{label:`Frontend`,value:`frontend`},{label:`Backend`,value:`backend`},{label:`DevOps`,value:`devops`},{label:`Design`,value:`design`}],defaultValue:`all`}},u={render:()=>{let[e,t]=(0,r.useState)(`tab1`);return(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,i.jsx)(a,{items:[{label:`Tab 1`,value:`tab1`},{label:`Tab 2`,value:`tab2`},{label:`Tab 3`,value:`tab3`}],value:e,onChange:t}),(0,i.jsxs)(`p`,{style:{color:`#F7F7F8`,fontSize:14,margin:0},children:[`Active: `,(0,i.jsx)(`strong`,{children:e})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Overview',
      value: 'overview'
    }, {
      label: 'Details',
      value: 'details'
    }, {
      label: 'Settings',
      value: 'settings'
    }],
    defaultValue: 'overview'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Active',
      value: 'active'
    }, {
      label: 'Disabled',
      value: 'disabled',
      disabled: true
    }, {
      label: 'Normal',
      value: 'normal'
    }],
    defaultValue: 'active'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'All',
      value: 'all'
    }, {
      label: 'Frontend',
      value: 'frontend'
    }, {
      label: 'Backend',
      value: 'backend'
    }, {
      label: 'DevOps',
      value: 'devops'
    }, {
      label: 'Design',
      value: 'design'
    }],
    defaultValue: 'all'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('tab1');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <Tab items={[{
        label: 'Tab 1',
        value: 'tab1'
      }, {
        label: 'Tab 2',
        value: 'tab2'
      }, {
        label: 'Tab 3',
        value: 'tab3'
      }]} value={value} onChange={setValue} />
        <p style={{
        color: '#F7F7F8',
        fontSize: 14,
        margin: 0
      }}>
          Active: <strong>{value}</strong>
        </p>
      </div>;
  }
}`,...u.parameters?.docs?.source}}};var d=[`Default`,`WithDisabledTab`,`ManyTabs`,`Controlled`];export{u as Controlled,s as Default,l as ManyTabs,c as WithDisabledTab,d as __namedExportsOrder,o as default};