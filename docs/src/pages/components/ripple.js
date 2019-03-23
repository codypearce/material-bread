import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import { Ripple } from '../../../../src/index';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';
import propData from '../../content/components/ripple/propData';

const sections = [{ name: 'Demos' }];

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
