import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import { FabSpeedDial } from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

const actions = [
  {
    text: 'Favorites',
  },
  {
    text: 'Language',
  },
  {
    text: 'Location',
  },
  {
    text: 'Video',
  },
];

storiesOf('FabSpeedDial', module).add('Simple', () => (
  <Container>
    <Header>Fab SpeedDial</Header>
    <View style={{ flex: 1, position: 'relative' }}>
      <FabSpeedDial actions={actions} />
    </View>
  </Container>
));
