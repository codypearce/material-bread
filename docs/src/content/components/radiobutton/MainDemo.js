import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
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
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <RadioButton
          checked={this.state.checked == 1}
          onPress={() => this.setState({ checked: 1 })}
        />
        <RadioButton
          checked={this.state.checked == 2}
          radioButtonColor={'#E91E63'}
          rippleColor={'#E91E63'}
          onPress={() => this.setState({ checked: 2 })}
        />
        <RadioButton
          checked={this.state.checked == 3}
          onPress={() => this.setState({ checked: 3 })}
          uncheckedBorderColor={'#009688'}
          radioButtonColor={'#009688'}
          rippleColor={'#009688'}
        />
        <RadioButton
          checked={true}
          disabled
          onPress={() => this.setState({ checked: 3 })}
          uncheckedBorderColor={'#009688'}
          radioButtonColor={'#009688'}
          rippleColor={'#009688'}
        />
        <RadioButton
          checked={this.state.checked == 4}
          error
          onPress={() => this.setState({ checked: 4 })}
          uncheckedBorderColor={'#009688'}
          radioButtonColor={'#009688'}
          rippleColor={'#009688'}
        />
      </View>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      <div>
        <CodeInline code="RadioButton" type="element" />s can has custom color,
        ripple, or border color.
      </div>
    }
    code={code}
    scope={{ View, RadioButton, Image }}
  />
);
export default MainDemo;
