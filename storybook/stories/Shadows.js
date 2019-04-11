import React from 'react';
import { storiesOf } from '../helpers/storiesOf';
import { View } from 'react-native';

import { shadow } from '../../src';

import Header from '../components/Header';
import Container from '../components/Container';

storiesOf('Utils|Shadows', module).add('Simple', () => (
  <Container>
    <Header
      title={'Shadows'}
      subtitle={
        'Use the shadow() function to add platform shadow to the style of any component'
      }
    />

    <View
      style={{
        padding: 8,
        height: 100,
        width: 100,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 100,
        ...shadow(4),
      }}
    />
  </Container>
));
