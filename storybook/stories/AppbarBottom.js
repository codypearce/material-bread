import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import { BreadProvider, AppbarBottom } from '../../src/index';

storiesOf('AppbarBottom', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('AppbarBottom', () => (
    <BreadProvider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>AppbarBottom</Text>
      </View>
      <AppbarBottom size={64} />
      <AppbarBottom size={64} centerCut style={{ marginTop: 40 }} />
    </BreadProvider>
  ));
