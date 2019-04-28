import React from 'react';

import { Divider } from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

export default storiesOf('Components|Divider', module)
  .addParameters({ jest: ['Divider'] })
  .add('Simple', () => (
    <Container>
      <Header title={'Divider'} />

      <Divider />
      <Divider />
      <Divider marginVertical={24} />
    </Container>
  ))
  .add('subheader', () => (
    <Container>
      <Header title={'Divider'} />

      <Divider subheader={'Subheader'} />
      <Divider subheader={'Title'} inset={8} />
      <Divider subheader={'Section'} inset={16} marginVertical={24} />
    </Container>
  ));
