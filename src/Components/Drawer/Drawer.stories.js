import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Dimensions,
  ScrollView,
} from 'react-native';

import {
  Drawer,
  DrawerItem,
  DrawerHeader,
  DrawerSection,
  IconButton,
  BodyText,
  Heading,
  Appbar,
} from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

import { State, Store } from '@sambego/storybook-state';

const store = new Store({
  isOpen: false,
  isOpenPermanent: true,
});

export default storiesOf('Components|Drawer', module)
  .addParameters({ jest: ['Drawer'] })
  .add('Simple', () => (
    <Container scroll style={{ padding: 0 }}>
      <Header title={'Drawer'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={styles.container}>
            <Drawer
              open={state.isOpen}
              pageWidth={
                Platform.OS == 'web' ? 600 : Dimensions.get('window').width
              }
              pageHeight={500}
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
                <View style={{ alignItems: 'center' }}>
                  <Heading type={4} style={{ marginBottom: 20 }}>
                    This is a page
                  </Heading>
                  <BodyText>Click the menu button to open the drawer</BodyText>
                  <BodyText>Click outside the drawer to close it</BodyText>
                </View>
              </View>
            </Drawer>
          </View>
        )}
      </State>
    </Container>
  ))
  .add('Over Appbar', () => (
    <Container scroll style={{ padding: 0 }}>
      <Header title={'Drawer'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={styles.container}>
            <Drawer
              open={state.isOpen}
              pageWidth={
                Platform.OS == 'web' ? 600 : Dimensions.get('window').width
              }
              pageHeight={500}
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
              animationTime={250}>
              <View style={styles.body}>
                <Appbar
                  barType={'normal'}
                  title={'Page Title'}
                  navigationType={'menu'}
                  onNavigation={() => store.set({ isOpen: !state.isOpen })}
                  actionItems={[{ name: 'search' }, { name: 'more-vert' }]}
                />

                <View style={{ marginTop: 20, alignItems: 'center' }}>
                  <Heading type={4} style={{ marginBottom: 20 }}>
                    This is a page
                  </Heading>
                  <BodyText>Click the menu button to open the drawer</BodyText>
                  <BodyText>Click outside the drawer to close it</BodyText>
                </View>
              </View>
            </Drawer>
          </View>
        )}
      </State>
    </Container>
  ))
  .add('Under Appbar', () => (
    <Container scroll style={{ padding: 0 }}>
      <Header title={'Drawer'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={styles.container}>
            <Drawer
              open={state.isOpen}
              pageWidth={
                Platform.OS == 'web' ? 600 : Dimensions.get('window').width
              }
              pageHeight={500}
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
              appbar={
                <Appbar
                  barType={'normal'}
                  title={'Page Title'}
                  navigationType={'menu'}
                  onNavigation={() => store.set({ isOpen: !state.isOpen })}
                  actionItems={[{ name: 'search' }, { name: 'more-vert' }]}
                />
              }>
              <View style={styles.body}>
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                  <Heading type={4} style={{ marginBottom: 20 }}>
                    This is a page
                  </Heading>
                  <BodyText>Click the menu button to open the drawer</BodyText>
                  <BodyText>Click outside the drawer to close it</BodyText>
                </View>
              </View>
            </Drawer>
          </View>
        )}
      </State>
    </Container>
  ))
  .add('No Scrim', () => (
    <Container scroll style={{ padding: 0 }}>
      <Header title={'Drawer'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={styles.container}>
            <Drawer
              open={state.isOpen}
              pageWidth={
                Platform.OS == 'web' ? 600 : Dimensions.get('window').width
              }
              pageHeight={500}
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
              scrim={false}>
              <View style={styles.body}>
                <Appbar
                  barType={'normal'}
                  title={'Page Title'}
                  navigationType={'menu'}
                  onNavigation={() => store.set({ isOpen: !state.isOpen })}
                  actionItems={[{ name: 'search' }, { name: 'more-vert' }]}
                />
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                  <Heading type={4} style={{ marginBottom: 20 }}>
                    This is a page
                  </Heading>
                  <BodyText>Click the menu button to open the drawer</BodyText>
                  <BodyText>Click outside the drawer to close it</BodyText>
                </View>
              </View>
            </Drawer>
          </View>
        )}
      </State>
    </Container>
  ))
  .add('Custom Scrim', () => (
    <Container scroll style={{ padding: 0 }}>
      <Header title={'Drawer'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={styles.container}>
            <Drawer
              open={state.isOpen}
              pageWidth={
                Platform.OS == 'web' ? 600 : Dimensions.get('window').width
              }
              pageHeight={500}
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
              scrimColor={'#E91E63'}
              scrimOpacity={0.2}>
              <View style={styles.body}>
                <Appbar
                  barType={'normal'}
                  title={'Page Title'}
                  navigationType={'menu'}
                  onNavigation={() => store.set({ isOpen: !state.isOpen })}
                  actionItems={[{ name: 'search' }, { name: 'more-vert' }]}
                />
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                  <Heading type={4} style={{ marginBottom: 20 }}>
                    This is a page
                  </Heading>
                  <BodyText>Click the menu button to open the drawer</BodyText>
                  <BodyText>Click outside the drawer to close it</BodyText>
                </View>
              </View>
            </Drawer>
          </View>
        )}
      </State>
    </Container>
  ))
  .add('Scroll inner', () => (
    <Container scroll style={{ padding: 0 }}>
      <Header title={'Drawer'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={styles.container}>
            <Drawer
              open={state.isOpen}
              pageWidth={
                Platform.OS == 'web' ? 600 : Dimensions.get('window').width
              }
              pageHeight={500}
              drawerContent={
                <ScrollView>
                  <DrawerHeader title={'Jon Snow'} subtitle={'Knows nothing'} />
                  <DrawerSection bottomDivider>
                    <DrawerItem text={'Inbox'} icon={'mail'} active />
                    <DrawerItem text={'Outbox'} icon={'send'} />
                    <DrawerItem text={'Favorites'} icon={'favorite'} />
                  </DrawerSection>
                  <DrawerSection bottomDivider>
                    <DrawerItem text={'Inbox'} icon={'mail'} />
                    <DrawerItem text={'Outbox'} icon={'send'} />
                    <DrawerItem text={'Favorites'} icon={'favorite'} />
                  </DrawerSection>
                  <DrawerSection bottomDivider>
                    <DrawerItem text={'Inbox'} icon={'mail'} />
                    <DrawerItem text={'Outbox'} icon={'send'} />
                    <DrawerItem text={'Favorites'} icon={'favorite'} />
                  </DrawerSection>
                  <DrawerSection bottomDivider>
                    <DrawerItem text={'Inbox'} icon={'mail'} />
                    <DrawerItem text={'Outbox'} icon={'send'} />
                    <DrawerItem text={'Favorites'} icon={'favorite'} />
                  </DrawerSection>
                  <DrawerSection bottomDivider>
                    <DrawerItem text={'Inbox'} icon={'mail'} />
                    <DrawerItem text={'Outbox'} icon={'send'} />
                    <DrawerItem text={'Favorites'} icon={'favorite'} />
                  </DrawerSection>
                </ScrollView>
              }
              onClose={() => store.set({ isOpen: false })}
              scrimColor={'#E91E63'}
              scrimOpacity={0.2}>
              <View style={styles.body}>
                <Appbar
                  barType={'normal'}
                  title={'Page Title'}
                  navigationType={'menu'}
                  onNavigation={() => store.set({ isOpen: !state.isOpen })}
                  actionItems={[{ name: 'search' }, { name: 'more-vert' }]}
                />
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                  <Heading type={4} style={{ marginBottom: 20 }}>
                    This is a page
                  </Heading>
                  <BodyText>Click the menu button to open the drawer</BodyText>
                  <BodyText>Click outside the drawer to close it</BodyText>
                </View>
              </View>
            </Drawer>
          </View>
        )}
      </State>
    </Container>
  ))
  .add('Push', () => (
    <Container scroll style={{ padding: 0 }}>
      <Header title={'Drawer'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={styles.container}>
            <Drawer
              open={state.isOpen}
              pageWidth={
                Platform.OS == 'web' ? 600 : Dimensions.get('window').width
              }
              pageHeight={500}
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
              type={'push'}>
              <View style={styles.body}>
                <Appbar
                  barType={'normal'}
                  title={'Page Title'}
                  navigationType={'menu'}
                  onNavigation={() => store.set({ isOpen: !state.isOpen })}
                  actionItems={[{ name: 'search' }, { name: 'more-vert' }]}
                />
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                  <Heading type={4} style={{ marginBottom: 20 }}>
                    This is a page
                  </Heading>
                  <BodyText>Click the menu button to open the drawer</BodyText>
                  <BodyText>Click outside the drawer to close it</BodyText>
                </View>
              </View>
            </Drawer>
          </View>
        )}
      </State>
    </Container>
  ))
  .add('Push Under', () => (
    <Container scroll style={{ padding: 0 }}>
      <Header title={'Drawer'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={styles.container}>
            <Drawer
              open={state.isOpen}
              pageWidth={
                Platform.OS == 'web' ? 600 : Dimensions.get('window').width
              }
              pageHeight={500}
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
              type={'push'}
              appbar={
                <Appbar
                  barType={'normal'}
                  title={'Page Title'}
                  navigationType={'menu'}
                  onNavigation={() => store.set({ isOpen: !state.isOpen })}
                  actionItems={[{ name: 'search' }, { name: 'more-vert' }]}
                />
              }>
              <View style={styles.body}>
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                  <Heading type={4} style={{ marginBottom: 20 }}>
                    This is a page
                  </Heading>
                  <BodyText>This is a permanent drawer</BodyText>
                </View>
              </View>
            </Drawer>
          </View>
        )}
      </State>
    </Container>
  ))
  .add('Permanent', () => (
    <Container scroll style={{ padding: 0 }}>
      <Header title={'Drawer'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={[styles.container, { width: 'auto' }]}>
            <Drawer
              open={state.isOpenPermanent}
              pageWidth={
                Platform.OS == 'web' ? 1000 : Dimensions.get('window').width
              }
              pageHeight={500}
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
              type={'permanent'}>
              <View
                style={{
                  width: '100%',
                }}>
                <Appbar
                  barType={'normal'}
                  title={'Page Title'}
                  navigationType={'menu'}
                  onNavigation={() =>
                    store.set({ isOpenPermanent: !state.isOpenPermanent })
                  }
                  actionItems={[{ name: 'search' }, { name: 'more-vert' }]}
                />
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                  <Heading type={4} style={{ marginBottom: 20 }}>
                    This is a page
                  </Heading>
                  <BodyText>Click the menu button to open the drawer</BodyText>
                  <BodyText>Click outside the drawer to close it</BodyText>
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
    zIndex: 1,
    width: Platform.OS == 'web' ? 600 : Dimensions.get('window').width,
    height: 500,
    overflow: 'hidden',
    position: 'relative',
  },
  body: {
    backgroundColor: '#eee',
    width: Platform.OS == 'web' ? 600 : Dimensions.get('window').width,
    height: 500,
  },
});
