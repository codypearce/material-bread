import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Colors } from 'material-bread';

class Demo extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <View style={{width: 100, height: 100, backgroundColor: Colors.blue[700]}} />
    );
  }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
