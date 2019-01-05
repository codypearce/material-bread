import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import { shadow, Heading, Subtitle } from '../../src';

import { ThemeContext } from '../../src/index';

storiesOf('Abstract', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Shadows', () => (
    <ThemeContext.Provider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Heading align="center" type={24}>
          Shadows
        </Heading>
        <Subtitle type={1} style={{ marginTop: 40 }}>
          Use the shadow() function to add platform shadow to the style of any
          component
        </Subtitle>
      </View>
      <View
        style={{
          padding: 8,
          height: 100,
          width: 100,
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          borderRadius: 100,
          ...shadow(4),
        }}
      />
    </ThemeContext.Provider>
  ));
