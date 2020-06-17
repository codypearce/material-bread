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
        <Button
          type="outlined"
          onPress={() => this.setState({ show: true })}
          textColor={'#6E2CFA'}
          text={'Open Snackbar'}
        />
        <Snackbar
          visible={this.state.show}
          action={
            <Button
              type="text"
              onPress={() => this.setState({ show: false })}
              text={'ok'}
              textColor={'#6E2CFA'}
            />
          }>
          {'This is a snackbar component'}
        </Snackbar>
      </View>
    );
  }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
