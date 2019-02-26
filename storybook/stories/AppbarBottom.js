import React from 'react';
import { storiesOf } from '../helpers/storiesOf';

import { AppbarBottom } from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

storiesOf('AppbarBottom', module).add('AppbarBottom', () => (
  <Container>
    <Header title={'Appbar Bottom'} />
    <AppbarBottom size={64} />
    <AppbarBottom size={64} centerCut style={{ marginTop: 40 }} />
  </Container>
));
