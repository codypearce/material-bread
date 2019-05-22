import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import { Icon, Badge } from '../../../../../src/index';

export const code = `class IconPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <Icon name="adb" size={12} color={'#F44336'} />
        <Icon name="album" size={24} color={'#E91E63'} />
        <Icon name="battery-full" size={32} color={'#9C27B0'} />
     
        <Icon name="camera" size={48} color={'#009688'} />
        <Icon name="create" size={24} color={'#00BCD4'} />
        <Icon name="dashboard" size={32} color={'#607D8B'} />
        <Icon name="directions-walk" size={48} color={'#8BC34A'} />

        <Icon name="flash-on" size={64} color={'#FFEB3B'} />
      </View>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      <div>
        <CodeInline code="Icon" type="element" />s are provided by
        <CodeInline code="react-native-vector-icons" type="" />, you can learn
        more about these icons in the style section on icons.
      </div>
    }
    code={code}
    scope={{ View, Icon, Image, Badge }}
  />
);
export default MainDemo;
