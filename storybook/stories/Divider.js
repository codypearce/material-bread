import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Divider } from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

storiesOf('Divider', module).add('Simple', () => (
  <Container>
    <Header title={'Divider'} />

    <Divider />
    <Divider />
    <Divider marginVertical={24} />
  </Container>
));
