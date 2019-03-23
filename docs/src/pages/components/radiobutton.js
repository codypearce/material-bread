import React, { Component } from 'react';
import { View } from 'react-native';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import { RadioButton } from '../../../../src/index';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';
import propData from '../../content/components/radiobutton/propData';

const sections = [{ name: 'Demos' }];

const liveEditCode = `
class RadioButtonDemo extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        checked: 1
      }
    }
    render() {
      return (
        <View>
          <RadioButton
            checked={this.state.checked == 1}
            onPress={() => this.setState({ checked: 1 })}
          />
          <RadioButton
            checked={this.state.checked == 2}
            onPress={() => this.setState({ checked: 2 })}
          />
          <RadioButton
            checked={this.state.checked == 3}
            onPress={() => this.setState({ checked: 3 })}
          />
        </View>
      );
    }
}`;

const usageCode = `import React, { Component } from 'react';
import { View } from 'react-native';
import { RadioButton } from 'material-bread';

class RadioButtonDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: 1
    }
  }
  render() {
    return (
      <View>
        <RadioButton
          checked={this.state.checked == 1}
          onPress={() => this.setState({ checked: 1 })}
        />
        <RadioButton
          checked={this.state.checked == 2}
          onPress={() => this.setState({ checked: 2 })}
        />
        <RadioButton
          checked={this.state.checked == 3}
          onPress={() => this.setState({ checked: 3 })}
        />
      </View>
    );
  }
}`;

export default class RadioButtonPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'radiobutton'}
          title={'Radio Button '}
          description={`Radio buttons allow the user to select one option from a set. Use radio buttons when the user needs to see all available options.`}
          importCode={`import { RadioButton } from 'material-bread';`}
          docsLink={
            'https://material.io/design/components/selection-controls.html#radio-buttons'
          }
          componentDescription={`Radio buttons can be fully cutsomized using various props.`}
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{
            View,
            RadioButton,
          }}
          usageCode={usageCode}
          propData={propData}>
          <Section name="Demos" href="/components/radiobutton#demos" id="demos">
            <ComponentDescription text="More demos can be seen in the playground" />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
