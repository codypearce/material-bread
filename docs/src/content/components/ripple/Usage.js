import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Ripple } from 'material-bread';

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <View>
        <Ripple
          rippleColor={'blue'}
          style={{
            width: 180,
            height: 250,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
          }}>
          <Text>Click Me</Text>
        </Ripple>
      </View>
    );
  }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
