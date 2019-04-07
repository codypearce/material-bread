import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Snackbar, Button } from 'material-bread';

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }
  render() {
    return (
      <View >
        <Button type="outlined" onPress={() => this.setState({ show: true })} text={'Open Snackbar'} />
        <Snackbar
          visible={this.state.show}
          onButtonPress={() => this.setState({ show: false })}
          buttonLabel={'Ok'}>
          {'This is a snackbar component'}
        </Snackbar>
      </View>
    );
  }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
