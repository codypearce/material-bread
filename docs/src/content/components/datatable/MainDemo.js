import React from 'react';
import { View } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import {
  DataTable,
  DataTableHeader,
  DataTableCell,
  DataTablePagination,
  DataTableRow,
} from '../../../../../src/index';

export const code = `class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <DataTable>
          <DataTableRow>
            <DataTableCell text={'Desert'} type={'header'} borderRight flex={2} />
            <DataTableCell text={'Calories'}  type={'header'}  right />
            <DataTableCell text={'Fat (g)'}  type={'header'}  right />
            <DataTableCell text={'Carbs (g)'}  type={'header'}  right />
            <DataTableCell text={'Protein (g)'}  type={'header'}  right />
          </DataTableRow>
          <DataTableRow>
              <DataTableCell text={'Frozen yogurt'} borderRight flex={2} />
              <DataTableCell text={'159'} right />
              <DataTableCell text={'6.0'} right />
              <DataTableCell text={'24'} right />
              <DataTableCell text={'4'} right />
          </DataTableRow>
          <DataTableRow>
              <DataTableCell text={'Ice Cream Sandwich'} borderRight flex={2} />
              <DataTableCell text={'237'} right />
              <DataTableCell text={'9.0'} right />
              <DataTableCell text={'37'} right />
              <DataTableCell text={'4.3'} right />
          </DataTableRow>
          <DataTableRow>
              <DataTableCell text={'Eclair'} borderRight flex={2} />
              <DataTableCell text={'262'} right />
              <DataTableCell text={'16.0'} right />
              <DataTableCell text={'24'} right />
              <DataTableCell text={'6.0'} right />
          </DataTableRow>
      </DataTable>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      <div>
        DataTables are built from sub components,{' '}
        <CodeInline code="DataTableCell" type="element" />,{' '}
        <CodeInline code="DataTableHeader" type="element" />,{' '}
        <CodeInline code="DataTablePagination" type="element" />, and{' '}
        <CodeInline code="DataTableRow" type="element" />. Below is a simple
        example.
      </div>
    }
    code={code}
    scope={{
      View,
      DataTable,
      DataTableHeader,
      DataTableCell,
      DataTablePagination,
      DataTableRow,
    }}
  />
);
export default MainDemo;
