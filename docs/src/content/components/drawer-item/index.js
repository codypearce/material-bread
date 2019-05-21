import React, { Component } from 'react';
import { ComponentPageLayout } from '@components';
import MainDemo from './MainDemo';
import Usage from './Usage';
import Props from './Props';

const sections = [
  { name: 'Component' },
  { name: 'Usage' },
  { name: 'Props' },
  { name: 'Demos' },
];

export default class DrawerPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'drawer-item'}
          title={'Drawer Item'}
          description={`Navigation drawers provide access to destinations in your app.`}
          importCode={`import { DrawerItem } from 'material-bread';`}
          docsLink={
            'https://material.io/design/components/navigation-drawer.html'
          }
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/drawer-item'} />
          <Usage pageHref={'/components/drawer-item'} />
          <Props pageHref={'/components/drawer-item'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
