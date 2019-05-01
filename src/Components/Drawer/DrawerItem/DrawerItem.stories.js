import React from 'react';
import { View, StyleSheet, Platform, Dimensions } from 'react-native';

import { Drawer, DrawerItem, IconButton, BodyText, Heading } from '../../..';
import Header from '../../../storybook/components/Header';
import Container from '../../../storybook/components/Container';
import { storiesOf } from '../../../storybook/helpers/storiesOf';

import { State, Store } from '@sambego/storybook-state';

const store = new Store({
  isOpen: true,
  isOpenPermanent: true,
});

const DrawerContent = () => {
  return (
    <View>
      <DrawerItem text={'Inbox'} icon={'mail'} active />
      <DrawerItem text={'Outbox'} icon={'send'} />
      <DrawerItem text={'Favorites'} icon={'favorite'} />
      <DrawerItem text={'Important'} icon={'bookmark'} />
      <DrawerItem text={'Spam'} icon={'error'} />
      <DrawerItem text={'Trash'} icon={'delete'} />
    </View>
  );
};

const DrawerContentNoIcon = () => {
  return (
    <View>
      <DrawerItem text={'Inbox'} active />
      <DrawerItem text={'Outbox'} />
      <DrawerItem text={'Favorites'} />
      <DrawerItem text={'Important'} />
      <DrawerItem text={'Spam'} />
      <DrawerItem text={'Trash'} />
    </View>
  );
};

const PageContent = () => {
  return (
    <View style={{ marginTop: 20, alignItems: 'center' }}>
      <Heading type={4} style={{ marginBottom: 20 }}>
        This is a page
      </Heading>
      <BodyText text="Click the menu button to open the drawer" />
      <BodyText text="Click outside the drawer to close it" />
    </View>
  );
};

const pageWidth = Platform.OS == 'web' ? 600 : Dimensions.get('window').width;

export default storiesOf('Components|Drawer/DrawerItem', module)
  .addParameters({ jest: ['Drawer'] })
  .add('Simple', () => (
    <Container scroll style={{ padding: 0 }}>
      <Header title={'Drawer'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={styles.container}>
            <Drawer
              open={state.isOpen}
              pageWidth={pageWidth}
              pageHeight={500}
              drawerContent={<DrawerContent />}
              onClose={() => store.set({ isOpen: false })}
              animationTime={250}
              opacity={0.33}>
              <View style={styles.body}>
                <IconButton
                  size={24}
                  name="menu"
                  onPress={() => store.set({ isOpen: !state.isOpen })}
                />
                <PageContent />
              </View>
            </Drawer>
          </View>
        )}
      </State>
    </Container>
  ))
  .add('no icon', () => (
    <Container scroll style={{ padding: 0 }}>
      <Header title={'Drawer'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={styles.container}>
            <Drawer
              open={state.isOpen}
              pageWidth={pageWidth}
              pageHeight={500}
              drawerContent={<DrawerContentNoIcon />}
              onClose={() => store.set({ isOpen: false })}
              animationTime={250}
              opacity={0.33}>
              <View style={styles.body}>
                <IconButton
                  size={24}
                  name="menu"
                  onPress={() => store.set({ isOpen: !state.isOpen })}
                />
                <PageContent />
              </View>
            </Drawer>
          </View>
        )}
      </State>
    </Container>
  ));

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    position: 'relative',
  },
  body: {
    backgroundColor: '#eee',
    width: pageWidth,
    height: 500,
  },
});
