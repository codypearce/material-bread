import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Text } from 'react-native';

import { Icon, Badge } from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

storiesOf('Icons', module)
  .add('Installing', () => (
    <Container>
      <Header title={'Installing'} />

      <Text style={{ fontSize: 14, textAlign: 'left' }}>
        Icons are provided by react-native-vector-icons, this package is
        required for many components.
      </Text>
      <Text style={{ fontSize: 14, textAlign: 'left' }}>
        Icons can be added by using the name prop that matches the material icon
        name from here https://material.io/tools/icons/?style=baseline. For
        example, arrow-back
      </Text>
    </Container>
  ))
  .add('Component', () => (
    <Container>
      <Header title={'Icon Component'} />

      <Icon name="alarm" size={32} />
      <Icon name="face" size={32} />
      <Icon name="arrow-back" size={32} />
      <Badge
        style={{ position: 'absolute', top: 0, right: 0 }}
        size={14}
        badgeContent={4}>
        <Icon name="favorite" size={32} />
      </Badge>
    </Container>
  ));
