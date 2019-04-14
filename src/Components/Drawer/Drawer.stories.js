import React from 'react';

import { Drawer, DrawerItem, DrawerHeader, DrawerSection } from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

storiesOf('Components|Drawer', module)
  .addParameters({ jest: ['Drawer'] })
  .add('Simple', () => (
    <Container>
      <Header title={'Drawer'} />

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
