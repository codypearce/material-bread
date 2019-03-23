import React, { Component } from 'react';
import { View } from 'react-native';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import {
  DataTable,
  DataTableHeader,
  DataTableCell,
  DataTablePagination,
  DataTableRow,
} from '../../../../src/index';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';
import CodeInline from '../../components/CodeInline';
import propData from '../../content/components/datatable-cell/propData';

const sections = [{ name: 'Demos' }];

const liveEditCode = `
class Table extends React.Component {
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

const usageCode = `import React, { Component } from 'react';
import { View } from 'react-native';
import { DataTable, DataTableCell, DataTableRow, } from 'material-bread';

class Table extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <DataTable>
            <DataTableRow>
                <DataTableCell text={'Desert'} borderRight flex={2} />
                <DataTableCell text={'Calories'} right />
                <DataTableCell text={'Fat (g)'} right />
                <DataTableCell text={'Carbs (g)'} right />
                <DataTableCell text={'Protein (g)'} right />
            </DataTableRow>
            <DataTableRow>
                <DataTableCell text={'Frozen yogurt'} borderRight flex={2} />
                <DataTableCell text={'159'} right />
                <DataTableCell text={'6.0'} right />
                <DataTableCell text={'24'} right />
                <DataTableCell text={'4'} right />
            </DataTableRow>
        </DataTable>
      );
    }
}`;

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
          componentDescription={
            <div>
              Data Table Cells can either be{' '}
              <CodeInline code="header" type="value" /> or{' '}
              <CodeInline code="regular" type="value" /> cell. You can add
              <CodeInline code="onPress" type="props" /> ,{' '}
              <CodeInline code="right" type="props" /> to align to the right, or
              add borders on either side.
            </div>
          }
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{
            View,
            DataTable,
            DataTableHeader,
            DataTableCell,
            DataTablePagination,
            DataTableRow,
          }}
          usageCode={usageCode}
          propData={propData}>
          <Section name="Demos" href="/components/tablecell#demos" id="demos">
            <ComponentDescription text="More demos can be seen in the playground" />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
