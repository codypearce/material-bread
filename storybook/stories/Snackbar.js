import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import { ThemeContext, Snackbar, Button } from '../../src/index';
import { State, Store } from '@sambego/storybook-state';

const store = new Store({
  show: false,
});

storiesOf('Snackbar', module)
  .addDecorator(story => (
    <View style={{ padding: 16, flex: 1 }}>{story()}</View>
  ))
  .add('Snackbar', () => (
    <ThemeContext.Provider value={{ flex: 1 }}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>Snackbar</Text>
      </View>
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={{ flex: 1 }}>
            <Button type="outlined" onPress={() => store.set({ show: true })}>
              Open Snackbar
            </Button>
            <Snackbar
              visible={state.show}
              onButtonPress={() => store.set({ show: false })}
              buttonLabel={'Ok'}>
              {'This is a snackbar component'}
            </Snackbar>
          </View>
        )}
      </State>
    </ThemeContext.Provider>
  ));
