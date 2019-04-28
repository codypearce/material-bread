import React from 'react';
import { View } from 'react-native';

import { Icon, Badge } from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

export default storiesOf('Components|Icons', module)
  .addParameters({ jest: ['Icons'] })
  .add('Component', () => (
    <Container>
      <Header title={'Icon Component'} />

      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <Icon name="alarm" size={32} />
        <Icon name="face" size={32} />
        <Icon name="arrow-back" size={32} />
        <Badge
          style={{ position: 'absolute', top: 0, right: 0 }}
          size={14}
          badgeContent={4}>
          <Icon name="favorite" size={32} />
        </Badge>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <Icon name="adb" size={12} color={'#F44336'} />
        <Icon name="album" size={24} color={'#E91E63'} />
        <Icon name="battery-full" size={32} color={'#9C27B0'} />
        <Badge
          style={{ position: 'absolute', top: 0, right: 0 }}
          size={14}
          badgeContent={4}>
          <Icon name="camera" size={48} color={'#009688'} />
        </Badge>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <Icon name="create" size={24} color={'#00BCD4'} />
        <Icon name="dashboard" size={32} color={'#607D8B'} />
        <Icon name="directions-walk" size={48} color={'#8BC34A'} />

        <Icon name="flash-on" size={64} color={'#FFEB3B'} />
      </View>
    </Container>
  ));
