import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
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

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
