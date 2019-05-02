import React from 'react';
import { View } from 'react-native';

import { Fab } from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

export default storiesOf('Components|Fab', module)
  .addParameters({ jest: ['Fab'] })
  .add('simple', () => (
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
  ))
  .add('mini', () => (
    <Container>
      <Header title={'Fab'} />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Fab mini />
        <Fab mini backgroundColor={'#E91E63'} icon={'archive'} />
        <Fab mini backgroundColor={'#F44336'} icon={'delete'} />
        <Fab mini backgroundColor={'#009688'} icon={'edit'} />
        <Fab mini backgroundColor={'black'} icon={'attach-money'} />
      </View>
    </Container>
  ));
