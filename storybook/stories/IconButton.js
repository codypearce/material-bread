import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import { BreadProvider, IconButton } from '../../src/index';
import Header from '../components/Header';

storiesOf('Icon Button', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)

  .add('Component', () => (
    <BreadProvider value={{}}>
      <Header>Icon Button</Header>
      <IconButton name="alarm" size={32} />
      <IconButton name="face" size={32} color={'purple'} />
      <IconButton name="arrow-back" size={32} color={'orange'} />
    </BreadProvider>
  ));
