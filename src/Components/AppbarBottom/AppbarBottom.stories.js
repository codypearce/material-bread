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
} from '../..';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import Svg, { G, Path, Circle, Rect, Defs, ClipPath } from 'react-native-svg';
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
        fab={<Fab backgroundColor={'black'} />}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab={<Fab backgroundColor={'black'} />}
        fabCutout
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
        fab={<Fab />}
        fabPosition={'end'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab={<Fab />}
        fabCutout
        fabPosition={'end'}
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
            fab={<Fab backgroundColor={'#E91E63'} />}
          />
        }
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
                fab={<Fab backgroundColor={'#E91E63'} />}
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
  .add('svg', () => (
    <Container>
      <View style={{ position: 'relative' }}>
        <Svg
          style={{
            isolation: 'isolate',
          }}
          // viewBox="0 0 100 100"
          // width="100%"
          width={'100%'}
          height={56}>
          {/* <Defs>
            <ClipPath id="prefix__a">
              <Path d="M0 0h500v120H0z" />
            </ClipPath>
          </Defs> */}
          <Rect height={56} width={50} fill={'red'} x={0} y={0} />
          <G x={50}>
            <Path
              d="M500 0v120H0V0h180c11.08 0 20 8.92 20 20a49.999 49.999 0 0050 50c27.615 0 50-22.386 50-50 0-11.08 8.92-20 20-20h180z"
              fillRule="evenodd"
              style={{ left: 20 }}
            />
          </G>

          <Rect height={56} width={50} fill={'red'} x={100} y={0} />
        </Svg>
        <Fab
          icon={'change-history'}
          backgroundColor={'#009688'}
          containerStyle={{ position: 'absolute', top: 0 }}
        />
      </View>
    </Container>
  ));
const width = Dimensions.get('window').width;
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
