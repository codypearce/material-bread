import React, { Component } from 'react';
import { View } from 'react-native';
import createPropData from '../../utils/createPropData';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import { TextField } from '../../../../src/index';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';

const sections = [{ name: 'Demos' }];

const propData = [
  createPropData('disabled', 'Whether component is disabled', 'bool', ''),
  createPropData('onBlur', 'Callback on input blur', 'func', ''),
  createPropData('onFocus', 'Callback on input focus', 'func', ''),
  createPropData('style', 'Styles root element', 'object', ''),
];

const liveEditCode = `
class Demo extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        one: '',
        two: '',
        three: ''
      }
    }
    render() {
      return (
       <View>
          <TextField
            label={'Label'}
            value={this.state.one}
            onChangeText={value => this.setState({ one: value })}
          />
          <TextField
            containerStyle={{ marginTop: 20 }}
            type={'outlined'}
            value={this.state.two}
            onChangeText={value => this.setState({ two: value })}
          />
          <TextField
            containerStyle={{ marginTop: 20 }}
            type={'filled'}
            label={'Label'}
            value={this.state.three}
            onChangeText={value => this.setState({ three: value })}
          />
       </View>
      );
    }
}`;

const usageCode = `import React, { Component } from 'react';
import { View } from 'react-native';
import { TextField} from 'material-bread';

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      one: '',
      two: '',
      three: ''
    }
  }
  render() {
    return (
     <View>
        <TextField
          label={'Label'}
          value={this.state.one}
          onChangeText={value => this.setState({ one: value })}
        />
        <TextField
          containerStyle={{ marginTop: 20 }}
          type={'outlined'}
          value={this.state.two}
          onChangeText={value => this.setState({ two: value })}
        />
        <TextField
          containerStyle={{ marginTop: 20 }}
          type={'Filled'}
          label={'Label'}
          error={true}
          value={this.state.two}
          onChangeText={value => this.setState({ three: value })}
          helperText={'There is an error'}
        />
     </View>
    );
  }
}`;

export default class TextFieldPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'textfield'}
          title={'TextField'}
          description={`Text fields let users enter and edit text.`}
          importCode={`import { TextField } from 'material-bread';`}
          docsLink={'https://material.io/design/components/text-fields.html'}
          componentDescription={`TextFields can come in various types: flat, filled, or outlined. There are many options for additional customizing as well.`}
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{
            View,
            TextField,
          }}
          usageCode={usageCode}
          propData={propData}>
          <Section name="Demos" href="/components/textfield#demos" id="demos">
            <ComponentDescription text="More demos can be seen in the playground" />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
