import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import { BreadProvider, Dropdown } from '../../src/index';
import { State, Store } from '@sambego/storybook-state';
import Header from '../components/Header';

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
    <BreadProvider value={{}}>
      <Header>Outlined Dropdown</Header>

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
    </BreadProvider>
  ));
