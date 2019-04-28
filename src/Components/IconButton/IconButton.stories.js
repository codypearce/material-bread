import React from 'react';
import { View } from 'react-native';

import { IconButton, Badge } from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

export default storiesOf('Components|Icon Button', module)
  .addParameters({ jest: ['IconButton'] })
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)

  .add('Component', () => (
    <Container>
      <Header title={'Icon Button'} />

      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <IconButton name="alarm" size={32} />
        <IconButton name="face" size={32} color={'purple'} />
        <IconButton name="arrow-back" size={32} color={'orange'} />
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <IconButton name="adb" size={12} color={'#F44336'} />
        <IconButton name="album" size={24} color={'#E91E63'} />
        <IconButton name="battery-full" size={32} color={'#9C27B0'} />
        <Badge
          style={{ position: 'absolute', top: 0, right: 0 }}
          size={14}
          badgeContent={4}>
          <IconButton name="camera" size={48} color={'#009688'} />
        </Badge>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <IconButton name="create" size={24} color={'#00BCD4'} />
        <IconButton name="dashboard" size={32} color={'#607D8B'} />
        <IconButton name="directions-walk" size={48} color={'#8BC34A'} />

        <IconButton name="flash-on" size={64} color={'#FFEB3B'} />
      </View>
    </Container>
  ));
