import React, { Component } from 'react';
import { View } from 'react-native';
import Section from '../../../components/Section';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';
import {
  Drawer,
  DrawerItem,
  DrawerHeader,
  DrawerSection,
} from '../../../../../src/index';
import ComponentDescription from '../../../components/ComponentPage/ComponentDescription';
import propData from '../../../content/components/drawer/propData';

const sections = [{ name: 'Demos' }];

const liveEditCode = `
class DrawerPage extends React.Component {
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

const usageCode = `import React, { Component } from 'react';
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

export default class DrawerPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'drawer'}
          title={'Drawer'}
          description={`Navigation drawers provide access to destinations in your app.`}
          importCode={`import { Drawer } from 'material-bread';`}
          docsLink={
            'https://material.io/design/components/navigation-drawer.html'
          }
          componentDescription={`Drawers can be displayed on either side of the app. There are a few types of drawers that are available. The contents are built withDrawerItem, DrawerHeader, and DrawerSection components. `}
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{
            View,
            Drawer,
            DrawerItem,
            DrawerHeader,
            DrawerSection,
          }}
          usageCode={usageCode}
          propData={propData}>
          <Section name="Demos" href="/components/drawers#demos" id="demos">
            <ComponentDescription text="More demos can be seen in the playground" />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
