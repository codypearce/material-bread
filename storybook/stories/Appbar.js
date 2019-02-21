import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import { BreadProvider, Appbar } from '../../src/index';

storiesOf('Appbar', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Appbar', () => (
    <BreadProvider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>Appbar</Text>
      </View>
      <Appbar title={'Page Title'} />
      <Appbar
        title={'Page Title'}
        style={{ marginTop: 20 }}
        hasMenuButton={false}
      />
      <Appbar title={'Page Title'} style={{ marginTop: 20 }} isSearch={true} />
    </BreadProvider>
  ));
