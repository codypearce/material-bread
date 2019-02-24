import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { BottomNavigation, BottomNavigationItem } from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

storiesOf('Bottom Navigation', module).add('Simple', () => (
  <Container>
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
  </Container>
));
