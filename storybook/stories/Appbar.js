import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Appbar } from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

storiesOf('Appbar', module).add('Appbar', () => (
  <Container>
    <Header>Appbar</Header>
    <Appbar title={'Page Title'} />
    <Appbar
      title={'Page Title'}
      style={{ marginTop: 20 }}
      hasMenuButton={false}
    />
    <Appbar title={'Page Title'} style={{ marginTop: 20 }} isSearch={true} />
  </Container>
));
