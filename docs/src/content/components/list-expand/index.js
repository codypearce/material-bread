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
  { name: 'icon', sub: true },
];

export default class ListPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'list-expand'}
          title={'ListExpand'}
          description={`ListExpand reveals more list items on press.`}
          importCode={`import { ListExpand } from 'material-bread';`}
          docsLink={'https://material.io/design/components/lists.html'}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/list-expand'} />
          <Usage pageHref={'/components/list-expand'} />
          <Props pageHref={'/components/list-expand'} />
          <Demos pageHref={'/components/list-expand'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
