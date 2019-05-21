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
  { name: 'checkbox', sub: true },
  { name: 'selected', sub: true },
];

export default class DataTableRowPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'dataTable-row'}
          title={'DataTableRow'}
          description={`Data Table Rows display a row composed of Cells`}
          importCode={`import { DataTableHeader } from 'material-bread';`}
          docsLink={'https://material.io/design/components/data-tables.html'}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/datatable-row'} />
          <Usage pageHref={'/components/datatable-row'} />
          <Props pageHref={'/components/datatable-row'} />
          <Demos pageHref={'/components/datatable-row'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
