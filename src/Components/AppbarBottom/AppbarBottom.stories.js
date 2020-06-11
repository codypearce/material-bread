import React from 'react';
import { storiesOf } from '../../storybook/helpers/storiesOf';
import { View, Platform, Dimensions, StyleSheet } from 'react-native';
import {
  AppbarBottom,
  Badge,
  IconButton,
  Fab,
  FabSpeedDial,
  Drawer,
  DrawerItem,
  DrawerHeader,
  DrawerSection,
  BodyText,
  Heading,
  DrawerBottom,
} from '../..';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';

import { State, Store } from '@sambego/storybook-state';

const store = new Store({
  isOpen: false,
  isOpenPermanent: true,
});

const pageWidth = Platform.OS == 'web' ? 600 : Dimensions.get('window').width;

/*  eslint-disable no-console */
export default storiesOf('Components|AppbarBottom', module)
  .addParameters({ jest: ['AppbarBottom'] })
  .add('Center Fab', () => (
    <Container scroll>
      <Header title={'Center Fab'} />
      <AppbarBottom
        fab={<Fab backgroundColor={'#04D5BF'} />}
        color={'#6E2CFA'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab={<Fab backgroundColor={'#04D5BF'} />}
        fabCutout
        color={'#6E2CFA'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab={<Fab icon={'change-history'} backgroundColor={'#009688'} />}
        fabPosition={'center'}
        navigation={'menu'}
        color={'#E91E63'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab={<Fab icon={'change-history'} backgroundColor={'#009688'} />}
        fabCutout
        fabPosition={'center'}
        navigation={'menu'}
        color={'#E91E63'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab={<Fab icon={'drafts'} backgroundColor={'#8BC34A'} />}
        fabPosition={'center'}
        navigation={'arrow-back'}
        actionItems={[
          { name: 'search', onPress: () => console.log('onSearch') },
          { name: 'more-vert' },
        ]}
        color={'#9C27B0'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab={<Fab icon={'drafts'} backgroundColor={'#8BC34A'} />}
        fabCutout
        fabPosition={'center'}
        navigation={'arrow-back'}
        actionItems={[
          { name: 'search', onPress: () => console.log('onSearch') },
          { name: 'more-vert' },
        ]}
        color={'#9C27B0'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab={<Fab icon={'favorite'} backgroundColor={'#E91E63'} />}
        fabPosition={'center'}
        navigation={'menu'}
        actionItems={[
          <Badge
            key={1}
            containerStyle={{ marginRight: 16, flex: 1 }}
            color={'#e10050'}
            textColor={'white'}
            size={14}
            content={77}>
            <IconButton name="favorite" size={24} color={'white'} />
          </Badge>,
          { name: 'search', onPress: () => console.log('onSearch') },
          { name: 'more-vert' },
        ]}
        color={'#009688'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab={<Fab icon={'favorite'} backgroundColor={'#E91E63'} />}
        fabPosition={'center'}
        fabCutout
        navigation={'menu'}
        actionItems={[
          <Badge
            key={1}
            containerStyle={{ marginRight: 16, flex: 1 }}
            color={'#e10050'}
            textColor={'white'}
            size={14}
            content={77}>
            <IconButton name="favorite" size={24} color={'white'} />
          </Badge>,
          { name: 'search', onPress: () => console.log('onSearch') },
          { name: 'more-vert' },
        ]}
        color={'#009688'}
        style={{ marginBottom: 50 }}
      />
    </Container>
  ))
  .add('End Fab', () => (
    <Container scroll>
      <Header title={'End Fab'} />
      <AppbarBottom
        fab={<Fab backgroundColor={'#04D5BF'} />}
        fabPosition={'end'}
        color={'#6E2CFA'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab={<Fab backgroundColor={'#04D5BF'} />}
        fabCutout
        fabPosition={'end'}
        color={'#6E2CFA'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab={<Fab icon={'change-history'} backgroundColor={'#009688'} />}
        fabPosition={'end'}
        navigation={'menu'}
        color={'#E91E63'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab={<Fab icon={'change-history'} backgroundColor={'#009688'} />}
        fabCutout
        fabPosition={'end'}
        navigation={'menu'}
        color={'#E91E63'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab={<Fab icon={'drafts'} backgroundColor={'#8BC34A'} />}
        fabPosition={'end'}
        navigation={'arrow-back'}
        actionItems={[
          { name: 'search', onPress: () => console.log('onSearch') },
          { name: 'more-vert' },
        ]}
        color={'#9C27B0'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab={<Fab icon={'drafts'} backgroundColor={'#8BC34A'} />}
        fabCutout
        fabPosition={'end'}
        navigation={'arrow-back'}
        actionItems={[
          { name: 'search', onPress: () => console.log('onSearch') },
          { name: 'more-vert' },
        ]}
        color={'#9C27B0'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab={<Fab icon={'favorite'} backgroundColor={'#E91E63'} />}
        fabPosition={'end'}
        navigation={'menu'}
        actionItems={[
          <Badge
            key={1}
            containerStyle={{ marginRight: 16, flex: 1 }}
            color={'#e10050'}
            textColor={'white'}
            size={14}
            content={77}>
            <IconButton name="favorite" size={24} color={'white'} />
          </Badge>,
          { name: 'search', onPress: () => console.log('onSearch') },
          { name: 'more-vert' },
        ]}
        color={'#009688'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab={<Fab icon={'favorite'} backgroundColor={'#E91E63'} />}
        fabPosition={'end'}
        fabCutout
        navigation={'menu'}
        actionItems={[
          <Badge
            key={1}
            containerStyle={{ marginRight: 16, flex: 1 }}
            color={'#e10050'}
            textColor={'white'}
            size={14}
            content={77}>
            <IconButton name="favorite" size={24} color={'white'} />
          </Badge>,
          { name: 'search', onPress: () => console.log('onSearch') },
          { name: 'more-vert' },
        ]}
        color={'#009688'}
        style={{ marginBottom: 50 }}
      />
    </Container>
  ))
  .add('No Fab', () => (
    <Container scroll>
      <Header title={'No Fab'} />
      <AppbarBottom
        color={'#6E2CFA'}
        style={{ marginBottom: 50 }}
        actionItems={[
          { name: 'add' },
          { name: 'edit' },
          { name: 'archive' },
          { name: 'delete' },
        ]}
      />

      <AppbarBottom
        fabStyles={{ backgroundColor: '#009688' }}
        navigation={'menu'}
        color={'#E91E63'}
        style={{ marginBottom: 50 }}
        actionItems={[
          { name: 'add' },
          { name: 'edit' },
          { name: 'archive' },
          { name: 'delete' },
        ]}
      />

      <AppbarBottom
        navigation={'arrow-back'}
        actionItems={[
          { name: 'search', onPress: () => console.log('onSearch') },
          { name: 'more-vert' },
        ]}
        color={'#9C27B0'}
        style={{ marginBottom: 50 }}
      />

      <AppbarBottom
        navigation={'menu'}
        actionItems={[
          <Badge
            key={1}
            containerStyle={{ marginRight: 16, flex: 1 }}
            color={'#e10050'}
            textColor={'white'}
            size={14}
            content={77}>
            <IconButton name="favorite" size={24} color={'white'} />
          </Badge>,
          { name: 'search', onPress: () => console.log('onSearch') },
          { name: 'more-vert' },
        ]}
        color={'#009688'}
        style={{ marginBottom: 50 }}
      />
    </Container>
  ))
  .add('with speeddial', () => (
    <Container scroll>
      <Header title={'SpeedDial'} />

      <AppbarBottom
        fab={
          <FabSpeedDial
            actions={actions}
            fab={<Fab backgroundColor={'#04D5BF'} />}
          />
        }
        color={'#6E2CFA'}
        fabCutout
        fabPosition={'end'}
        navigation={'arrow-back'}
        fabStyles={{}}
        actionItems={[
          { name: 'search', onPress: () => console.log('onSearch') },
          { name: 'more-vert' },
        ]}
        style={{ marginTop: 300 }}
      />
    </Container>
  ))
  .add('open sidebar', () => (
    <State store={store} style={{ flex: 1 }}>
      {state => (
        <View style={styles.container}>
          <Drawer
            open={state.isOpen}
            pageWidth={pageWidth}
            pageHeight={400}
            drawerContent={<DrawerContent />}
            onClose={() => store.set({ isOpen: false })}
            animationTime={250}
            opacity={0.33}>
            <View style={styles.body}>
              <PageContent />
              <AppbarBottom
                color={'#6E2CFA'}
                fab={<Fab backgroundColor={'#04D5BF'} />}
                fabCutout
                fabPosition={'center'}
                navigation={'menu'}
                onNavigation={() => store.set({ isOpen: !state.isOpen })}
                actionItems={[
                  { name: 'search', onPress: () => console.log('onSearch') },
                  { name: 'more-vert' },
                ]}
              />
            </View>
          </Drawer>
        </View>
      )}
    </State>
  ))
  .add('open drawer bottom', () => (
    <State store={store} style={{ flex: 1 }}>
      {state => (
        <View style={{ height: 500, position: 'relative' }}>
          <AppbarBottom
            fab={<Fab backgroundColor={'#04D5BF'} />}
            fabCutout
            color={'#6E2CFA'}
            fabPosition={'center'}
            navigation={'menu'}
            style={{ marginTop: 300 }}
            onNavigation={() =>
              store.set({ isOpenBottom: !state.isOpenBottom })
            }
            actionItems={[
              { name: 'search', onPress: () => console.log('onSearch') },
              { name: 'more-vert' },
            ]}
          />
          <DrawerBottom
            visible={state.isOpenBottom}
            onBackdropPress={() => store.set({ isOpenBottom: false })}
            onSwipeDown={() => store.set({ isOpenBottom: false })}>
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
  ));

const DrawerContent = () => {
  return (
    <View>
      <DrawerHeader title={'Jon Snow'} subtitle={'Knows nothing'} />
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
    <View style={{ marginTop: 20, alignItems: 'center', height: 325 }}>
      <Heading type={4} style={{ marginBottom: 20 }}>
        This is a page
      </Heading>
      <BodyText text="Click the menu button to open the drawer" />
      <BodyText text="Click outside the drawer to close it" />
    </View>
  );
};

const actions = [
  <Fab key={1} backgroundColor={'#E91E63'} icon={'archive'} />,
  <Fab key={2} backgroundColor={'#F44336'} icon={'delete'} />,
  <Fab key={3} backgroundColor={'#009688'} icon={'edit'} />,
  <Fab key={4} backgroundColor={'black'} icon={'attach-money'} />,
];

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    position: 'relative',
  },
  body: {
    width: pageWidth,
    height: 400,
  },
});
