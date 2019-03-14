import React, { Component } from 'react';
import { View } from 'react-native';
import createPropData from '../../utils/createPropData';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import { Button, Banner, Avatar } from '../../../../src/index';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';
import LiveEdit from '../../components/LiveEdit/LiveEdit';

const sections = [{ name: 'Demos' }];

const propData = [
  createPropData(
    'actionItems',
    'Array of objects for displaying actions',
    'array',
    '',
  ),
  createPropData(
    'media',
    'Displays arbitrary component to the left of the text',
    'node',
    '',
  ),
  createPropData('message', 'Displays banner message', 'string', ''),

  createPropData(
    'mobileLayout',
    'Display mobile layout on desktop',
    'bool',
    '',
  ),

  createPropData(
    'position',
    'Position on root',
    'string: relative, fixed, absolute',
    'relative',
  ),
  createPropData('singleLine', 'Display banner on one line', 'bool', ''),
  createPropData('visible', 'Whether the banner is visible', 'bool', ''),

  createPropData('style', 'Styles root banner element', 'object', ''),
];

const liveEditCode = `
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true
    }
  }
 
  render() {
    return (
      <View>
        <Banner
          visible={this.state.visible}
          actionItems={[
            {name: 'Continue'},
            {name: 'Sign in', onPress: () => console.log('sign in')}
          ]}
          media={
            <Avatar
              type="icon"
              content="notifications"
              size={40}
              contentColor={'white'}
              color={'#42a5f5'}
            />
          }
          message={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
        />
        <Button text={'Toggle'} type={'contained'} onPress={() => this.setState({visible: !this.state.visible})} containerStyle={{marginTop: 16}} />
      </View>
    );
  }
}`;

const usageCode = `import React, { Component } from 'react';
import { Banner, Button } from 'material-bread';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true
    }
  }
 
  render() {
    return (
      <View>
        <Banner
          visible={this.state.visible}
          position={'relative'}
          actionItems={[
            {name: 'Continue'},
            {name: 'Sign in', onPress: () => console.log('sign in')}
          ]}
          media={
            <Avatar
              type="icon"
              content="notifications"
              size={40}
              contentColor={'white'}
              color={'#42a5f5'}
            />
          }
          message={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
        />
        <Button text={'Toggle'} type={'outlined'} onPress={() => this.setState({visible: !this.state.visible})} containerStyle={{marginTop: 16}} />
      </View>
    );
  }
}`;

const singleLineCode = `<Banner
    actionItems={[
      {name: 'Sign in', onPress: () => console.log('sign in')}
    ]}
    singleLine
    message={
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
    visible
/>`;
const threeLineCode = `<Banner
    actionItems={[
      {name: 'Continue'},
      {name: 'Sign in', onPress: () => console.log('sign in')}
    ]}
    message={
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
    }
    visible
/>`;

export default class BadgePage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'banner'}
          title={'Banner'}
          description={
            'A banner displays a prominent message and related optional actions.'
          }
          docsLink={'https://material.io/design/components/banners.html#'}
          importCode={`import { Banner } from 'material-bread';`}
          componentDescription={`Banners show important information at the top of a page, you can add an icon or other media, text, and action buttons. A simple web multiline example is shown below.`}
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{ Button, View, Banner, Avatar }}
          usageDescription={`Banners are meant to be dissmissed, changing the visible prop will trigger the animation to show and hide the banner. Each action button will dismiss the banner, but you can trigger this manually by changing the visible prop.
          
          Usually banners are shown right below the appbar and can be fixed or scrollable. You can toggle this with the position prop.`}
          usageCode={usageCode}
          propData={propData}>
          <Section name="Demos" href="/components/banner#demos" id="demos">
            <ComponentDescription text="" />
          </Section>
          <Section
            name="Single Line"
            href="/components/banner#singeline"
            id="singeline">
            <ComponentDescription text="The singleLine prop forces the banner content to show in a row aligned centered, but it doesn't force the text content onto one line. This is so smaller screens will handle the text more gracefully." />
            <LiveEdit code={singleLineCode} scope={{ Banner }} />
          </Section>
          <Section
            name="Three Line"
            href="/components/banner#threeLineCode"
            id="threeLineCode">
            <ComponentDescription text="" />
            <LiveEdit code={threeLineCode} scope={{ Banner }} />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
