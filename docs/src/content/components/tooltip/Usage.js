import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Tooltip, Button } from 'material-bread';

class Demo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View >
        <Tooltip content={"I'm a tooltip"}>
          <Button
            type="contained"
            text={'Hover me'}
          />
        </Tooltip>
      </View>
    );
  }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
