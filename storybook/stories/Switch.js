import React from 'react';
import { storiesOf } from '../helpers/storiesOf';

import { Switch } from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

storiesOf('Switch', module).add('Simple', () => (
  <Container>
    <Header title={'Switch'} />
    <Switch />
  </Container>
));
