import React, { Component } from 'react';
import { View } from 'react-native';
import createPropData from '../../utils/createPropData';
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

const sections = [{ name: 'Demos' }];

const propData = [
  createPropData('borderLeft', 'Shows border on the left', 'bool', ''),
  createPropData('borderRight', 'Shows border on the right', 'bool', ''),
  createPropData(
    'flex',
    'Sets flex, higher numbers take more space of table row',
    'flex',
    '1',
  ),
  createPropData('onPress', 'Call back on cell', 'func', ''),
  createPropData('right', 'Displays cell data on the right', 'bool', 'false'),
  createPropData('style', 'Styles root element', 'object', ''),
  createPropData('text', 'Text content for cell', 'object', ''),
  createPropData(
    'type',
    'Whether it is a header or normal cell',
    'string: header, normal',
    'normal',
  ),
];

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
            <DataTableHeader>
                <DataTableCell text={'Desert'} type={'header'} borderRight flex={2} />
                <DataTableCell text={'Calories'}  type={'header'}  right />
                <DataTableCell text={'Fat (g)'}  type={'header'}  right />
                <DataTableCell text={'Carbs (g)'}  type={'header'}  right />
                <DataTableCell text={'Protein (g)'}  type={'header'}  right />
            </DataTableHeader>
            <DataTableRow>
                <DataTableCell text={'Frozen yogurt'} borderRight flex={2} />
                <DataTableCell text={'159'} right />
                <DataTableCell text={'6.0'} right />
                <DataTableCell text={'24'} right />
                <DataTableCell text={'4'} right />
            </DataTableRow>
            <DataTableRow>
                <DataTableCell text={'Ice Cream Sandwhich'} borderRight flex={2} />
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
import { DataTable, DataTableHeader, DataTableCell, DataTablePagination, DataTableRow, } from 'material-bread';

class Table extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <DataTable>
            <DataTableHeader>
                <DataTableCell text={'Desert'} borderRight flex={2} />
                <DataTableCell text={'Calories'} right />
                <DataTableCell text={'Fat (g)'} right />
                <DataTableCell text={'Carbs (g)'} right />
                <DataTableCell text={'Protein (g)'} right />
            </DataTableHeader>
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

export default class DataTableHeaderPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'dataTable-header'}
          title={'Data Table Header'}
          description={`Data Table Header's display contextual information above tables`}
          importCode={`import { DataTableHeader } from 'material-bread';`}
          docsLink={'https://material.io/design/components/data-tables.html'}
          componentDescription={`Data Table Headers can display action buttons, display number of selected items, display table title, or any other contextual information.`}
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
