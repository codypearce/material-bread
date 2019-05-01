import React from 'react';
import { View, StyleSheet, Image, Platform, Dimensions } from 'react-native';

import {
  Drawer,
  DrawerItem,
  DrawerHeader,
  DrawerSection,
  IconButton,
  BodyText,
  Heading,
  Avatar,
} from '../../..';
import Header from '../../../storybook/components/Header';
import Container from '../../../storybook/components/Container';
import { storiesOf } from '../../../storybook/helpers/storiesOf';

import { State, Store } from '@sambego/storybook-state';

const store = new Store({
  isOpen: true,
  isOpenPermanent: true,
});

const DrawerContentAvatar = () => {
  return (
    <View>
      <DrawerHeader
        title={'Jon Snow'}
        subtitle={'knowsnothing1234@thewall.com'}
        avatar={
          <Avatar
            type="image"
            image={
              <Image
                source={{
                  uri:
                    'https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/john-snow-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg',
                }}
              />
            }
            size={40}
          />
        }
      />
      <DrawerSection bottomDivider>
        <DrawerItem text={'Inbox'} icon={'mail'} active />
        <DrawerItem text={'Outbox'} icon={'send'} />
        <DrawerItem text={'Favorites'} icon={'favorite'} />
      </DrawerSection>
    </View>
  );
};

const DrawerContent = () => {
  return (
    <View>
      <DrawerHeader
        title={'Jon Snow'}
        subtitle={'knowsnothing1234@thewall.com'}
      />
      <DrawerSection bottomDivider>
        <DrawerItem text={'Inbox'} icon={'mail'} active />
        <DrawerItem text={'Outbox'} icon={'send'} />
        <DrawerItem text={'Favorites'} icon={'favorite'} />
      </DrawerSection>
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

export default storiesOf('Components|Drawer/DrawerHeader', module)
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
  .add('with avatar', () => (
    <Container scroll style={{ padding: 0 }}>
      <Header title={'Drawer'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={styles.container}>
            <Drawer
              open={state.isOpen}
              pageWidth={pageWidth}
              pageHeight={500}
              drawerContent={<DrawerContentAvatar />}
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
