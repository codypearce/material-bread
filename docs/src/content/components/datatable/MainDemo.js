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
      checkedOne: false,
      checkedTwo: false,
      checkedThree: false
    }
  }
  render() {
    return (
      <DataTable>
          <DataTableHeader
            title={'Nutrition'}
            rightActions={[
              {name: 'filter-list'},
              {name: 'more-vert'},
            ]} 
          />
          <DataTableRow checkboxOffset>
            <DataTableCell text={'Desert'} type={'header'} borderRight relativeWidth={2} />
            <DataTableCell
              text={'Calories'}
              type={'header'}  right
            />
            <DataTableCell text={'Fat (g)'}  type={'header'}  right />
            <DataTableCell text={'Carbs (g)'}  type={'header'}  right />
            <DataTableCell text={'Protein (g)'}  type={'header'}  right />
          </DataTableRow>
          <DataTableRow
            hover 
            showCheckbox
            selected={this.state.checkedOne}
            onPressCheckbox={() =>
                this.setState({ checkedOne: !this.state.checkedOne })
            }>
            <DataTableCell text={'Frozen yogurt'} borderRight relativeWidth={2} />
            <DataTableCell text={'159'} right />
            <DataTableCell text={'6.0'} right />
            <DataTableCell text={'24'} right />
            <DataTableCell text={'4'} right />
          </DataTableRow>
          <DataTableRow
              hover
              showCheckbox
              selected={this.state.checkedTwo}
              onPressCheckbox={() =>
                  this.setState({ checkedTwo: !this.state.checkedTwo })
              }>
              <DataTableCell text={'Ice Cream Sandwich'} borderRight relativeWidth={2} />
              <DataTableCell text={'237'} right />
              <DataTableCell text={'9.0'} right />
              <DataTableCell text={'37'} right />
              <DataTableCell text={'4.3'} right />
          </DataTableRow>
          <DataTableRow
              hover
              showCheckbox
              selected={this.state.checkedThree}
              onPressCheckbox={() =>
                  this.setState({ checkedThree: !this.state.checkedThree })
              }>
              <DataTableCell text={'Eclair'} borderRight relativeWidth={2} />
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
