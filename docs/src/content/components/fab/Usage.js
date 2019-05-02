import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Fab} from 'material-bread';

class FabPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Fab />
      </View>
    );
  }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
