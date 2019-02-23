import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import {
  BreadProvider,
  BottomNavigation,
  BottomNavigationItem,
} from '../../src/index';
import Header from '../components/Header';

storiesOf('Bottom Navigation', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Simple', () => (
    <BreadProvider value={{}}>
      <Header>Bottom Navigation</Header>

      <BottomNavigation backgroundColor={'white'}>
        <BottomNavigationItem icon={'favorite'} />
        <BottomNavigationItem icon={'info'} active />
        <BottomNavigationItem icon={'settings'} />
      </BottomNavigation>
      <BottomNavigation style={{ marginTop: 40 }} backgroundColor={'white'}>
        <BottomNavigationItem icon={'favorite'} title="Favorites" active />
        <BottomNavigationItem icon={'info'} title="Info" />
        <BottomNavigationItem icon={'settings'} title={'Settings'} />
      </BottomNavigation>
      <BottomNavigation style={{ marginTop: 40 }}>
        <BottomNavigationItem icon={'favorite'} />
        <BottomNavigationItem icon={'info'} />
        <BottomNavigationItem icon={'settings'} active />
      </BottomNavigation>
      <BottomNavigation style={{ marginTop: 40 }}>
        <BottomNavigationItem icon={'favorite'} title="Favorites" />
        <BottomNavigationItem icon={'info'} title="Info" active />
        <BottomNavigationItem icon={'settings'} title={'Settings'} />
      </BottomNavigation>
    </BreadProvider>
  ));
