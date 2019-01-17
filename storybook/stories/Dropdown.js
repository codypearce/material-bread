import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import { ThemeContext, Dropdown } from '../../src/index';
import { State, Store } from '@sambego/storybook-state';

const store = new Store({
  selectedItem: '',
});

const data = [
  { id: 1, name: 'Option 1' },
  { id: 2, name: 'Option 2' },
  { id: 3, name: 'Option 3' },
];

storiesOf('Dropdown', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Outlined', () => (
    <ThemeContext.Provider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>
          Outlined Dropdown
        </Text>
      </View>

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <Dropdown
            label={'Dropdown'}
            menuItems={data}
            onSelect={value => store.set({ selectedItem: value.name })}
            selectedItem={state.selectedItem}
          />
        )}
      </State>
    </ThemeContext.Provider>
  ));
