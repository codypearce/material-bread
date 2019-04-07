import React, { Component } from 'react';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';
import MainDemo from './MainDemo';
import Usage from './Usage';
import Props from './Props';

const sections = [{ name: 'Component' }, { name: 'Usage' }, { name: 'Props' }];

export default class DropdownPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'dropdown'}
          title={'Dropdown'}
          description={`Exposed dropdown menus display the currently selected menu item above the menu.`}
          importCode={`import { Dropdown } from 'material-bread';`}
          docsLink={
            'https://material.io/design/components/menus.html#exposed-dropdown-menu'
          }
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/dropdown'} />
          <Usage pageHref={'/components/dropdown'} />
          <Props pageHref={'/components/dropdown'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
