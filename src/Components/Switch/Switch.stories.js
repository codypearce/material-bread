import React from 'react';

import { Switch } from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

export default storiesOf('Components|Switch', module)
  .addParameters({ jest: ['Switch'] })
  .add('Simple', () => (
    <Container>
      <Header title={'Switch'} />
      <Switch />
    </Container>
  ));
