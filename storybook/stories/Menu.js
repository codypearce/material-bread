import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import { ThemeContext, Menu, MenuItem, Button } from '../../src/index';
import { State, Store } from '@sambego/storybook-state';

const store = new Store({
  visibleOne: false,
  visibleTwo: false,
  visibleThree: false,
});

storiesOf('Menu', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Menu', () => (
    <ThemeContext.Provider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>Menu</Text>
      </View>

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
    </ThemeContext.Provider>
  ));
