import React from 'react';
import { storiesOf } from '@storybook/react-native';

import {
  Drawer,
  DrawerItem,
  DrawerHeader,
  DrawerSection,
} from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

storiesOf('Drawer', module).add('Simple', () => (
  <Container>
    <Header>Drawer</Header>
    <Drawer containerStyle={{ height: 400 }}>
      <DrawerHeader title={'Jon Snow'} subtitle={'Knows nothing'} />
      <DrawerSection bottomDivider>
        <DrawerItem text={'Inbox'} icon={'mail'} active />
        <DrawerItem text={'Outbox'} icon={'send'} />
        <DrawerItem text={'Favorites'} icon={'favorite'} />
      </DrawerSection>
    </Drawer>
  </Container>
));
