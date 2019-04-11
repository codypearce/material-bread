import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '../helpers/storiesOf';

import { Fab } from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

storiesOf('Components|Fab', module).add('Fab', () => (
  <Container>
    <Header title={'Fab'} />
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      <Fab />
      <Fab backgroundColor={'#E91E63'} icon={'archive'} />
      <Fab backgroundColor={'#F44336'} icon={'delete'} />
      <Fab backgroundColor={'#009688'} icon={'edit'} />
      <Fab backgroundColor={'black'} icon={'attach-money'} />
    </View>
  </Container>
));
