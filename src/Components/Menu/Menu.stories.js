import React from 'react';
import { View } from 'react-native';

import { Menu, MenuItem, Button, IconButton, Heading } from '../../';
import { State, Store } from '@sambego/storybook-state';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

const store = new Store({
  visibleOne: false,
  visibleTwo: false,
  visibleThree: false,
});

export default storiesOf('Components|Menu', module)
  .addParameters({ jest: ['Menu'] })
  .add('Simple', () => (
    <Container>
      <Header title={'Menu'} />
      <Heading style={{ marginBottom: 10 }}>On the left</Heading>
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={{ marginBottom: 40 }}>
            <Menu
              visible={state.visibleOne}
              onBackdropPress={() => {
                store.set({ visibleOne: false });
              }}
              sameWidth
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
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <Menu
              visible={state.visibleTwo}
              onBackdropPress={() => {
                store.set({ visibleTwo: false });
              }}
              button={
                <IconButton
                  name="more-vert"
                  onPress={() => {
                    store.set({ visibleTwo: !state.visibleTwo });
                  }}
                  size={24}
                />
              }>
              <MenuItem onPress={() => store.set({ visibleTwo: false })}>
                Menu item 1
              </MenuItem>
              <MenuItem onPress={() => store.set({ visibleTwo: false })}>
                Menu item 2
              </MenuItem>
              <MenuItem
                onPress={() => store.set({ visibleTwo: false })}
                disabled>
                Menu item 3
              </MenuItem>
              <MenuItem onPress={() => store.set({ visibleTwo: false })}>
                Menu item 2
              </MenuItem>
            </Menu>
          </View>
        )}
      </State>
      <Heading
        style={{ marginBottom: 10, marginTop: 50, alignSelf: 'flex-end' }}>
        On the Right
      </Heading>
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={{ alignItems: 'flex-end', marginBottom: 40 }}>
            <Menu
              visible={state.visibleThree}
              onBackdropPress={() => {
                store.set({ visibleThree: false });
              }}
              sameWidth
              button={
                <Button
                  text={'Show menu'}
                  onPress={() => {
                    store.set({ visibleThree: !state.visibleThree });
                  }}
                  type="contained"
                />
              }>
              <MenuItem onPress={() => store.set({ visibleThree: false })}>
                Menu item 1
              </MenuItem>
              <MenuItem onPress={() => store.set({ visibleThree: false })}>
                Menu item 2
              </MenuItem>
              <MenuItem
                onPress={() => store.set({ visibleThree: false })}
                disabled>
                Menu item 3
              </MenuItem>
              <MenuItem onPress={() => store.set({ visibleThree: false })}>
                Menu item 2
              </MenuItem>
            </Menu>
          </View>
        )}
      </State>
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={{ alignItems: 'flex-end' }}>
            <Menu
              visible={state.visibleFour}
              onBackdropPress={() => {
                store.set({ visibleFour: false });
              }}
              button={
                <IconButton
                  name="more-vert"
                  onPress={() => {
                    store.set({ visibleFour: !state.visibleFour });
                  }}
                  size={24}
                />
              }>
              <MenuItem onPress={() => store.set({ visibleFour: false })}>
                Menu item 1
              </MenuItem>
              <MenuItem onPress={() => store.set({ visibleFour: false })}>
                Menu item 2
              </MenuItem>
              <MenuItem
                onPress={() => store.set({ visibleFour: false })}
                disabled>
                Menu item 3
              </MenuItem>
              <MenuItem onPress={() => store.set({ visibleFour: false })}>
                Menu item 2
              </MenuItem>
            </Menu>
          </View>
        )}
      </State>
    </Container>
  ))
  .add('Scrolling', () => (
    <Container>
      <Header title={'Menu'} />

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={{ marginBottom: 40 }}>
            <Menu
              visible={state.visibleOne}
              onBackdropPress={() => {
                store.set({ visibleOne: false });
              }}
              sameWidth
              button={
                <Button
                  text={'Show menu'}
                  onPress={() => {
                    store.set({ visibleOne: !state.visibleOne });
                  }}
                  type="contained"
                />
              }
              menuStyle={{ maxHeight: 200 }}>
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
                Menu item 4
              </MenuItem>
              <MenuItem onPress={() => store.set({ visibleOne: false })}>
                Menu item 5
              </MenuItem>
              <MenuItem onPress={() => store.set({ visibleOne: false })}>
                Menu item 6
              </MenuItem>
              <MenuItem onPress={() => store.set({ visibleOne: false })}>
                Menu item 7
              </MenuItem>
            </Menu>
          </View>
        )}
      </State>
    </Container>
  ));
