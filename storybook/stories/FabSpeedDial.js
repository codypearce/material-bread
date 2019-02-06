import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import { ThemeContext, FabSpeedDial } from '../../src/index';
const actions = [
  {
    text: 'Accessibility',
    name: 'bt_accessibility',
    position: 2,
  },
  {
    text: 'Language',
    name: 'bt_language',
    position: 1,
  },
  {
    text: 'Location',
    name: 'bt_room',
    position: 3,
  },
  {
    text: 'Video',
    name: 'bt_videocam',
    position: 4,
  },
];

storiesOf('FabSpeedDial', module)
  .addDecorator(story => (
    <View style={{ padding: 16, flex: 1 }}>{story()}</View>
  ))
  .add('Simple', () => (
    <ThemeContext.Provider value={{}} style={{ flex: 1 }}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>Fab SpeedDial</Text>
      </View>
      <View style={{ flex: 1, position: 'relative' }}>
        <FabSpeedDial actions={actions} />
      </View>
    </ThemeContext.Provider>
  ));
