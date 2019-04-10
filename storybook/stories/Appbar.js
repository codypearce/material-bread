import React from 'react';
import { Image } from 'react-native';
import { storiesOf } from '../helpers/storiesOf';

import { Appbar, Badge, IconButton } from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

/*  eslint-disable no-console */

storiesOf('Appbar', module)
  .add('Simple', () => (
    <Container>
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
        navigationType={'menu'}
        color={'#9C27B0'}
        style={{ marginBottom: 20 }}
      />
      <Appbar
        barType={'normal'}
        title={'Different Icon'}
        navigationType={'arrow-back'}
        color={'#673AB7'}
        style={{ marginBottom: 20 }}
      />
      <Appbar
        barType={'normal'}
        navigationType={'menu'}
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
        navigationType={'menu'}
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
        navigationType={'menu'}
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
        titleStyles={{ fontSize: 18, fontWeight: 300, letterSpacing: 2 }}
        backgroundImage={
          <Image
            source={{
              uri:
                'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            }}
          />
        }
        navigationType={'menu'}
        actionItems={[
          { name: 'favorite' },
          { name: 'search', onPress: () => console.log('onSearch') },
          <IconButton name="more-vert" size={24} color={'white'} />,
        ]}
        style={{ marginBottom: 20 }}
      />
    </Container>
  ))

  .add('Prominent', () => (
    <Container>
      <Header title={'Appbar Prominent'} />
      <Appbar
        barType={'prominent'}
        navigationType={'menu'}
        title={'Prominent'}
        style={{ marginBottom: 20 }}
      />
      <Appbar
        barType={'prominent'}
        title={'Actions'}
        color={'#E91E63'}
        navigationType={'menu'}
        onNavigation={() => console.log('onNavigation!')}
        actionItems={[{ name: 'more-vert' }]}
        style={{ marginBottom: 20 }}
      />
      <Appbar
        barType={'prominent'}
        title={'Badge and icons'}
        color={'#9C27B0'}
        navigationType={'menu'}
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
        navigationType={'menu'}
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
        navigationType={'menu'}
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
    <Container>
      <Header title={'Appbar Simple'} />
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
        navigationType={'menu'}
        color={'#9C27B0'}
        style={{ marginBottom: 20 }}
      />
      <Appbar
        barType={'dense'}
        title={'Different Icon'}
        navigationType={'arrow-back'}
        color={'#673AB7'}
        style={{ marginBottom: 20 }}
      />
      <Appbar
        barType={'dense'}
        navigationType={'menu'}
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
        navigationType={'menu'}
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
        navigationType={'menu'}
        actionItems={[
          { name: 'favorite' },
          { name: 'search', onPress: () => console.log('onSearch') },
          <IconButton key={3} name="more-vert" size={24} color={'white'} />,
        ]}
      />
    </Container>
  ))
  .add('Prominent Dense', () => (
    <Container>
      <Header title={'Appbar Simple'} />
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
        navigationType={'menu'}
        color={'#9C27B0'}
        style={{ marginBottom: 20 }}
      />
      <Appbar
        barType={'prominent dense'}
        title={'Different Icon'}
        navigationType={'arrow-back'}
        color={'#673AB7'}
        style={{ marginBottom: 20 }}
      />
      <Appbar
        barType={'prominent dense'}
        navigationType={'menu'}
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
        navigationType={'menu'}
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
        navigationType={'menu'}
        actionItems={[
          { name: 'favorite' },
          { name: 'search', onPress: () => console.log('onSearch') },
          <IconButton key={3} name="more-vert" size={24} color={'white'} />,
        ]}
      />
    </Container>
  ));
