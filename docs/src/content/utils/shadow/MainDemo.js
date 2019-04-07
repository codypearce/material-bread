import React from 'react';
import { View } from 'react-native';
import { ComponentMainDemo } from '@components';
import { shadow } from '../../../../../src/index';

export const code = `class Demo extends React.Component {
    constructor(props) {
      super(props)

    }
    render() {
      return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: 'white',
              borderRadius: 100,
              ...shadow(4),
            }}
          />
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: '#E91E63',
              marginLeft: 20,
              ...shadow(16),
            }}
          />
        </View>
      );
    }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      'Shadows are available from 0-24, each number recreates a shadow on the given platform.'
    }
    code={code}
    scope={{ View, shadow }}
  />
);
export default MainDemo;
