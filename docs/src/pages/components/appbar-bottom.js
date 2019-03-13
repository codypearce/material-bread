import React, { Component } from 'react';
import { Text, View } from 'react-native';
import createPropData from '../../utils/createPropData';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import { AppbarBottom, IconButton, Button } from '../../../../src/index';
import LiveEdit from '../../components/LiveEdit/LiveEdit';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';

const sections = [
  { name: 'Demos' },
  { name: 'end fab', sub: true },
  { name: 'no fab', sub: true },
  { name: 'custom', sub: true },
];

const propData = [
  createPropData(
    'actionItems',
    'Each can be an object or node, renders on the right',
    'array',
    '',
  ),
  createPropData('appbarStyles', 'Styles appbar around content', 'object', ''),
  createPropData(
    'color',
    `Component's theme color`,
    'string: primary, secondary, dark, white',
    'primaryColor',
  ),

  createPropData('fab', `Displays fab or not`, 'bool', 'false'),
  createPropData(
    'fabCutout',
    `Displays cutout on appbar for fab`,
    'bool',
    'false',
  ),
  createPropData('fabIcon', `Name of Fab Icon`, 'string', ''),
  createPropData(
    'fabPosition',
    `Describes position of fab`,
    'string: center, end',
    'center',
  ),
  createPropData('fabStyles', `Styles applied to fab`, 'object', ''),
  createPropData('onFab', 'OnPress for fab if provided.', 'func', ''),
  createPropData(
    'onNavigation',
    'OnPress for navigationType IconButton if provided.',
    'func',
    '',
  ),

  createPropData(
    'navigationIcon',
    'Replaces navigationTyp element and renders on the far left before Title',
    'node',
    '',
  ),
  createPropData(
    'navigationType',
    'Name of IconButton, renders on the far left before Title.',
    'string',
    '',
  ),

  createPropData(
    'style',
    'Styles root element wrapping fab and appbar',
    'object',
    '',
  ),
];

const liveEditCode = `<AppbarBottom 
    fab 
    fabPosition={'center'} 
    fabCutout
    onFab={() => console.log('onFab')}
    navigationType={'menu'}
    actionItems={[
        {name: 'search', onPress: () => console.log('onSearch')},
        {name: 'more-vert'},
    ]}
    style={{marginTop: 16}}
/>`;

const usageCode = `import React, { Component } from 'react';
import { View } from 'react-native';
import { AppbarBottom } from 'material-bread';

export default class Page extends Component {
  render() {
    return (
      <View style={{position: 'relative'}}>
        <AppbarBottom 
            fab 
            fabPosition={'center'} 
            fabCutout
            navigationType={'menu'}
            actionItems={[
                {name: 'search', onPress: () => console.log('onSearch')},
                {name: 'more-vert'},
            ]}
            style={{position: 'absolute', bottom: 0}}
        />
      <View>
    );
  }
}`;

const endFab = `<AppbarBottom 
    fab 
    fabPosition={'end'} 
    fabIcon={'reply'}
    actionItems={[
        {name: 'archive', onPress: () => console.log('onArchive')},
        {name: 'mail'},
        {name: 'label'},
        {name: 'delete'},
    ]}
/>`;

const noFab = `<AppbarBottom
    navigationType={'menu'} 
    actionItems={[
        {name: 'archive', onPress: () => console.log('onArchive')},
        {name: 'mail'},
        {name: 'label'},
        {name: 'delete'},
    ]}
/>`;

const custom = `const styles = {
  appbar: {
    backgroundColor: '#009688'
  },
  left: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent:'flex-start',
  },
  button: {
    height: 30, 
    alignSelf: 'center', 
    marginRight: 16
  },
  fabStyle: {
    backgroundColor: '#00BCD4'
  }
}

render(
<AppbarBottom appbarStyles={styles.appbar} fab fabPosition="end" fabStyles={styles.fabStyle} >
  <View style={styles.left}>
    <Button type="contained" textColor="white" style={[styles.button, {backgroundColor:'#00BCD4' }]} >Menu</Button>
    <Button textColor="white" style={styles.button}>Install</Button>
    <Button textColor="white" style={[styles.button, {marginRight: 0}]}>About</Button>
  </View>
</AppbarBottom>
)`;

export default class AppbarPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'appbar-bottom'}
          title={'Appbar Bottom'}
          description={
            'A bottom app bar displays navigation and key actions at the bottom of mobile screens.'
          }
          docsLink={
            'https://material.io/design/components/app-bars-bottom.html#'
          }
          importCode={`import { AppbarBottom } from 'material-bread';`}
          componentDescription={
            'Appbar bottom is made up of three parts: left actions, fab, and right actions. Many combinations can be created with these components, however you can replace any part as needed. Below is a simple live example.'
          }
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{ AppbarBottom }}
          usageDescription={`Usage depends on what navigation package you're using. For react-navigation you can follow their guide on TabNavigation https://reactnavigation.org/docs/en/tab-based-navigation.html`}
          usageCode={usageCode}
          propData={propData}>
          <Section
            name="Demos"
            href="/components/appbar-bottom#demos"
            id="demos">
            <ComponentDescription text="Below are a few ways the appbar bottom can be used." />
          </Section>

          <Section
            name="End Fab"
            href="/components/appbar-bottom#end-fab"
            id="end-fab">
            <ComponentDescription text="Using an end fab will move actionItems to the left after the navigationIcon. Add the fabCutout prop to see how spacing is effected." />
            <LiveEdit code={endFab} scope={{ AppbarBottom, IconButton }} />
          </Section>

          <Section
            name="No Fab"
            href="/components/appbar-bottom#no-fab"
            id="no-fab">
            <ComponentDescription text="No fab will act like a normal appbar with actionItems." />
            <LiveEdit code={noFab} scope={{ AppbarBottom, IconButton }} />
          </Section>

          <Section
            name="Custom"
            href="/components/appbar-bottom#custom"
            id="custom">
            <ComponentDescription text="Adding children will replace all internal components with the provided components. This allows for full customization." />
            <LiveEdit
              noInline
              code={custom}
              scope={{ AppbarBottom, IconButton, Text, Button, View }}
            />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
