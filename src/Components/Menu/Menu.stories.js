import React from 'react';
import { View } from 'react-native';

import { Menu, MenuItem, Button } from '../../';
import { State, Store } from '@sambego/storybook-state';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

const store = new Store({
  visibleOne: false,
  visibleTwo: false,
  visibleThree: false,
});

storiesOf('Components|Menu', module)
  .addParameters({ jest: ['Menu'] })
  .add('Menu', () => (
    <Container>
      <Header title={'Menu'} />

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <Menu
              visible={state.visibleOne}
              button={
                <Button
                  text={'Show menu'}
                  onPress={() => {
                    store.set({ visibleOne: !state.visibleOne });
                  }}
                  type="contained"
                />
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
    </Container>
  ));
