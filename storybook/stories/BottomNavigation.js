import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import {
  BreadProvider,
  BottomNavigation,
  BottomNavigationItem,
} from '../../src/index';

storiesOf('Bottom Navigation', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Simple', () => (
    <BreadProvider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>
          BottomNavigation
        </Text>
      </View>
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
