import React, { Component } from 'react';
import { View, Text } from 'react-native';
import createPropData from '../../utils/createPropData';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import { Ripple } from '../../../../src/index';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';

const sections = [{ name: 'Demos' }];

const propData = [
  createPropData(
    'displayUntilPressOut',
    'Keep ripple at full size while holding press',
    'bool',
    'true',
  ),
  createPropData('disabled', 'Disables ripple', 'bool', ''),
  createPropData('onPress', 'Call back on ripple', 'func', ''),
  createPropData(
    'rippleCentered',
    'Whether the ripple starts at the center of the component or where you clicked',
    'bool',
    'false',
  ),
  createPropData(
    'rippleColor',
    'Color of ripple',
    'string',
    'rgba(0, 0, 0, .87)',
  ),
  createPropData(
    'rippleContainerBorderRadius',
    'Border Radius of ripple',
    'number',
    '0',
  ),
  createPropData(
    'rippleDuration',
    'Animation Duration of ripple to fill the entire component',
    'duration',
    '400',
  ),
  createPropData('rippleOpacity', 'Opacity of ripple', 'number', '0.3'),
  createPropData('rippleSize', 'Determines the size of ripple', 'number', '0'),
  createPropData(
    'rippleSequential',
    'Ripple should start in sequence',
    'bool',
    'false',
  ),
  createPropData('style', 'Styles root element', 'object', ''),
];

const liveEditCode = `
class Demo extends React.Component {
    constructor(props) {
      super(props)
      this.state = {

      }
    }
    render() {
      return (
        <View>
          <Ripple
            rippleColor={'blue'}
            style={{
              width: 180,
              height: 250,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 5,
            }}>
            <Text>Click Me</Text>
          </Ripple>
        </View>
      );
    }
}`;

const usageCode = `import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Ripple } from 'material-bread';

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <View>
        <Ripple
          rippleColor={'blue'}
          style={{
            width: 180,
            height: 250,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
          }}>
          <Text>Click Me</Text>
        </Ripple>
      </View>
    );
  }
}`;

export default class RipplePage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'ripple'}
          title={'Ripple'}
          description={`Ripple adds animation feedback to interactions.`}
          importCode={`import { Ripple } from 'material-bread';`}
          componentDescription={`The Ripple component is a base component that can be used to add a ripple animation on touch. There are many options to customize the ripple component further.`}
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{
            View,
            Text,
            Ripple,
          }}
          usageCode={usageCode}
          propData={propData}>
          <Section name="Demos" href="/components/ripple#demos" id="demos">
            <ComponentDescription text="More demos can be seen in the playground" />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
