import React, { Component } from 'react';

import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';

import MainDemo from './MainDemo';
import Usage from './Usage';
import Props from './Props';

const sections = [{ name: 'Component' }, { name: 'Usage' }, { name: 'Props' }];

export default class ListPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'list'}
          title={'List'}
          description={`Lists are continuous, vertical indexes of text or images.`}
          importCode={`import { List } from 'material-bread';`}
          docsLink={'https://material.io/design/components/lists.html'}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/list'} />
          <Usage pageHref={'/components/list'} />
          <Props pageHref={'/components/list'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
