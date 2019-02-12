import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import { BreadProvider, Portal } from '../../src/index';

storiesOf('Portal', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Portal', () => (
    <BreadProvider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>Portal</Text>
      </View>
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
