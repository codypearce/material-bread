import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Button } from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

storiesOf('Buttons', module)
  .add('Text Button', () => (
    <Container>
      <Header>Text Button</Header>

      <Button>Button</Button>
      <Button disabled={true}>Disabled</Button>
      <Button disableRipple={true}>Disable Ripple</Button>
      <Button fullWidth={true}>Full Width</Button>

      <Button compact={true}>SM</Button>

      <Button loading={true}>SM</Button>
    </Container>
  ))
  .add('Outlined Button', () => (
    <Container>
      <Header>Outlined Button</Header>
      <Button type="outlined">Button</Button>
      <Button type="outlined" disabled={true}>
        Disabled
      </Button>
      <Button type="outlined" disableRipple={true}>
        Disable Ripple
      </Button>
      <Button type="outlined" fullWidth={true}>
        Full Width
      </Button>
      <Button type="outlined" compact={true}>
        SM
      </Button>
      <Button type="outlined" loading={true}>
        SM
      </Button>
    </Container>
  ))
  .add('Contained Button', () => (
    <Container>
      <Header>Contained Button</Header>
      <Button type="contained">Button</Button>
      <Button type="contained" disabled={true}>
        Disabled
      </Button>
      <Button type="contained" disableRipple={true}>
        Disable Ripple
      </Button>
      <Button type="contained" fullWidth={true}>
        Full Width
      </Button>
      <Button type="contained" compact={true}>
        SM
      </Button>
      <Button type="contained" loading={true}>
        SM
      </Button>
    </Container>
  ));
