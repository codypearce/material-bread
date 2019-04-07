import React from 'react';
import { View, Text } from 'react-native';
import { ComponentMainDemo } from '@components';
import { Ripple } from '../../../../../src/index';

export const code = `class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <View>
        <Ripple
          rippleColor={'blue'}
          style={{
            width: 180,
            height: 250,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
          }}>
          <Text>Click Me</Text>
        </Ripple>
      </View>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={`The Ripple component is a base component that can be used to add a ripple animation on touch. There are many options to customize the ripple component further.`}
    code={code}
    scope={{ View, Text, Ripple }}
  />
);
export default MainDemo;
