import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo } from '@components';
import { IconButton } from '../../../../../src/index';

export const code = `class IconPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <View>
        <IconButton name="favorite" size={48} />
      </View>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      'IconButtons are convenient components for adding onPress and Ripple to icons.'
    }
    code={code}
    scope={{ View, IconButton, Image }}
  />
);
export default MainDemo;
