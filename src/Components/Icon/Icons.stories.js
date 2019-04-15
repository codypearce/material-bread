import React from 'react';

import { Icon, Badge } from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

export default storiesOf('Components|Icons', module)
  .addParameters({ jest: ['Icons'] })
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
