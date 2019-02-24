import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Switch } from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

storiesOf('Switch', module).add('Simple', () => (
  <Container>
    <Header>Switch</Header>
    <Switch />
  </Container>
));
