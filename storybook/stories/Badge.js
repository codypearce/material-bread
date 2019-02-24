import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Badge, Icon, IconButton } from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

storiesOf('Badge', module).add('Simple', () => (
  <Container>
    <Header>Badge</Header>

    <Badge size={64} badgeContent={4} />
    <Badge size={24} badgeContent={24} />
    <Badge size={16} badgeContent={99} />
    <Badge
      style={{ position: 'absolute', top: 0, right: 0 }}
      size={14}
      badgeContent={4}>
      <Icon name="favorite" size={32} />
    </Badge>
    <Badge
      style={{ position: 'absolute', top: 0, right: 0 }}
      size={14}
      badgeContent={77}>
      <IconButton name="mail" size={24} />
    </Badge>
  </Container>
));
