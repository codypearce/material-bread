import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Avatar } from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

storiesOf('Avatars', module)
  .add('Image', () => (
    <Container>
      <Header title={'Image Avatar'} />

      <Avatar type="image" image={require('../assets/avatar.png')} size={64} />
      <Avatar type="image" image={require('../assets/avatar.png')} size={48} />
      <Avatar type="image" image={require('../assets/avatar.png')} size={24} />
    </Container>
  ))
  .add('Icon', () => (
    <Container>
      <Header title={'Icon Avatar'} />

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
    </Container>
  ))
  .add('Text', () => (
    <Container>
      <Header title={'Text Avatar'} />

      <Avatar type="text" text={'CP'} size={64} backgroundColor={'#42a5f5'} />
      <Avatar type="text" text={'NP'} size={48} backgroundColor={'#c2185b'} />
      <Avatar type="text" text={'MB'} size={24} backgroundColor={'#f4511e'} />
    </Container>
  ));
