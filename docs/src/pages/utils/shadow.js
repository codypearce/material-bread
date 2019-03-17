import React, { Component } from 'react';
import { View } from 'react-native';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import { shadow } from '../../../../src/index';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';

const sections = [{ name: 'Demos' }];

const liveEditCode = `
class Demo extends React.Component {
    constructor(props) {
      super(props)

    }
    render() {
      return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: 'white',
              borderRadius: 100,
              ...shadow(4),
            }}
          />
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: '#E91E63',
              marginLeft: 20,
              ...shadow(16),
            }}
          />
        </View>
      );
    }
}`;

const usageCode = `import React, { Component } from 'react';
import { View } from 'react-native';
import { shadow } from 'material-bread';

const styles = {
  padding: 8,
  height: 100,
  width: 100,
  marginTop: 20,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  borderRadius: 100,
  ...shadow(10)
};

class Demo extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <View
        style={styles}
      />
    );
  }
}`;

export default class ShadowPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'shadow'}
          title={'Shadow'}
          description={`Shadow is a utility to add cross platform shadows.`}
          importCode={`import { shadow } from 'material-bread';`}
          componentDescription={`Shadows are available from 0-24, each number recreates a shadow on the given platform.`}
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{
            View,
            shadow,
          }}
          usageCode={usageCode}>
          <Section name="Demos" href="/components/shadow#demos" id="demos">
            <ComponentDescription text="More demos can be seen in the playground" />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
