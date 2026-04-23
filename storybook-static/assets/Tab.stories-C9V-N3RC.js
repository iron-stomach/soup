import{r as e}from"./chunk-DHx0Hwia.js";import{t}from"./react-DQOtSpIC.js";import{t as n}from"./jsx-runtime-CYNtxkAM.js";import{t as r}from"./Tab-B22bfArB.js";var i=e(t()),a=n(),o={title:`Components/Tab`,component:r,tags:[`autodocs`],argTypes:{onChange:{action:`changed`}}},s={args:{items:[{label:`Overview`,value:`overview`},{label:`Details`,value:`details`},{label:`Settings`,value:`settings`}],defaultValue:`overview`}},c={args:{items:[{label:`Active`,value:`active`},{label:`Disabled`,value:`disabled`,disabled:!0},{label:`Normal`,value:`normal`}],defaultValue:`active`}},l={args:{items:[{label:`All`,value:`all`},{label:`Frontend`,value:`frontend`},{label:`Backend`,value:`backend`},{label:`DevOps`,value:`devops`},{label:`Design`,value:`design`}],defaultValue:`all`}},u={render:()=>{let[e,t]=(0,i.useState)(`tab1`);return(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,a.jsx)(r,{items:[{label:`Tab 1`,value:`tab1`},{label:`Tab 2`,value:`tab2`},{label:`Tab 3`,value:`tab3`}],value:e,onChange:t}),(0,a.jsxs)(`p`,{style:{color:`#F7F7F8`,fontSize:14,margin:0},children:[`Active: `,(0,a.jsx)(`strong`,{children:e})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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