import React from 'react';

import { ToggleButton, ToggleButtonGroup } from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

storiesOf('Components|Toggle Button', module)
  .addParameters({ jest: ['ToggleButton'] })
  .add('Single', () => (
    <Container>
      <Header title={'Toggle Button'} />
      <ToggleButton icon="alarm" size={32} />
      <ToggleButton icon="face" size={32} color={'purple'} />
      <ToggleButton icon="arrow-back" size={32} color={'orange'} />
    </Container>
  ))
  .add('Group', () => (
    <Container>
      <Header title={'Toggle Button Group'} />
      <ToggleButtonGroup>
        <ToggleButton icon="alarm" size={32} value={'alarm'} />
        <ToggleButton icon="face" size={32} color={'purple'} value={'face'} />
        <ToggleButton
          icon="arrow-back"
          size={32}
          color={'orange'}
          value={'arrow'}
        />
      </ToggleButtonGroup>
    </Container>
  ));
