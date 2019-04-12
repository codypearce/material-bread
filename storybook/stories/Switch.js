import React from 'react';
import { storiesOf } from '../helpers/storiesOf';

import { Switch } from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

storiesOf('Components|Switch', module)
  .addParameters({ jest: ['Switch'] })
  .add('Simple', () => (
    <Container>
      <Header title={'Switch'} />
      <Switch />
    </Container>
  ));
