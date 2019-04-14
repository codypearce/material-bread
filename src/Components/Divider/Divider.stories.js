import React from 'react';

import { Divider } from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

storiesOf('Components|Divider', module)
  .addParameters({ jest: ['Divider'] })
  .add('Simple', () => (
    <Container>
      <Header title={'Divider'} />

      <Divider />
      <Divider />
      <Divider marginVertical={24} />
    </Container>
  ));
