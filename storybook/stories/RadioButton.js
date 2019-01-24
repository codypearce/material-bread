import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import { ThemeContext, RadioButton } from '../../src/index';
import { State, Store } from '@sambego/storybook-state';

const store = new Store({
  checked: 0,
});

storiesOf('Radio Button', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Radio', () => (
    <ThemeContext.Provider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>Radio Button</Text>
      </View>
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <RadioButton
              checked={state.checked == 1}
              onPress={() => store.set({ checked: 1 })}
            />
            <RadioButton
              checked={state.checked == 2}
              onPress={() => store.set({ checked: 2 })}
            />
            <RadioButton
              checked={state.checked == 3}
              disabled
              onPress={() => store.set({ checked: 3 })}
            />
          </View>
        )}
      </State>
    </ThemeContext.Provider>
  ));
