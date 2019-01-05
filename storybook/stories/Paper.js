import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import { ThemeContext, Paper } from '../../src/index';

storiesOf('Paper', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Elevation', () => (
    <ThemeContext.Provider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>
          Paper Elevation
        </Text>
      </View>
      <Paper
        style={{
          padding: 8,
          height: 100,
          width: 100,
          alignItems: 'center',
        }}
        elevation={2}
      />
      <Paper
        style={{
          padding: 8,
          height: 100,
          width: 100,
          marginTop: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        elevation={4}
      />
      <Paper
        style={{
          padding: 8,
          height: 100,
          width: 100,
          marginTop: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        elevation={8}
      />
    </ThemeContext.Provider>
  ))
  .add('Roundness', () => (
    <ThemeContext.Provider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>
          Paper Roundness
        </Text>
      </View>
      <Paper
        style={{
          padding: 8,
          height: 100,
          width: 100,
          alignItems: 'center',
        }}
        elevation={4}
        radius={2}
      />
      <Paper
        style={{
          padding: 8,
          height: 100,
          width: 100,
          marginTop: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        elevation={4}
        radius={8}
      />
    </ThemeContext.Provider>
  ));
