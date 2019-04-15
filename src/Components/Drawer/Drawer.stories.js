import React from 'react';
import { View, StyleSheet } from 'react-native';

import {
  Drawer,
  DrawerItem,
  DrawerHeader,
  DrawerSection,
  IconButton,
  BodyText,
  Heading,
} from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

import { State, Store } from '@sambego/storybook-state';

const store = new Store({
  isOpen: false,
});

storiesOf('Components|Drawer', module)
  .addParameters({ jest: ['Drawer'] })
  .add('Simple', () => (
    <Container>
      <Header title={'Drawer'} />

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={styles.container}>
            <Drawer
              open={state.isOpen}
              pageWidth={600}
              pageHeight={600}
              drawerContent={
                <View>
                  <DrawerHeader title={'Jon Snow'} subtitle={'Knows nothing'} />
                  <DrawerSection bottomDivider>
                    <DrawerItem text={'Inbox'} icon={'mail'} active />
                    <DrawerItem text={'Outbox'} icon={'send'} />
                    <DrawerItem text={'Favorites'} icon={'favorite'} />
                  </DrawerSection>
                </View>
              }
              onClose={() => store.set({ isOpen: false })}
              animationTime={250}
              opacity={0.33}>
              <View style={styles.body}>
                <IconButton
                  size={24}
                  name="menu"
                  onPress={() => store.set({ isOpen: !state.isOpen })}
                />
                <View style={{ marginTop: 40, alignItems: 'center' }}>
                  <Heading type={4} style={{ marginBottom: 20 }}>
                    This is a page
                  </Heading>
                  <BodyText>Lorem ispusm</BodyText>
                </View>
              </View>
            </Drawer>
          </View>
        )}
      </State>
    </Container>
  ));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    zIndex: 0,
    width: 600,
    height: 1000,
    overflow: 'hidden',
    position: 'relative',
  },
  animatedBox: {
    flex: 1,
    backgroundColor: '#38C8EC',
    padding: 10,
  },
  body: {
    flex: 1,
  },
});
