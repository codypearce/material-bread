import React, { Component } from 'react';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';
import MainDemo from './MainDemo';
import Usage from './Usage';
import Props from './Props';
import Demos from './Demos';

const sections = [
  { name: 'Component' },
  { name: 'Usage' },
  { name: 'Props' },
  { name: 'Demos' },
  { name: 'textfield props', sub: true },
];

export default class DropdownPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'select'}
          title={'Select'}
          description={`Exposed dropdown menus display the currently selected menu item above the menu.`}
          importCode={`import { Select } from 'material-bread';`}
          docsLink={
            'https://material.io/design/components/menus.html#exposed-dropdown-menu'
          }
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/select'} />
          <Usage pageHref={'/components/select'} />
          <Props pageHref={'/components/select'} />
          <Demos pageHref={'/components/select'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
