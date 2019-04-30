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
  { name: 'inset', sub: true },
];

export default class ListPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'list-section'}
          title={'ListSection'}
          description={`Lists are continuous, vertical indexes of text or images.`}
          importCode={`import { ListSection } from 'material-bread';`}
          docsLink={'https://material.io/design/components/lists.html'}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/list-section'} />
          <Usage pageHref={'/components/list-section'} />
          <Props pageHref={'/components/list-section'} />
          <Demos pageHref={'/components/list-section'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
