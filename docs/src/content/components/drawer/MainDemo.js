import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo } from '@components';
import {
  Drawer,
  DrawerItem,
  DrawerHeader,
  DrawerSection,
} from '../../../../../src/index';

export const code = `class DrawerPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <Drawer containerStyle={{ height: 400 }}>
        <DrawerHeader title={'Jon Snow'} subtitle={'Knows nothing'} />
        <DrawerSection bottomDivider>
          <DrawerItem text={'Inbox'} icon={'mail'} active />
          <DrawerItem text={'Outbox'} icon={'send'} />
          <DrawerItem text={'Favorites'} icon={'favorite'} />
        </DrawerSection>
      </Drawer>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      'Drawers can be displayed on either side of the app. There are a few types of drawers that are available. The contents are built withDrawerItem, DrawerHeader, and DrawerSection components.'
    }
    code={code}
    scope={{ View, Drawer, DrawerItem, DrawerHeader, DrawerSection, Image }}
  />
);
export default MainDemo;
