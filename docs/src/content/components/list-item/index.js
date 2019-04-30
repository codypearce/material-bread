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
  { name: 'actionitem', sub: true },
  { name: 'leadingaction', sub: true },
  { name: 'secondary', sub: true },
  { name: 'selected', sub: true },
];

export default class ListPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'list-item'}
          title={'ListItem'}
          description={`Lists are continuous, vertical indexes of text or images.`}
          importCode={`import { ListItem } from 'material-bread';`}
          docsLink={'https://material.io/design/components/lists.html'}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/list-item'} />
          <Usage pageHref={'/components/list-item'} />
          <Props pageHref={'/components/list-item'} />
          <Demos pageHref={'/components/list-item'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
