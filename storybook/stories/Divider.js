import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import { ThemeContext, Divider } from '../../src/index';

storiesOf('Divider', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('base', () => (
    <ThemeContext.Provider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>Divider</Text>
      </View>
      <Divider />
      <Divider />
      <Divider marginVertical={24} />
    </ThemeContext.Provider>
  ));
