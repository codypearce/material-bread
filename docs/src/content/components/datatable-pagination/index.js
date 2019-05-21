import React, { Component } from 'react';
import { ComponentPageLayout } from '@components';
import MainDemo from './MainDemo';
import Usage from './Usage';
import Props from './Props';

const sections = [{ name: 'Component' }, { name: 'Usage' }, { name: 'Props' }];

export default class DataTablePaginationPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'dataTable-pagination'}
          title={'Data Table Pagination'}
          description={`Data Table Pagination navigates between pages`}
          importCode={`import { DataTablePagination } from 'material-bread';`}
          docsLink={'https://material.io/design/components/data-tables.html'}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/datatable-pagination'} />
          <Usage pageHref={'/components/datatable-pagination'} />
          <Props pageHref={'/components/datatable-pagination'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
