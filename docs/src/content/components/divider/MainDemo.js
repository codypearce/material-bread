import React from 'react';
import { View } from 'react-native';
import { ComponentMainDemo } from '@components';
import { Divider } from '../../../../../src/index';

export const code = `class Dividers extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <Divider />
        <Divider />
        <Divider marginVertical={24} />
      </View>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={`Dividers can be used in most components to create a visible separation between sections.`}
    code={code}
    scope={{ View, Divider }}
  />
);
export default MainDemo;
