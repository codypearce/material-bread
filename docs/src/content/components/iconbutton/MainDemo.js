import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import { IconButton, Badge } from '../../../../../src/index';

export const code = `class IconPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>

        <IconButton name="adb" size={12} color={'#F44336'} />
        <IconButton name="album" size={24} color={'#E91E63'} />
        <IconButton name="battery-full" size={32} color={'#9C27B0'} />
        <Badge
          style={{ position: 'absolute', top: 0, right: 0 }}
          size={14}
          badgeContent={4}>
          <IconButton name="camera" size={48} color={'#009688'} />
        </Badge>

        <IconButton name="create" size={24} color={'#00BCD4'} />
        <IconButton name="dashboard" size={32} color={'#607D8B'} />
        <IconButton name="directions-walk" size={48} color={'#8BC34A'} />

        <IconButton name="flash-on" size={64} color={'#FFEB3B'} />
      </View>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      <div>
        <CodeInline code="IconButtons" type="element" /> are convenient
        components for adding <CodeInline code="onPress" type="prop" /> and{' '}
        <CodeInline code="Ripple" type="element" /> to icons.
      </div>
    }
    code={code}
    scope={{ View, IconButton, Badge, Image }}
  />
);
export default MainDemo;
