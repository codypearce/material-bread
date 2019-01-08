import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import { ThemeContext, Badge } from '../../src/index';

storiesOf('Badge', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Simple', () => (
    <ThemeContext.Provider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>Badge</Text>
      </View>
      <Badge size={64}>4</Badge>
      <Badge size={24}>10</Badge>
      <Badge size={16}>99</Badge>
    </ThemeContext.Provider>
  ));
