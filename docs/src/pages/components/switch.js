import React, { Component } from 'react';
import { View } from 'react-native';
import createPropData from '../../utils/createPropData';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import { Switch } from '../../../../src/index';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';

const sections = [{ name: 'Demos' }];

const propData = [
  createPropData('active', 'Whether switch is active', 'bool', ''),
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
          <Switch />
        </View>
      );
    }
}`;

const usageCode = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Switch } from 'material-bread';

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <View>
        <Switch />
      </View>
    );
  }
}`;

export default class SwitchPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'switch'}
          title={'Switch'}
          description={`Switches toggle the state of a single setting on or off.`}
          importCode={`import { Switch } from 'material-bread';`}
          docsLink={
            'https://material.io/design/components/selection-controls.html#switches'
          }
          componentDescription={`The Switch knob and track can be customized however you wish.`}
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{
            View,
            Switch,
          }}
          usageCode={usageCode}
          propData={propData}>
          <Section name="Demos" href="/components/switch#demos" id="demos">
            <ComponentDescription text="More demos can be seen in the playground" />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
