import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import { ThemeContext, Chip } from '../../src/index';

storiesOf('Chip', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Simple', () => (
    <ThemeContext.Provider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>Chip</Text>
      </View>
      <Chip size={64} style={{ marginBottom: 20 }}>
        4
      </Chip>
      <Chip
        size={24}
        style={{ marginBottom: 20 }}
        onDelete={() => console.log('delete')}>
        10
      </Chip>
      <Chip size={16} type={'outlined'}>
        99
      </Chip>
    </ThemeContext.Provider>
  ));
