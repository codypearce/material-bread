import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import { BreadProvider, Appbar } from '../../src/index';
import Header from '../components/Header';

storiesOf('Appbar', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Appbar', () => (
    <BreadProvider value={{}}>
      <Header>Appbar</Header>
      <Appbar title={'Page Title'} />
      <Appbar
        title={'Page Title'}
        style={{ marginTop: 20 }}
        hasMenuButton={false}
      />
      <Appbar title={'Page Title'} style={{ marginTop: 20 }} isSearch={true} />
    </BreadProvider>
  ));
