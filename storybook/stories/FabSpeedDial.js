import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import { BreadProvider, FabSpeedDial } from '../../src/index';
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

storiesOf('FabSpeedDial', module)
  .addDecorator(story => (
    <View style={{ padding: 16, flex: 1 }}>{story()}</View>
  ))
  .add('Simple', () => (
    <BreadProvider value={{}} style={{ flex: 1 }}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>Fab SpeedDial</Text>
      </View>
      <View style={{ flex: 1, position: 'relative' }}>
        <FabSpeedDial actions={actions} />
      </View>
    </BreadProvider>
  ));
