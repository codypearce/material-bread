import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
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

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
