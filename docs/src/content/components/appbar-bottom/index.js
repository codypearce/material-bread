import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Section from '../../../components/Section';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';
import { AppbarBottom, IconButton, Button } from '../../../../../src/index';
import LiveEdit from '../../../components/LiveEdit/LiveEdit';
import ComponentDescription from '../../../components/ComponentPage/ComponentDescription';
import Link from '../../../components/Link';
import CodeInline from '../../../components/CodeInline';
import propData from '../../../content/components/appbar-bottom/propData';

const sections = [
  { name: 'Demos' },
  { name: 'end fab', sub: true },
  { name: 'no fab', sub: true },
  { name: 'custom', sub: true },
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
    <Button type="contained" containerStyle={[styles.button, {height: 34}]} text={'menu'}  style={{height:30}}/>
    <Button textColor="white" style={styles.button} text={'install'} />
    <Button textColor="white" style={[styles.button, {marginRight: 0}]} text="About" />
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
            <div>
              AppbarBottom is made up of three parts: left actions, fab, and
              right actions. Numerous combinations can be created with these
              components, however you can replace any part as needed. Below is a
              simple live example.
            </div>
          }
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{ AppbarBottom }}
          usageDescription={
            <div>
              {`Usage depends on what navigation package you're using.`} For
              <CodeInline code="react-navigation" /> you can follow their{' '}
              <Link href="https://reactnavigation.org/docs/en/tab-based-navigation.html">
                guide on TabNavigation
              </Link>
            </div>
          }
          usageCode={usageCode}
          propData={propData}>
          <Section
            name="Demos"
            href="/components/appbar-bottom#demos"
            id="demos"
          />

          <Section
            name="End Fab"
            href="/components/appbar-bottom#end-fab"
            id="end-fab">
            <ComponentDescription
              text={
                <div>
                  Changing <CodeInline code="fabPosition" type={'prop'} /> to{' '}
                  <CodeInline code="end" type={'value'} /> will move{' '}
                  <CodeInline code="actionItems" type={'prop'} />
                  to the left after the{' '}
                  <CodeInline code="navigationIcon" type={'prop'} />. Add the
                  <CodeInline code="fabCutout" type={'prop'} /> prop to see how
                  spacing is effected.
                </div>
              }
            />
            <LiveEdit code={endFab} scope={{ AppbarBottom, IconButton }} />
          </Section>

          <Section
            name="No Fab"
            href="/components/appbar-bottom#no-fab"
            id="no-fab">
            <ComponentDescription
              text={
                <div>
                  If you do not provide the{' '}
                  <CodeInline code="fab" type={'prop'} /> prop then the
                  component will function like a normal ppbar with{' '}
                  <CodeInline code="actionItems" type={'prop'} />.
                </div>
              }
            />
            <LiveEdit code={noFab} scope={{ AppbarBottom, IconButton }} />
          </Section>

          <Section
            name="Custom"
            href="/components/appbar-bottom#custom"
            id="custom">
            <ComponentDescription
              text={
                <div>
                  Adding <CodeInline code="children" type={'prop'} /> will
                  replace all internal components with the provided components.
                  This allows for full customization.
                </div>
              }
            />
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
