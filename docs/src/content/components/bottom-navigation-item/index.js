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
  { name: 'badges', sub: true },
  { name: 'styled', sub: true },
  { name: 'custom', sub: true },
];

export default class BadgePage extends Component {
  render() {
    return (
      <ComponentPageLayout
        componentName={'bottom-navigation-item'}
        title={'Bottom Navigation Item'}
        description={
          'Bottom Navigation Items represent the individual clickable tabs for Bottom Navigation bars.'
        }
        importCode={`import { BottomNavigationItem } from 'material-bread';`}
        sideScrollMenuItems={sections}>
        <MainDemo pageHref={'/components/bottom-navigation-item'} />
        <Usage pageHref={'/components/bottom-navigation-item'} />
        <Props pageHref={'/components/bottom-navigation-item'} />
        <Demos pageHref={'/components/bottom-navigation-item'} />
      </ComponentPageLayout>
    );
  }
}
