import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Drawer, DrawerItem, DrawerHeader, DrawerSection, } from 'material-bread';

class DrawerPage extends Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
      <Drawer>
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

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
