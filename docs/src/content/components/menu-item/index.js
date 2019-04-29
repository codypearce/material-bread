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
  { name: 'icon', sub: true },
  { name: 'keyboard', sub: true },
];

export default class MenuPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'menu-item'}
          title={'Menu Item'}
          description={`Menu Items display individual data within a menu.`}
          importCode={`import { MenuItem } from 'material-bread';`}
          docsLink={'https://material.io/design/components/menus.html'}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/menu-item'} />
          <Usage pageHref={'/components/menu-item'} />
          <Props pageHref={'/components/menu-item'} />
          <Demos pageHref={'/components/menu-item'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
