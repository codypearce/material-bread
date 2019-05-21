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
  { name: 'bg image', sub: true },
  { name: 'search field', sub: true },
  { name: 'search bar', sub: true },
  { name: 'subtitle', sub: true },
  { name: 'menu', sub: true },
  { name: 'custom', sub: true },
];

export default class AppbarPage extends Component {
  render() {
    return (
      <ComponentPageLayout
        componentName={'appbar'}
        title={'Appbar Top'}
        description={
          'The top app bar displays information and actions relating to the current screen.'
        }
        docsLink={'https://material.io/design/components/app-bars-top.html'}
        importCode={`import { Appbar } from 'material-bread';`}
        sideScrollMenuItems={sections}>
        <MainDemo pageHref={'/components/appbar'} />
        <Usage pageHref={'/components/appbar'} />
        <Props pageHref={'/components/appbar'} />
        <Demos pageHref={'/components/appbar'} />
      </ComponentPageLayout>
    );
  }
}
