import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import { BreadProvider, Fab } from '../../src/index';
import Header from '../components/Header';

storiesOf('Fab', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Fab', () => (
    <BreadProvider value={{}}>
      <Header>Fab</Header>
      <Fab />
    </BreadProvider>
  ));
