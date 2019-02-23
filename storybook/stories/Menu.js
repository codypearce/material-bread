import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import { BreadProvider, Menu, MenuItem, Button } from '../../src/index';
import { State, Store } from '@sambego/storybook-state';
import Header from '../components/Header';

const store = new Store({
  visibleOne: false,
  visibleTwo: false,
  visibleThree: false,
});

storiesOf('Menu', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Menu', () => (
    <BreadProvider value={{}}>
      <Header>Menu</Header>

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <Menu
              visible={state.visibleOne}
              button={
                <Button
                  onPress={() => {
                    store.set({ visibleOne: !state.visibleOne });
                  }}
                  type="contained">
                  Show menu
                </Button>
              }>
              <MenuItem onPress={() => store.set({ visibleOne: false })}>
                Menu item 1
              </MenuItem>
              <MenuItem onPress={() => store.set({ visibleOne: false })}>
                Menu item 2
              </MenuItem>
              <MenuItem
                onPress={() => store.set({ visibleOne: false })}
                disabled>
                Menu item 3
              </MenuItem>
              <MenuItem onPress={() => store.set({ visibleOne: false })}>
                Menu item 2
              </MenuItem>
            </Menu>
          </View>
        )}
      </State>
    </BreadProvider>
  ));
