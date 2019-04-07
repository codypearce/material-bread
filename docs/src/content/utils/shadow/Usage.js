import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { shadow } from 'material-bread';

const styles = {
  padding: 8,
  height: 100,
  width: 100,
  marginTop: 20,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  borderRadius: 100,
  ...shadow(10)
};

class Demo extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <View
        style={styles}
      />
    );
  }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
