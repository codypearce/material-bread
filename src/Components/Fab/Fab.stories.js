import React from 'react';
import { View } from 'react-native';

import { Fab } from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

storiesOf('Components|Fab', module)
  .addParameters({ jest: ['Fab'] })
  .add('Fab', () => (
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
