import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import { BreadProvider, Chip } from '../../src/index';
import Header from '../components/Header';

storiesOf('Chip', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Simple', () => (
    <BreadProvider value={{}}>
      <Header>Chip</Header>
      <Chip size={64} style={{ marginBottom: 20 }}>
        4
      </Chip>
      <Chip
        size={24}
        style={{ marginBottom: 20 }}
        onDelete={() => console.log('delete')}>
        10
      </Chip>
      <Chip size={16} type={'outlined'}>
        99
      </Chip>
    </BreadProvider>
  ));
