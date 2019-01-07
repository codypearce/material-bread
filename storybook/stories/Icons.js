import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import { ThemeContext, Icon } from '../../src/index';

storiesOf('Icons', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Installing', () => (
    <ThemeContext.Provider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>Installing</Text>
      </View>
      <Text style={{ fontSize: 14, textAlign: 'left' }}>
        Icons are provided by react-native-vector-icons, this package is
        required for many components.
      </Text>
      <Text style={{ fontSize: 14, textAlign: 'left' }}>
        Icons can be added by using the name prop that matches the material icon
        name from here https://material.io/tools/icons/?style=baseline. For
        example, Arrow_back -> arrow-back
      </Text>
    </ThemeContext.Provider>
  ))
  .add('Component', () => (
    <ThemeContext.Provider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>
          Icon Component
        </Text>
      </View>
      <Icon name="alarm" size={32} />
      <Icon name="face" size={32} />
      <Icon name="arrow-back" size={32} />
    </ThemeContext.Provider>
  ));
