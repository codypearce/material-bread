import React, { Component } from 'react';

import { ComponentPageLayout } from '@components';
import MainDemo from './MainDemo';
import Usage from './Usage';
import Props from './Props';

const sections = [{ name: 'Component' }, { name: 'Usage' }, { name: 'Props' }];

export default class DataTableHeaderPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'dataTable-header'}
          title={'Data Table Header'}
          description={`Data Table Headers display contextual information above tables`}
          importCode={`import { DataTableHeader } from 'material-bread';`}
          docsLink={'https://material.io/design/components/data-tables.html'}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/datatable-header'} />
          <Usage pageHref={'/components/datatable-header'} />
          <Props pageHref={'/components/datatable-header'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
