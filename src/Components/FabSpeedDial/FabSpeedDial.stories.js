import React from 'react';
import { View } from 'react-native';

import { Fab, FabSpeedDial } from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

const actions = [
  <Fab key={1} backgroundColor={'#E91E63'} icon={'archive'} />,
  <Fab key={2} backgroundColor={'#F44336'} icon={'delete'} />,
  <Fab key={3} backgroundColor={'#009688'} icon={'edit'} />,
  <Fab key={4} backgroundColor={'black'} icon={'attach-money'} />,
];

storiesOf('Components|FabSpeedDial', module)
  .addParameters({ jest: ['FabSpeedDial'] })
  .add('Simple', () => (
    <Container>
      <Header title={'Fab SpeedDial'} />

      <View style={{ flex: 1, position: 'relative', paddingTop: 400 }}>
        <FabSpeedDial actions={actions} style={{ marginTop: 400 }} />
      </View>
    </Container>
  ));
