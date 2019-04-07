import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, ProgressBar } from 'material-bread';

class ProgressBarDemo extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <View>
          <ProgressBar
            determinate
            value={50}
            animationDuration={2000}
            visible
          />
        </View>
      );
    }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
