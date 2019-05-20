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
  { name: 'labels', sub: true },
  { name: 'icons', sub: true },
  { name: 'scrollable', sub: true },
];

export default class TabsPage extends Component {
  render() {
    return (
      <ComponentPageLayout
        componentName={'tabs'}
        title={'Tabs'}
        description={
          'Tabs organize content across different screens, data sets, and other interactions.'
        }
        docsLink={'https://material.io/design/components/tabs.html#'}
        importCode={`import { Tabs } from 'material-bread';`}
        sideScrollMenuItems={sections}>
        <MainDemo pageHref={'/components/tabs'} />
        <Usage pageHref={'/components/tabs'} />
        <Props pageHref={'/components/tabs'} />
        <Demos pageHref={'/components/tabs'} />
      </ComponentPageLayout>
    );
  }
}
