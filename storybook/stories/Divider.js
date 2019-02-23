import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import { BreadProvider, Divider } from '../../src/index';
import Header from '../components/Header';

storiesOf('Divider', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Simple', () => (
    <BreadProvider value={{}}>
      <Header>Divider</Header>
      <Divider />
      <Divider />
      <Divider marginVertical={24} />
    </BreadProvider>
  ));
