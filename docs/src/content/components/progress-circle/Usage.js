import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, ProgressCircle } from 'material-bread';

class ProgressCircleDemo extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <View>
          <ProgressCircle color={'#E91E63'} />
        </View>
      );
    }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
