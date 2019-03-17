import React, { Component } from 'react';
import { View } from 'react-native';
import createPropData from '../../utils/createPropData';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import { ToggleButton } from '../../../../src/index';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';

const sections = [{ name: 'Demos' }];

const propData = [
  createPropData('active', 'Manually control active state', 'bool', ''),
  createPropData('color', 'Color for icon', 'string', ''),
  createPropData('icon', 'Name for icon component', 'string', ''),
  createPropData('onPress', 'Callback for root component', 'func', ''),
  createPropData('size', 'Size of icon', 'number', ''),
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
          <ToggleButton icon="alarm" size={32} />
          <ToggleButton icon="face" size={32} color={'purple'} />
          <ToggleButton icon="arrow-back" size={32} color={'orange'} />
        </View>
      );
    }
}`;

const usageCode = `import React, { Component } from 'react';
import { View } from 'react-native';
import { ToggleButton } from 'material-bread';

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <View>
        <ToggleButton icon="alarm" size={32} />
        <ToggleButton icon="face" size={32} color={'purple'} />
        <ToggleButton icon="arrow-back" size={32} color={'orange'} />
      </View>
    );
  }
}`;

export default class ToggleButtonPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'togglebutton'}
          title={'ToggleButton'}
          description={`Toggle Buttons indicate active and inactive states`}
          importCode={`import { ToggleButton } from 'material-bread';`}
          componentDescription={``}
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{
            View,
            ToggleButton,
          }}
          usageCode={usageCode}
          propData={propData}>
          <Section
            name="Demos"
            href="/components/togglebutton#demos"
            id="demos">
            <ComponentDescription text="More demos can be seen in the playground" />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
