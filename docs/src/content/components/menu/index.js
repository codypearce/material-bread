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
  { name: 'scrolling', sub: true },
];

export default class MenuPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'menu'}
          title={'Menu'}
          description={`Menus display a list of choices on temporary surfaces.`}
          importCode={`import { Menu } from 'material-bread';`}
          docsLink={'https://material.io/design/components/menus.html'}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/menu'} />
          <Usage pageHref={'/components/menu'} />
          <Props pageHref={'/components/menu'} />
          <Demos pageHref={'/components/menu'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
