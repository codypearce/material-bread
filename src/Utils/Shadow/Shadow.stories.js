import React from 'react';
import { View } from 'react-native';

import { shadow } from '../../';

import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

export default storiesOf('Utils|Shadows', module)
  .addParameters({ jest: ['Shadows'] })
  .add('Simple', () => (
    <Container>
      <Header
        title={'Shadows'}
        subtitle={
          'Use the shadow() function to add platform shadow to the style of any component'
        }
      />

      <View
        style={{
          padding: 8,
          height: 100,
          width: 100,
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          borderRadius: 100,
          ...shadow(4),
        }}
      />
    </Container>
  ));
