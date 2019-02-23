import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import { BreadProvider, Portal } from '../../src/index';
import Header from '../components/Header';

storiesOf('Portal', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Portal', () => (
    <BreadProvider value={{}}>
      <Header>Portal</Header>
      <Portal.Consumer>
        {context => (
          <View
            style={{
              height: 100,
              backgroundColor: 'blue',
              position: 'absolute',
              zIndex: 100,
            }}
          />
        )}
      </Portal.Consumer>

      <View style={{ height: 200, backgroundColor: 'red' }} />
    </BreadProvider>
  ));
