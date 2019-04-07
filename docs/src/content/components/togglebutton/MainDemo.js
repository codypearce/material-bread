import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo } from '@components';
import { ToggleButton } from '../../../../../src/index';

export const code = `class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <View>
        <ToggleButton icon="alarm" size={32} />
        <ToggleButton icon="face" size={32} color={'purple'} />
        <ToggleButton icon="arrow-back" size={32} color={'orange'} />
      </View>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={''}
    code={code}
    scope={{ View, ToggleButton, Image }}
  />
);
export default MainDemo;
