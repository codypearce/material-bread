import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import {
  BreadProvider,
  ToggleButton,
  ToggleButtonGroup,
} from '../../src/index';
import Header from '../components/Header';

storiesOf('Toggle Button', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)

  .add('Single', () => (
    <BreadProvider value={{}}>
      <Header>Toggle Button</Header>
      <ToggleButton icon="alarm" size={32} />
      <ToggleButton icon="face" size={32} color={'purple'} />
      <ToggleButton icon="arrow-back" size={32} color={'orange'} />
    </BreadProvider>
  ))
  .add('Group', () => (
    <BreadProvider value={{}}>
      <Header>Toggle Button Group</Header>
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
    </BreadProvider>
  ));
