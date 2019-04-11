import React from 'react';
import { storiesOf } from '../helpers/storiesOf';

import { Icon, Badge } from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

storiesOf('Components|Icons', module).add('Component', () => (
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
