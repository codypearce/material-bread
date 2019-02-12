import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import { BreadProvider, Fab } from '../../src/index';

storiesOf('Fab', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Fab', () => (
    <BreadProvider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>Fab</Text>
      </View>
      <Fab />
    </BreadProvider>
  ));
