import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import { BreadProvider, AppbarBottom } from '../../src/index';
import Header from '../components/Header';

storiesOf('AppbarBottom', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('AppbarBottom', () => (
    <BreadProvider value={{}}>
      <Header>Appbar Bottom</Header>
      <AppbarBottom size={64} />
      <AppbarBottom size={64} centerCut style={{ marginTop: 40 }} />
    </BreadProvider>
  ));
