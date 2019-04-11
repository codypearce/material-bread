import React from 'react';
import { storiesOf } from '../helpers/storiesOf';

import { Divider } from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

storiesOf('Components|Divider', module).add('Simple', () => (
  <Container>
    <Header title={'Divider'} />

    <Divider />
    <Divider />
    <Divider marginVertical={24} />
  </Container>
));
