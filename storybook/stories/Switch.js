import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import { BreadProvider, Switch } from '../../src/index';
import Header from '../components/Header';

storiesOf('Switch', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Simple', () => (
    <BreadProvider value={{}}>
      <Header>Switch</Header>
      <Switch />
    </BreadProvider>
  ));
