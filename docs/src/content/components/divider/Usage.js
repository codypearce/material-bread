import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Divider } from 'material-bread';

class Dividerpage extends Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <View>
          <Divider />
        </View>
      );
    }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
