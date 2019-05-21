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
  { name: 'subheader', sub: true },
];

export default class DividerPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'divider'}
          title={'Divider'}
          description={`A divider is a thin line that groups content in lists and layouts.`}
          importCode={`import { Divider } from 'material-bread';`}
          docsLink={'https://material.io/design/components/dividers.html'}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/divider'} />
          <Usage pageHref={'/components/divider'} />
          <Props pageHref={'/components/divider'} />
          <Demos pageHref={'/components/divider'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
