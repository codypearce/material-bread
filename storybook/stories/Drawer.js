import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import {
  ThemeContext,
  Drawer,
  DrawerItem,
  DrawerHeader,
  DrawerSection,
} from '../../src/index';

storiesOf('Drawer', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Simple', () => (
    <ThemeContext.Provider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>Drawer</Text>
      </View>
      <Drawer containerStyle={{ height: 400 }}>
        <DrawerHeader title={'Jon Snow'} subtitle={'Knows nothing'} />
        <DrawerSection bottomDivider>
          <DrawerItem text={'Inbox'} icon={'mail'} active />
          <DrawerItem text={'Outbox'} icon={'send'} />
          <DrawerItem text={'Favorites'} icon={'favorite'} />
        </DrawerSection>
      </Drawer>
    </ThemeContext.Provider>
  ));
