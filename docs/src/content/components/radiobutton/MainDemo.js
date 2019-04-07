import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo } from '@components';
import { RadioButton } from '../../../../../src/index';

export const code = `class RadioButtonDemo extends React.Component {
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

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={`Radio buttons can be fully cutsomized using various props.`}
    code={code}
    scope={{ View, RadioButton, Image }}
  />
);
export default MainDemo;
