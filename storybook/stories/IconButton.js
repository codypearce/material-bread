import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import { ThemeContext, IconButton } from '../../src/index';

storiesOf('Icon Button', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)

  .add('Component', () => (
    <ThemeContext.Provider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>Icon Button</Text>
      </View>
      <IconButton name="alarm" size={32} />
      <IconButton name="face" size={32} color={'purple'} />
      <IconButton name="arrow-back" size={32} color={'orange'} />
    </ThemeContext.Provider>
  ));
