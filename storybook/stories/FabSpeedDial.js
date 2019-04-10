import React from 'react';
import { storiesOf } from '../helpers/storiesOf';
import { View } from 'react-native';

import { Fab, FabSpeedDial } from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

const actions = [
  <Fab backgroundColor={'#E91E63'} icon={'archive'} />,
  <Fab backgroundColor={'#F44336'} icon={'delete'} />,
  <Fab backgroundColor={'#009688'} icon={'edit'} />,
  <Fab backgroundColor={'black'} icon={'attach-money'} />,
];

storiesOf('FabSpeedDial', module).add('Simple', () => (
  <Container>
    <Header title={'Fab SpeedDial'} />

    <View style={{ flex: 1, position: 'relative', paddingTop: 400 }}>
      <FabSpeedDial actions={actions} style={{ marginTop: 400 }} />
    </View>
  </Container>
));
