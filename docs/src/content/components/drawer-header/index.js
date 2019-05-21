import React, { Component } from 'react';
import { ComponentPageLayout } from '@components';
import MainDemo from './MainDemo';
import Usage from './Usage';
import Props from './Props';
import Demos from './Demos';

const sections = [
  { name: 'Component' },
  { name: 'Usage' },
  { name: 'Props' },
  { name: 'Demos' },
  { name: 'avatar', sub: true },
];

export default class DrawerPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'drawer-header'}
          title={'Drawer Header'}
          description={`Navigation drawers provide access to destinations in your app.`}
          importCode={`import { DrawerHeader } from 'material-bread';`}
          docsLink={
            'https://material.io/design/components/navigation-drawer.html'
          }
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/drawer'} />
          <Usage pageHref={'/components/drawer'} />
          <Props pageHref={'/components/drawer'} />
          <Demos pageHref={'/components/drawer'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
