import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Chip } from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

storiesOf('Chip', module).add('Simple', () => (
  <Container>
    <Header title={'Chip'} />

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
  </Container>
));
