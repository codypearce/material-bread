import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { ToggleButton } from 'material-bread';

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <View>
        <ToggleButton
          activeNode={<Icon name="alarm" size={32} />}
          inActiveNode={
            <Icon name="alarm" size={32} style={{ opacity: 0.5 }} />
          }
          size={32}
          />
      </View>
    );
  }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
