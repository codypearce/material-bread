import React from 'react';
import { Text } from 'react-native';

import { Ripple } from '../../';

import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

export default storiesOf('Components|Ripple', module)
  .addParameters({ jest: ['Ripple'] })
  .add('Simple', () => (
    <Container>
      <Header
        title={'Ripple'}
        subtitle={'Add a touchable ripple to anything'}
      />
      <Ripple
        rippleColor={'blue'}
        style={{
          width: 180,
          height: 250,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 5,
        }}>
        <Text>Click Me</Text>
      </Ripple>
    </Container>
  ));
