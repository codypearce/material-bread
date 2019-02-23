import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import { shadow, Ripple } from '../../src';

import { BreadProvider } from '../../src/index';
import Header from '../components/Header';

storiesOf('Abstract', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Ripple', () => (
    <BreadProvider value={{}}>
      <Header
        title={'Ripple'}
        subtitle={'Add a touchable ripple to anything'}
      />
      <Ripple
        rippleColor={'blue'}
        style={{
          width: 180,
          height: 250,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 5,
        }}>
        <Text>Click Me</Text>
      </Ripple>
    </BreadProvider>
  ))
  .add('Shadows', () => (
    <BreadProvider value={{}}>
      <Header
        title={'Shadows'}
        subtitle={
          'Use the shadow() function to add platform shadow to the style of any component'
        }
      />

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
    </BreadProvider>
  ));
