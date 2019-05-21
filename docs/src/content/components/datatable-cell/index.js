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
  { name: 'sorting icon', sub: true },
];

export default class DataTableCellPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'dataTable-cell'}
          title={'Data Table Cell'}
          description={`Data Table Cells display invidiual pieces of data.`}
          importCode={`import { DataTableCell } from 'material-bread';`}
          docsLink={'https://material.io/design/components/data-tables.html'}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/datatable-cell'} />
          <Usage pageHref={'/components/datatable-cell'} />
          <Props pageHref={'/components/datatable-cell'} />
          <Demos pageHref={'/components/datatable-cell'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
