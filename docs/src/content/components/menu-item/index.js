import React, { Component } from 'react';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';
import MainDemo from './MainDemo';
import Usage from './Usage';
import Props from './Props';

const sections = [{ name: 'Component' }, { name: 'Usage' }, { name: 'Props' }];

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
        </ComponentPageLayout>
      </div>
    );
  }
}
