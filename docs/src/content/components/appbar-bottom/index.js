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
  { name: 'end fab', sub: true },
  { name: 'no fab', sub: true },
  { name: 'speeddial', sub: true },
  { name: 'custom', sub: true },
];

export default class AppbarPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'appbar-bottom'}
          title={'Appbar Bottom'}
          description={
            'A bottom app bar displays navigation and key actions at the bottom of mobile screens.'
          }
          docsLink={
            'https://material.io/design/components/app-bars-bottom.html#'
          }
          importCode={`import { AppbarBottom } from 'material-bread';`}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/appbar-bottom'} />
          <Usage pageHref={'/components/appbar-bottom'} />
          <Props pageHref={'/components/appbar-bottom'} />
          <Demos pageHref={'/components/appbar-bottom'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
