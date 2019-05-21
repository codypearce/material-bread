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
  { name: 'label', sub: true },
];

export default class DrawerPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'drawer-section'}
          title={'Drawer Section'}
          description={`Navigation drawers provide access to destinations in your app.`}
          importCode={`import { DrawerSection } from 'material-bread';`}
          docsLink={
            'https://material.io/design/components/navigation-drawer.html'
          }
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/drawer-section'} />
          <Usage pageHref={'/components/drawer-section'} />
          <Props pageHref={'/components/drawer-section'} />
          <Demos pageHref={'/components/drawer-section'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
