import React from 'react';
import { storiesOf } from '../helpers/storiesOf';
import { Text } from 'react-native';

import { Ripple } from '../../src';

import Header from '../components/Header';
import Container from '../components/Container';

storiesOf('Components|Ripple', module).add('Simple', () => (
  <Container>
    <Header title={'Ripple'} subtitle={'Add a touchable ripple to anything'} />
    <Ripple
      rippleColor={'blue'}
      style={{
        width: 180,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
      }}>
      <Text>Click Me</Text>
    </Ripple>
  </Container>
));
