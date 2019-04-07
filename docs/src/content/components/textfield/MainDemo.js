import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo } from '@components';
import { TextField } from '../../../../../src/index';

export const code = `class Demo extends React.Component {
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

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={`TextFields can come in various types: flat, filled, or outlined. There are many options for additional customizing as well.`}
    code={code}
    scope={{ View, TextField, Image }}
  />
);
export default MainDemo;
