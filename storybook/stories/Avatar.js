import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import { BreadProvider, Avatar } from '../../src/index';
import Header from '../components/Header';

storiesOf('Avatars', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Image', () => (
    <BreadProvider value={{}}>
      <Header>Image Avatar</Header>

      <Avatar type="image" image={require('../assets/avatar.png')} size={64} />
      <Avatar type="image" image={require('../assets/avatar.png')} size={48} />
      <Avatar type="image" image={require('../assets/avatar.png')} size={24} />
    </BreadProvider>
  ))
  .add('Icon', () => (
    <BreadProvider value={{}}>
      <Header>Icon Avatar</Header>

      <Avatar
        type="icon"
        icon="face"
        size={64}
        iconColor={'white'}
        backgroundColor={'#42a5f5'}
      />
      <Avatar
        type="icon"
        icon="alarm"
        size={48}
        iconColor={'white'}
        backgroundColor={'#c2185b'}
      />
      <Avatar
        type="icon"
        icon="arrow-back"
        size={24}
        iconColor={'white'}
        backgroundColor={'#f4511e'}
      />
    </BreadProvider>
  ))
  .add('Text', () => (
    <BreadProvider value={{}}>
      <Header>Text Avatar</Header>

      <Avatar type="text" text={'CP'} size={64} backgroundColor={'#42a5f5'} />
      <Avatar type="text" text={'NP'} size={48} backgroundColor={'#c2185b'} />
      <Avatar type="text" text={'MB'} size={24} backgroundColor={'#f4511e'} />
    </BreadProvider>
  ));
