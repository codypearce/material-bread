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
  { name: 'clipped', sub: true },
  { name: 'push', sub: true },
  { name: 'permanent', sub: true },
];

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
