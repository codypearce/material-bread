import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo } from '@components';
import { ToggleButton, Icon } from '../../../../../src/index';

export const code = `class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <ToggleButton
          activeNode={<Icon name="alarm" size={32} />}
          inActiveNode={
            <Icon name="alarm" size={32} style={{ opacity: 0.5 }} />
          }
          size={32}
        />
        <ToggleButton
          activeNode={<Icon name="face" size={32} color={'purple'} />}
          inActiveNode={
            <Icon
              name="face"
              size={32}
              style={{ opacity: 0.5 }}
              color={'purple'}
            />
          }
          size={32}
        />
        <ToggleButton
          activeNode={<Icon name="arrow-back" size={32} color={'orange'} />}
          inActiveNode={
            <Icon
              name="arrow-back"
              size={32}
              style={{ opacity: 0.5 }}
              color={'orange'}
            />
          }
          size={32}
        />
      </View>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={''}
    code={code}
    scope={{ View, ToggleButton, Icon, Image }}
  />
);
export default MainDemo;
