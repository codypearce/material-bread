import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo } from '@components';
import { Icon } from '../../../../../src/index';

export const code = `class IconPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <View>
        <Icon name="favorite" size={48} />
      </View>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      'Icons are provided by react-native-vector-icons, you can learn more about these icons in the style section on icons'
    }
    code={code}
    scope={{ View, Icon, Image }}
  />
);
export default MainDemo;
