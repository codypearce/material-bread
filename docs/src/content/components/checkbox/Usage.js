import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Checkbox } from 'material-bread';

class CheckboxPage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        checked: true,
      }
    }
    render() {
      return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox
                checked={this.state.checked}
                onPress={() => this.setState({ checked: !this.state.checked })}
            />  
        </View>
      );
    }
  }`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
