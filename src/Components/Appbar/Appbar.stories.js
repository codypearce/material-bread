import React from 'react';
import { View, Image } from 'react-native';
import { storiesOf } from '../../storybook/helpers/storiesOf';

import { Appbar, Badge, IconButton, Menu, Button, MenuItem } from '../..';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { State, Store } from '@sambego/storybook-state';

const store = new Store({
  visibleOne: false,
  visibleTwo: false,
});

/*  eslint-disable no-console */
export default storiesOf('Components|Appbar', module)
  .addParameters({ jest: ['Appbar'] })
  .add('Simple', () => (
    <Container scroll>
      <Header title={'Appbar Simple'} />

      <Appbar
        barType={'normal'}
        title={'Page Title'}
        style={{ marginBottom: 20 }}
      />
      <Appbar
        barType={'normal'}
        title={'Appbar colored'}
        color={'#E91E63'}
        style={{ marginBottom: 20 }}
      />
      <Appbar
        barType={'normal'}
        title={'Navigation Type'}
        navigation={'menu'}
        color={'#9C27B0'}
        style={{ marginBottom: 20 }}
      />
      <Appbar
        barType={'normal'}
        title={'Different Icon'}
        navigation={'arrow-back'}
        color={'#673AB7'}
        style={{ marginBottom: 20 }}
      />
      <Appbar
        barType={'normal'}
        navigation={'menu'}
        color={'#00BCD4'}
        style={{ marginBottom: 20 }}
        actionItems={[
          { name: 'search', onPress: () => console.log('onSearch') },
          { name: 'more-vert' },
        ]}
      />
      <Appbar
        barType={'normal'}
        color={'#009688'}
        style={{ marginBottom: 20 }}
        actionItems={[
          { name: 'add' },
          { name: 'edit' },
          { name: 'archive' },
          { name: 'delete' },
        ]}
      />
      <Appbar
        barType={'normal'}
        title={'Page Title'}
        color={'#4CAF50'}
        navigation={'menu'}
        onNavigation={() => console.log('onNavigation!')}
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
        style={{ marginBottom: 20 }}
      />
      <Appbar
        barType={'simple'}
        title={'Page Title'}
        backgroundImage={
          <Image
            source={{
              uri:
                'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            }}
          />
        }
        navigation={'menu'}
        actionItems={[
          { name: 'favorite' },
          { name: 'search', onPress: () => console.log('onSearch') },
          <IconButton key={3} name="more-vert" size={24} color={'white'} />,
        ]}
        style={{ marginBottom: 20 }}
      />
      <Appbar
        barType={'simple'}
        title={'PAGE TITLE'}
        titleStyles={{ fontSize: 18, fontWeight: '300', letterSpacing: 2 }}
        backgroundImage={
          <Image
            source={{
              uri:
                'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            }}
          />
        }
        navigation={'menu'}
        actionItems={[
          { name: 'favorite' },
          { name: 'search', onPress: () => console.log('onSearch') },
          <IconButton key={1} name="more-vert" size={24} color={'white'} />,
        ]}
        style={{ marginBottom: 20 }}
      />
    </Container>
  ))

  .add('Prominent', () => (
    <Container scroll>
      <Header title={'Appbar Prominent'} />
      <Appbar
        barType={'prominent'}
        navigation={'menu'}
        title={'Prominent'}
        style={{ marginBottom: 20 }}
      />
      <Appbar
        barType={'prominent'}
        title={'Actions'}
        color={'#E91E63'}
        navigation={'menu'}
        onNavigation={() => console.log('onNavigation!')}
        actionItems={[{ name: 'more-vert' }]}
        style={{ marginBottom: 20 }}
      />
      <Appbar
        barType={'prominent'}
        title={'Badge and icons'}
        color={'#9C27B0'}
        navigation={'menu'}
        onNavigation={() => console.log('onNavigation!')}
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
        style={{ marginBottom: 20 }}
      />
      <Appbar
        barType={'prominent'}
        title={'Subtitle'}
        subtitle={'Subtitle'}
        color={'#009688'}
        navigation={'menu'}
        onNavigation={() => console.log('onNavigation!')}
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
        style={{ marginBottom: 20 }}
      />
      <Appbar
        barType={'prominent'}
        title={'Background image'}
        subtitle={'Subtitle'}
        color={'#9C27B0'}
        navigation={'menu'}
        backgroundImage={
          <Image
            source={{
              uri:
                'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            }}
          />
        }
        onNavigation={() => console.log('onNavigation!')}
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
      />
    </Container>
  ))
  .add('Dense', () => (
    <Container scroll>
      <Header title={'Appbar Dense'} />
      <Appbar
        barType={'dense'}
        title={'Page Title'}
        style={{ marginBottom: 20 }}
      />
      <Appbar
        barType={'dense'}
        title={'Appbar colored'}
        color={'#E91E63'}
        style={{ marginBottom: 20 }}
      />
      <Appbar
        barType={'dense'}
        title={'Navigation Type'}
        navigation={'menu'}
        color={'#9C27B0'}
        style={{ marginBottom: 20 }}
      />
      <Appbar
        barType={'dense'}
        title={'Different Icon'}
        navigation={'arrow-back'}
        color={'#673AB7'}
        style={{ marginBottom: 20 }}
      />
      <Appbar
        barType={'dense'}
        navigation={'menu'}
        color={'#00BCD4'}
        style={{ marginBottom: 20 }}
        actionItems={[
          { name: 'search', onPress: () => console.log('onSearch') },
          { name: 'more-vert' },
        ]}
      />
      <Appbar
        barType={'dense'}
        color={'#009688'}
        style={{ marginBottom: 20 }}
        actionItems={[
          { name: 'add' },
          { name: 'edit' },
          { name: 'archive' },
          { name: 'delete' },
        ]}
      />
      <Appbar
        barType={'dense'}
        title={'Page Title'}
        color={'#4CAF50'}
        navigation={'menu'}
        onNavigation={() => console.log('onNavigation!')}
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
        style={{ marginBottom: 20 }}
      />
      <Appbar
        barType={'dense'}
        title={'Page Title'}
        backgroundImage={
          <Image
            source={{
              uri:
                'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            }}
          />
        }
        navigation={'menu'}
        actionItems={[
          { name: 'favorite' },
          { name: 'search', onPress: () => console.log('onSearch') },
          <IconButton key={3} name="more-vert" size={24} color={'white'} />,
        ]}
      />
    </Container>
  ))
  .add('Prominent Dense', () => (
    <Container scroll>
      <Header title={'Appbar Prominent Dense'} />
      <Appbar
        barType={'prominent dense'}
        title={'Page Title'}
        style={{ marginBottom: 20 }}
      />
      <Appbar
        barType={'prominent dense'}
        title={'Appbar colored'}
        color={'#E91E63'}
        style={{ marginBottom: 20 }}
      />
      <Appbar
        barType={'prominent dense'}
        title={'Navigation Type'}
        navigation={'menu'}
        color={'#9C27B0'}
        style={{ marginBottom: 20 }}
      />
      <Appbar
        barType={'prominent dense'}
        title={'Different Icon'}
        navigation={'arrow-back'}
        color={'#673AB7'}
        style={{ marginBottom: 20 }}
      />
      <Appbar
        barType={'prominent dense'}
        navigation={'menu'}
        color={'#00BCD4'}
        style={{ marginBottom: 20 }}
        actionItems={[
          { name: 'search', onPress: () => console.log('onSearch') },
          { name: 'more-vert' },
        ]}
      />
      <Appbar
        barType={'prominent dense'}
        color={'#009688'}
        style={{ marginBottom: 20 }}
        actionItems={[
          { name: 'add' },
          { name: 'edit' },
          { name: 'archive' },
          { name: 'delete' },
        ]}
      />
      <Appbar
        barType={'prominent dense'}
        title={'Page Title'}
        color={'#4CAF50'}
        navigation={'menu'}
        onNavigation={() => console.log('onNavigation!')}
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
        style={{ marginBottom: 20 }}
      />
      <Appbar
        barType={'prominent dense'}
        title={'Page Title'}
        backgroundImage={
          <Image
            source={{
              uri:
                'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            }}
          />
        }
        navigation={'menu'}
        actionItems={[
          { name: 'favorite' },
          { name: 'search', onPress: () => console.log('onSearch') },
          <IconButton key={3} name="more-vert" size={24} color={'white'} />,
        ]}
      />
    </Container>
  ))
  .add('with menu', () => (
    <Container scroll>
      <Header title={'With Overflow Menu'} />

      <Appbar
        barType={'normal'}
        navigation={'menu'}
        color={'#00BCD4'}
        style={{ marginBottom: 20 }}
        actionItems={[
          { name: 'search', onPress: () => console.log('onSearch') },
          <ExampleMenu key={1} />,
        ]}
      />
      <Appbar
        barType={'normal'}
        color={'#009688'}
        style={{ marginBottom: 20 }}
        actionItems={[
          { name: 'add' },
          { name: 'edit' },
          { name: 'archive' },
          <ExampleOverflowMenu key={1} />,
        ]}
      />
    </Container>
  ));

const ExampleMenu = () => {
  return (
    <State store={store}>
      {state => {
        const isVisible = state.visibleOne;
        const dismissMenu = () => store.set({ visibleOne: false });
        const toggleMenu = () => store.set({ visibleOne: !isVisible });

        return (
          <View>
            <Menu
              visible={isVisible}
              onBackdropPress={dismissMenu}
              button={
                <Button
                  textColor={'white'}
                  text={'Show menu'}
                  onPress={toggleMenu}
                  type="text"
                />
              }>
              <MenuItem text={'Menu Item 1'} onPress={dismissMenu} />
              <MenuItem text={'Menu Item 2'} onPress={dismissMenu} />
              <MenuItem text={'Menu Item 3'} onPress={dismissMenu} />
            </Menu>
          </View>
        );
      }}
    </State>
  );
};

const ExampleOverflowMenu = () => {
  return (
    <State store={store}>
      {state => {
        const isVisible = state.visibleTwo;
        const dismissMenu = () => store.set({ visibleTwo: false });
        const toggleMenu = () => store.set({ visibleTwo: !state.visibleTwo });

        return (
          <View>
            <Menu
              visible={isVisible}
              onBackdropPress={dismissMenu}
              button={
                <IconButton
                  name={'more-vert'}
                  onPress={toggleMenu}
                  size={24}
                  color={'white'}
                />
              }>
              <MenuItem text={'Menu Item 1'} onPress={dismissMenu} />
              <MenuItem text={'Menu Item 2'} onPress={dismissMenu} />
              <MenuItem text={'Menu Item 3'} onPress={dismissMenu} />
            </Menu>
          </View>
        );
      }}
    </State>
  );
};
