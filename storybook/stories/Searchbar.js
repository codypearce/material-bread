import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import { BreadProvider, Searchbar } from '../../src/index';
import { State, Store } from '@sambego/storybook-state';
import Header from '../components/Header';

const store = new Store({
  searchOne: '',
});

storiesOf('Searchbar', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Simple', () => (
    <BreadProvider value={{}}>
      <Header>Searchbar</Header>
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <Searchbar
              label={'Label'}
              value={state.searchOne}
              onChangeText={value => store.set({ searchOne: value })}
              onCloseIcon={() => store.set({ searchOne: '' })}
            />
          </View>
        )}
      </State>
    </BreadProvider>
  ));
