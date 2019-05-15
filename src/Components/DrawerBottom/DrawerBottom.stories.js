import React from 'react';
import { View, Platform } from 'react-native';

import {
  DrawerBottom,
  Button,
  DrawerItem,
  DrawerHeader,
  DrawerSection,
} from '../../';
import { State, Store } from '@sambego/storybook-state';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

const store = new Store({
  visible: false,
});

export default storiesOf('Components|DrawerBottom', module)
  .addParameters({ jest: ['DrawerBottom'] })
  .add('Simple', () => (
    <Container>
      <Header title={'DrawerBottom'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={{ flex: 1, height: 300 }}>
            <Button
              text="Open Drawer"
              onPress={() => {
                store.set({ visible: true });
              }}
            />
            <DrawerBottom
              visible={state.visible}
              pageHeight={Platform.OS == 'web' ? 400 : null}
              onBackdropPress={() => store.set({ visible: false })}
              onSwipeDown={() => store.set({ visible: false })}>
              <View>
                <DrawerHeader title={'Jon Snow'} subtitle={'Knows nothing'} />
                <DrawerSection bottomDivider>
                  <DrawerItem text={'Inbox'} icon={'mail'} active />
                  <DrawerItem text={'Outbox'} icon={'send'} />
                  <DrawerItem text={'Favorites'} icon={'favorite'} />
                </DrawerSection>
              </View>
            </DrawerBottom>
          </View>
        )}
      </State>
    </Container>
  ));
