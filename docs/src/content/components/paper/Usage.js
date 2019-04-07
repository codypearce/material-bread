import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Paper } from 'material-bread';

class PaperDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
     <View style={{flexDirection: 'row'}}>
      <Paper
          style={{
            padding: 8,
            height: 100,
            width: 100,
            alignItems: 'center',
          }}
          elevation={2}
        />
        <Paper
          style={{
            padding: 8,
            height: 100,
            width: 100,
            marginTop: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          elevation={4}
        />
        <Paper
          style={{
            padding: 8,
            height: 100,
            width: 100,
            marginTop: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          elevation={8}
        />
     </View>
    );
  }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
