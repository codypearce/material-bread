import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { ToggleButton, ToggleButtonGroup, Icon } from 'material-bread';

class Demo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ToggleButtonGroup>
        <ToggleButton
          activeNode={<Icon name="alarm" size={32} />}
          inActiveNode={
            <Icon name="alarm" size={32} style={{ opacity: 0.5 }} />
          }
          size={32}
          value={'alarm'}
          />
        <ToggleButton
          activeNode={<Icon name="face" size={32} />}
          inActiveNode={
            <Icon name="face" size={32} style={{ opacity: 0.5 }} />
          }
          size={32}
          value={'face'}
        />
      </ToggleButtonGroup>
    );
  }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
