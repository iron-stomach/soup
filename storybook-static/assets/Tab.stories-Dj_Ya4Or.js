import{r as e}from"./chunk-DHx0Hwia.js";import{t}from"./react-DQOtSpIC.js";import{t as n}from"./jsx-runtime-CYNtxkAM.js";import{t as r}from"./Tab-B22bfArB.js";var i=e(t()),a=n(),o={title:`Components/Tab`,component:r,parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1a1a1a`}]}},tags:[`autodocs`],argTypes:{onChange:{action:`changed`}}},s={args:{items:[{label:`Overview`,value:`overview`},{label:`Details`,value:`details`},{label:`Settings`,value:`settings`}],defaultValue:`overview`}},c={args:{items:[{label:`Value`,value:`value1`},{label:`Value`,value:`value2`}],defaultValue:`value1`}},l={args:{items:[{label:`Value`,value:`value1`},{label:`Value`,value:`value2`}],defaultValue:`value2`}},u={args:{items:[{label:`Active`,value:`active`},{label:`Disabled`,value:`disabled`,disabled:!0},{label:`Normal`,value:`normal`}],defaultValue:`active`}},d={args:{items:[{label:`All`,value:`all`},{label:`Frontend`,value:`frontend`},{label:`Backend`,value:`backend`},{label:`DevOps`,value:`devops`},{label:`Design`,value:`design`}],defaultValue:`all`}},f={args:{items:[{label:`Tab 1`,value:`tab1`},{label:`Tab 2`,value:`tab2`},{label:`Tab 3`,value:`tab3`}]},render:()=>{let[e,t]=(0,i.useState)(`tab1`);return(0,a.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,a.jsx)(r,{items:[{label:`Tab 1`,value:`tab1`},{label:`Tab 2`,value:`tab2`},{label:`Tab 3`,value:`tab3`}],value:e,onChange:t}),(0,a.jsxs)(`p`,{style:{color:`#F7F7F8`,fontSize:14},children:[`Active: `,(0,a.jsx)(`strong`,{children:e})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
      label: 'Value',
      value: 'value1'
    }, {
      label: 'Value',
      value: 'value2'
    }],
    defaultValue: 'value1'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Value',
      value: 'value1'
    }, {
      label: 'Value',
      value: 'value2'
    }],
    defaultValue: 'value2'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Tab 1',
      value: 'tab1'
    }, {
      label: 'Tab 2',
      value: 'tab2'
    }, {
      label: 'Tab 3',
      value: 'tab3'
    }]
  },
  render: () => {
    const [value, setValue] = useState('tab1');
    return <div className="flex flex-col gap-4">
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
        fontSize: 14
      }}>
          Active: <strong>{value}</strong>
        </p>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};var p=[`Default`,`FirstActive`,`SecondActive`,`WithDisabledTab`,`ManyTabs`,`Controlled`];export{f as Controlled,s as Default,c as FirstActive,d as ManyTabs,l as SecondActive,u as WithDisabledTab,p as __namedExportsOrder,o as default};