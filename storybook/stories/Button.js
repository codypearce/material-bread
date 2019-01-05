import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import { ThemeContext, Button } from '../../src/index';

storiesOf('Buttons', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Text Button', () => (
    <ThemeContext.Provider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>Text Button</Text>
      </View>
      <Button>Button</Button>
    </ThemeContext.Provider>
  ));
