import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import { Portal } from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

storiesOf('Portal', module).add('Portal', () => (
  <Container>
    <Header>Portal</Header>
    <Portal.Consumer>
      {context => (
        <View
          style={{
            height: 100,
            backgroundColor: 'blue',
            position: 'absolute',
            zIndex: 100,
          }}
        />
      )}
    </Portal.Consumer>

    <View style={{ height: 200, backgroundColor: 'red' }} />
  </Container>
));
