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
];

export default class DataTablePage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'dataTable'}
          title={'Data Table'}
          description={'Data Tables display sets of data.'}
          docsLink={'https://material.io/design/components/data-tables.html'}
          importCode={`import { DataTable } from 'material-bread';`}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/datatable'} />
          <Usage pageHref={'/components/datatable'} />
          <Props pageHref={'/components/datatable'} />
          <Demos pageHref={'/components/datatable'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
