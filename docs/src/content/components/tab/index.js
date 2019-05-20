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
  { name: 'styled', sub: true },
];

export default class TabsPage extends Component {
  render() {
    return (
      <ComponentPageLayout
        componentName={'tab'}
        title={'Tab'}
        description={
          'Tabs organize content across different screens, data sets, and other interactions.'
        }
        docsLink={'https://material.io/design/components/tabs.html#'}
        importCode={`import { Tab } from 'material-bread';`}
        sideScrollMenuItems={sections}>
        <MainDemo pageHref={'/components/tab'} />
        <Usage pageHref={'/components/tab'} />
        <Props pageHref={'/components/tab'} />
        <Demos pageHref={'/components/tab'} />
      </ComponentPageLayout>
    );
  }
}
