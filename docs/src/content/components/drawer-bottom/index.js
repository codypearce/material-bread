import React, { Component } from 'react';
import { ComponentPageLayout } from '@components';
import MainDemo from './MainDemo';
import Usage from './Usage';
import Props from './Props';

const sections = [{ name: 'Component' }, { name: 'Usage' }, { name: 'Props' }];

export default class DropdownPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'drawer-bottom'}
          title={'DrawerBottom'}
          description={`Bottom navigation drawers are modal drawers that are anchored to the bottom of the screen instead of the left or right edge.
          `}
          importCode={`import { DrawerBottom } from 'material-bread';`}
          docsLink={
            'https://material.io/design/components/navigation-drawer.html#bottom-drawer'
          }
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/drawer-bottom'} />
          <Usage pageHref={'/components/drawer-bottom'} />
          <Props pageHref={'/components/drawer-bottom'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
