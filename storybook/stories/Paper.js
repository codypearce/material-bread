import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import { Paper } from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

storiesOf('Paper', module)
  .add('Elevation', () => (
    <Container>
      <Header>Paper</Header>
      <Paper
        style={{
          padding: 8,
          height: 100,
          width: 100,
          alignItems: 'center',
        }}
        elevation={2}
      />
      <Paper
        style={{
          padding: 8,
          height: 100,
          width: 100,
          marginTop: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        elevation={4}
      />
      <Paper
        style={{
          padding: 8,
          height: 100,
          width: 100,
          marginTop: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        elevation={8}
      />
    </Container>
  ))
  .add('Roundness', () => (
    <Container>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>
          Paper Roundness
        </Text>
      </View>
      <Paper
        style={{
          padding: 8,
          height: 100,
          width: 100,
          alignItems: 'center',
        }}
        elevation={4}
        radius={2}
      />
      <Paper
        style={{
          padding: 8,
          height: 100,
          width: 100,
          marginTop: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        elevation={4}
        radius={8}
      />
    </Container>
  ));
