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
  { name: 'labels', sub: true },
  { name: 'colored', sub: true },
  { name: 'icons', sub: true },
];

export default class BadgePage extends Component {
  render() {
    return (
      <ComponentPageLayout
        componentName={'bottom-navigation'}
        title={'Bottom Navigation'}
        description={
          'Bottom navigation bars allow movement between primary destinations in an app.'
        }
        docsLink={
          'https://material.io/design/components/bottom-navigation.html#'
        }
        importCode={`import { BottomNavigation } from 'material-bread';`}
        sideScrollMenuItems={sections}>
        <MainDemo pageHref={'/components/bottom-navigation'} />
        <Usage pageHref={'/components/bottom-navigation'} />
        <Props pageHref={'/components/bottom-navigation'} />
        <Demos pageHref={'/components/bottom-navigation'} />
      </ComponentPageLayout>
    );
  }
}
