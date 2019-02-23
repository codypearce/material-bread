import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import { BreadProvider, Checkbox } from '../../src/index';
import { State, Store } from '@sambego/storybook-state';
import Header from '../components/Header';

const store = new Store({
  checked: 0,
});

storiesOf('Checkbox', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Material', () => (
    <BreadProvider value={{}}>
      <Header>Checkbox</Header>
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <Checkbox
              checked={state.checked == 1}
              onPress={() => store.set({ checked: 1 })}
            />
            <Checkbox
              checked={state.checked == 2}
              onPress={() => store.set({ checked: 2 })}
            />
            <Checkbox
              checked={state.checked == 3}
              disabled
              onPress={() => store.set({ checked: 3 })}
            />
          </View>
        )}
      </State>
    </BreadProvider>
  ));
